import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import TableApp from "./easytable.tsx";
// import App from "./table";
// import { App } from "antd";
// import TodoApp from "./App";
// import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
     */}
     {/* <App/> */}
     <TableApp/>

  </StrictMode>
);
