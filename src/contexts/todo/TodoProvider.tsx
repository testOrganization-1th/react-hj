import type { Todo } from "@/types/todo";
import { sortTodos } from "@/utils/SortTodo";
import { useState, type PropsWithChildren } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleToggleTodo = (id: number) => {
        setTodos((prev) =>
            sortTodos(
                prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
            )
        );
    };
  
    const handleAddTodo = (todo: Todo) => {
        return setTodos((prev) => [todo, ...prev]);
    }

    const handleUpdateTodo = (todo: Todo) => {
        return setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    }

    const handleDeleteTodo = (id:number) => {
        return setTodos(todos.filter((todo)=>todo.id !== id));
    }

    // 체크된 할일 반영하여 감소된 todo.count
    // const remainigCount = todos.filter((todo) => !todo.completed).length

    return (
    <TodoContext.Provider
        value={{
            isLoading,
            error,
            todos: todos,
            addTodo: handleAddTodo,
            updateTodo: handleUpdateTodo,
            deleteTodo: handleDeleteTodo,
            toggleTodo: handleToggleTodo
        }}
    >
        {children}
    </TodoContext.Provider>
  );
};
