import { memo, useMemo } from "react";
import "./styles.css";

const Child = ({counter, incrementCounter}) => { 
    console.log("inicio da renderização...");
    
    const lastElement = useMemo(()=>{
        //array para simular problema de performance
        const array = Array.from({length: 15_000_000}, (_, i) => Math.tan(i));
        return  array.slice(-1)[0];
    },[])

   
    
    console.log("o componente filho está sendo renderizado");

    return (
        <div className="child">
            <h2>Componente filho: {counter}</h2>
            <button onClick={incrementCounter}>+1</button>
            <h3>{lastElement}</h3>
        </div>
    );

};

export default memo(Child);