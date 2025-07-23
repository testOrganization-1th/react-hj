import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

// react-router-dom Link를 사용하여 새로고침 없이 페이지 이동

export default function GlobalHeader() {
    return(
        <div className="flex items-center h-[60px] border-b bg-gray-100">
            <Link to={"/"}>
                <div className="p-2">
                    <HomeIcon className="w-9 h-9"/>
                </div>
            </Link>
        </div>
    )
}