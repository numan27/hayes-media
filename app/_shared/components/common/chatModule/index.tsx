"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../customButton";
import ChatUpload from "../chatUpload";
import Image from "next/image";
import { Icons, Images } from "assets";
import CustomIconButton from "../customIconButton";

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
  timestamp: string;
  type: "text";
}

const ChatModule = ({
  tabValue,
  onNewMessage,
  onViewProfile,
}: {
  tabValue: string;
  onNewMessage?: (tab: string) => void;
  onViewProfile?: () => void;
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "other",
      text: "Hello! How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "text",
    },
    {
      id: 2,
      sender: "me",
      text: "Hello! How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "text",
    },
  ]);
  const [files, setFiles] = useState<
    { file: File; preview: string; isVideo: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [newMessages, setNewMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "me",
        text: inputValue,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text",
      };

      setMessages([...messages, newMessage]);
      setInputValue("");
      if (onNewMessage) onNewMessage(tabValue);
    }
  };

  return (
    <div className={classNames(styles.chatModule)}>
      <div
        className={classNames(
          styles.chatProfile,
          "flex justify-between items-center"
        )}
      >
        <div className="flex items-center gap-1.5">
          {/* <Image src={Images.CoachProfile} alt="profile-img" /> */}
          <h6>Jane Cooper</h6>
        </div>
        <CustomButton
          containerStyle="gray-btn"
          title="View Profile"
          onClick={onViewProfile}
        />
      </div>
      <div className={classNames(styles.chatBody)}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={classNames(
              styles.chatMessage,
              message.sender === "me" ? styles.myMessage : styles.otherMessage
            )}
          >
            <div className="flex justify-between h-full">
              <p>{message.text}</p>
              <div className="flex items-end gap-1">
                <span>{message.timestamp}</span>
                <Icons.CheckDouble />
              </div>
            </div>
          </div>
        ))}
        {newMessages.length > 0 && (
          <div className={classNames(styles.newMessageHeading)}>
            <span>New Messages</span>
          </div>
        )}
        {newMessages.map((message) => (
          <div
            key={message.id}
            className={classNames(
              styles.chatMessage,
              message.sender === "me" ? styles.myMessage : styles.otherMessage
            )}
          >
            <div className="flex justify-between h-full">
              <p>{message.text}</p>
              <div className="flex items-end gap-1">
                <span>{message.timestamp}</span>
                <Icons.CheckDouble />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={classNames(styles.sendMessageWrapper)}>
        <div
          className={classNames(
            styles.sendMessageContainer,
            "grid grid-cols-12 xs:px-2.5 px-2"
          )}
        >
          <div className="col-span-11 flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <div className={classNames(styles.iconContainer)}>
                <ChatUpload
                  isDocumentUpload
                  files={files}
                  setFiles={setFiles}
                />
              </div>
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Write a message..."
              className={classNames(styles.messageInput, "w-full")}
            />
          </div>
          <div className="col-span-1 flex justify-end items-center">
            <CustomIconButton onClick={handleSendMessage}>
              <Icons.SendIcon />
            </CustomIconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
