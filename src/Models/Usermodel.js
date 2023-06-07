import { useState } from 'react';

const useUserModel = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const getUserByMobileAndPassword = (mobile, password) => {
    return users.find((user) => user.mobile === mobile && user.password === password);
  };

  return {
    users,
    addUser,
    getUserByMobileAndPassword
  };
};

export default useUserModel;
