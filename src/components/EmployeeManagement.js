import React, { useState } from 'react';
import '../styles.css'; // Adjust the path as necessary

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', status: 'Active', license: '123456', driverInfo: 'Class A' },
    { id: 2, name: 'Jane Smith', position: 'Designer', status: 'Active', license: '789012', driverInfo: 'Class B' },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', status: 'Active', license: '', driverInfo: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editId) {
      setEmployees(
        employees.map((emp) => (emp.id === editId ? { ...newEmployee, id: editId } : emp))
      );
      setEditId(null);
    } else {
      setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    }

    setNewEmployee({ name: '', position: '', status: 'Active', license: '', driverInfo: '' });
  };

  const handleEdit = (employee) => {
    setNewEmployee(employee);
    setEditId(employee.id);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333' }}>Employee Management</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={newEmployee.name}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newEmployee.position}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          name="license"
          placeholder="License Number"
          value={newEmployee.license}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          name="driverInfo"
          placeholder="Driver Info"
          value={newEmployee.driverInfo}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <select name="status" value={newEmployee.status} onChange={handleChange} style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {editId ? "Update" : "Add"} Employee
        </button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Position</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>License</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Driver Info</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.position}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.license}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.driverInfo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button style={{ marginRight: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleEdit(employee)}>
                  Edit
                </button>
                <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleDelete(employee.id)}>
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

export default EmployeeManagement;