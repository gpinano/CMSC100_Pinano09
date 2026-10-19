import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import Cart from "./components/Cart";

// products available in the storew
const products = [
    {
        id: 1,
        name: "Shirt",
        price: 299,
        category: "Fashion",
        emoji: "👕"
    },
    {
        id: 2,
        name:"Shoes",
        price: 1299,
        category: "Fashion",
        emoji: "👟"
    },
    {
        id: 3,
        name: "Wireless Earphones",
        price: 899,
        category: "Electronics"
        emoji: "🎧"
    },

]
