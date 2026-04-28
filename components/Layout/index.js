import Head from "../Headers";
import Menu from "../Menu";
import Parallax from "../Parallax";
import Social from "../Social";

const Layout = (props) => (
  <div>
    <Head />
    <Menu />
    {props.parallax ? <Parallax content={props.content} /> : props.content}
    <Social />
    <style jsx>{``}</style>
  </div>
);
export default Layout;
