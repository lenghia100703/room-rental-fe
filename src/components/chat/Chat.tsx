import { useState } from 'react'
import './chat.scss'

function Chat() {
    const [chat, setChat] = useState(true)
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img
                        src="/images.jfif"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Chào bạn</p>
                </div>
                <div className="message">
                    <img
                        src="/images.jfif"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Chào bạn</p>
                </div>
                <div className="message">
                    <img
                        src="/images.jfif"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Chào bạn</p>
                </div>
                <div className="message">
                    <img
                        src="/images.jfif"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Chào bạn</p>
                </div>
                <div className="message">
                    <img
                        src="/images.jfif"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Chào bạn</p>
                </div>
                <div className="message">
                    <img
                        src="/images.jfif"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Chào bạn</p>
                </div>
            </div>
            {chat && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img
                                src="/images.jfif"
                                alt=""
                            />
                            John Doe
                        </div>
                        <span className="close" onClick={() => setChat(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p>Chào bạn</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Chào bạn</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Giá</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>150k</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Đắt thế!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>145k</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Chào bạn</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Chào bạn</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Chào bạn</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Chào bạn</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chat
