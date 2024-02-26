"use client";

import { useState } from "react";
import NumberButton from "../ListButton";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const numb = (number) => {
    setDisplay((prevData) => {
      return prevData === "+" ||
        prevData === "-" ||
        prevData === "x" ||
        prevData === "/"
        ? 0
        : prevData + number;
    });
  };

  const result = () => {
    try {
      const result = calculate(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("error");
    }
  };

  const calculate = (display) => {
    const operators = /[+\-x/]/;
    const parts = display.split(operators);

    if (parts.length != 2) throw new Error("Invalid expression");

    const [operand1, operand2] = parts.map(parseFloat);
    const operator = display.match(operators)[0];

    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "x":
        return operand1 * operand2;
      case "/":
        if (operand2 === 0) {
          throw new Error("Division by zero");
        }
        return operand1 / operand2;
      default:
        throw new Error("Invalid operator");
    }
  };

  return (
    <div className="p-0 m-0 max-h-screen">
      <NumberButton
        numb={numb}
        display={display}
        setDisplay={setDisplay}
        result={result}
      />
    </div>
  );
};

export default Calculator;
