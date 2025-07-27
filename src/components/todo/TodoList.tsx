import { useTodo } from "@/contexts/todo/useTodo";
import TodoItem from "./TodoItem";



export default function TodoList(){

  const { todos } = useTodo();

  return (
    <div className="flex flex-col gap-2">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
