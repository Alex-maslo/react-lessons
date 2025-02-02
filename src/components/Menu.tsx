import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <ul
      className={`bg-blue-600 text-white p-4 font-semibold flex justify-around`}
    >
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"login"}>login</Link>
      </li>
      <li>
        <Link to={"/auth/resources"}>Authorization</Link>
      </li>
    </ul>
  );
};
