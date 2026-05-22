

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded-sm border border-border bg-background p-3 transition hover:shadow-sm">
      
      {/* IMAGE */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-4 space-y-2">

        {/* PRODUCT NAME */}
        <h3 className="line-clamp-1 text-sm font-medium text-foreground">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-1">
          <span className="text-sm text-yellow-500">★</span>

          <span className="text-sm text-muted-foreground">
            {product.rating}
          </span>
        </div>

        {/* PRICE */}
        <p className="text-sm font-semibold text-foreground">
          ${product.price}
        </p>

        {/* BUTTON */}
        <Link
          href={`/products/${product.id}`}
          className="block w-full rounded-sm border border-black bg-black px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90 dark:border-white dark:bg-white dark:text-black"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;