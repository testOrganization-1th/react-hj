import { Outlet } from "react-router-dom";
import { TodoProvider } from "./TodoProvider";

export default function TodoLayOut() {
  return (
    <TodoProvider>
      <Outlet/>
    </TodoProvider>
  );
};
