import { paths } from 'src/paths';
import { useSelector } from 'src/redux/store';
import { ReactNode } from 'react';
import { envConfig, localStorageConfig } from 'src/config';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const check = (token: string | null) => {
  fetch(`${envConfig.serverURL}/login/introspect`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: token })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(response => {
    if (!response.data.valid) {
      localStorage.removeItem(localStorageConfig.accessToken);
      window.location.href = paths.auth.login;
    }
  })
  .catch(error => {
    toast.error('There was a problem with the fetch operation:', error);
    window.location.href = paths.auth.login;
  });
}


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const token: string | null = localStorage.getItem(localStorageConfig.accessToken);
  const { isAuthenticated } = useSelector((state) => state.authentication);
  

  if (!token && !isAuthenticated) {
    return (
      <Navigate
        to={paths.auth.login}
        replace={true}
      />
    );
  }
  check(token);

  return children;
};

export default AuthProvider;
