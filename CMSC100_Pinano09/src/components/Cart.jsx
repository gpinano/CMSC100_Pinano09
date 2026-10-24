import React from "react";

function Cart({ cartItems = [], removeFromCart }) {
  // Calculate the total from the items currently in the cart.
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="cart-panel">
      <div className="cart-panel-heading">
        <div><span className="eyebrow">THE GOODIES YOU PICKED</span><h3>Your shopping bag <span>♡</span></h3></div>
        <span className="cart-count">{cartItems.length} {cartItems.length === 1 ? "item" : "items"}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-bag">♡</div>
          <h4>Your bag is taking a little nap.</h4>
          <p>Add something lovely and it’ll show up here.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <img className="cart-item-image" src={item.image} alt={item.name} loading="lazy" />
              <div className="cart-item-info">
                <h4>{item.name}</h4><span>{item.category}</span>
                <strong>₱{item.price.toLocaleString("en-PH")}</strong>
              </div>
              <button type="button" className="remove-button" onClick={() => removeFromCart(index)} aria-label={`Remove ${item.name}`} title="Remove item">×</button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <div><span>Subtotal</span><strong>₱{totalPrice.toLocaleString("en-PH")}</strong></div>
        <p><span>Delivery</span><span>{cartItems.length ? "Calculated at checkout" : "—"}</span></p>
        <div className="total-line"><span>Total</span><strong>₱{totalPrice.toLocaleString("en-PH")}</strong></div>
        <button className="checkout-button" type="button" disabled={!cartItems.length} onClick={() => window.alert("This is a class demo. Checkout and payments are not enabled yet.")}>Continue to checkout <span>↗</span></button>
        <small>♡ &nbsp; A little joy is on its way</small>
      </div>
    </div>
  );
}
export default Cart;
