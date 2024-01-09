
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="min-h-dvh">
            <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
