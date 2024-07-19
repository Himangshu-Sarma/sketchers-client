import { useEffect, useState } from "react";
import styles from "@/components/UserProfile/index.module.css";
import Link from "next/link";
import Image from "next/image";
import User from "../../../assets/User.png";

const UserProfile = () => {
  const URL =
  process.env.NODE_ENV === "production"
    ? "https://sketchers-server.onrender.com"
    : "http://localhost:8888";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let token = "undefined";

  const handleCheck = async () => {
    token = localStorage.getItem("token") ? localStorage.getItem("token") : "NULL";
    if (token) {
      const logIn = await fetch(
        `${URL}/sketchers/api/auto_login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(logIn);
      if (logIn.ok) {
        setIsLoggedIn(true);
      }
    }
  };

  useEffect(() => {
    handleCheck();
    // console.log(isLoggedIn);
  }, [token]);

  return (
    <div>
      {!isLoggedIn ? (
        <div className={styles.container}>
          <Link className={styles.button} href="/register">
            Signup
          </Link>
          <Link className={styles.button} href="/login">
            Login
          </Link>
        </div>
      ) : (
        <div className={styles.container}>
          <Image
            className={styles.imgUser}
            src={User}
            alt="User"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
