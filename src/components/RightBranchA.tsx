import { useContext } from "react";
import { MyContext } from "../context/MyContext.tsx";

const RightBranchA = () => {
  const { counterValue, increment } = useContext(MyContext);
  return (
    <div>
      RightBranchA
      <button
        className={`bg-red-400 p-2 text-white`}
        onClick={() => {
          increment(counterValue);
        }}
      >
        Click me to incr counter LBA
      </button>
    </div>
  );
};

export default RightBranchA;
