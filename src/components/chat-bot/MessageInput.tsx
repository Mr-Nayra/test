// src/MessageInput.tsx
import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import classes from "./MessageInput.module.scss";

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
