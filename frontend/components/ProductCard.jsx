import React from 'react';
import "./ProductCard.css";
import { useProductStore } from "../store/product";

const ProductCard = ({product}) => {
  const {deleteProduct} = useProductStore();


  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid);

    if (!success) {
      console.log("Failed Delete at ProductCard");
    } else {
      console.log("Successfully Deleted at ProductCard");
    }
  }


  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>

        <div className="action-buttons">
          <button className="edit-btn">Edit</button>
          <button  onClick={() => handleDeleteProduct(product._id)} className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
