import React, { useState } from 'react';
import '../styles.css'; // Adjust the path as necessary

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, status: 'Active', image: '' },
    { id: 2, make: 'Ford', model: 'F-150', year: 2021, status: 'Active', image: '' },
  ]);

  const [newVehicle, setNewVehicle] = useState({ make: '', model: '', year: '', status: 'Active', image: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setNewVehicle({ ...newVehicle, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setVehicles(
        vehicles.map((vehicle) => (vehicle.id === editId ? { ...newVehicle, id: editId } : vehicle))
      );
      setEditId(null);
    } else {
      setVehicles([...vehicles, { ...newVehicle, id: Date.now() }]);
    }

    setNewVehicle({ make: '', model: '', year: '', status: 'Active', image: '' });
  };

  const handleEdit = (vehicle) => {
    setNewVehicle(vehicle);
    setEditId(vehicle.id);
  };

  const handleDelete = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333' }}>Vehicle Management</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="make"
          placeholder="Vehicle Make"
          value={newVehicle.make}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          name="model"
          placeholder="Vehicle Model"
          value={newVehicle.model}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={newVehicle.year}
          onChange={handleChange}
          required
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <select name="status" value={newVehicle.status} onChange={handleChange} style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginRight: '10px' }}
        />
        {newVehicle.image && <img src={newVehicle.image} alt="Vehicle Preview" style={{ width: '100px', height: 'auto', borderRadius: '5px', marginLeft: '10px' }} />}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {editId ? "Update" : "Add"} Vehicle
        </button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Make</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Model</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Year</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Image</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{vehicle.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{vehicle.make}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{vehicle.model}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{vehicle.year}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{vehicle.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {vehicle.image && <img src={vehicle.image} alt={vehicle.make} style={{ width: '50px', height: 'auto', borderRadius: '5px' }} />}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button style={{ marginRight: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleEdit(vehicle)}>
                  Edit
                </button>
                <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }} onClick={() => handleDelete(vehicle.id)}>
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

export default VehicleManagement;