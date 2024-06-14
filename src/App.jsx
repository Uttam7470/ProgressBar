import { useEffect, useState } from "react";
import "./index.css";

function App() {
    let [count, setCount] = useState(0);
  const [color,setColor] = useState("");
  const [name, setName] = useState("Loading....");

  useEffect(() => {
       
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        setColor("#00ff00")
        if (newCount === 100) {
          clearInterval(interval);
          setName("Complet!");
        }

        return newCount;
      });
    }, 100);

    return () => {
      clearInterval(interval); 
    };
  }, []);



  return (
    <>
      <h1>Progress Bar</h1>
      <div id="bar-outer">
      <div className="bar" style={{width:`${count}% `, backgroundColor:`${color}` ,textAlign:"center"}}>
        <p>{count}%</p>
      </div>
      
      </div>
      <p id="name">{name}</p>
    </>
  );
}

export default App;