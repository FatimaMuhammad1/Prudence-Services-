import type { SiteMock } from "../../data/portfolio";

/**
 * A stand-in for a project screenshot: the site's own nav, headline and
 * button on its own flat brand colour. Marked WIP until the site ships.
 */
export function SitePreview({ mock, compact = false }: { mock: SiteMock; compact?: boolean }) {
  const Icon = mock.icon;
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden" style={{ background: mock.bg }}>
      <span
        className={`label absolute z-10 bg-signal text-paper ${compact ? "right-2 top-2 px-1.5 py-0.5 text-[8px]!" : "right-3 top-3 px-2 py-1 text-[10px]!"}`}
      >
        WIP
      </span>

      <div
        className={`flex items-center justify-between font-semibold uppercase tracking-[0.08em] ${mock.text} ${compact ? "px-3 pt-3 text-[9px]" : "px-5 pt-5 text-[11px]"}`}
      >
        <span className="flex items-center gap-1.5">
          <Icon className={compact ? "size-3" : "size-4"} strokeWidth={1.6} />
          {mock.siteName}
        </span>
        {!compact && (
          <span className="hidden items-center gap-4 pr-16 opacity-75 sm:flex">
            {mock.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </span>
        )}
      </div>

      <div className={`relative flex flex-1 flex-col justify-center ${mock.text} ${compact ? "px-3" : "px-5"}`}>
        <p
          className={`font-display leading-[1.02] ${compact ? "line-clamp-2 max-w-[13ch] text-[1.15rem]" : "max-w-[16ch] text-[clamp(1.6rem,2.6vw,2.4rem)]"}`}
        >
          {mock.headline}
        </p>
        {!compact && mock.tagline && (
          <p className="mt-2 text-[10px] uppercase tracking-[0.14em] opacity-70">{mock.tagline}</p>
        )}
        <span
          className={`inline-flex w-fit items-center font-semibold uppercase tracking-[0.1em] ${mock.buttonClass} ${compact ? "mt-2 px-2 py-1 text-[8px]" : "mt-4 px-4 py-2 text-[10px]"}`}
        >
          {mock.cta}
        </span>
        <Icon
          className={`pointer-events-none absolute opacity-15 ${compact ? "-bottom-2 -right-2 size-12" : "-bottom-5 -right-5 size-32"}`}
          strokeWidth={0.9}
        />
      </div>
    </div>
  );
}
