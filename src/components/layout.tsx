import { Outlet } from "react-router-dom";

function Layout() {
    //Outlet만 바뀌고 헤더와 푸터는 변경X -> Outlet이 바뀌는 기준은 route : App.tsx에서 설정







    return (<>
        <header>
            <p>121321321321</p>
        </header>
        
        <Outlet />

        <footer>
            <p>비엠텍시스템(주)
                | Addr.[우:05570]서울시 송파구 백제고분로 107(잠실동, 장학빌딩) 4층,5층
                | Tel. 02-416-8991
                | Fax. 02-416-8994</p>
        </footer>
    </>);
}

export default Layout;