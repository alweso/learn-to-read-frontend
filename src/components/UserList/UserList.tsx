// learn-to-read-frontend/src/components/UserList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  username: string;
  progress: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUsername, setNewUsername] = useState<string>('');
  const [newProgress, setNewProgress] = useState<string>(''); // Assume the input is always a string

  useEffect(() => {
    // Fetch users from the backend
    axios.get<User[]>('http://localhost:4000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSaveUser = () => {
    // Ensure both username and progress are provided
    if (newUsername.trim() === '' || newProgress === '') {
      alert('Please enter both username and progress.');
      return;
    }

    // Convert progress to a number
    const progressNumber = parseInt(newProgress, 10);

    // Send a POST request to save the new user to the backend
    axios.post('http://localhost:4000/api/users', { username: newUsername, progress: progressNumber })
      .then(response => {
        console.log(response.data.message);
        // Fetch updated users after saving
        axios.get<User[]>('http://localhost:4000/api/users')
          .then(response => setUsers(response.data))
          .catch(error => console.error('Error fetching users:', error));
      })
      .catch(error => console.error('Error saving user:', error));

    // Clear input fields after saving
    setNewUsername('');
    setNewProgress('');
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username} - Progress: {user.progress}</li>
        ))}
      </ul>
      <div>
        <h3>Add New User</h3>
        <label htmlFor="newUsername">Username:</label>
        <input type="text" id="newUsername" value={newUsername} onChange={e => setNewUsername(e.target.value)} />

        <label htmlFor="newProgress">Progress:</label>
        <input type="number" id="newProgress" value={newProgress} onChange={e => setNewProgress(e.target.value)} />

        <button onClick={handleSaveUser}>Save User</button>
      </div>
    </div>
  );
};

export default UserList;
