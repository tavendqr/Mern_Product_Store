import React from 'react';
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
import "./HomePage.css";


import { useEffect } from "react";


const HomePage = () => {
    const { fetchProducts, products } = useProductStore();


    useEffect(() => {
		fetchProducts();
	}, []);
	console.log("products", products);




/*
useEffect(() => {
    // DEBUG FETCH
    fetch("/api/product")
        .then(res => res.text())
        .then(text => {
            console.log("Raw response from /api/product:", text); // See if it's HTML or JSON
            try {
                const data = JSON.parse(text);
                console.log("Parsed JSON:", data);
            } catch (err) {
                console.error("❌ JSON parse failed:", err.message);
            }
        });

    // Normal Zustand fetch (leave this here too if you want)
    // fetchProducts();
}, []);*/

  return (
    <div >
        <div className="cards">
      {products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
        </div>

            
    {products.length === 0 && (
        <p>No Products</p>
    )}
    </div>
  )
}

export default HomePage
