import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './chatScreen.css';
import userPic from './questionsImage.png';

function ChatScreen() {
    const location = useLocation();
    const questionData = location.state?.question || null;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, sender: 'User' }]);
            setMessage('');
        }
    };

    return (
        <div className="chat-screen">
            <div>
                <a href='./questions' >&lt;</a>  <span className='questionHead'>QUESTIONS</span>
            </div>
            {questionData && (
                <>
                    <div className="questionDiv">
                        <h4 className="question-title">{questionData.question}</h4>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message-wrapper">
                                {msg.sender === 'User' && (
                                    <img src= {userPic} alt="User" className="user-image" />
                                )}
                                <div className={`message ${msg.sender.toLowerCase()}`}>
                                    <span>{msg.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="input-section">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message"
                        />
                        <button onClick={handleSendMessage} className="send-button">
                            &gt;
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ChatScreen;
