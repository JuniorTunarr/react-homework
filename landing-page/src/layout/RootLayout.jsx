import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";

function RootLayout({ children }) {
  return (
    <>
      <HeaderBar />
      <main>{children}</main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
