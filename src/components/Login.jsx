import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Add state for email
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log("Username:", username);
    console.log("Email:", email); // Log the email
    console.log("Password:", password);
  };

  return (
    <section>
      {/* Leaves */}
      <div className="leaves">
        <div className="set">
          <div><img src="/src/assets/images/leaf_01.png" alt="Leaf 1" /></div>
          <div><img src="/src/assets/images/leaf_02.png" alt="Leaf 2" /></div>
          <div><img src="/src/assets/images/leaf_03.png" alt="Leaf 3" /></div>
          <div><img src="/src/assets/images/leaf_04.png" alt="Leaf 4" /></div>
          <div><img src="/src/assets/images/leaf_01.png" alt="Leaf 5" /></div>
          <div><img src="/src/assets/images/leaf_02.png" alt="Leaf 6" /></div>
          <div><img src="/src/assets/images/leaf_03.png" alt="Leaf 7" /></div>
          <div><img src="/src/assets/images/leaf_04.png" alt="Leaf 8" /></div>
        </div>
      </div>

      {/* Background Images */}
      <img src="/src/assets/images/bg.jpg" alt="Background" className="bg" />
      <img src="/src/assets/images/girl.png" alt="Girl on Bicycle" className="girl" />
      <img src="/src/assets/images/trees.png" alt="Trees" className="trees" />

      {/* Login Form */}
      <form className="login" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>
        <div className="inputBox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input type="submit" value="Login" id="btn" />
        </div>
      </form>
    </section>
  );
};

export default Login;

