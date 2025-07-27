import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Todo } from "@/types/todo";
import { useRef } from "react";

type Props = {
    isOpen: boolean;
    todos: Todo[]

    onAdd: (todo: Todo) => void;
    onClose: () => void;
}

export default function CreateTodoModal({ isOpen, todos, onAdd, onClose }: Props){
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTodo = () => {
        if(inputRef.current) {
            onAdd({
                id: todos.length + 1,
                title: inputRef.current.value.trim(),
                completed: false
            });
            onClose();
        }
    }
    return(
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>할일 추가</DialogTitle>
                    </DialogHeader>
                    <div>
                        <input ref={inputRef} placeholder="할일을 입력해주세요." />
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={onClose}>
                            취소
                        </Button>
                        <Button type="submit" onClick={handleAddTodo}>
                            저장
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}