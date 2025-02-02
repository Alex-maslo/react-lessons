import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import { init, MyContext } from "./context/MyContext.tsx";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState<number>(init.counterValue);
  console.log(counter);
  console.log(`app`);
  return (
    <div>
      <MyContext.Provider
        value={{
          counterValue: counter,
          increment: (obj) => {
            setCounter(obj++);
          },
        }}
      >
        <LeftBranch />
        <RightBranch />
      </MyContext.Provider>
    </div>
  );
};

export default App;
