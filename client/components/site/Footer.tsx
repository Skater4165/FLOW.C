export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-8 text-sm text-muted-foreground">
        <p className="mx-auto">© {new Date().getFullYear()} FLOW Collective. All rights reserved.</p>
      </div>
    </footer>
  );
}
