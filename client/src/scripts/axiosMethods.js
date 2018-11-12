import axios from 'axios';

const fetchUser = () => {
  axios.get('/api/current_user').then(res => {
    console.log('performing fetch');
    const user = {
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      rideCount: res.data.rideCount
    };
    return user;
  });
};


export default fetchUser;