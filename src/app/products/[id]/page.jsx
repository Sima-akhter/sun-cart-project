import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import productsData from "@/data/products.json";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block">
        &larr; Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Section */}
        <div className="relative aspect-4/5 bg-secondary rounded-sm border border-border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {product.stock < 15 && (
            <div className="absolute top-4 left-4 bg-background border border-border text-foreground text-xs font-medium px-3 py-1 rounded-sm z-10">
              Low Stock
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{product.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            {product.name}
          </h1>
          
          <div className="flex flex-col gap-2 mb-10 pb-10 border-b border-border">
            <span className="text-sm text-muted-foreground font-medium">By {product.brand}</span>
          </div>

          <div className="text-2xl font-medium text-foreground mb-8">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            {product.description}
          </p>

          <div className="mt-auto space-y-4">
            <button className="w-full bg-foreground text-background font-medium text-sm h-14 rounded-sm hover:bg-foreground/90 transition-colors">
              Add to Bag
            </button>
            <button className="w-full bg-background border border-border text-foreground font-medium text-sm h-14 rounded-sm hover:bg-secondary transition-colors">
              Save to Favorites
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-border">
            <div className="flex flex-col gap-1 text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Shipping</span>
              <span className="text-sm">Complimentary delivery</span>
            </div>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Returns</span>
              <span className="text-sm">30-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
