//nextJS는, about 이 렌더링되기 전에 , 먼저 App을 보기 때문에 파일이름을 _app.js라고 해줘야된다.
//_app.js는 청사진이다. 어떻게 페이지가 있어야하는지 어떤 컴포넌트가 어떤 페이지에 있어야만 하는지

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps}></Component>
      <span>hello</span>
    </div>
  );
}
