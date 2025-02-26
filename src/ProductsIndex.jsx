export function ProductsIndex( {products, onShow} ) {
console.log(products);

  return (
    <div id="products-index">
      <h1>All products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img src={product.image_url} className="card-img-top" alt="..." height="200px" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.directions}.</p>
                <button type="button" className="btn btn-primary" onClick={() => onShow(product)}>More Info</button>
              </div>
            </div>
            </div>
      ))}
      </div>
    
    
    </div>
  );
}