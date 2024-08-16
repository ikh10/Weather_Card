import React, { useState } from 'react'
import './Calculator'

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };
    const handleClear = () => {
        setInput("");
        setResult("0.0");
    };
    const handleCalulate = () => {
        try {
            const calculation = eval(input);
            console.log(calculation);
            setResult(calculation);
            setInput(calculation.toString());
        } catch (error) {
            alert("Invalid calculation");
        }
    };
    return (
        <div className='calc'>
            Calculator
            <div>
                <input type="text" value={input} readOnly />
                <div className="result">res:{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleButtonClick("1")}> 1</button>
                <button onClick={() => handleButtonClick("2")}> 2</button>
                <button onClick={() => handleButtonClick("3")}> 3</button>
                <button onClick={() => handleButtonClick("+")}> +</button>
                <button onClick={() => handleButtonClick("4")}> 4</button>
                <button onClick={() => handleButtonClick("5")}> 5</button>
                <button onClick={() => handleButtonClick("6")}> 6</button>
                <button onClick={() => handleButtonClick("-")}> -</button>
                <button onClick={() => handleButtonClick("7")}> 7</button>
                <button onClick={() => handleButtonClick("8")}> 8</button>
                <button onClick={() => handleButtonClick("9")}> 9</button>
                <button onClick={() => handleButtonClick("/")}> /</button>
                <button onClick={() => handleButtonClick("0")}> 0</button>
                <button onClick={() => handleButtonClick("*")}> *</button>
                <button onClick={handleCalulate}>=</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    )
}

export default Calculator
