// src/MessageInput.tsx
import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import classes from "./MessageInput.module.scss";

// Styled components for the Message Input
// const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 8px;
//   border-top: 1px solid #ccc;
// `;

// const InputField = styled.input`
//   flex: 1;
//   margin-right: 8px;
//   padding: 8px;
//   font-size: 14px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const SendButton = styled.button`
//   padding: 8px 16px;
//   font-size: 14px;
//   background-color: #6d69d2;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

interface MessageInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendButtonClick: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  value,
  onChange,
  onSendButtonClick,
  onKeyPress,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle the focus on the input field when the user clicks the send button
  const handleSendButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onSendButtonClick();
  };

  return (
    <div className={classes.inputContainer}>
      <div className={classes.inputFeildContainer}>
        <p className={classes.inputParah}>Ask your question</p>
        <input
          className={classes.inputField}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          ref={inputRef}
        />
      </div>
      <button onClick={handleSendButtonClick} className={classes.sendButton}>
        Ask
      </button>
    </div>
  );
};

export default MessageInput;
