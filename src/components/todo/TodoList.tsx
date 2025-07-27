import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

type Props = {
    todos: Todo[];

    onToggle:(id: number) => void;
    onUpdate:(todo: Todo) => void;
    onDelete:(id: number) => void;
}

export default function TodoList({todos, onToggle, onDelete, onUpdate}: Props){

    return(
        <div>
            <div>
                {todos.map((todo)=>
                <TodoItem 
                    todo={todo} 
                    onToggle={onToggle} 
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                >
                </TodoItem>)}
            </div>
        </div>
    )
}