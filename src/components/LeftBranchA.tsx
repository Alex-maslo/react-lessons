import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchA = () => {

    const {counterValue} = useContext(MyContext)
    return <div>LeftBranchA

        <p>counter value is = {counterValue}</p>

    </div>;
};

export default LeftBranchA;
