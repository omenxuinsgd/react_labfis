import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${apiUrl}/users`);
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`${apiUrl}/users/${userId}`);
    getUsers();
  };

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Daftar Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">
        Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama (NIM/NIP)</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name} ({user.nim})</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist