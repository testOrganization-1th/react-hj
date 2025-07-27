import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Todo } from "@/types/todo";
import { useRef } from "react";

type Props = {
    isOpen: boolean;
    todo: Todo

    onUpdate: (todo: Todo) => void;
    onClose: () => void;
}

export default function UpdateTodoModal({ isOpen, todo, onUpdate, onClose }: Props){

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpdateTodo = () => {
        if(inputRef.current){
            onUpdate({
                id: todo.id, 
                title: inputRef.current.value.trim(), 
                completed:false 
            });
            console.log(todo);
            onClose();
        }
    }

    return(
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>할일 수정</DialogTitle>
                    </DialogHeader>
                    <div>
                        <input ref={inputRef} defaultValue={todo.title}></input>
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