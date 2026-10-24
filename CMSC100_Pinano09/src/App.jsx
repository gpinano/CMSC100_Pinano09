import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import Cart from "./components/Cart";

// Product information used to display the store inventory.
const products = [
  { id: 1, name: "Everyday Tee", price: 299, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85", color: "lavender", tag: "BESTSELLER", description: "Your new everyday essential." },
  { id: 2, name: "Cloud Sneakers", price: 1299, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85", color: "peach", tag: "COMFY PICK", description: "Made for all-day adventures." },
  { id: 3, name: "Studio Headphones", price: 899, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85", color: "mint", tag: "TRENDING", description: "Your soundtrack, your world." },
  { id: 4, name: "Mini Smartwatch", price: 1499, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85", color: "blue", tag: "SMART FIND", description: "A little tech for your day." },
  { id: 5, name: "Sunday Mug", price: 199, category: "Home", image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=85", color: "peach", tag: "COZY PICK", description: "Slow mornings start here." },
  { id: 6, name: "Golden Hour Lamp", price: 599, category: "Home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85", color: "yellow", tag: "ROOM GLOW-UP", description: "Make your space feel warm." },
  { id: 7, name: "Study Notes Set", price: 149, category: "School Supplies", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=85", color: "lavender", tag: "STUDY BUDDY", description: "Make every idea count." },
  { id: 8, name: "Color Pop Pens", price: 79, category: "School Supplies", image: "https://images.pexels.com/photos/2327071/pexels-photo-2327071.jpeg?cs=srgb&dl=pexels-cenali-2327071.jpg&fm=jpg", color: "mint", tag: "BUDGET FIND", description: "Small pens, big ideas." }
];

function App() {
  // Shared state keeps the cart count and cart contents in sync.
  const [cartItems,setCartItems] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("All");
  const [searchText,setSearchText] = useState("");
  const [toast,setToast] = useState("");

  // Add the selected product to the cart and show a small confirmation.
  function addToCart(product) {
    setCartItems((items) => [...items, product]);
    setToast(`${product.name} added to your bag`);
  }
  // Remove only the cart entry at the selected index.
  function removeFromCart(indexToRemove) {
    setCartItems((items) => items.filter((item,index) => index !== indexToRemove));
    setToast("Item removed from your bag");
  }

  // Show products that match both the selected category and search text.
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchText.toLowerCase().trim());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Lazado home">
          <span className="brand-mark">l.</span>
          <span className="brand-name">lazado<span className="brand-dot">.</span><small>little finds, big joy</small></span>
        </a>
        <div className="topbar-right">
          <span className="delivery-note">♡ &nbsp; Curated with love</span>
          <a className="bag-pill" href="#cart">Bag <span className="bag-count">{cartItems.length}</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">✳ &nbsp; YOUR HAPPY PLACE TO SHOP</span>
            <h1>Little things.<br /><em>Lovely finds.</em></h1>
            <p>Thoughtful picks for your everyday life. Find a little something that makes your day.</p>
            <a className="hero-link" href="#shop">Explore the collection <span>↗</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun-shape"></div><div className="hero-circle circle-one"></div><div className="hero-circle circle-two"></div>
            <div className="floating-note note-one">✦ good things</div><div className="floating-note note-two">made for you ♡</div>
            <div className="shopping-bag-art"><span className="bag-handle"></span><span className="bag-face">l<span>.</span></span><span className="bag-flower">✿</span></div>
            <span className="hero-spark spark-one">✳</span><span className="hero-spark spark-two">✦</span>
          </div>
          <div className="hero-bottom-note">✳ &nbsp; A LITTLE JOY, DELIVERED DAILY</div>
        </section>

        <div className="store-layout">
          <section className="shop-section" id="shop">
            <div className="section-topline">
              <div><span className="eyebrow">THE GOOD STUFF</span><h2>Find your <em>favorites.</em></h2></div>
              <label className="search-box"><span>⌕</span><input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Find something lovely..." aria-label="Search products" /></label>
            </div>
            <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <ProductSection products={filteredProducts} addToCart={addToCart} />
          </section>

          <aside className="cart-section" id="cart" aria-label="Shopping cart">
            <div className="cart-intro"><span className="eyebrow">YOUR LITTLE HAUL</span><h2>Your bag, <em>your picks.</em></h2></div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </aside>
        </div>
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#top">lazado<span>.</span></a>
        <p>Made for little moments of joy. ♡</p>
        <span>CMSC 100 · React State Management</span>
      </footer>

      {toast && <div className="toast" role="status"><span>✓</span>{toast}<button onClick={() => setToast("")} aria-label="Dismiss notification">×</button></div>}
    </div>
  );
}
export default App;
