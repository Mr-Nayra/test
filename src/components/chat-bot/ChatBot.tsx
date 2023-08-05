import React, { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import MessageInput from "./MessageInput";
import classes from "./index.module.scss";
import styles from "./animation.module.css";
import Modal from "./Modal";
import DisplayTextWithNewlines from "./DisplayTextWithNewlines";

function convertObjectToArray(inputObj: {
  [key: string]: {
    title: string;
    description: string;
    example: string;
    value: number;
    explanation: string;
  };
}): {
  title: string;
  description: string;
  example: string;
  value: number;
  explanation: string;
}[] {
  const resultArray: {
    title: string;
    description: string;
    example: string;
    value: number;
    explanation: string;
  }[] = [];

  console.log(inputObj);

  Object.keys(inputObj).forEach((key, index) => {
    const entry = {
      title: inputObj[key].title,
      value: inputObj[key].value,
      description: inputObj[key].description,
      example: inputObj[key].example,
      explanation: inputObj[key].explanation,
    };

    resultArray[index] = entry;
  });

  return resultArray;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [selectedDocument, setSelectedDocument] = useState<string>("LangChain");
  const [inputValue, setInputValue] = useState<string>(`What is ${selectedDocument}?`);
  const [scores, setScores] = useState<
    {
      title: string;
      description: string;
      example: string;
      value: number;
      explanation: string;
    }[]
  >([]);
  const [modal, setModal] = useState(0);

  const handleUserInput = async () => {
    if (inputValue.trim() !== "") {
      const requestBody = {
        question: inputValue,
        document: selectedDocument,
      };
      const newMessage = {
        role: "user",
        content: inputValue,
      };
      setMessages(() => [newMessage]);
      console.log(requestBody)

      try {
        const response = await fetch(
          "https://demo.uptrain.ai/chatbot_api/question",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to get response from the chatbot API.");
        }

        const data = await response.json();

        const chatbotResponse = data.answer;
        const newChatbotMessage = {
          role: "chatbot",
          content: `ChatBot: ${chatbotResponse}`,
        };
        setMessages((prevMessages) => [...prevMessages, newChatbotMessage]);

        const newScores = convertObjectToArray(data.scores);
        setScores(newScores);
      } catch (error) {
        console.error("Error fetching chatbot response:", error);
      }

      setInputValue("");
    }
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleUserInput();
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever new messages are added
    const chatWindow = document.querySelector(".chat-window");
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  // List of documents in the dropdown menu
  const documentOptions = ["LangChain", "LlamaIndex", "UpTrain", "Pandas"];

  return (
    <>
      {modal > 0 && (
        <Modal
          close={() => {
            setModal(0);
          }}
          title={scores[modal - 1].title}
          description={scores[modal - 1].description}
          score={scores[modal - 1].value}
          example={scores[modal - 1].example}
          explanation={scores[modal - 1].explanation}
        />
      )}
      <div className={classes.chatbot}>
        <div className={classes.textCont}>
          <h2 className={classes.heading}>Try it out Yourself</h2>
          <p className={classes.parah}>
            LLM Evaluations for a developer docs QnA bot
          </p>
        </div>
        <div className={classes.inputCont}>
          <div className={classes.dropdownContainer}>
            <p className={classes.inputParah}>Select package</p>
            <div className={classes.cont}>
              <select
                value={selectedDocument}
                onChange={(e) => {setSelectedDocument(e.target.value); setInputValue(`What is ${e.target.value}?`)}}
              >
                {documentOptions.map((document, index) => (
                  <option key={index} value={document}>
                    {document}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <MessageInput
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onSendButtonClick={handleUserInput}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className={classes.chatWindow}>
          {messages.map((message, index) => (
            <>
              {index == 0 && (
                <p key={index} className={classes.question}>
                  Q. {message.content}
                </p>
              )}
              {index == 1 && (
                <p key={index} className={classes.question}>
                  <DisplayTextWithNewlines textWithNewlines={message.content} />
                </p>
              )}
            </>
          ))}
          {messages.length == 1 && (
            <div className={classes.animationCont} data-title="dot-falling">
              <div>
                <div className={styles.dot}></div>
              </div>
            </div>
          )}
          <div className={classes.qualityCont}>
            {messages.length > 1 &&
              scores.map((score, index) => (
                <div key={index} className={classes.card}>
                  <div>
                    <h3>
                      {score.title}: <span>{score.value}</span>
                    </h3>
                    <p>{score.description}</p>
                  </div>
                  <button
                    onClick={() => setModal(index + 1)}
                    className={classes.learnMore}
                  >
                    Learn more
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
