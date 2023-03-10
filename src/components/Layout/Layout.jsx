import { Navbar } from "./components";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
