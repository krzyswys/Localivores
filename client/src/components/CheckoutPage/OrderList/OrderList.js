import React from "react";
import "./OrderList.css";

const OrderList = () => {
  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      <ul>
        <li>Item 1 - $10</li>
        <li>Item 2 - $5</li>
        <li>Item 3 - $15</li>
      </ul>
    </div>
  );
};

export default OrderList;
