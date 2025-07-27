import type { PropsWithChildren } from "react";

// type Props ={
//     children: React.PropsWithChildren;
// }

// 레이아웃 전용 컴포넌트
export default function AppLayout({ children }: PropsWithChildren){
    return(
        <div className="w-screen h-screen bg-gray-300">
            <div className="flex flex-col w-[600px] h-full mx-auto bg-pink-200">{children}</div>
        </div>
    )
}