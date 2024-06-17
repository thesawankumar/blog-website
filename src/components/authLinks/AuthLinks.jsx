"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenicated";
  return (
    <>
      {status === "notauthenicated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <RxHamburgerMenu size={20} />
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenicated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
