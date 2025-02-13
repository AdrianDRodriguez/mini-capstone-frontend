import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState ([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  
  const handleIndex = () => {
    console.log("handleIndex");
    
    axios.get('http://localhost:3000/products.json').then((response) => {
      console.log('inside the .then');
      setProducts(response.data);
    });
    console.log('after the .then')
  };

  const handleCreate = (params)  => {
    console.log("handleCreate...");
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data)

      setProducts([...products, response.data])
    });
  };

  const handleShow = (product) => {
    console.log(product);
    setCurrentProduct(product);
    console.log('handling the show...');
    setIsProductsShowVisible(true);
  };

  const closeModal = () => {
    console.log('close the modal...');
    setIsProductsShowVisible(false)
  }

  useEffect(handleIndex, [])



  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={closeModal}>
        <ProductsShow product={currentProduct}/>
      </Modal>
    </main>
  );
}