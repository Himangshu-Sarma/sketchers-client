import { useEffect, useState } from "react";
import styles from "@/components/UserProfile/index.module.css";
import Link from "next/link";

const UserProfile = () => {
  const URL =
  process.env.NODE_ENV === "production"
    ? "https://sketchers-server.onrender.com"
    : "http://localhost:8888";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCheck = async () => {
    const token = localStorage.getItem("token");
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
  }, []);

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
          <img
            className={styles.imgUser}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaEfkGCG_-48LMB-z8GcnbePmS-ih_HHMA096X0bEGNcoKd5UE6BZ0v3r1hsLNv3iZ0c&usqp=CAU"
            alt="User"
          />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
