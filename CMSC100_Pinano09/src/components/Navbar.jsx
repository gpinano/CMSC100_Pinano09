import React from "react";
import NavButton from "./NavButton";

// These are the categories that users can use to filter the products.
const categories = ["All", "Fashion", "Electronics", "Home", "School Supplies"];

function Navbar({ selectedCategory, setSelectedCategory }) {
  return (
    <nav className="category-nav" aria-label="Filter products by category">
      {/* map() creates one reusable NavButton for every category. */}
      {categories.map((category) => (
        <NavButton
          key={category}
          label={category}
          isActive={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
        />
      ))}
    </nav>
  );
}

export default Navbar;
