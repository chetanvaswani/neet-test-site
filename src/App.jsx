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
    <div className="h-screen w-screen bg-[#0a0a0a] text-[#ededed] flex flex-col items-center">
      <h1 className="text-2xl font-bold text-white mt-6">Questions from {fileName}</h1>
      <div className="h-[80%] w-full overflow-y-scroll flex flex-wrap justify-center gap-6 p-10">
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
      <div className="m-[20px] w-full flex justify-center items-center">
        <button
          className="bg-blue-600 w-[90%] max-w-[400px] p-3 font-bold rounded-lg cursor-pointer"
          onClick={() => setSubmit(true)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
