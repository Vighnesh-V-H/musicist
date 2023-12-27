import { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("tyson@example.com");
  const [password, setPassword] = useState("tyson123");
  let authsuccess;
  const navigate = useNavigate();

  function auth(e) {
    e.preventDefault();
    if (email === "tyson@example.com" && password === "tyson123") {
      authsuccess = 1;
      navigate("/app");
    } else {
      alert("wrong mail or paass");
    }
  }

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={auth}>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
