import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="bg-green-500 p-3 flex justify-around">
      <li>
        <Link to={"/"}>home</Link>{" "}
      </li>
      <li>
        <Link to={"users"}>users</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to={"users/1"}>user</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to={"posts"}>posts</Link>{" "}
      </li>
    </ul>
  );
};

export default Menu;
