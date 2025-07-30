import React, { useState } from "react";

import CloseIcon from "./Frame 14.svg?url";
import AddIcon from "./Frame 23.svg";

const question = [
  {
    id: 1,
    question: "Q1. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
    selected: false,
  },
  {
    id: 2,
    question: "Q2. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a.",
    selected: false,
  },
  {
    id: 3,
    question: "Q3. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a. ncfcndjkcnksnooaecmkldnklco cndkjncac akj va.",
    selected: false,
  },
  {
    id: 4,
    question: "Q4. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel.",
    selected: false,
  },
  {
    id: 5,
    question: "Q5. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel.",
    selected: false,
  },
];

function App() {
  const [questions, setQuestions] = useState(question);
  const [darkMode, setDarkMode] = useState(true);

  const handleExpand = (id: number) => {
    setQuestions((pre: any) =>
      pre.map((item: any) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };
  return (
    <div
      className={`relative w-screen h-screen ${
        darkMode ? "bg-[#000000]" : "bg-[#FFFFFF]"
      }`}
    >
      <div
        className={`absolute right-4 top-4 text-sm font-dm font-bold cursor-pointer ${
          darkMode ? "text-[#FFFFFF]" : "text-[#000000]"
        }`}
        onClick={() => {
          setDarkMode((pre) => !pre);
        }}
      >
        switch mode
      </div>
      <div className="flex flex-col w-full h-full py-[50px] items-center space-y-[50px] overflow-auto">
        <div
          className={`text-[50px] font-bold leading-[auto] tracking-[-0.02em] font-dm ${
            darkMode ? "text-[#2FC1FF]" : "text-[#8800C8]"
          }`}
        >
          Frequently asked questions
        </div>
        <div className="flex flex-col w-full items-center">
          {questions.map((item) => (
            <QuestionBar
              key={item.id}
              questionItem={item}
              handleExpand={handleExpand}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const QuestionBar = (props: {
  questionItem: any;
  darkMode: boolean;
  handleExpand: (id: number) => void;
}) => {
  const { handleExpand, darkMode, questionItem } = props;
  const { id, question, answer, selected } = questionItem;
  return (
    <div className="flex flex-col w-[70%]">
      {id === 1 && <div className="w-full h-px bg-[#CDCDCD]"></div>}
      <div className="flex flex-col w-full py-[15px] space-y-[20px] px-[4px]">
        <div className="flex flex-row justify-between items-center w-full">
          <div
            className={`text-[30px] leading-[auto] font-bold ${
              darkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }`}
          >
            {question}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              handleExpand(id);
            }}
          >
            <img
              src={selected ? CloseIcon : AddIcon}
              alt=""
              width={20}
              height={20}
              className={`${darkMode ? "filter invert" : ""}`}
            />
          </div>
        </div>
        {selected && (
          <div
            className={`font-dm text-[22px] font-normal tracking-[-0.02em] w-[90%] ${
              darkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }`}
          >
            {answer}
          </div>
        )}
      </div>
      <div className="w-full h-px bg-[#CDCDCD]"></div>
    </div>
  );
};
export default App;
