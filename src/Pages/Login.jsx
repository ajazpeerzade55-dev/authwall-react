import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/fakeAuth";
import { AuthContext } from "../context/AuthContext";

function Login() {
  // ✅ HOOKS AT TOP LEVEL
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login: authLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const result = login(email, password);

    if (!result.success) {
      alert(result.message);
      return;
    }

    authLogin(result.user);
    navigate("/dashboard");
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

}

export default Login;
