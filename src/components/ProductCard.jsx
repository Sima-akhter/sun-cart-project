import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group flex flex-col block w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary rounded-sm border border-border mb-4">
        <Image
          src={product.image}
          alt={`Image of ${product.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.stock < 15 && (
          <div className="absolute top-2 left-2 bg-background border border-border text-foreground text-[10px] uppercase font-bold px-2 py-1 rounded-sm z-10">
            Low Stock
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-medium text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-medium text-sm text-foreground shrink-0">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-xs text-muted-foreground">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
