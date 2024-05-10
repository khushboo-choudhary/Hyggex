import React, { useState, useRef } from "react";

export default function Faq() {
  const faq = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Absolutely, Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const contentHeight = useRef([]);

 
 const handleItemClick = (index) => {
   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
 };


  return (
    <div className="px-5 overflow-y-auto">
      <h1 className="font-inter text-3xl md:text-4xl 2xl:text-5xl font-bold leading-none tracking-tight text-left mb-[30px] mt-[55px] md:mt-[100px] text-transparent bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0]">
        FAQ
      </h1>
      <div className="flex flex-col">
        {faq.map((item, index) => (
          <div
            key={index}
            className="lg:w-[848px] w-full h-auto p-4 gap-0 rounded-lg border-2 border-blue-400 mb-[30px] cursor-pointer text-sm md:text-md 2xl:text-2xl"
          >
            <button
              className={`${
                activeIndex === index ? "active" : ""
              } flex items-center justify-between w-full`}
              onClick={() => handleItemClick(index)}
            >
              <p className="font-bold">{item.question}</p>
              <svg
                className={`w-7 h-7 transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.855001 0.495992C0.910743 0.440056 0.976979 0.395674 1.04991 0.365391C1.12284 0.335108 1.20103 0.319519 1.28 0.319519C1.35897 0.319519 1.43716 0.335108 1.51009 0.365391C1.58302 0.395674 1.64926 0.440056 1.705 0.495992L8.48 7.27199L15.255 0.495992C15.3677 0.383275 15.5206 0.319952 15.68 0.319952C15.8394 0.319952 15.9923 0.383275 16.105 0.495992C16.2177 0.608709 16.281 0.761586 16.281 0.920992C16.281 1.0804 16.2177 1.23328 16.105 1.34599L8.905 8.54599C8.84926 8.60193 8.78302 8.64631 8.71009 8.67659C8.63716 8.70688 8.55897 8.72247 8.48 8.72247C8.40103 8.72247 8.32284 8.70688 8.24991 8.67659C8.17698 8.64631 8.11074 8.60193 8.055 8.54599L0.855001 1.34599C0.799065 1.29025 0.754683 1.22401 0.7244 1.15108C0.694116 1.07815 0.678528 0.999961 0.678528 0.920992C0.678528 0.842024 0.694116 0.763832 0.7244 0.690901C0.754683 0.61797 0.799065 0.551734 0.855001 0.495992Z"
                  fill="#263238"
                />
              </svg>
            </button>
            <div
              ref={(el) => (contentHeight.current[index] = el)}
              className="overflow-hidden transition-height"
              style={
                activeIndex === index
                  ? { height: contentHeight.current[index]?.scrollHeight }
                  : { height: "0px" }
              }
            >
              <p className="answer-content">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




