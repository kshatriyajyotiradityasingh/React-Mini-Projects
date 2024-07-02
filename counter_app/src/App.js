import { useState } from "react";
import "./App.css";

function App() {

  const [cnt,setcnt]=useState(0);

  function decreseHandler(){
    setcnt(cnt-1);
  }

  function increseHandler(){
    setcnt(cnt+1);
  }

  function resetHandler(){
    setcnt(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
      <div className="text-2xl font-medium text-[#0398d4 ]">Badhao Ya Ghatao</div>
      <div className="bg-white flex justify-content py-3 gap-12 text-[25px] rounded-sm">
        <button className="border-r-2 border-[#bfbfbf] text-center w-20 text-5xl " onClick={decreseHandler} >-</button>
        <div className="font-bold gap-12 text-5xl ">{cnt}</div>
        <button  className="border-l-2  border-[#bfbfbf] text-center w-20 text-4xl" onClick={increseHandler}>+</button>
      </div>
      <button onClick={resetHandler} className="text-lg px-5 py-2 text-white bg-[#0398d4] rounded-sm">Reset</button>
    </div>
  );
}

export default App;
