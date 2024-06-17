"use client";

import styles from "./themeToggle.module.css";
import { HiOutlineMoon } from "react-icons/hi";
import { PiSunBold } from "react-icons/pi";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <HiOutlineMoon size={14} style={{ color: "white" }} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <PiSunBold size={14} style={{ color: "red" }} />
    </div>
  );
};

export default ThemeToggle;
