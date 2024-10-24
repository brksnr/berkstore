import axios from 'axios';
import { setUser } from './actions/clientActions';


export const verifyToken = async (dispatch) => {
  const token = localStorage.getItem('token');
  console.log('Token kontrol ediliyor:', token);

  if (token) {
    axios.defaults.headers.common['Authorization'] = token;

    try {
      const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/verify');

      if (response.status === 200) {
        const user = response.data;
        dispatch(setUser(user));

        const renewedToken = response.data.token;
        localStorage.setItem('token', renewedToken);
        axios.defaults.headers.common['Authorization'] = renewedToken;

        console.log('Kullanıcı otomatik olarak giriş yaptı.');
        console.log(user);
      }
    } catch (error) {
      console.error('Token doğrulaması başarısız:', error);
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
  } else {
    console.log('Token bulunamadı, kullanıcı giriş yapmamış.');
  }
};
