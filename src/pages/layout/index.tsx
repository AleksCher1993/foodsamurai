import {Header} from "../../widgets/header"
import { Outlet } from "react-router-dom";
export const Layout:React.FC=()=>{
    return <div className="wrapper">
        <Header />
        <Outlet/>
        </div>
}
