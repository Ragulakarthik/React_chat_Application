import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./chatScreen.css";
import userPic from "./questionsImage.png";

function ChatScreen() {
  const location = useLocation();
  const questionData = location.state?.question || null;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const userName = "You"; // Change this to dynamically fetch the username if needed

  // Add a default bot message when a question is loaded
  useEffect(() => {
    if (questionData) {
      setMessages([
        {
          text: "This is answer is provided by your friends.",
          sender: "Bot",
          senderName: "Bot",
        },
      ]);
    }
  }, [questionData]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { text: message, sender: "You", senderName: userName },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="container p-0">
      <div className="row">
        <div className="chat-screen col-12 p-0">
          <div className="questionHeadDiv">
            <a href="./questions">
              <img src="/images/BackButton.png" alt="backbutton" />
            </a>
            <h3 className="questionHead m-auto">QUESTIONS</h3>
          </div>
          {questionData && (
            <>
              <div className="questionDiv">
                <div className="question-title">{questionData.question}</div>
                <img src="/images/questionTitle.png" alt="questionTitleImg" />
              </div>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message-wrapper ${
                      msg.sender === "You" ? "user-message" : "bot-message"
                    }`}
                  >
                    {msg.sender === "You" ? (
                      <>
                        <div className="message user">
                          <p className="sender-name">{msg.senderName}</p>
                          <p className="message-text">{msg.text}</p>
                        </div>
                        <img
                          src={userPic}
                          alt="You"
                          className="user-image left"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={userPic}
                          alt="Bot"
                          className="bot-image right"
                        />
                        <div className="message bot">
                          <p className="sender-name">{msg.senderName}</p>
                          <p className="message-text">{msg.text}</p>
                        </div>
                      </>
                    )}
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
                  <svg
                    fill="white"
                    width="12px"
                    height="12px"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" />
                    </g>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
