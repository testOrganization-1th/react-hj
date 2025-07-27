import TodoLayOut from "@/contexts/todo/TodoLayout";
import NotFound from "@/NotFound";
import HomePage from "@/pages/HomePage";
import TodoDetailPage from "@/pages/TodoDetailPage";
import TodoPage from "@/pages/TodoPage";
import { Route, Routes } from "react-router-dom";

// react-router-dom인 Routes, Route 사용하여 path별로 이동할 element 페이지 설정
export default function Router(){
    return(
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoLayOut />}>
            <Route index element={<TodoPage />} />
            <Route path=":id" element={<TodoDetailPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        </Routes>
    )
}