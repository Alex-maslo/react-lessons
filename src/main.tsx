import { createRoot } from "react-dom/client";
import "./index.css";
import { BearCounter, Controls } from "./components/Counter.tsx";

createRoot(document.getElementById("root")!).render(
  <div>
    <BearCounter />
    <Controls />
  </div>,
);
