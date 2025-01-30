import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("users");
  }, [navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
