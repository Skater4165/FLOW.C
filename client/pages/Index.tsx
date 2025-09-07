import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Monochrome grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="size-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="gradient-text animate-gradient glow-text animate-glow">
              FLOW Collective
            </span>{" "}
            — men’s skincare, training, and nutrition.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Clean routines, effective workouts, and dialed-in nutrition. Head to
            our Discord shop to grab what you need.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-lg bg-foreground text-background hover:bg-foreground/90 px-8"
            >
              <a
                href="https://discord.gg/zaCkp279E8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enter the Discord Shop
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard
            title="Skincare"
            desc="Simple daily routines and bundles to keep your skin clear, hydrated, and sharp."
            image="https://t3.ftcdn.net/jpg/07/89/78/42/240_F_789784291_RwzlZ8bXIfEjVvBIIleFuTpnhse0SyiS.jpg"
          />
          <CategoryCard
            title="Workout"
            desc="Strength-focused programs and recovery tools for real progress."
            image="https://t3.ftcdn.net/jpg/02/26/50/62/240_F_226506291_imi0vFPQCeAfGGXnqkv3YuvZrJnhrdcP.jpg"
          />
          <CategoryCard
            title="Nutrition"
            desc="Cut, bulk, or maintain—plans and supplements to match your goals."
            image="https://t4.ftcdn.net/jpg/16/51/92/77/240_F_1651927750_yjADGAU9YHtw5KP9XrrypZSegNRrCUsV.jpg"
          />
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="js-reveal group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={`${title} graphic`}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
