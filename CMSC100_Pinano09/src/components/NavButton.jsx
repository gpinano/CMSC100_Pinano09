import React from 'react';
function NavButton({label,isActive,onClick}) {
  return <button type="button" className={`category-button ${isActive ? "is-active" : ""}`} onClick={onClick} aria-pressed={isActive}>{label}</button>;
}
export default NavButton;
