import React, { useState , useEffect, useRef} from 'react'

function Stopwatch(){
   const [isRunning, setIsRunning] = useState(false);
   const [elapsedtime, setElapsedTime] = useState(0);
   const intervalIdRef = useRef(null);
   const startTimeRef = useRef(0);
   useEffect(() =>{
     if(isRunning){
        intervalIdRef.current = setInterval(()=>{
            setElapsedTime(Date.now() - startTimeRef.current);
        },10);
     }
     
     return ()=>{
       clearInterval(intervalIdRef.current);
     }

   },[isRunning]);

   function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedtime;
   }

   function stop(){
    setIsRunning(false);
   }

   function reset(){
    setIsRunning(false);
    setElapsedTime(0);
   }

   function formatTime(){
    let hours =Math.floor(elapsedtime / 3600000);
    let minutes =Math.floor(elapsedtime /(60000) % 60);
    let seconds =Math.floor(elapsedtime /(1000) % 60);
    let milliseconds =Math.floor((elapsedtime  % 1000)/10);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
   
    return `${minutes}:${seconds}:${milliseconds}`;
    
    
   
   }


  return(
    <>
    <div className="stopwatch">
     <div className="display">
       {formatTime()} 
     </div>
     <div className='controls'>
        <button className='start_btn' onClick={start}>Start</button>
        <button className='stop_btn' onClick={stop}>Stop</button>
        <button className='reset_btn' onClick={reset}>Reset</button>
     </div>
    </div>
    </>
  );
}
export default Stopwatch