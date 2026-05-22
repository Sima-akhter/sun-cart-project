import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-sans text-lg font-medium tracking-tight text-foreground uppercase">
              Sun-Cart
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium essentials for the perfect summer. Curated with care, delivered with speed.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors text-sm">All Products</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">New Arrivals</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Shipping</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Returns</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sun-Cart Inc.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
