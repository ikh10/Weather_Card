import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };
    return (
        <div className='calc'>
            Calculator
            <div>
                <input type="text" className='display' readOnly />
                <div className="result">0.0</div>
            </div>
            <div className="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>/</button>
                <button>0</button>
                <button>*</button>
                <button>=</button>
                <button>del</button>
            </div>
        </div>
    )
}

export default Calculator
