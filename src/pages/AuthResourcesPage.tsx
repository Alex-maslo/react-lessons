import { loadAuthProducts, refresh } from "../services/api.service.ts";
import { useEffect } from "react";

export const AuthResourcesPage = () => {
  useEffect(() => {
    loadAuthProducts()
      .then((products) => {
        console.log(products);
      })
      .catch((reason) => {
        console.log(reason);

        refresh()
          .then(() => loadAuthProducts())
          .then((value) => {
            console.log(value);
          });
      });
  }, []);
  return <div>AuthResourcesPage</div>;
};
