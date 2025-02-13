export function ProductsShow({ product }) {
  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Image: {product.image_url}</p>
      <p>Maker: {product.maker}</p>
      <p>Delivery: {product.delivery}</p>
    </div>
  );
}