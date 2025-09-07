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
        <svg className="size-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            FLOW Collective — men’s skincare, training, and nutrition.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Clean routines, effective workouts, and dialed-in nutrition. Land here, get the essentials, then head to our Discord shop to grab what you need.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-lg bg-foreground text-background hover:bg-foreground/90">
              <a href="/join" rel="noopener noreferrer">Enter the Discord Shop</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-lg">
              <a href="#categories">Browse categories</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard title="Skincare" desc="Simple daily routines and bundles to keep your skin clear, hydrated, and sharp." image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=60" />
          <CategoryCard title="Workout" desc="Strength-focused programs and recovery tools for real progress." image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60" />
          <CategoryCard title="Nutrition" desc="Cut, bulk, or maintain—plans and supplements to match your goals." image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60" />
        </div>
      </section>

      {/* Promise */}
      <section className="container mx-auto px-4 pb-24">
        <div className="js-reveal mx-auto max-w-3xl rounded-2xl border bg-background/60 p-8 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold">Minimal hype. Maximum results.</h2>
          <p className="mt-2 text-muted-foreground">Everything selected for effectiveness and ease. When you’re ready, head to the shop and check out.</p>
          <Button asChild size="lg" className="mt-6 h-12 rounded-lg bg-foreground text-background hover:bg-foreground/90">
            <a href="/join" rel="noopener noreferrer">Shop on Discord</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="js-reveal group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={`${title} graphic`} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
