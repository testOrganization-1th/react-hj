import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTodo } from "@/contexts/todo/useTodo";
import type { Todo } from "@/types/todo";
import { useRef } from "react";

type Props = {
    isOpen: boolean;
    selectedTodo: Todo;

    onClose: () => void;
}

export default function UpdateTodoModal({ isOpen, selectedTodo, onClose }: Props){

    const { onUpdate } = useTodo();
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleUpdateTodo = () => {
        if (!inputRef.current) return;

        onUpdate({...selectedTodo, title: inputRef.current.value});

        onClose();
    };


    return(
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>할일 수정</DialogTitle>
                    </DialogHeader>
                    <div>
                        <input ref={inputRef} defaultValue={selectedTodo.title}></input>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={onClose}>
                            취소
                        </Button>
                        <Button type="submit" onClick={handleUpdateTodo}>
                            수정
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}