import User from "./User.tsx";
import { useCallback, useMemo } from "react";
import { useFetch } from "../hooks/UseFetch.tsx";

const Users = () => {
  console.log(`users`);

  const arr: number[] = useMemo(() => {
    return [11, 22, 33];
  }, []);

  const foo = useCallback(() => {
    console.log(`test`);
  }, []);

  const users = useFetch();
  console.log(users);

  return (
    <div>
      users component
      <User foo={foo} arr={arr} />
    </div>
  );
};

export default Users;
