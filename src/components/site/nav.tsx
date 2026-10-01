import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

// "top" (the hero) is observed too so no link stays highlighted after scrolling back up.
const observedIds = ["top", ...navLinks.map((l) => l.id)];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of observedIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// The initial theme is applied before paint by the inline script in __root.tsx;
// the icons switch purely through the `dark:` variant so SSR markup never mismatches.
function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      <Moon className="size-[18px] dark:hidden" />
      <Sun className="hidden size-[18px] dark:block" />
    </button>
  );
}

function MobileMenu({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // Wait for the sheet to release the scroll lock before scrolling.
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }, 320);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menu"
        className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        aria-describedby={undefined}
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="flex w-[86%] flex-col border-border bg-background p-8"
      >
        <SheetTitle className="font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-gold-ink">
          Navegação
        </SheetTitle>
        <nav aria-label="Seções" className="mt-6 flex-1">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  className={cn(
                    "flex items-baseline gap-4 py-2.5 text-3xl font-medium tracking-tight transition-colors",
                    active === l.id ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  <span className="font-mono text-xs text-gold-ink">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background"
        >
          Conectar no LinkedIn <ArrowUpRight className="size-4" />
        </a>
      </SheetContent>
    </Sheet>
  );
}

export function Nav() {
  const active = useActiveSection();
  const scrolled = useScrolled();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[image:var(--gradient-gold)]"
      />
      <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
        <div
          className={cn(
            "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border pl-2 pr-1.5 transition-[background-color,border-color,box-shadow] duration-500",
            scrolled
              ? "border-border bg-background/75 shadow-[var(--shadow-soft)] backdrop-blur-xl"
              : "border-transparent",
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 rounded-full pr-2">
            <span className="grid size-9 place-items-center rounded-full bg-forest font-serif text-xl italic text-ivory">
              A
            </span>
            <span className="text-sm font-medium tracking-tight">
              Ana Carla <span className="text-muted-foreground">Nascimento</span>
            </span>
          </a>

          <nav aria-label="Seções" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 text-sm">
              {navLinks.map((l) => {
                const isActive = active === l.id;
                return (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative isolate block rounded-full px-3.5 py-2 transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-secondary"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
            >
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
            <MobileMenu active={active} />
          </div>
        </div>
      </header>
    </>
  );
}
