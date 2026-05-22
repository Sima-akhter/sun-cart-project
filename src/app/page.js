import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="flex flex-col flex-1 w-full font-sans bg-background">
      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-10 pb-20 overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-3 py-1 border border-border rounded-full text-xs font-medium uppercase tracking-widest text-muted-foreground animate__animated animate__fadeInDown">
            New Summer Collection
          </div>

          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-foreground mb-6 max-w-4xl animate__animated animate__fadeInUp">
            Redefine your summer.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-light animate__animated animate__fadeInUp animate__delay-1s">
            Discover precision-crafted essentials designed for the perfect
            balance of form and function under the sun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate__animated animate__fadeInUp animate__delay-2s">
            <Link
              href="/products"
              className="group flex items-center justify-center bg-foreground text-background font-medium px-8 py-3 rounded-sm hover:bg-foreground/90 transition-all text-sm h-12"
            >
              Shop Collection{" "}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#featured"
              className="flex items-center justify-center border border-border text-foreground font-medium px-8 py-3 rounded-sm hover:bg-secondary transition-all text-sm h-12"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section id="featured" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-6">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground">
                Featured Essentials
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Curated for excellence.
              </p>
            </div>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-primary transition-colors hidden md:block"
            >
              View all products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/products"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              View all products &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID SECTION ── */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-foreground">
              Built for the elements.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="md:col-span-2 bg-background border border-border rounded-sm p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
                  alt="Beach"
                  fill
                  className="object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 max-w-sm">
                <h3 className="text-2xl font-medium text-foreground mb-2">
                  Uncompressed Quality
                </h3>
                <p className="text-muted-foreground text-sm">
                  Engineered to withstand the harshest summer conditions without
                  sacrificing style.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-background border border-border rounded-sm p-8 flex flex-col justify-between min-h-[400px]">
              <div>
                <svg
                  className="w-8 h-8 text-foreground mb-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  UV Protection
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced materials block 99% of harmful rays, keeping you safe
                  all day.
                </p>
              </div>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Learn more &rar;
              </Link>
            </div>

            {/* Box 3 */}
            <div className="bg-background border border-border rounded-sm p-8 flex flex-col justify-between min-h-75">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Lightweight Design
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Barely-there feel for maximum comfort during intense
                  activities.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="md:col-span-2 bg-foreground text-background border border-border rounded-sm p-10 flex flex-col sm:flex-row items-center justify-between min-h-[300px]">
              <div className="max-w-md mb-6 sm:mb-0">
                <h3 className="text-3xl font-medium mb-4">Join the club.</h3>
                <p className="text-background/70 text-sm">
                  Create an account to track orders, save favorites, and receive
                  exclusive offers.
                </p>
              </div>
              <Link
                href="/signup"
                className="bg-background text-foreground font-medium px-8 py-3 rounded-sm hover:bg-background/90 transition-colors text-sm whitespace-nowrap"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
