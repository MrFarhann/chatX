import {BsCameraVideoFill} from "react-icons/bs";
import {IoMdPersonAdd} from "react-icons/io";
import {FiMoreHorizontal} from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
function Chat(){
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <BsCameraVideoFill/>
                    <IoMdPersonAdd/>
                    <FiMoreHorizontal/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}
export default Chat;