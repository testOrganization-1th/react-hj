import type { Todo } from "@/types/todo";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

type Props = {
    todo: Todo;

    onToggle:(id: number) => void;
};

export default function TodoItem({ todo, onToggle }: Props) {
    return(
        <div className="flex justify-between items-center
        h-[60px] p-4 m-1 rounded-md shadow-md gap-4 bg-gray-100">
            <div className="flex items-center gap-2 overflow-hidden">
                <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => onToggle(todo.id)}
                />
                <p
                    className={(cn(
                        "text-foreground",
                        todo.completed && "line-through text-gray-500"
                    ))}
                >{todo.title}</p>
            </div>
            <div className="flex items-center gap-1">
                <Button 
                    size="lg" 
                    variant="ghost"
                    className="size-7 bg-pink-200"
                > 수정
                </Button>
                <Button 
                    size="lg" 
                    variant="ghost"
                    className="size-7 bg-pink-100"
                > 삭제
                </Button>
            </div>
        </div>
    )
}