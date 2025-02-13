import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsIndex } from "./ProductsIndex";

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

  useEffect(handleIndex, [])



  return (
    <main>
    <ProductsIndex products={products} />
    </main>
  );
}