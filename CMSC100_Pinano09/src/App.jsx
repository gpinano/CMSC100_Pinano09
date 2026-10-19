import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import Cart from "./components/Cart";

// These are the products available in the store.
const products = [
  { id: 1, name: "Classic T-Shirt", price: 299, category: "Fashion", emoji: "👕" },
  { id: 2, name: "Running Shoes", price: 1299, category: "Fashion", emoji: "👟" },
  { id: 3, 