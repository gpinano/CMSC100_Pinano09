import React from "react";
import ProductCard from "./ProductCard";

// Displays the filtered product list received from the App component.
function ProductSection({ products, addToCart }) {
  return (
    <section className="product-section" aria-label="Products">
      <div className="results-line">
        <span>
          {products.length} lovely {products.length === 1 ? "find" : "finds"}
        </span>
        <span>HANDPICKED FOR YOU ✳</span>
      </div>

      {/* Show product cards when matches exist; otherwise show an empty state. */}
      {products.length ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <span>⌕</span>
          <h3>No finds just yet</h3>
          <p>Try another search or category.</p>
        </div>
      )}
    </section>
  );
}

export default ProductSection;
