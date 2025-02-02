import { loadAuthProducts } from "../services/api.service.ts";
import { useEffect } from "react";

export const AuthResourcesPage = () => {
  useEffect(() => {
    loadAuthProducts().then((products) => {
      console.log(products);
    });
  }, []);
  return <div>AuthResourcesPage</div>;
};
