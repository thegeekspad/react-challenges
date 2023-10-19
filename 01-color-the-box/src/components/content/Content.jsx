import { useState } from 'react';

const Content = () => {
  const [color, setColor] = useState('bg-transparent');
  const [inputColor, setInputColor] = useState('');

  const colorClassMap = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    teal: 'bg-teal-500',
    black: 'bg-black',
  };

  const handleInputChange = (e) => {
    const newColor = e.target.value;
    setInputColor(newColor);
    if (colorClassMap[newColor]) {
      setColor(colorClassMap[newColor]);
    } else {
      setColor('bg-transparent');
    }
  };

  return (
    <main className="flex flex-col items-center m-10 p-10">
      <div
        className={`${color} text-center outline outline-slate-100 rounded h-[200px] w-[200px] m-10 p-10`}>
        {inputColor}
      </div>
      <input
        type="text"
        placeholder="Enter color name"
        className="bg-slate-100 w-[200px] h-10 p-5 rounded"
        value={inputColor}
        onChange={handleInputChange}
      />
    </main>
  );
};

export default Content;
