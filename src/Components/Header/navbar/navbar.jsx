import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import './navbar.scss';
import Sidebar from "./sidebar/sidebar";

export default function Navbar(){
    const[sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <div className="navbar">
            <button className="btn-menu">
            <RiMenuFill onClick={showSidebar}/>
            {sidebar && <Sidebar active={setSidebar} /> }
            </button> 
        </div>
    )
}