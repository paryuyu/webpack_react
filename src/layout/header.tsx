import { Outlet } from "react-router-dom";



export default function Header() {
    //Outlet만 바뀌고 헤더와 푸터는 변경X -> Outlet이 바뀌는 기준은 route : App.tsx에서 설정







    return (<>
        <header>
            <p>121321321321</p>
        </header>
        
        <Outlet />

       
    </>);
    }