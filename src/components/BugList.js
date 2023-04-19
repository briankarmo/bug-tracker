import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    async function fetchBugs() {
      const response = await axios.get('/api/bugs');
      setBugs(response.data);
    }
    fetchBugs();
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>{bug.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
