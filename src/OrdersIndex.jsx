import { useState, useEffect } from "react";

import axios from "axios";

export function OrdersIndex() {
  const [orders, setOrders] = useState([])
  const getOrders = () => {
    axios.get("http://localhost:3000/orders.json").then(response => {
      console.log(response.data)
      setOrders(response.data)
    })
    console.log('getting orders')
  }

  useEffect(getOrders, [])

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map(order => (
        <div key={order.id}>
          <p><b>product_id:</b> {order.product_id}</p>
          <p><b>quantity:</b> {order.quantity}</p>
          <p><b>subtotal:</b> {order.subtotal}</p>
          <p><b>tax:</b> {order.tax}</p>
          <p><b>total:</b> {order.total}</p>
          <p><b>created_at:</b> {order.created_at}</p>
          <p><b>user_id:</b> {order.user_id}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}