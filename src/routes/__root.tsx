import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/shell/Header";
import { Footer } from "../components/shell/Footer";
import { Intro } from "../components/shell/Intro";
import { SmoothScroll } from "../components/shell/SmoothScroll";
import { TransitionProvider } from "../components/shell/Transition";

/**
 * Runs before first paint: enables the reveal system (so no-JS visitors still
 * see all content), applies the saved (or system) colour theme before
 * anything renders, and decides whether this visit gets the brand reveal.
 */
const BOOT_SCRIPT = `(function(){try{var d=document.documentElement;d.dataset.anim="1";var s=localStorage.getItem("pru-theme");d.dataset.theme=(s==="light"||s==="dark")?s:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(location.pathname==="/"&&!sessionStorage.getItem("pru-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="playing"}}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div data-tone="paper" className="grid min-h-screen place-items-center bg-paper px-6 text-ink">
      <div className="max-w-2xl">
        <p className="label text-ink-soft">Error 404</p>
        <h1 className="display-l mt-5">
          Off the <em>books</em>
          <span className="text-signal">.</span>
        </h1>
        <p className="mt-6 max-w-[42ch] text-ink-soft">
          The page you're looking for doesn't exist or has moved. Let's get you back to something
          that balances.
        </p>
        <a href="/" className="pill label mt-10">
          Back to home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div data-tone="paper" className="grid min-h-screen place-items-center bg-paper px-6 text-ink">
      <div className="max-w-2xl">
        <p className="label text-ink-soft">Something went wrong</p>
        <h1 className="display-l mt-5">
          This page didn't <em>load</em>
          <span className="text-signal">.</span>
        </h1>
        <p className="mt-6 max-w-[42ch] text-ink-soft">
          It's on our end. Try again, or head back home.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            className="pill label"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="pill label">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Prudence Services" },
      { name: "theme-color", content: "#F8F5EC", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#1B2016", media: "(prefers-color-scheme: dark)" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&display=block",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300..600&family=Caveat:wght@500;600&display=swap",
      },
    ],
    scripts: [{ children: BOOT_SCRIPT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <TransitionProvider>
        {pathname === "/" && <Intro />}
        <Header />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </TransitionProvider>
    </QueryClientProvider>
  );
}

