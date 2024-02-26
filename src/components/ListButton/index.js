import Clear from "../Clear";
import Equel from "../Equel";
import ListNumber from "../ListNumber";

const NumberButton = ({ numb, display, setDisplay, result }) => {
  return (
    <>
      <div
        className="bg-secound rounded-lg w-auto h-auto pb-0 pt-20 overflow-hidden 
      lg:w-3/4 md:w-3/4 sm:w-3/4"
      >
        <div className="px-4 p-5 py-5">
          <input
            className="bg-transparent pt-12 w-full text-2xl focus:outline-none rounded-md px-2 text-end"
            type="text"
            value={display}
            readOnly
          />
        </div>

        <div className="grid grid-cols-4 w-full gap-4 bg-primary px-4 py-3">
          <ListNumber numb={numb} number={"1"} />
          <ListNumber numb={numb} number={"2"} />
          <ListNumber numb={numb} number={"3"} />
          <ListNumber numb={numb} number={"+"} />
          <ListNumber numb={numb} number={"4"} />
          <ListNumber numb={numb} number={"5"} />
          <ListNumber numb={numb} number={"6"} />
          <ListNumber numb={numb} number={"-"} />
          <ListNumber numb={numb} number={"7"} />
          <ListNumber numb={numb} number={"8"} />
          <ListNumber numb={numb} number={"9"} />
          <ListNumber numb={numb} number={"x"} />
          <ListNumber numb={numb} number={"0"} />
          <Equel result={result} setDisplay={setDisplay} />
          <Clear setdisplay={setDisplay} />
          <ListNumber numb={numb} number={"/"} />
        </div>
      </div>
    </>
  );
};

export default NumberButton;
