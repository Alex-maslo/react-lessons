import { useAppSelector } from "../main.tsx";

const UsersPage = () => {
  const { userSlice } = useAppSelector((state) => state);
  console.log(userSlice);

  return <div>UsersPage</div>;
};

export default UsersPage;
