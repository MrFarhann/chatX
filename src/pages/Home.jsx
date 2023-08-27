import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import SidebarMobile from "../components/SidebarMobile";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';

function Home(){
    const [isOpen, setIsOpen] = useState(false);
    function handleOpenMenu(){
        setIsOpen(!isOpen);
    }

    function handleCloseMenu(){
        setIsOpen(!isOpen);
    }
    return(
        <div className="home">
            <div className="container">
                <div className="menu" onClick={handleOpenMenu}>
                    <AiOutlineMenu/>
                </div>
                <SidebarMobile style={isOpen ? {display: "block"} : {display: "none"}}/>
                <div className="close" onClick={handleCloseMenu} style={isOpen ? {display: "block"} : {display: "none"}}>
                    <AiOutlineClose/>
                </div>
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}

export default Home;