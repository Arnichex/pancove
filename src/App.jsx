import React, { useState } from 'react';
import "./App.css"

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const[dela,setDela]=useState(0);
  const[panala,setPanala]=useState(100);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * (parseInt(panala) - parseInt(dela) + 1)) + parseInt(dela);
    setRandomNumber(randomNum);
  };

  return (
    <div className='App'>
        <input placeholder='de la ' value={dela} onChange={(e)=>setDela(e.target.value)}></input>
        <input placeholder='pana la ' value={panala} onChange={(e)=>setPanala(e.target.value)}></input>
      <h1 className='titlu'>Random Number Generator</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Generated Random Number: {randomNumber}</p>}
    </div>
  );
}

export default App;