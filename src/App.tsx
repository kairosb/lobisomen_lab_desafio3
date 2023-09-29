import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card/Card';

const TOKEN = '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';

async function getUser(username: string) {
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function App() {
  const [userData, setUserData] = useState({} as GitHubUser);
  
  function handleSearch(username: string) {
    getUser(username).then(user => {
      setUserData(user)
    });
  }

  return (
    <div className='container'>
      <Card handleSearch={handleSearch}></Card>
      <h1>Github User Info</h1>
      {userData ? (
        <div>
          <p>Username: {userData.login}</p>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
