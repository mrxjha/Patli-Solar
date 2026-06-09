import { site } from "@/lib/site-config";

export function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-gray-200 shadow-sm ${className}`}>
      <iframe
        title={`${site.name} location`}
        src={site.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "320px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
