import React , {useState} from "react"


function App() {
  const[counter,setCounter] = useState(0)
  return (
    <div >
      <h1 className="App-header">
      This is counter app
      </h1>
      <div id ="counter-value">{counter}</div>
      <button id="increment-btn" onClick={()=>setCounter(counter+1)}>Increment</button>
      <button id="decrement-btn" onClick={()=>setCounter(counter-1)}>decrement</button>
    </div>
  );
}

export default App;
