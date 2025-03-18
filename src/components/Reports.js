import React, { useState } from 'react';
import '../styles.css'; // Adjust the path as necessary

const Reports = () => {
  const [reports, setReports] = useState([
    { id: 1, title: 'Monthly Sales', date: '2023-02-28', status: 'Completed', description: 'Sales report for February' },
    { id: 2, title: 'Annual Review', date: '2023-01-15', status: 'Pending', description: 'Annual review report for 2022' },
  ]);

  const [newReport, setNewReport] = useState({ title: '', date: '', status: 'Pending', description: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setReports(
        reports.map((report) => (report.id === editId ? { ...newReport, id: editId } : report))
      );
      setEditId(null);
    } else {
      setReports([...reports, { ...newReport, id: Date.now() }]);
    }

    setNewReport({ title: '', date: '', status: 'Pending', description: '' });
  };

  const handleEdit = (report) => {
    setNewReport(report);
    setEditId(report.id);
  };

  const handleDelete = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333' }}>Reports</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="title"
          placeholder="Report Title"
          value={newReport.title}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="date"
          name="date"
          value={newReport.date}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <select name="status" value={newReport.status} onChange={handleChange} style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          value={newReport.description}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {editId ? "Update" : "Add"} Report
        </button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button style={{ marginRight: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleEdit(report)}>
                  Edit
                </button>
                <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleDelete(report.id)}>
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

export default Reports;