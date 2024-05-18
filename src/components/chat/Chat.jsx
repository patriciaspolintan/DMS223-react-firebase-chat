import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { createLogger } from "vite"

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e => {
        console.log(e);
    };

    console.log(text);
    return (
        < div className='chat' >
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." onChange={(e) => setText(e.target.value)} />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen(prev => !prev)} />
                    <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                </div>
                <button className="sendButton">Send</button>
            </div >
        </div>
    )
}

export default Chat