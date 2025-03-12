import { useEffect, useState } from "react";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState("chemical-bonding"); // Default file
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const extractedFileName = urlParams.get("test") || "chemical-bonding"; // Default to "chemical-bonding"
    
    setFileName(extractedFileName);

    import(`./questions/${extractedFileName}.js`)
      .then((module) => {
        setQuestions(module.default);
        setError(false);
      })
      .catch((err) => {
        console.error("Error loading questions:", err);
        setError(true);
      });
  }, []);

  return (
    <div className="h-full w-full bg-[#0a0a0a] overflow-hidden text-[#ededed] flex flex-col items-center">
      <div className="">
          <div className=" p-4 flex justify-center items-center border border-gray-500 border-dotted bg-black w-full text-center mt-0 text-2xl font-bold text-white">
            <h1>Questions from {fileName}</h1>
          </div>

          <div className="w-full overflow-y-scroll flex flex-wrap justify-center gap-6 p-10 pb-[50px]">
            {error ? (
              <p className="text-center text-red-500 text-xl font-bold">Invalid URL</p>
            ) : questions ? (
              questions.map(({ queNum, question, options, answer }) => (
                <Question key={queNum} queNum={queNum} question={question} answer={answer} submit={submit} options={options} />
              ))
            ) : (
              <p className="text-center text-gray-400">Loading questions...</p>
            )}
          </div>
      </div>
      <div className="fixed bg-black bottom-0 mb-0 m-[20px] h-[10%] w-full flex justify-center items-center">
        <button
          className="bg-blue-600 w-[90%] max-w-[400px] p-3 font-bold rounded-lg cursor-pointer"
          onClick={() => setSubmit(!submit)}
        >
          { submit ? "Hide Answers" : "Show Answers"}
        </button>
      </div>
    </div>
  );
}

export default App;
