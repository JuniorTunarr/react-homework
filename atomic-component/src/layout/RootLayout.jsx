import Header from "./Header/Header";

function RootLayout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default RootLayout;
