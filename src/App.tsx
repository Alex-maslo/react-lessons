import { getAllUsers } from "./services/user.service.ts";

const App = () => {
  getAllUsers().then((users) => {
    console.log(users);
  });
  return <div></div>;
};

export default App;
