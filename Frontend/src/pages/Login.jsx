import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        formData,
        { withCredentials: true },
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage("Login failed", error);
    }
  };

  return (
    <main className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>

        <p>{message}</p>
      </div>
    </main>
  );
};

export default Login;
