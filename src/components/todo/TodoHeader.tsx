import { useTodo } from "@/contexts/todo/useTodo";
import { useState } from "react";
import { Button } from "../ui/button";
import CreateTodoModal from "./modal/CreateTodoModal";


export default function TodoHeader(){
    const { todos } = useTodo();
    const [isCreateTodoModalOpen, setIsCreateTodoModalOpen] = useState(false);

     // 체크된 할일 반영하여 감소된 todo.count
    const remainigCount = todos.filter((todo) => !todo.completed).length

    return(
        <div className="bg-gray-800">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-pink-300 mb-2">할일 목록</h1>
                <Button variant="ghost" className="text hover:bg-pink-100 bg-pink-300" onClick={() => setIsCreateTodoModalOpen(true)}>
                    추가
                </Button>
            </div>
            <p className="text-pink-300">총 {remainigCount}개의 할일이 남았습니다.</p>

            {isCreateTodoModalOpen && (
                <CreateTodoModal
                isOpen={isCreateTodoModalOpen}
                onClose={() => setIsCreateTodoModalOpen(false)}
                />
            )}
        </div>
    );
}