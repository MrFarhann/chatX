import { MdAttachFile } from 'react-icons/md';
import { TbPhoto } from 'react-icons/tb';
function Input(){
    return(
        <div className="input">
            <input type="text" placeholder="Write a message..."/>
            <div className="send">
                <MdAttachFile/>
                <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                    <TbPhoto/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input;