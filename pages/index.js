import { useState } from "react";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/Navbar2";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <NavBar2 />
      <h1>Home</h1>
    </div>
  );
}
//라이브러리와 프레임워크의 차이
//라이브러리는 알다시피 우리가 사용하는 것이고 프레임워크는 프레임워크가 우리의 코드를 호출하는 것이다.
//페이지에 about.js가 있다면 어떤 내용이 있든 우리가 "/about"으로 들어갈 때 about.js에 있는 것을 보여준다.
//단지 코드를 올바른 장소에 넣기만 하면 모든 게 널 위해 그냥 일어날 것이란 것이다.(프레임워크의 장점)
//우린 router 설정이라든가, 그걸 렌더링한다든가 하지 않았다.
