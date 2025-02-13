export function ProductsIndex( {products} ) {
console.log(products)

  return (
    <div id="products-index">
      <h1>All products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            Name: {product.name}
          </div>
          <div>
            Price: {product.price}
          </div>
          <div>
            Description: {product.description}
          </div>
          <div>
            Image_url: {product.image_url}
          </div>
          <div>
            Maker: {product.maker}
          </div>
          <div>
            Delivery: {product.delivery}
          </div>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}