import { useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(0);

  const handleNumChange = (e) => {
    setNum(Number(e.target.value));
  }

  return (
    <div className="App">
      <h2>Even Odd Number Checker With Short-Circuiting</h2>
      <p>
        <input type="text" value={num} onChange={handleNumChange} placeholder="Enter value for num"/>
      </p>
      <EvenOdd num={num}/>
    </div>
  );
}

function EvenOdd({ num }){
  return(
    <div>
      {num % 2 === 0 && <p>The {num} is even</p>}
      {num % 2 !== 0 && <p>The {num} is odd</p>}
    </div>
  );
}

export default App;
