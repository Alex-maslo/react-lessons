import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu.tsx";

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;
