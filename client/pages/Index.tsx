import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-fuchsia-500/30 blur-3xl" />
        <svg className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2" width="1200" height="300" viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="600" cy="260" rx="600" ry="60" fill="url(#g)" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.25" />
              <stop offset="1" stopColor="#D946EF" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <section className="container mx-auto px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-pulse" />
            Live on Discord
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Your shop, powered by Discord
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Discover, chat, and purchase in one seamless community. Click below to enter the shop server and start browsing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20 hover:opacity-90">
              <a href="/join" rel="noopener noreferrer">Join Discord Shop</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-lg">
              <a href="#features">Why Discord?</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Instant Access" desc="Join and start shopping in seconds—no accounts to create beyond Discord." emoji="⚡" />
          <FeatureCard title="Real Conversations" desc="Chat with the team and community for recommendations and support." emoji="💬" />
          <FeatureCard title="Secure & Trusted" desc="Role-based access, mod tools, and trusted payments keep things safe." emoji="🔒" />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto max-w-2xl rounded-2xl border bg-background/60 p-6 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold">Ready to hop in?</h2>
          <p className="mt-2 text-muted-foreground">Join the server to see products, deals, and talk to a human.</p>
          <Button asChild size="lg" className="mt-6 h-12 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg hover:opacity-90">
            <a href="/join" rel="noopener noreferrer">Enter the Shop</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc, emoji }: { title: string; desc: string; emoji: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-colors">
      <div className="absolute -inset-px -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(139,92,246,0.25), transparent 40%)" }} />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 via-violet-500/15 to-fuchsia-500/15">
          <span className="text-xl">{emoji}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}
