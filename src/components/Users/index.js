import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/users/list')
        .then((response) => {
            setUsers(response.data)
        });
  }, []);

  return (
    <section>
      <h2>Usuários</h2>
      <ul>
        {users.map(u => <p>{u.name}</p>)}
      </ul>
    </section>
  )
}

export default Users