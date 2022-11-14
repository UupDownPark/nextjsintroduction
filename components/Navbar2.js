import Link from "next/link";
import { useRouter } from "next/router";
//style jsx
export default function NavBar2() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>
          {/* <a className={[styles.link, router.pathname ==="/about" ? styles.active : "",].join(" ")}> */}
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
      {/* jsx를 사용하면 이 스타일은 이 컴포넌트 스코프안에서만 적용된다. 다른 파일에서 클래스네임을 사용해도 적용되지 않는다. */}
    </nav>
  );
}
