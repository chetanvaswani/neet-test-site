import { useEffect, useState } from "react";

export default function Question({ queNum, question, options, answer, submit }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currColor, setCurrColor] = useState("bg-blue-600");

  useEffect(() => {
    if (submit){
        console.log(answer, selectedOption)
       if (answer === selectedOption){
            setCurrColor("bg-green-600")
       } else {
            setCurrColor("bg-red-600")
       }
    } else {
        setCurrColor("bg-blue-600")
    }
  }, [submit, selectedOption])

  const handleOptionClick = (option) => {
      setSelectedOption((prev) => (prev === option ? null : option));
  };

  return (
    <div className="w-[400px] max-w-[95%] bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-gray-700 ">
      <h2 className="text-lg font-semibold text-[#ededed] mb-4">
        Que-{queNum}. {question.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
        ))}
      </h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index} onClick={() => {
                handleOptionClick(option)
             }}
            className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition ${
              selectedOption === option ? currColor : "bg-[#252525] hover:bg-[#333]"
            }`}
          >
            <span className="text-[#d1d1d1]">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

