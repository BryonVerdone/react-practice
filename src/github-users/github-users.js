import React, { useState, useEffect } from 'react';
import './index.css';
const url = `https://api.github.com/users`;
const FetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>GitHub Users</h2>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img className='user-img' src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchData;
