import React from 'react'
import './ProductListItem.css'

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) => (
  <div className={isOnSale ? "card sale" : "card"}>
    <h2>{name} {isOnSale && "(On Sale)"}</h2>
    <img src={imageUrl} alt="" />
    <small>{price}</small>
    <button onClick={onAddToCart} disabled={isSoldOut}>{isSoldOut ? "Sold out" : "Add to Cart"}</button>
  </div>
)

export default ProductListItem 