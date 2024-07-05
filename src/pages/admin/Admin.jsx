import { Outlet } from "react-router-dom";
import SearchNav from "../../components/search/SearchNav";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../table/Table";
import SidebarFooter from "../../components/sidebarfooter/SidebarFooter";

const Admin = () => {
  return (
    <div>
      <SearchNav />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
