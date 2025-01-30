import { FormEvent } from "react";

const FormComponent = () => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div>
      <form className="form">
        <input
          className={`border border-orange-600 p-2 m-2`}
          type="text"
          name={"username"}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className={`border border-orange-600 p-2 m-2 `}
          type="text"
          name={"password"}
          placeholder="Password"
        />
        <button className={`border border-orange-600 p-2 m-2 `}>send</button>
      </form>
    </div>
  );
};

export default FormComponent;
