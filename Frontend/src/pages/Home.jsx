import { Link } from "react-router";

const Home = () => {
  return (
    <main className="landing">
      <div className="landing__bg"></div>

      <div className="landing__content">
        <h1>
          Welcome to <span>AuthFlow</span>
        </h1>

        <p>
          Secure authentication system with modern UI.
          Login or create your account to continue.
        </p>

        <div className="landing__buttons">
          <Link to="/login" className="btn login">
            Login
          </Link>

          <Link to="/register" className="btn register">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;