import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">FC</span>
          <span className="text-lg">FLOW Collective</span>
        </a>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost">
            <a href="#categories">Categories</a>
          </Button>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <a href="/join" rel="noopener noreferrer">Enter Shop</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
