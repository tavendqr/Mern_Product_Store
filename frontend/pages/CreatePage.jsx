import { useState } from "react";
import { useProductStore } from "../store/product";
import { Button, Container, Heading, Input } from "@chakra-ui/react";


const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
    image: "",
	});
    
    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			console.log("Creation Fail at CreatePage: " + message);
		} else {
			console.log("Creation Success at CreatePage: " + message);
		}
		setNewProduct({ name: "", price: "", image: "" });
	};


  return (
    <div>
    <p>Create New Product</p>

    <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
    />
   

    <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
    />
     <input
        name='image'
        placeholder="Image URL"
        value={newProduct.image}
        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
    />
    

    <button onClick={handleAddProduct}>Add Product</button>
</div>
  )
}

export default CreatePage
