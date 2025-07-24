import TodoHeader from "@/components/todo/TodoHeader"
import TodoList from "@/components/todo/TodoList"
import type { Todo } from "@/types/todo";
import { useState } from "react";

const mytodo = [
    {id:1, title:'치과가기', completed: false},
    {id:2, title:'공부하기', completed: true},
]

export default function TodoPage(){
    const [todos, setTodos] = useState<Todo[]>(mytodo);

    // 전달하지 않고 내부에서만 사용하는 함수명은 handle..로 시작
    const hadleToggle = (id: number) => {
        setTodos((prev) => 
            prev.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed}: todo
            )
        );
    };

    // 체크된 할일 반영하여 감소된 todo.count
    const remainigCount = todos.filter((todo) => !todo.completed).length

    return(
        <div className="bg-green-300">
            <TodoHeader todoCount={remainigCount} onClickAdd={() => {}} />
                <div>TodoPage!</div> 
            <TodoList todos={todos} onToggle={hadleToggle}/>
        </div>
    )
}