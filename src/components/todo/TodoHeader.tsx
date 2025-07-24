import { Button } from "../ui/button";

type Props ={
    todoCount: number;

    onClickAdd: () => void;
}

export default function TodoHeader({todoCount, onClickAdd}: Props){
    return(
        <div className="bg-amber-300">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">할일 목록</h1>
                <Button size="sm" onClick={onClickAdd}>
                    추가
                </Button>
            </div>
            <p className="text-gray-600">총 {todoCount}개의 할일이 남았습니다.</p>
        </div>
    );
}