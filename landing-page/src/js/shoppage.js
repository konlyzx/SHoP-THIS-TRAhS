import React from "react"
import { ProductCard } from "./ProductCard"

const products = [
  { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 29.99 },
  { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 39.99 },
  // Añade más productos según sea necesario
]

export function ShopPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
