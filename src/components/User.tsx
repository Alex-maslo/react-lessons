import { FC } from "react";
import { IUser } from "../models/IUsersResponse.ts";

type UserProps = { user: IUser };

const User: FC<UserProps> = ({ user }) => {
  return (
    <div>
      <h2 className="text-lg text-white font-semibold bg-orange-400 p-3">
        {user.id} {user.firstName}
      </h2>
    </div>
  );
};

export default User;
