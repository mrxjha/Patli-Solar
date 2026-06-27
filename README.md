# PATLI SOLAR SOLUTIONS — Website

A modern, fast, SEO-friendly marketing website for **PATLI SOLAR SOLUTIONS**, built with
**Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

Pages: Home, About, Services (+ 5 service detail pages), Projects, FAQ, Contact — with an
enquiry form (email + WhatsApp), floating Call/WhatsApp buttons, Google Maps embed,
animations, and full mobile responsiveness.                                                                           

---

## 1. Quick Start (run it on your computer)

> Requires **Node.js** (LTS 20 or 22 recommended). Check with `node --version`.

```bash
cd patli-solar
npm install        # first time only
npm run dev        # start dev server
```

Open **http://localhost:3000** in your browser.

Other commands:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # check code quality
```

> **Note about images on office/corporate networks:** the photos are loaded from Unsplash.
> Some corporate networks block image CDNs — if photos appear as a green gradient with a
> sun icon, that's the built-in fallback. The photos will appear normally on home networks,
> mobile data, and once deployed to Vercel.

---

## 2. Edit Your Business Details (most important file)

**Open [`lib/site-config.ts`](lib/site-config.ts) and replace every value marked `PLACEHOLDER`:**

| Field | What to put |
|---|---|
| `phone`, `phoneHref` | Your business phone number |
| `whatsapp` | Country code + number, **no `+` or spaces** (e.g. `919876543210`) |
| `email` | Your business email |
| `address` | Office address (line1, line2, city, state, pincode) |
| `mapEmbedUrl` | Google Maps embed link (see below) |
| `socials` | Facebook / Instagram / LinkedIn / YouTube URLs (leave as `"#"` to hide) |
| `url` | Your live website address once deployed |
| `web3formsKey` | Your Web3Forms key (see section 3) |

**Get your Google Maps embed URL:** Google Maps → search your address → **Share** →
**Embed a map** → copy the `src="..."` link → paste into `mapEmbedUrl`.

### Edit other content
- **Services:** [`content/services.ts`](content/services.ts)
- **Projects/Portfolio:** [`content/projects.ts`](content/projects.ts) — replace placeholder photos & details
- **Testimonials:** [`content/testimonials.ts`](content/testimonials.ts) — add real customer reviews
- **FAQs:** [`content/faqs.ts`](content/faqs.ts)
- **Navigation & stats:** [`content/nav.ts`](content/nav.ts)

### Replace images with your own photos
Put image files in `public/images/` and reference them as `/images/your-photo.jpg` in the
content files. Local images always load (no network dependency). You can also keep using
Unsplash URLs — both work.

### Replace the logo
The logo is a placeholder in [`components/layout/Logo.tsx`](components/layout/Logo.tsx).
Swap the inline `<svg>` for an `<Image src="/logo.svg" .../>` pointing to your real logo in `public/`.

---

## 3. Contact Form — Email Delivery (Web3Forms)

The enquiry form emails submissions to you using the **free** [Web3Forms](https://web3forms.com) service.

1. Go to https://web3forms.com → enter your email → get an **Access Key** (instant, free).
2. Paste it into `web3formsKey` in `lib/site-config.ts`, **or** (recommended for production)
   create a `.env.local` file (copy from `.env.local.example`) and set:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key
   ```
3. Submissions also work via the **WhatsApp** button regardless of the email setup.

---

## 4. Deploy It Live (free) — Vercel

**Recommended: GitHub + Vercel (automatic deploys on every change).**

1. Create a free account at [github.com](https://github.com) and [vercel.com](https://vercel.com).
2. Push this project to a new GitHub repository:
   ```bash
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/patli-solar.git
   git push -u origin main
   ```
3. In Vercel: **Add New → Project → Import** your GitHub repo. Vercel auto-detects Next.js.
4. Add Environment Variable `NEXT_PUBLIC_WEB3FORMS_KEY` (your Web3Forms key) → **Deploy**.
5. Your site goes live at `https://your-project.vercel.app`.

**From now on, every `git push` automatically rebuilds and redeploys the site (CI/CD).**

> Alternatives (also free, similar flow): **Netlify** or **Cloudflare Pages**.

---

## 5. Domain Options

| Option | Cost | Notes |
|---|---|---|
| `your-project.vercel.app` | **Free** | Included instantly with Vercel |
| `.in` domain | ~₹500–800/yr | Professional, India-focused |
| `.com` domain | ~₹900–1200/yr | Most recognised globally |
| `.co.in` / `.solar` | varies | Niche / regional options |

Buy from **Hostinger**, **GoDaddy**, or **Cloudflare Registrar** (cheapest). Then in Vercel:
**Project → Settings → Domains → Add** your domain and follow the DNS instructions.
After connecting, update `url` in `lib/site-config.ts` to your custom domain.

---

## 6. Tech & Structure

```
app/            Pages (routes) + sitemap, robots, manifest
components/
  layout/       Header, Footer, Logo, PageHeader
  sections/     Hero, Stats, Services, WhyChooseUs, Projects, Testimonials, FAQ, CTA
  ui/           Button, SectionHeading, Reveal, SmartImage, SocialIcons
  widgets/      FloatingActions (WhatsApp/Call), GoogleMap
  forms/        EnquiryForm
content/        Editable data: services, projects, testimonials, faqs, nav
lib/            site-config.ts  <- your business details
public/         Images & assets
```

**Built-in:** SEO metadata + Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD structured data
(LocalBusiness + FAQ), security headers, image optimization, smooth animations, and a
graceful image fallback so the site never shows broken images.

---

## 7. Next Steps / Ideas (v2)
- Solar Savings Calculator (estimate system size & savings from the electricity bill)
- Blog / news section for SEO
- Multi-language (Hindi) support
- Real project photos & video testimonials
