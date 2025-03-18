import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Home() {
  const [tests, setTests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Dynamically get all files from questions folder
    const modules = import.meta.glob("./questions/*.js");
    console.log(modules)

    // Extract filenames and remove extensions
    const testFiles = Object.keys(modules).map((filePath) => {
      const name = filePath.split("/");
      return name[name.length - 1].split(".")[0];
    });
    setTests(testFiles);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const filteredTests = tests.filter((test) =>
    test.toLowerCase().includes(searchQuery)
  );

  const handleClick = (test) => {
    window.location.href = `?test=${test}`;
  };

  return (
    <div className="h-screen overflow-hidden w-screen bg-[#0a0a0a] text-[#ededed] flex flex-col items-center gap-6">
      <div className="w-full flex justify-center items-center h-[100px] z-10 bg-[#0a0a0a] fixed top-0 p-0">
        <div className="relative w-[90%] max-w-[400px]">
          <input
            type="text"
            placeholder="Search for a test..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 rounded-md bg-gray-800 text-white pr-10"
          />
          {searchQuery && (
            <X
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-white"
              onClick={handleClearSearch}
            />
          )}
        </div>
      </div>
      <div className="relative top-[100px] w-full h-full overflow-y-scroll gap-5 flex flex-col justify-start items-center mt-5">
        {filteredTests.map((test) => (
          <div
            key={test}
            className="bg-[#1a1a1a] h-fit p-6 flex justify-center items-center rounded-lg w-[90%] max-w-[400px] text-center cursor-pointer hover:bg-blue-600 transition"
            onClick={() => handleClick(test)}
          >
            {test.replace(/-/g, " ").toUpperCase()}
          </div>
        ))}
        {
          filteredTests.map((test) => {
            console.log(test.replace(/-/g, " ").toUpperCase())
          })
        }
      </div>
    </div>
  );
}