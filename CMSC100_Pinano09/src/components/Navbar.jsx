import React from "react";
import NavButton from "./NavButton";
// Each category is rendered through the reusable NavButton component.
const categories = ["All","Fashion","Electronics","Home","School Supplies"];
function Navbar({selectedCategory,setSelectedCategory}) {
  return <nav className="category-nav" aria-label="Filter products by category">{categories.map((category)=><NavButton key={category} label={category} isActive={selectedCategory===category} onClick={()=>setSelectedCategory(category)}/>)}</nav>;
}
export default Navbar;
