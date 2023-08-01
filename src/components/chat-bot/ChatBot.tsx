import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import MessageInput from './MessageInput';
import classes from './index.module.scss';

function convertObjectToArray(inputObj: { [key: string]: number }): { name: string; value: number }[] {
  const resultArray: { name: string; value: number }[] = [];

  Object.keys(inputObj).forEach((key, index) => {
    const entry = {
      name: key,
      value: inputObj[key]
    };

    resultArray[index] = entry;
  });

  return resultArray;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedDocument, setSelectedDocument] = useState<string>('');
  const [scores, setScores] = useState<{ name: String; value: number; }[]>([]);

  // Handle user input and call the API for the chatbot response
  const handleUserInput = async () => {
    if (inputValue.trim() !== '') {
      // Include selected document in the request body
      const requestBody = {
        question: inputValue,
        document: selectedDocument,
      };
      console.log(messages)
      const newMessage = {
        role: 'user',
        content: inputValue,
      };
      setMessages(() => [newMessage]);

      try {
        const response = await fetch('http://localhost:9000/question', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error('Failed to get response from the chatbot API.');
        }

        const data = await response.json();

        const chatbotResponse = data.answer;
        const newChatbotMessage = {
          role: 'chatbot',
          content: `ChatBot: ${chatbotResponse}`,
        };
        setMessages((prevMessages) => [...prevMessages, newChatbotMessage]);

        const newScores = convertObjectToArray(data.scores);
        setScores(newScores);
      } catch (error) {
        console.error('Error fetching chatbot response:', error);
      }

      setInputValue('');
    }
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever new messages are added
    const chatWindow = document.querySelector('.chat-window');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  // List of documents in the dropdown menu
  const documentOptions = ["LangChain", "LlamaIndex", "UpTrain"];

  return (
    <div className={classes.chatbot}>
      <div className={classes.dropdownContainer}>
        <select
          value={selectedDocument}
          onChange={(e) => setSelectedDocument(e.target.value)}
        >
          <option value="">Choose Documentation</option>
          {documentOptions.map((document, index) => (
            <option key={index} value={document}>
              {document}
            </option>
          ))}
        </select>
      </div>
      <MessageInput
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSendButtonClick={handleUserInput}
        onKeyPress={handleKeyPress}
      />
      <div className={classes.chatWindow}>
        <ul>
          {messages.map((message, index) => (
            <li key={index} className={message.role}>
              {message.content}
            </li>
          ))}
          {messages.length > 1 && scores.map((score, index) => (
            <li key={index} className="chatbot">
              {score.name}: {score.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatBot;

