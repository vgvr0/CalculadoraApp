import React, { useState } from 'react';
import math from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = math.evaluate(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error de cálculo');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      {/* Agrega el resto de los botones de la calculadora */}
      <button onClick={calculateResult}>=</button>
      <button onClick={clearInput}>Limpiar</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
