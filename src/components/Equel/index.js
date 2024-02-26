const Equel = ({ result, setDisplay }) => {
  return (
    <button
      onClick={result}
      className="bg-primary shadow-md px-9 py-6 rounded-full 
    flex justify-center items-center transition-all ease-in hover:bg-slate-500 hover:bg-opacity-10"
    >
      <span>=</span>
    </button>
  );
};

export default Equel;
