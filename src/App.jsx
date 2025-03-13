import { useEffect, useState } from "react";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState("chemical-bonding"); // Default file
  // results object will map question numbers to "correct", "incorrect", or "not answered"
  const [results, setResults] = useState({});
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const extractedFileName = urlParams.get("test") || "chemical-bonding";
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

  // This callback will be called by each Question component when its answer changes
  const handleAnswerChange = (queNum, isCorrect) => {
    console.log(queNum, isCorrect)
    setResults((prev) => ({
      ...prev,
      [queNum]: isCorrect
    }));
  };

  // Build the results message and open WhatsApp with the results on submit
  const handleSubmit = () => {
    // If already submitted, reset to hide answers
    if (submit) {
      setSubmit(false);
      return;
    }
    setSubmit(true);
    if (!questions) return;
  
    // Calculate summary statistics from results
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalNotAnswered = 0;
  
    questions.forEach(({ queNum }) => {
      const res = results[queNum] || "Not Answered!";
      // Use case-insensitive comparison
      if (res.toLowerCase() === "correct") {
        totalCorrect++;
      } else if (res.toLowerCase() === "incorrect") {
        totalIncorrect++;
      } else {
        totalNotAnswered++;
      }
    });
  
    // Build the summary message
    const statsMessage = `Total Correct: ${totalCorrect}\nTotal Incorrect: ${totalIncorrect}\nNot Answered: ${totalNotAnswered}\n\n`;
    // Build detailed results per question
    const detailsMessage = questions
      .map(({ queNum }) => {
        const res = results[queNum] || "Not Answered!";
        return `${queNum}. ${res}`;
      })
      .join("\n");
  
    const message = statsMessage + detailsMessage;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };
  

  return (
    <div className="h-full w-full bg-[#0a0a0a] overflow-hidden text-[#ededed] flex flex-col items-center">
      <div>
        <div className="p-4 flex justify-center items-center border border-gray-500 border-dotted bg-black w-full text-center mt-0 text-2xl font-bold text-white">
          <h1>Questions from {fileName}</h1>
        </div>
        <div className="w-full overflow-y-scroll flex flex-wrap justify-center gap-6 p-10 pb-[50px]">
          {error ? (
            <p className="text-center text-red-500 text-xl font-bold">Invalid URL</p>
          ) : questions ? (
            questions.map(({ queNum, question, options, answer }) => (
              <Question
                key={queNum}
                queNum={queNum}
                question={question}
                answer={answer}
                submit={submit}
                options={options}
                onAnswerChange={handleAnswerChange}
              />
            ))
          ) : (
            <p className="text-center text-gray-400">Loading questions...</p>
          )}
        </div>
      </div>
      <div className="fixed bg-black bottom-0 mb-0 m-[20px] h-[10%] w-full flex justify-center items-center">
        <button
          className="bg-blue-600 w-[90%] max-w-[400px] p-3 font-bold rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          {submit ? "Hide Answers" : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default App;
