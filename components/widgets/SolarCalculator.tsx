"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  IndianRupee,
  Sun,
  TrendingDown,
  Leaf,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { whatsappLink } from "@/lib/site-config";

/* ----------------------------------------------------------------
   ASSUMPTIONS (India residential rooftop — indicative, editable)
   ----------------------------------------------------------------
   - GEN_PER_KW_DAY: a 1 kW system in Bihar generates ~4 units/day.
   - COST_PER_KW: typical installed cost of an on-grid rooftop system.
   - PM Surya Ghar (2024) residential subsidy slabs.
   - CO2_PER_UNIT: India grid emission factor (kg CO2 per kWh).
   - PANEL_LIFE: years used for lifetime-savings projection.
---------------------------------------------------------------- */
const GEN_PER_KW_DAY = 4; // units (kWh) per kW per day
const GEN_PER_KW_MONTH = GEN_PER_KW_DAY * 30; // 120 units/kW/month
const GEN_PER_KW_YEAR = GEN_PER_KW_DAY * 365; // 1460 units/kW/year
const COST_PER_KW = 60000; // ₹ per kW (turnkey, indicative)
const CO2_PER_UNIT = 0.82; // kg CO2 saved per kWh
const PANEL_LIFE = 25; // years

/** PM Surya Ghar residential subsidy: ₹30k/kW up to 2 kW,
 *  ₹18k/kW for the 3rd kW, capped at ₹78,000 total (≥3 kW). */
function calcSubsidy(kw: number): number {
  if (kw <= 0) return 0;
  if (kw <= 2) return Math.round(30000 * kw);
  if (kw < 3) return Math.round(60000 + 18000 * (kw - 2));
  return 78000;
}

const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

export function SolarCalculator() {
  const [bill, setBill] = useState(3000); // ₹ / month
  const [tariff, setTariff] = useState(8); // ₹ / unit

  const r = useMemo(() => {
    const safeTariff = Math.max(tariff, 1);
    const monthlyUnits = bill / safeTariff;
    const annualUnits = monthlyUnits * 12;

    // System sized to cover consumption, rounded to nearest 0.5 kW, min 1 kW.
    const rawKw = monthlyUnits / GEN_PER_KW_MONTH;
    const systemKw = Math.max(1, Math.round(rawKw * 2) / 2);

    const annualGenUnits = systemKw * GEN_PER_KW_YEAR;
    // You only save on what you'd have consumed from the grid.
    const usefulUnits = Math.min(annualGenUnits, annualUnits || annualGenUnits);

    const grossCost = systemKw * COST_PER_KW;
    const subsidy = calcSubsidy(systemKw);
    const netCost = Math.max(grossCost - subsidy, 0);

    const annualSavings = usefulUnits * safeTariff;
    const monthlySavings = annualSavings / 12;
    const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;
    const lifetimeSavings = annualSavings * PANEL_LIFE - netCost;
    const co2PerYearTonnes = (annualGenUnits * CO2_PER_UNIT) / 1000;

    return {
      systemKw,
      grossCost,
      subsidy,
      netCost,
      monthlySavings,
      annualSavings,
      paybackYears,
      lifetimeSavings,
      co2PerYearTonnes,
    };
  }, [bill, tariff]);

  const waText = `Hello PATLI SOLAR SOLUTIONS, based on your calculator my monthly bill is ${inr(
    bill
  )}. I'm interested in a ~${r.systemKw} kW rooftop system (est. net cost ${inr(
    r.netCost
  )}). Please share an exact quote.`;

  const resultCards = [
    {
      icon: Zap,
      label: "Recommended System",
      value: `${r.systemKw} kW`,
      tone: "brand" as const,
    },
    {
      icon: TrendingDown,
      label: "Monthly Savings",
      value: inr(r.monthlySavings),
      tone: "brand" as const,
    },
    {
      icon: Clock,
      label: "Payback Period",
      value: `${r.paybackYears.toFixed(1)} yrs`,
      tone: "solar" as const,
    },
    {
      icon: IndianRupee,
      label: `${PANEL_LIFE}-Year Net Savings`,
      value: inr(r.lifetimeSavings),
      tone: "brand" as const,
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Inputs */}
      <div className="lg:col-span-2">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
            Your Details
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            Move the sliders to match your electricity usage.
          </p>

          {/* Bill */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <label htmlFor="bill" className="text-sm font-semibold text-ink">
                Average monthly bill
              </label>
              <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-bold text-brand-700">
                {inr(bill)}
              </span>
            </div>
            <input
              id="bill"
              type="range"
              min={500}
              max={50000}
              step={500}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="mt-3 w-full accent-brand-600"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-soft">
              <span>₹500</span>
              <span>₹50,000</span>
            </div>
          </div>

          {/* Tariff */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <label htmlFor="tariff" className="text-sm font-semibold text-ink">
                Electricity rate (₹ / unit)
              </label>
              <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-bold text-brand-700">
                ₹{tariff}
              </span>
            </div>
            <input
              id="tariff"
              type="range"
              min={4}
              max={15}
              step={0.5}
              value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
              className="mt-3 w-full accent-brand-600"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-soft">
              <span>₹4</span>
              <span>₹15</span>
            </div>
          </div>

          <p className="mt-7 text-xs leading-relaxed text-ink-soft">
            Estimates are indicative, based on average Bihar generation (~4 units/kW/day) and
            the PM Surya Ghar residential subsidy. Your exact figures depend on roof, shading
            and DISCOM approval.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 p-7 text-white shadow-xl sm:p-9">
          <div className="flex items-center gap-2 text-solar-300">
            <Sun className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Your Solar Estimate
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {resultCards.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white/10 p-5 backdrop-blur"
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl ${
                      c.tone === "solar"
                        ? "bg-solar-500 text-ink"
                        : "bg-white/15 text-solar-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-2xl font-extrabold">{c.value}</p>
                  <p className="text-sm text-white/80">{c.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Cost breakdown */}
          <div className="mt-6 rounded-2xl bg-white/10 p-5 text-sm backdrop-blur">
            <div className="flex items-center justify-between py-1.5">
              <span className="text-white/80">Estimated system cost</span>
              <span className="font-semibold">{inr(r.grossCost)}</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-white/80">Govt. subsidy (PM Surya Ghar)</span>
              <span className="font-semibold text-solar-300">− {inr(r.subsidy)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between border-t border-white/20 py-2">
              <span className="font-semibold">Your net investment</span>
              <span className="text-lg font-extrabold">{inr(r.netCost)}</span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-white/85">
            <Leaf className="h-5 w-5 text-solar-300" />
            Cuts about{" "}
            <span className="font-bold text-white">
              {r.co2PerYearTonnes.toFixed(1)} tonnes
            </span>{" "}
            of CO₂ every year.
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappLink(waText)}
              variant="solar"
              size="lg"
              className="flex-1"
            >
              Get an Exact Quote <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="flex-1 border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Book a Free Survey
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
