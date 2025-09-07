import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">🛒</span>
          <span className="text-lg">ShopCord</span>
        </a>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost">
            <a href="#features">Features</a>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow hover:opacity-90">
            <a href="/join" rel="noopener noreferrer">Join Discord Shop</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
