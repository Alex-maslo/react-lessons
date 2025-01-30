import { getUsers } from "../services/api.service.ts";
import { useEffect, useState } from "react";
import { IUser, IUsersResponse } from "../models/IUsersResponse.ts";
import User from "./User.tsx";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams] = useSearchParams({ page: "1" });
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    let currentPage = searchParams.get("page") || "1";
    getUsers(currentPage).then((value: IUsersResponse) => {
      setUsers(value.users);
    });
  }, [searchParams]);

  return (
    <>
      <div className={`grid grid-cols-6 gap-4 p-3`}>
        {users && users.length > 0 ? (
          users.map((user) => <User user={user} key={user.id} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Users;
