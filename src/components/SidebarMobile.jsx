import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

function SidebarMobile(props){
    return(
        <div className="sidebar-mobile" style={props.style}>
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    )
}

export default SidebarMobile;