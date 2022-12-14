import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
//css modules
export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <Link href="/" legacyBehavior>
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          {/* <a className={[styles.link, router.pathname ==="/about" ? styles.active : "",].join(" ")}> */}
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          about
        </a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
