import type { Todo } from "@/types/todo";
import { createContext } from "react";

type TodoContextType = {
    error: string | null;
    todos: Todo[];

    onAdd: (todo: Todo) => void;
    onUpdate: (todo: Todo) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
    error: null,
    todos: [],

    onAdd: () => {},
    onUpdate: () => {},
    onDelete: () => {},
    onToggle: () => {},
});

