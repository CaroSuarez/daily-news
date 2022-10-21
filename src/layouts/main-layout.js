import { Container } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./main-layout.css";

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      {props.children}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
