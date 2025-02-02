import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul
        className={`bg-orange-500 p-3 text-white font-semibold flex justify-around`}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"users"}>Users</Link>
        </li>
        <li>
          <Link to={"users/:id"}>User</Link>
        </li>
        <li>
          <Link to={"posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
