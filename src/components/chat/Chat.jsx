import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };

    return (
        < div className="chat" >
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
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
                            Augue ut lectus arcu bibendum at varius vel pharetra vel.
                            Scelerisque purus semper eget duis at tellus at urna.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
                            Augue ut lectus arcu bibendum at varius vel pharetra vel.
                            Scelerisque purus semper eget duis at tellus at urna.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
                            Augue ut lectus arcu bibendum at varius vel pharetra vel.
                            Scelerisque purus semper eget duis at tellus at urna.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
                            Augue ut lectus arcu bibendum at varius vel pharetra vel.
                            Scelerisque purus semper eget duis at tellus at urna.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
                            Augue ut lectus arcu bibendum at varius vel pharetra vel.
                            Scelerisque purus semper eget duis at tellus at urna.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.unsplash.com/photo-1583238548433-af0c0bb79be4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
                            Augue ut lectus arcu bibendum at varius vel pharetra vel.
                            Scelerisque purus semper eget duis at tellus at urna.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div >
        </div>
    )
}

export default Chat