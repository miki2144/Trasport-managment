import React, { useState } from 'react';
import '../styles.css'; // Adjust the path as necessary

const OrderManagement = () => {
  const vehicles = [
    'Car',
    'Truck',
    'Motorcycle',
    'Bicycle',
    'Van',
    'SUV'
  ];

  const [orders, setOrders] = useState([
    { id: 1, customer: 'Alice', product: 'Car', quantity: 1, status: 'Shipped', orderDate: '2023-03-01', shippingAddress: '123 Main St' },
    { id: 2, customer: 'Bob', product: 'Truck', quantity: 2, status: 'Pending', orderDate: '2023-03-02', shippingAddress: '456 Elm St' },
  ]);

  const [newOrder, setNewOrder] = useState({ customer: '', product: '', quantity: '', status: 'Pending', orderDate: '', shippingAddress: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setOrders(
        orders.map((order) => (order.id === editId ? { ...newOrder, id: editId } : order))
      );
      setEditId(null);
    } else {
      setOrders([...orders, { ...newOrder, id: Date.now() }]);
    }

    setNewOrder({ customer: '', product: '', quantity: '', status: 'Pending', orderDate: '', shippingAddress: '' });
  };

  const handleEdit = (order) => {
    setNewOrder(order);
    setEditId(order.id);
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333' }}>Order Management</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="customer"
          placeholder="Customer Name"
          value={newOrder.customer}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        
        <select name="product" value={newOrder.product} onChange={handleChange} required style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="">Select Product</option>
          {vehicles.map((vehicle, index) => (
            <option key={index} value={vehicle}>{vehicle}</option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newOrder.quantity}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="date"
          name="orderDate"
          value={newOrder.orderDate}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          name="shippingAddress"
          placeholder="Shipping Address"
          value={newOrder.shippingAddress}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <select name="status" value={newOrder.status} onChange={handleChange} style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {editId ? "Update" : "Add"} Order
        </button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Customer</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Product</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Order Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Shipping Address</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.customer}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.product}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.quantity}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.orderDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.shippingAddress}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button style={{ marginRight: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleEdit(order)}>
                  Edit
                </button>
                <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleDelete(order.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;