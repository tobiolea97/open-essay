function Home() {
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

export default Home;
