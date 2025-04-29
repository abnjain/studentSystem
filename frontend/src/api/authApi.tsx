import axios from 'axios';

const loginUser = async (email: string, password: string) => {
  return axios.post('/api/auth/login', { email, password });
};
  
export default loginUser;