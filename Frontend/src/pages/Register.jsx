import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        "http://localhost:3000/api/auth/register",
        formData,
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage("Registration failed", error);
    }
  };

  return (
    <main className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

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

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>

        <p>{message}</p>
      </div>
    </main>
  );
};

export default Register;
