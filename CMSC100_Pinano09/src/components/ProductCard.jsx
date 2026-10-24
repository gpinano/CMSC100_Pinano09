import React from "react";
function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className={`product-visual ${product.color}`}>
        <span className="product-tag">{product.tag}</span>
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        <span className="visual-spark" aria-hidden="true">✳</span>
      </div>
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <strong>₱{product.price.toLocaleString("en-PH")}</strong>
          <button type="button" className="add-button" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}>
            <span>+</span> Add
          </button>
        </div>
      </div>
    </article>
  );
}
export default ProductCard;
