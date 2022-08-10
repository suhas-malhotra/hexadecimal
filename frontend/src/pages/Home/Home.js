import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const res = axios.get("http://localhost/api/v1/users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Website</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
                <td>
                  {user.address.suite} {user.address.country}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
