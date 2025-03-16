import { useEffect, useState } from "react";

export default function Question({ queNum, question, options, answer, submit, onAnswerChange, img }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currColor, setCurrColor] = useState("bg-blue-600");
  const [text, setText] = useState("")


  useEffect(() => {
    if (submit) {
      if (selectedOption === null) {
        // No option selected remains unchanged (or you may choose a different style)
        setCurrColor("bg-blue-600");
        setText("(Unanswered que)");
      } else if (selectedOption === answer) {
        setCurrColor("bg-green-600");
        setText("(Correct)");
      } else {
        setCurrColor("bg-red-600");
        setText("(Incorrect)");
      }
    } else {
      setCurrColor("bg-blue-600");
    }
  }, [submit, selectedOption, answer, queNum, onAnswerChange]);


  useEffect(() => {
    if (selectedOption == null){
        onAnswerChange(queNum, "Not Answered!")
    } else if (selectedOption === answer){
        onAnswerChange(queNum, "Correct");
    } else {
        onAnswerChange(queNum, "Incorrect");
    }
  }, [selectedOption])

  const handleOptionClick = async (option) => {
    // Prevent changing the answer after submission
    if (submit) return;
    await setSelectedOption((prev) => (prev === option ? null : option));
  };

  return (
    <div className="w-[400px] max-w-[95%] bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-gray-700">
      <h2 className="text-lg font-semibold text-[#ededed] mb-4 whitespace-pre-line">
        { text !== "" ? text + "\n" : false} Que-{queNum}. {question}
      </h2>
      {img && <img src={img} alt={`Question ${queNum} illustration`} className="mb-4 w-full" />}
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition ${
              selectedOption === option ? currColor : "bg-[#252525] hover:bg-[#333]"
            } ${submit && option === answer ? "bg-green-600" : false} `}
          >
            <span className="text-[#d1d1d1]">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
