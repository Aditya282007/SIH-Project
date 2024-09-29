import React,{useState,useEffect} from "react";
import './style.css';
const Counter: React.FC = (props) => {
    const [counter,setCounter] = useState<number>(0); 
    
    useEffect(() => {
        console.log('Counter Mounted');

        return function(){
            console.log('Counter UnMounted');
        }
    },[]);

    // Empty dep arr means -> whole component
    // if dep has some values

    useEffect(()=>{
        console.log('User Updated count');

        return () => {
            console.log("Counter useEffect Return");
            
        }
    },[counter]);
    const handleIncrement = () => {
        setCounter(counter+1);
    }

    const handleDecrement = () => {
        if (counter === 0) {
            return ;
        }
        setCounter(counter-1)
    }

    return(
        <div className="counter-container">
            <h1>{counter}</h1>
            <button onClick={handleIncrement} style={{background: "green"}}>+</button>
            <button onClick={handleDecrement} style={{background: "tomato"}}>-</button>
        </div>
    )
}

export default Counter;