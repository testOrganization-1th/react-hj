import type { Todo } from "@/types/todo";
import { sortTodos } from "@/utils/SortTodo";
import { useEffect, useState, type PropsWithChildren } from "react";
import { TodoContext } from "./TodoContext";
import { fetchTodos } from "@/api/todo";

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([]);
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

    useEffect(() => {
        const fetchData = async () => {
        fetchTodos()
            .then(setTodos)
            .catch(setError)
            .finally();
        };

        fetchData();
    }, []);


    return (
    <TodoContext.Provider
        value={{
            error,
            todos: todos,
            onAdd: handleAddTodo,
            onUpdate: handleUpdateTodo,
            onDelete: handleDeleteTodo,
            onToggle: handleToggleTodo
        }}
    >
        {children}
    </TodoContext.Provider>
  );
};
