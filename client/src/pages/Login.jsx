import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
      window.location.reload();
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleLogin}>
        <div className="title">
          Welcome Back,
          <br />
          <span>Login to continue</span>
        </div>

        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="button-confirm" type="submit">
          Login →
        </button>
      </form>
    </div>
  );
}