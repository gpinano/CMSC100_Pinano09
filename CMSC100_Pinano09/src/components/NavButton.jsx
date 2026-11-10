import React from "react";

// Reusable category button. The parent decides which category is active
// and supplies the function that runs when the button is clicked.
function NavButton({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`category-button ${isActive ? "is-active" : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

export default NavButton;
