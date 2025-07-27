import { useTodo } from "@/contexts/todo/useTodo";
import { useState } from "react";
import { Button } from "../ui/button";
import CreateTodoModal from "./modal/CreateTodoModal";
import { PlusIcon } from "lucide-react";


export default function TodoHeader(){
    const { todos } = useTodo();
    const [isCreateTodoModalOpen, setIsCreateTodoModalOpen] = useState(false);

     // 체크된 할일 반영하여 감소된 todo.count
    const remainigCount = todos.filter((todo) => !todo.completed).length

    return(
        <div className="flex flex-col border-b-black bg-pink-200">
            <div className="flex justify-between items-center">
                <h1 className="m-1 text-3xl font-bold text-gray-800 mb-2">할일 목록</h1>
                <Button size="sm" className="m-3 text-black hover:bg-pink-100 bg-pink-400" onClick={() => setIsCreateTodoModalOpen(true)}>
                    <PlusIcon /> 추가
                </Button>
            </div>
            <p className="m-1.5 text-gray-800">총 {remainigCount}개의 할일이 남았습니다.</p>

            {isCreateTodoModalOpen && (
                <CreateTodoModal
                isOpen={isCreateTodoModalOpen}
                onClose={() => setIsCreateTodoModalOpen(false)}
                />
            )}
        </div>
    );
}