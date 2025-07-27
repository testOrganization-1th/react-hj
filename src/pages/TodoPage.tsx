import TodoHeader from "@/components/todo/TodoHeader";
import TodoList from "@/components/todo/TodoList";
import { useTodo } from "@/contexts/todo/useTodo";

export default function TodoPage(){
    const { error } = useTodo();

    return(
        <div className="overflow-auto">
            {error && <div className="text-red-500">{error} 에러 입니다</div>}
            <TodoHeader />
            <TodoList />
        </div>
    )
    
}