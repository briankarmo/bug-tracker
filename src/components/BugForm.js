import React, { useState } from 'react';
import axios from 'axios';

function BugForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bugs', { title });
      console.log(response.data);
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Bug</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BugForm;
