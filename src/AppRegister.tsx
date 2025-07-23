import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

// 전역 Provider를 모아 재사용성과 가독성을 높이기 위한 구조
// <BrowserRouter> - 앱 전체를 감싸서 라우터 기능, 가장 바깥에 위치
export default function AppRegister({ children } : PropsWithChildren){
    return(
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )

}