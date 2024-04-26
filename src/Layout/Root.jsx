import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/Navbar";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div></div>
    </div>
  );
};

export default Root;
