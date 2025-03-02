"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"

export function ProductCard({ product }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300) // Reset after animation
    alert(`Producto ${product.name} añadido al carrito.`)
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-yellow-400 mb-2">{product.name}</h3>
      <p className="text-gray-300 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-white">${product.price}</span>
        <button
          onClick={handleClick}
          className={`p-2 rounded-full bg-dark-400 hover:bg-dark-300 transition-colors duration-200 ${
            isClicked ? "animate-click" : ""
          }`}
        >
          <ShoppingCart className="w-6 h-6 text-gray-100" />
        </button>
      </div>
    </div>
  )
}
