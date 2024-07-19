import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/pages/register/index.module.css";

const Login = () => {
  const URL =
  process.env.NODE_ENV === "production"
    ? "https://sketchers-server.onrender.com"
    : "http://localhost:8888";

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confPassword: "",
  });

  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confPassword } = credentials;

    if(password !== confPassword) {
        alert("Password and Confirm Password does not match !", "danger");
        return;
    }

    const response = await fetch(`${URL}/sketchers/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authToken);
      alert("Account logged in succesfully", "success");
      // const wait = setTimeout(2000);
      router.push('/');
      // return () => clearTimeout(wait);
    } else {
      alert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.holderContainer} onSubmit={handleSubmit}>

        <div className={styles.holder}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            className={styles.formControl}
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.holder}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            className={styles.formControl}
            id="password"
            onChange={onChange}
            name="password"
            minLength={5}
            required
          />
        </div>
        <div className={styles.holder}>
          <label htmlFor="ConfPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            className={styles.formControl}
            id="confPassword"
            onChange={onChange}
            name="confPassword"
            minLength={5}
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login