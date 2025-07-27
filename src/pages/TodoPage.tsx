import { fetchTodos } from "@/api/todo";
import TodoHeader from "@/components/todo/TodoHeader";
import TodoList from "@/components/todo/TodoList";
import type { Todo } from "@/types/todo";
import { sortTodos } from "@/utils/SortTodo";
import { useEffect, useState } from "react";

const mytodo = [
    {id:1, title:'치과가기', completed: false},
    {id:2, title:'공부하기', completed: true},
]

export default function TodoPage(){
    const [todos, setTodos] = useState<Todo[]>(mytodo);
    const [error, setError] = useState<string | null>(null);

    // 전달하지 않고 내부에서만 사용하는 함수명은 handle..로 시작
    const hadleToggle = (id: number) => {
        setTodos((prev) =>
            sortTodos(
                prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
            )
        );
    };

    const onAdd = (todo: Todo) => {
        return setTodos((prev) => [todo, ...prev]);
    }

    const onUpdate = (todo: Todo) => {
        return setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    }

    const onDelete = (id:number) => {
        return setTodos(todos.filter((todo)=>todo.id !== id));
    }

    // 체크된 할일 반영하여 감소된 todo.count
    const remainigCount = todos.filter((todo) => !todo.completed).length

    useEffect(() => {

    fetchTodos()
        .then((data) => setTodos(sortTodos(data)))
        .catch((error) => setError(error.message))
        .finally()
    }, []);

    return(
        <div>
            <TodoHeader todoCount={remainigCount} onAdd={onAdd} todos={todos}/>
            <TodoList todos={todos} onToggle={hadleToggle} onUpdate={onUpdate} onDelete={onDelete}  />
        </div>
    )
    
}