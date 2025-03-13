import { useEffect, useState } from "react";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState("chemical-bonding"); // Default file
  // results object maps question numbers to "Correct", "Incorrect", or "Not Answered!"
  const [results, setResults] = useState({});
  const [submit, setSubmit] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);

  // Load questions based on URL parameter
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

  // Start a timer once the quiz is started (and not submitted)
  useEffect(() => {
    let timer;
    if (started && !submit) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [started, submit]);

  // Callback from each Question component to update its result.
  const handleAnswerChange = (queNum, resultText) => {
    console.log(queNum, resultText);
    setResults((prev) => ({
      ...prev,
      [queNum]: resultText,
    }));
  };

  // When user clicks Submit:
  //  - Set submit to true (which makes each Question show its color feedback)
  //  - Calculate stats and total time, then send results via WhatsApp.
  const handleSubmit = () => {
    // Toggle submit state: if already submitted, reset it.
    if (submit) {
      setSubmit(false);
      return;
    }
    setSubmit(true);
    if (!questions) return;

    // Calculate summary statistics from results.
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalNotAnswered = 0;

    questions.forEach(({ queNum }) => {
      const res = results[queNum] || "Not Answered!";
      if (res.toLowerCase() === "correct") {
        totalCorrect++;
      } else if (res.toLowerCase() === "incorrect") {
        totalIncorrect++;
      } else {
        totalNotAnswered++;
      }
    });

    const formattedTime = `${ Math.floor(time/3600) < 10 ? "0" + Math.floor(time/3600) : Math.floor(time/3600) }:${ (Math.floor(time/60)) % 60 < 10 ? "0" + (Math.floor(time/60)) % 60 : (Math.floor(time/60)) % 60 }:${ (time % 60) < 10 ? "0" + (time % 60): (time % 60) }`
    // Build summary message including total time.
    const statsMessage = `Time Taken: ${formattedTime}\nTotal Correct: ${totalCorrect}\nTotal Incorrect: ${totalIncorrect}\nNot Answered: ${totalNotAnswered}\n\n`;
    // Build detailed results per question.
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

  // Before starting, show only the "Start Timer" screen.
  if (!started) {
    return (
      <div className="h-screen w-screen bg-[#0a0a0a] flex flex-col gap-[50px] items-center justify-top text-[#ededed]">
        <div className="text-2xl font-bold text-center p-10">
          The following test contains questions from {fileName}.
          <div className="text-gray-200 font-semibold text-base mt-5">
            As soon as you click on the start now button. You timer will begin and it will only stop once you submit your answers,
            Only upon submition you will be able to check your answers.
          </div>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="bg-green-600 px-6 py-3 rounded-lg text-2xl font-bold cursor-pointer"
        >
          Start Timer
        </button>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#0a0a0a] overflow-hidden text-[#ededed] flex flex-col items-center">
      <div>
        <div className=" fixed top-0 left-0 z-10 p-4 h-[90px] flex justify-center items-center border border-gray-500 border-dotted bg-black w-screen text-center mt-0 text-xl font-bold text-white">
          <h4>
            Questions from {fileName}
            <div>
              Time = { Math.floor(time/3600) < 10 ? "0" + Math.floor(time/3600) : Math.floor(time/3600) }:{ (Math.floor(time/60)) % 60 < 10 ? "0" + (Math.floor(time/60)) % 60 : (Math.floor(time/60)) % 60 }:{ (time % 60) < 10 ? "0" + (time % 60): (time % 60) }
            </div>
          </h4>
        </div>
        <div className="relative top-[90px] w-full overflow-y-scroll flex flex-wrap justify-center gap-6 p-10 pb-[200px]">
          {error ? (
            <p className="text-center text-red-500 text-xl font-bold">
              Invalid URL
            </p>
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
