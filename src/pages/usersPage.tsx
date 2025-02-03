import { useAppSelector, UserSliceAction } from "../main.tsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const UsersPage = () => {
  const { users } = useAppSelector(({ userSlice }) => userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((value) => value.json())
      .then((value) => dispatch(UserSliceAction.loadUsers(value)));
  }, [dispatch]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersPage;
