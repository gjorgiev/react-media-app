import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY
  await pause(1000);

  return response.data;
});

// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.rejected === 'users/fetch/rejected'
// fetchUsers.fulfilled === 'users/fetch/fullfilled'

// Dev only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  })
}

export { fetchUsers };