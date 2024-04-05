import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';
import { useDispatch } from 'react-redux';
import { login } from "../data/Login";

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const { token: oauthToken } = useQueryParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (oauthToken) {
        dispatch(login(oauthToken));
        navigate("/home");
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    if(token != null) {
        navigate(`/home`);
    }
})
  
  useEffect(() => {
    fetch("http://localhost:3000/auth/google/url")
      .then((res) => res.json())
      .then((data) => setGoogleOauthUrl(data.url));
  }, []);

  return (
    <main className="main-login">
      <div className="oauth-background">
          <a className="oauth" onClick={() => window.location.href = googleOauthUrl}>
            <img src="google-logo.png" alt="Google Icon" />
            <p className="loading-label">Login with Google</p>
          </a>
        </div>
    </main>
  );
}

export default Login;
