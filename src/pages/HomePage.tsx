import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    const handleStart = () => {
        // replace: true → 현재 페이지를 새로운 경로로 대체, 뒤로가기 시 이 페이지로 못 돌아옴
        navigate("/todo", {replace:false});
    }
    return(
        <div className="flex flex-col justify-center items-center h-full bg-pink-100">
            <Button onClick={handleStart}>시작하기</Button>
        </div>
    )
}