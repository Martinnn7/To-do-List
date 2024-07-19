import { useState, KeyboardEvent } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClickClear = () => {
    setTextList([]);
  };

  const clearItem = (index: number) => {
    const updatedList = textList.filter((_, i) => i !== index);
    setTextList(updatedList);
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      setTextList((prevList) => [...prevList, text]);
    }
    setText("");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && text.trim() !== "") {
      setTextList((prevList) => [...prevList, text]);
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <header className="sticky font-mono text-[40px] p-6 text-center justify-center flex flex-col">
        <p className="shadow-lg bg-orange-300 font-semibold">
          To <span className="text-teal-700">Do</span> List
        </p>
      </header>
      <ul className="cross p-6 text-[20px] flex flex-col font-mono">
        {textList.map((textItem, index) => (
          <li
            onClick={() => clearItem(index)}
            className="hover:line-through hover:text-red-500 cursor-pointer"
            key={index}
          >
            {textItem}
          </li>
        ))}
      </ul>
      <div className="p-4 flex justify-center">
        <textarea
          onKeyPress={handleKeyPress}
          className="w-full  max-w-[1400px] rounded-md border-black border-[2px] p-2"
          value={text}
          onChange={handleChange}
          placeholder="Enter a task..."
        ></textarea>
      </div>
      <div className="p-4 justify-end flex">
        <button
          className="mr-2 justify-center rounded-md hover:bg-gray-100 w-20 border border-gray-500"
          onClick={handleClick}
        >
          <p className="font-mono">Submit</p>
        </button>

        <button
          className="ml-2 justify-center rounded-md hover:bg-gray-100 w-20 border border-gray-500"
          onClick={handleClickClear}
        >
          <p className="font-mono">Clear</p>
        </button>
      </div>
    </div>
  );
};

export default App;
