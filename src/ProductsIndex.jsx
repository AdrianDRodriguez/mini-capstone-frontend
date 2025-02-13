export function ProductsIndex( {products} ) {
console.log(products);

  return (
    <div id="products-index">
      <h1>All products</h1>
      <br />
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
            <img src={product.image_url} />
          </div>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}