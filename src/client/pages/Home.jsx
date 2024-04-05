function Home() {
  return (
    <main className="main-login">
      <div className="oauth-background">
          <a className="oauth" onClick={() => window.location.href = googleOauthUrl}>
          <h1>Your are on the home page now!</h1>
          </a>
        </div>
    </main>
  );
}

export default Home;
