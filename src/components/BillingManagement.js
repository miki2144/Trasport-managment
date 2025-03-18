import React, { useState } from "react";
import '../styles.css'; // Adjust the path as necessary

const BillingManagement = () => {
  const [bills, setBills] = useState([
    { id: 1, name: "Customer A", amount: 500, status: "Paid" },
    { id: 2, name: "Customer B", amount: 300, status: "Pending" }
  ]);

  const [newBill, setNewBill] = useState({ name: "", amount: "", status: "Pending" });
  const [editId, setEditId] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setNewBill({ ...newBill, [e.target.name]: e.target.value });
  };

  // Add or Update Bill
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setBills(
        bills.map((bill) => (bill.id === editId ? { ...newBill, id: editId } : bill))
      );
      setEditId(null);
    } else {
      setBills([...bills, { ...newBill, id: Date.now() }]);
    }

    setNewBill({ name: "", amount: "", status: "Pending" });
  };

  // Edit Bill
  const handleEdit = (bill) => {
    setNewBill(bill);
    setEditId(bill.id);
  };

  // Delete Bill
  const handleDelete = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  return (
    <div className="billing-management" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333' }}>Billing Management</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={newBill.name}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newBill.amount}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <select
          name="status"
          value={newBill.status}
          onChange={handleChange}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {editId ? "Update" : "Add"} Bill
        </button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Customer</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Amount</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bill.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bill.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>${bill.amount}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bill.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => handleEdit(bill)} style={{ marginRight: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }}>Edit</button>
                <button onClick={() => handleDelete(bill.id)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingManagement;