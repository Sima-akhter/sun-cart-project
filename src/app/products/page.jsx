"use client";

import { useState, useMemo } from "react";
import { Search, PackageX } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(productsData.map(p => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      {/* ── HEADER & FILTERS ── */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b border-border pb-8">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-foreground mb-2">Collection</h1>
          <p className="text-muted-foreground text-sm">Discover premium essentials.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-foreground focus:ring-0 transition-colors"
            />
          </div>

          <div className="relative w-full sm:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-border rounded-sm bg-background text-sm capitalize appearance-none focus:outline-none focus:border-foreground focus:ring-0 transition-colors cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="capitalize">
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-muted-foreground">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* ── EMPTY STATE ── */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4">
            <PackageX size={40} className="text-muted-foreground/50" strokeWidth={1} />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No products found</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">
            We couldn't find any products matching your current filters.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}