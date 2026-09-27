import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2, HeartHandshake, MessageCircleHeart } from "lucide-react";
import { useRef, useState } from "react";

import womanIllustration from "@/assets/rhythma-woman.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhythma | Same Care, Every Language" },
      { name: "description", content: "Explore inclusive women's health guidance in English and Indian languages with Rhythma." },
      { property: "og:title", content: "Rhythma | Same Care, Every Language" },
      { property: "og:description", content: "Explore inclusive women's health guidance in English and Indian languages with Rhythma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const languages = ["English", "हिंदी", "मराठी", "தமிழ்", "తెలుగు"];

const benefits = [
  { icon: Globe2, first: "Multiple", second: "Indian Languages" },
  { icon: MessageCircleHeart, first: "Easy & Natural", second: "Conversations" },
  { icon: HeartHandshake, first: "Inclusive", second: "for All" },
];

function LotusMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 44"
      aria-hidden="true"
      className={compact ? "h-6 w-8" : "h-10 w-14 sm:h-12 sm:w-16"}
    >
      <path className="fill-primary/75" d="M32 38C18 31 14 18 22 7c8 6 11 14 10 26 1-13 5-22 13-30 8 13 4 27-8 35Z" />
      <path className="fill-primary" d="M29 39C16 39 7 33 3 22c13-2 23 3 29 15-5-13-3-24 5-34 7 11 6 24-2 35Z" />
      <path className="fill-pink/65" d="M34 39c12 0 22-6 27-17-13-2-23 3-29 15Z" />
    </svg>
  );
}

function Index() {
  const [selected, setSelected] = useState("English");
  const [continued, setContinued] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  const exploreLanguages = () => {
    phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    phoneRef.current?.focus({ preventScroll: true });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[image:var(--hero-gradient)]">
      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-36 pt-8 sm:px-10 sm:pb-40 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-0 min-[900px]:px-16 min-[900px]:pb-32 min-[900px]:pt-0 xl:px-20">
        <div className="relative z-20 max-w-[650px] min-[900px]:pb-12">
          <div className="mb-5 flex items-center gap-3 text-primary sm:mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] sm:text-sm">Multilingual Support</p>
          </div>

          <h1 className="font-display text-[clamp(3.25rem,6.4vw,6.25rem)] font-medium italic leading-[0.92] text-ink min-[900px]:text-[clamp(2.7rem,4vw,5rem)]">
            Same Care,
            <span className="mt-1 block bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
              Every Language
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
            Because her health speaks every language
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
            Compassionate health information should always feel clear, familiar, and made for you.
          </p>

          <ul className="mt-9 grid grid-cols-3 gap-3 sm:mt-11 sm:max-w-[590px] sm:gap-8" aria-label="Language support benefits">
            {benefits.map(({ icon: Icon, first, second }) => (
              <li key={first} className="min-w-0 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-primary shadow-sm sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="mt-3 block text-xs font-semibold leading-4 text-foreground sm:text-sm sm:leading-5">
                  {first}<br />{second}
                </span>
              </li>
            ))}
          </ul>

          <Button size="lg" onClick={exploreLanguages} className="mt-9 w-full sm:mt-11 sm:w-auto">
            Explore in Your Language <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="relative mx-auto min-h-[600px] w-full max-w-[720px] min-[900px]:min-h-[650px]">
          <div className="absolute bottom-0 left-[-5%] z-10 w-[72%] animate-gentle-float sm:left-[0%] sm:w-[68%] min-[900px]:left-[-8%] min-[900px]:w-[72%]">
            <img
              src={womanIllustration}
              alt="Woman using Rhythma on her phone"
              width={1024}
              height={1280}
              className="h-auto w-full drop-shadow-[0_20px_22px_color-mix(in_oklab,var(--primary)_14%,transparent)]"
            />
          </div>

          <div
            ref={phoneRef}
            tabIndex={-1}
            className="animate-phone-rise absolute bottom-0 right-0 z-20 h-[570px] w-[286px] rounded-[3rem] bg-ink p-[7px] shadow-[var(--shadow-phone)] outline-none ring-primary focus-visible:ring-4 sm:h-[620px] sm:w-[310px] min-[900px]:right-[2%]"
            aria-label="Rhythma language picker"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2.62rem] border border-primary/25 bg-card px-5 pb-5 pt-11">
              <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
              <div className="absolute -right-5 top-10 h-32 w-28 rotate-12 opacity-45" aria-hidden="true">
                <LotusMark />
              </div>

              <div className="relative text-center">
                <p className="font-display text-3xl font-semibold italic text-ink">Rhythma</p>
                <h2 className="mt-4 text-base font-semibold leading-snug text-foreground">
                  Choose your<br />preferred language
                </h2>
              </div>

              <fieldset className="mt-4 space-y-1.5">
                <legend className="sr-only">Preferred language</legend>
                {languages.map((language) => {
                  const isSelected = selected === language;
                  return (
                    <label
                      key={language}
                      className={cn(
                        "grid min-h-10 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors",
                        isSelected ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted",
                      )}
                    >
                      <input
                        type="radio"
                        name="language"
                        value={language}
                        checked={isSelected}
                        onChange={() => {
                          setSelected(language);
                          setContinued(false);
                        }}
                        className="sr-only"
                      />
                      <span className={cn("grid h-4 w-4 place-items-center rounded-full border", isSelected ? "border-primary" : "border-muted-foreground/50")}>
                        {isSelected && <span className="h-2 w-2 rounded-full bg-primary" />}
                      </span>
                      <span className="truncate">{language}</span>
                      {isSelected && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
                    </label>
                  );
                })}
                <button
                  type="button"
                  className="grid min-h-10 w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => setContinued(false)}
                >
                  <span className="font-bold text-primary">+12</span>
                  <span>more languages</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </button>
              </fieldset>

              <div className="mt-auto pt-3">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => setContinued(true)}
                  aria-label={`Continue in ${selected}`}
                >
                  Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <p className="mt-2 min-h-5 text-center text-xs font-medium text-primary" aria-live="polite">
                  {continued ? `${selected} selected` : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-36 overflow-hidden sm:h-44" aria-hidden="true">
        <div className="absolute -bottom-20 left-[-8%] h-36 w-[120%] rounded-[50%] bg-lavender-soft" />
        <div className="absolute -bottom-28 left-[-2%] h-40 w-[108%] rounded-[50%] bg-lavender/45" />
      </div>
    </main>
  );
}