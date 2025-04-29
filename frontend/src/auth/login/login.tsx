import axios from 'axios';

const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log('Login successful', response.data);
      // You can redirect to dashboard here if login successful
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };
  