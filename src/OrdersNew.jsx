import axios from "axios";
// import { useState } from "react";

export function OrdersNew() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/orders.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/orders"; // Change this to hide a modal, redirect to a specific page, etc.
      })

  };

  return (
    <div id="orders-new">
      <h1>New Order</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Product Id: <input name="product_id" type="text" />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <button type="submit">New Order</button>
      </form>
    </div>
  );
}