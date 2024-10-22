import  { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click for numbers and operations
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Delete the last character from input
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  // Calculate the result
  const handleEqual = () => {
    try {
      const evaluatedResult = eval(input); // Evaluating the string expression
      setResult(evaluatedResult);
    } catch (error) {
      console.error('Error:', error);
      setResult('Error');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-80">
        <div className="text-right bg-green-200 mb-4">
          <div className="text-gray-700 text-sm">{input || '0'}</div>
          <div className="text-2xl text-black font-semibold">{result || '0'}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {/* Buttons */}
          <button onClick={handleClear} className="col-span-2 p-3 bg-red-500 text-white rounded-lg">
            AC
          </button>
          <button onClick={handleDelete} className="p-3 bg-yellow-500 text-white rounded-lg">
            DEL
          </button>
          <button onClick={() => handleClick('/')} className="p-3 bg-blue-500 text-white rounded-lg">
            ÷
          </button>

          <button onClick={() => handleClick('7')} className="p-3 bg-gray-800 rounded-lg">
            7
          </button>
          <button onClick={() => handleClick('8')} className="p-3 bg-gray-800 rounded-lg">
            8
          </button>
          <button onClick={() => handleClick('9')} className="p-3 bg-gray-800 rounded-lg">
            9
          </button>
          <button onClick={() => handleClick('*')} className="p-3 bg-blue-500 text-white rounded-lg">
            ×
          </button>

          <button onClick={() => handleClick('4')} className="p-3 bg-gray-800 rounded-lg">
            4
          </button>
          <button onClick={() => handleClick('5')} className="p-3 bg-gray-800 rounded-lg">
            5
          </button>
          <button onClick={() => handleClick('6')} className="p-3 bg-gray-800 rounded-lg">
            6
          </button>
          <button onClick={() => handleClick('-')} className="p-3 bg-blue-500 text-white rounded-lg">
            -
          </button>

          <button onClick={() => handleClick('1')} className="p-3 bg-gray-800 rounded-lg">
            1
          </button>
          <button onClick={() => handleClick('2')} className="p-3 bg-gray-800 rounded-lg">
            2
          </button>
          <button onClick={() => handleClick('3')} className="p-3 bg-gray-800 rounded-lg">
            3
          </button>
          <button onClick={() => handleClick('+')} className="p-3 bg-blue-500 text-white rounded-lg">
            +
          </button>

          <button onClick={() => handleClick('0')} className="col-span-2 p-3 bg-gray-800 rounded-lg">
            0
          </button>
          <button onClick={() => handleClick('.')} className="p-3 bg-gray-800 rounded-lg">
            .
          </button>
          <button onClick={handleEqual} className="p-3 bg-green-500 text-white rounded-lg">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
