import React, { useState, useEffect } from "react"


import commafy from "../util/commafy"
import Button from "../Button/Button";
import "./App.css"
import icons from "../../icons.png"

function App() {
    const [time, setTime] = useState(new Date())
    const [memory, setMemory] = useState(null)
    const [value, setValue] = useState("0")
    const [operator, setOperator] = useState(null)


    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])


    function handleClick(key) {
        // convert string display value to number
        const num = parseFloat(value)
        const operators = ["+", "÷", "×", "–"]

        // if AC button pressed
        if (key === "AC") {
            setMemory(null)
            setValue("0")
            setOperator(null)
            return;
        }

        if (key === "C") {
            setValue("0")
            return;
        }

        // if ± button pressed
        if (key === "+/–") {
            if (value == "0") {
                setValue("-0")
            } else setValue((num * -1).toString());
            return;
        }

        // if % button pressed
        if (key === "%") {
            setValue((num / 100).toString())
            setOperator(null)
            return;
        }

        // if decimal point pressed
        if (key === ".") {
            // make sure theres a number before the decimal point.
            if (value === "0") {
                setValue("0.")
                return;
            }
            //only one decimal point in a number
            if (value.includes(key)) {
                return;
            }
            //otherwise append decimal point
            setValue(value + key)
        }

        // if button pressed is an operator
        if (operators.includes(key)) {
            if (operator) {
                if (operator === "+") {
                    setMemory(memory + parseFloat(value))

                } else if (operator === "–") {
                    setMemory(memory - parseFloat(value))

                } else if (operator === "÷") {
                    setMemory(memory / parseFloat(value))

                } else if (operator === "×") {
                    setMemory(memory * parseFloat(value))

                }
            } else setMemory(parseFloat(value))
            setOperator(key);
            setValue("0")
            return;
        }

        // calculate/equals button
        if (key === "=") {
            if (!operator) return;
            if (operator === "+") {
                setValue((memory + parseFloat(value)).toString())
            } else if (operator === "–") {
                setValue((memory - parseFloat(value)).toString())
            } else if (operator === "÷") {
                setValue((memory / parseFloat(value)).toString())
            } else if (operator === "×") {
                setValue((memory * parseFloat(value)).toString())
            }
            setMemory(null)
            setOperator(null)
            return;
        }

        // numbers
        if (value === "0") {
            setValue(key)
        } else {
            setValue(value + key)
        }

    }


    return (
        <div className="App">
            <div className="top">
                <div className="time">
                    {time.getHours().toString().padStart(2, "0")}:{time.getMinutes().toString().padStart(2, "0")}
                </div>
                <div className="icons">
                    <img src={icons} alt="" />
                </div>
            </div>
            <div className="display">{commafy(value)}</div>
            <div className="buttons">

                <Button name={value == "0" ? "AC" : "C"} type="function" handleClick={handleClick} />


                <Button name="+/–" type="function" handleClick={handleClick} />
                <Button name="%" type="function" handleClick={handleClick} />
                <Button name="÷" type="operator" handleClick={handleClick} />
                <Button name="7" type="number" handleClick={handleClick} />
                <Button name="8" type="number" handleClick={handleClick} />
                <Button name="9" type="number" handleClick={handleClick} />
                <Button name="×" type="operator" handleClick={handleClick} />
                <Button name="4" type="number" handleClick={handleClick} />
                <Button name="5" type="number" handleClick={handleClick} />
                <Button name="6" type="number" handleClick={handleClick} />
                <Button name="–" type="operator" handleClick={handleClick} />
                <Button name="1" type="number" handleClick={handleClick} />
                <Button name="2" type="number" handleClick={handleClick} />
                <Button name="3" type="number" handleClick={handleClick} />
                <Button name="+" type="operator" handleClick={handleClick} />
                <Button name="0" type="number" handleClick={handleClick} />
                <Button name="." type="number" handleClick={handleClick} />
                <Button name="=" type="operator" handleClick={handleClick} />
            </div>
            <div className="bottom"></div>

        </div >)
}

export default App