import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;