import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main id="content" className={props.mainClassName}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
