import React, { useState } from "react";
import { numbers } from "./numbers-calculator";

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-8 bg-black w-64 p-3">
        <h1 className="text-2xl text-white underline">Calculadora</h1>
        <div className="mt-10" />
        <input
          type="text"
          className="border p-2 mb-4 text-xl"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          {numbers.map((value) => (
            <button
              key={value}
              onClick={() =>
                value === "=" ? handleCalculate() : handleButtonClick(value)
              }
              className="p-4 bg-gray-300 rounded"
            >
              {value}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="p-4 bg-yellow-400 rounded col-span-2"
          >
            C
          </button>
          <button
            onClick={handleBackspace}
            className="p-4 bg-red-300 rounded col-span-2"
          >
            {"<-"}
          </button>
        </div>
      </div>
    </div>
  );
};
