import type { Todo } from "@/types/todo";
import { createContext } from "react";

type TodoContextType = {
    isLoading: boolean;
    error: string | null;
    todos: Todo[];

    addTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
    isLoading: false,
    error: null,
    todos: [],

    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {},
});

