import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTodo } from "@/contexts/todo/useTodo";
import { useRef } from "react";

type Props = {
    isOpen: boolean;

    onClose: () => void;
}

export default function CreateTodoModal({ isOpen, onClose }: Props){
    const inputRef = useRef<HTMLInputElement>(null);
    const { todos, onAdd } = useTodo();

    const handleCreateTodo = () => {
        if (inputRef.current) {
        onAdd({
            id: todos.length + 1,
            title: inputRef.current.value.trim(),
            completed: false,
        });

        onClose();
        }
    };

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
                        <Button type="submit" onClick={handleCreateTodo}>
                            저장
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}