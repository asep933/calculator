"use client";

import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const numb = (number) => {
    setDisplay((prevData) => prevData + number);
  };

  const result = () => {
    try {
      const result = calculate(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const calculate = (display) => {
    const operators = /[+\-*/]/;
    const parts = display.split(operators);

    if (parts.length != 2) throw new Error("Invalid expression");

    const [operand1, operand2] = parts.map(parseFloat);
    const operator = display.match(operators)[0];

    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
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
    <div className="p-0 m-0 w-1/2 shadow-xl lg:w-1/6 lg:scale-125 md:w-1/5">
      <div className="flex flex-col scale-125 bg-secound rounded-lg overflow-hidden">
        <div className="px-4 py-5">
          <input
            className="bg-primary w-full focus:outline-none rounded-md px-2"
            type="text"
            value={display}
            readOnly
          />
        </div>

        <div className="bg-primary shadow-md">
          <div className="flex flex-wrap w-full gap-7 pt-5 justify-center pb-4 ">
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("1")}
            >
              1
            </button>

            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("2")}
            >
              2
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("3")}
            >
              3
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("+")}
            >
              +
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("4")}
            >
              4
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("5")}
            >
              5
            </button>
            <button
              className="p-2 rounded-full hover:bg-secound"
              onClick={() => numb("6")}
            >
              6
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("-")}
            >
              -
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("7")}
            >
              7
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("8")}
            >
              8
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("9")}
            >
              9
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("*")}
            >
              x
            </button>
            <button
              className="p-2 rounded-full bg-secound"
              onClick={() => setDisplay("")}
            >
              C
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("0")}
            >
              0
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => result()}
            >
              =
            </button>
            <button
              className="transition-all ease-in-out p-2 rounded-full hover:bg-secound"
              onClick={() => numb("/")}
            >
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
