import axios from "axios";

export function ProductsNew() {

  const handleSubmmit = (event) => {
    event.preventDefault();
    console.log('in handle submit');
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data)
      event.target.reset()
    });
  }

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <br />
        <div>
          Price: <input name="price" type="text" />
        </div>
        <br />
        <div>
          Description: <input name="description" type="text" />
        </div>
        <br />
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <br />
        <div>
          Maker: <input name="maker" type="text" />
        </div>
        <br />
        <div>
          Delivery: <input name="delivery" type="text" />
        </div>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}