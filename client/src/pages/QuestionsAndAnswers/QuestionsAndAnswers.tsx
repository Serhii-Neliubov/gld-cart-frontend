import React, { useState } from "react";

interface IFaqData {
  question: string;
  answer: string;
}

const QuestionsAndAnswers = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<IFaqData | null>(
    null
  );

  const faqData: IFaqData[] = [
    {
      question: "Какой ваш главный продукт?",
      answer: "Наш главный продукт - ...",
    },
    {
      question: "Как связаться с поддержкой?",
      answer:
        "Вы можете связаться с нашей поддержкой по адресу support@example.com",
    },
  ];

  const handleQuestionClick = (index: number): void => {
    setSelectedQuestion(faqData[index]);
  };

  return (
    <div>
      <h2>Часто задаваемые вопросы</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index} onClick={() => handleQuestionClick(index)}>
            {item.question}
          </li>
        ))}
      </ul>

      {selectedQuestion && (
        <div>
          <h3>{selectedQuestion.question}</h3>
          <p>{selectedQuestion.answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionsAndAnswers;
