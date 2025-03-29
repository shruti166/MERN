import axios from 'axios';

// eslint-disable-next-line no-unused-vars
export const axiosInstance = axios.create({
    headers: {'Content-Type': 'application/json', 'authorization': `Bearer ${localStorage.getItem('token')}`}
})