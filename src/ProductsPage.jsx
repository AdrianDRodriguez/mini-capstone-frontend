import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState ([]);
  
  
  
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

  useEffect(handleIndex, [])



  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} />
    </main>
  );
}