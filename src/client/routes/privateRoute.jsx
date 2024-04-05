import { useToken } from '../auth/useToken';
import { Navigate  } from 'react-router-dom';

export const PrivateRoute = ({ element }) => {
    const [token, setToken] = useToken();
    if (token) {
      return element;
    } else {
      return (<Navigate to="/login" />);
    }
};