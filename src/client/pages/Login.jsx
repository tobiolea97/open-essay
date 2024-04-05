import { useState, useEffect } from "react";

function Login() {
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  
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
