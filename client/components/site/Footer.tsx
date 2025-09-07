export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-8 text-sm text-muted-foreground">
        <p className="mx-auto">© {new Date().getFullYear()} FLOW Collective. All rights reserved.</p>
        <nav className="flex items-center gap-6 mt-4 sm:mt-0">
          <a className="hover:text-foreground" href="#categories">Categories</a>
          <a className="hover:text-foreground" href="https://discord.gg/zaCkp279E8" target="_blank" rel="noopener noreferrer">Enter Shop</a>
        </nav>
      </div>
    </footer>
  );
}
