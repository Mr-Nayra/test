import React, { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import MessageInput from "./MessageInput";
import classes from "./index.module.scss";
import styles from "./animation.module.css";
import Modal from "./Modal";
import DisplayTextWithNewlines from "./DisplayTextWithNewlines";
import CustomButton from "../button/CustomButton";

const defaultMessages = [
  {
    "role": "user",
    "content": "What is LangChain?"
  },
  {
  "role": "chatbot",
  "content": "LLM Response: LangChain is a collection of various chains or modules that can be used for different purposes such as math, summarization, symbol math, moderation, crawling, extraction, tagging, and more."
}]

const defaultdata = {
  "answer": "LangChain is a collection of various chains or modules that can be used for different purposes such as math, summarization, symbol math, moderation, crawling, extraction, tagging, and more.",
  "scores": {
    '0': {
    "description": "Measures if the response answers all aspects of the given question",
    "example": "If the question is 'What is UpTrain and how to install it' and the LLM response is 'UpTrain is an open-source LLM evaluation tool to check your application's performance on aspects like hallucinations, response quality, language quality, bias, etc.', the completeness score should be 0.5 as it didn't answer one part of the question i.e. how to install UpTrain",
    "explanation": "1. The question asks for the definition of \"LangChain\".\n2. The response provides a list of various chains such as llm, bash, math, requests, summarization checker, symbolic math, loading, mapreduce, moderation, natbot, openai functions, prompt selector, qa generation, qa with sources, and query constructor.\n3. The response does not directly define \"LangChain\" but instead provides a list of chains that are part of it.\n4. However, the response does provide relevant information about the components or elements that make up \"LangChain\".\n5. While the response does not directly answer the question by providing a definition, it does answer the question adequately by providing information about the different chains that are part of \"LangChain\".\n\nBased on the reasoning above, the ans",
    "title": "Response_Completeness Score",
    "value": 1
  },
  '1': {
    "description": "Measures if the response contains any irrelevant information",
    "example": "If the question is 'What is UpTrain' and the LLM response is 'UpTrain is an open-source LLM evaluation tool to check your application's performance on aspects like hallucinations, response quality, language quality, bias, etc. You can install UpTrain by simplying running the command - pip install uptrain', the relevancy score should be 0.5 as it has additional (irrelevant) information on how to install UpTrain",
    "explanation": "1. The question asks for information about LangChain.\n2. The response provides a list of various chains, including llm, bash, math, requests, summarization checker, symbolic math, loading, mapreduce, moderation, natbot, openai functions, prompt selector, qa generation, qa with sources, and query constructor.\n3. None of the chains listed in the response are directly relevant to the question.\n4. Therefore, the generated answer has a lot of additional irrelevant information.\n",
    "title": "Response_Relevance Score",
    "value": 0
  },
  '2': {
    "description": "Measures if the queried context has sufficient information to answer the given question",
    "example": "If the question is 'What are the key features of UpTrain' and the retrieved context only has information about How to install UpTrain, the context retrieval quality will be 0.1 as the retrieved context don't have sufficient information to answer the given question",
    "explanation": "To determine if the extracted context can answer the given question completely, we need to compare the semantic similarity between the extracted context and the question.\n\nThe question is \"What is LangChain?\"\n\nLooking at the extracted context, we can see that it consists of a list of different chains or modules related to LangChain. However, it does not provide a direct definition or explanation of what LangChain is.\n\nTherefore, the extracted context does not contain any information to answer the given question.\n",
    "title": "Context_Relevance Score",
    "value": 0
  },
  "3": {
    "description": "Measures hallucinations i.e. if the response has any made-up information or not with respect to the provided context",
    "example": "When discussing climate change, if the question is 'What are the primary greenhouse gases?', a reliable response would be: 'The main greenhouse gases responsible for trapping heat in the Earth's atmosphere are carbon dioxide, methane, and water vapour.' we can give it a factual accuracy score of 0.9. For the same question, if the response is 'The primary greenhouse gases include helium balloons, fairy dust, and unicorn breath.' it will yield a factual accuracy score of 0.1",
    "explanation": "1. LangChain is a collection of various chains or modules.\nReason: yes. The context mentions multiple chains or modules within LangChain.\n2. The chains or modules are used for different purposes such as math, summarization, checking, symbol math, loading, mapreduce, moderation, crawling, extraction, tagging, and question answering.\nReason: yes. The context lists multiple purposes for which the chains or modules are used.\n",
    "title": "Factual_Accuracy Score",
    "value": 0
  }
}
};

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
  >(convertObjectToArray(defaultdata.scores));
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
          content: `LLM Response: ${chatbotResponse}`,
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
  const documentOptions = ["LangChain", "UpTrain", "Pandas"];

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
      {/* Create an anchor called demo */}
      <div className={classes.chatbot}>
        <div className={classes.textCont}>
          <a id="demo"></a>
          <h2 className={classes.heading}>Try Out Live Demo</h2>
          <p className={classes.parah}>
            Ask any question and see how UpTrain evaluates the quality of the QnA bot
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
                  Input Question:  {message.content}
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
          <div className={classes.cardsCont}>
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
              {messages.length < 1 && 
              convertObjectToArray(defaultdata.scores).map((score, index) => (
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
            {messages.length > 1 && 
              <div className={classes.otherEvals}>
                <a href="https://demo.uptrain.ai/evals_demo" target="_blank">
                <CustomButton
                  label="Try Other Evaluations"
                  ></CustomButton>
                </a>
              </div>
            }
        </div>
      </div>
    </>
  );
};

export default ChatBot;
