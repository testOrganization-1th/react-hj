import { useState } from "react";
import { Button } from "../ui/button";
import CreateTodoModal from "./modal/CreateTodoModal";
import type { Todo } from "@/types/todo";

type Props ={
    todoCount: number;
    todos:Todo[]
    
    onAdd: (todo: Todo) => void;
}

export default function TodoHeader({todoCount, todos, onAdd}: Props){
    const [isCreateTodoModalOpen, setIsCreateTodoModalOpen] = useState(false);

    return(
        <div className="bg-gray-800">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-pink-300 mb-2">할일 목록</h1>
                <Button variant="ghost" className="text hover:bg-pink-100 bg-pink-300" onClick={() => setIsCreateTodoModalOpen(true)}>
                    추가
                </Button>
            </div>
            <p className="text-pink-300">총 {todoCount}개의 할일이 남았습니다.</p>

            {isCreateTodoModalOpen && (
                <CreateTodoModal
                todos= {todos}
                isOpen={isCreateTodoModalOpen}
                onClose={() => setIsCreateTodoModalOpen(false)}
                onAdd={onAdd}
                />
            )}
        </div>
    );
}