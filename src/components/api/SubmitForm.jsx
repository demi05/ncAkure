import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ncakurebackend.fly.dev/api',
  timeout: 30000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitForm = async (formData) => {
  try {
    const response = await api.post('/register', formData);
    return response.data;
  }catch (error) {
    console.error('Error submitting form:', error);
    
    // Extract error message from response if available
    const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Registration failed';
  
    throw new Error(errorMessage);
  }
};