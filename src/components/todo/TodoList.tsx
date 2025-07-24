import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

type Props = {
    todos: Todo[];

    onToggle:(id: number) => void;
}

export default function TodoList({todos, onToggle}: Props){

    return(
        <div className="bg-green-800">
            <div>TodoList</div>
            <div>
                {todos.map((todo)=><TodoItem todo={todo} onToggle={onToggle}></TodoItem>)}
            </div>
        </div>
    )
}