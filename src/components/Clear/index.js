const Clear = ({ setdisplay }) => {
  return (
    <button
      onClick={() => setdisplay((value) => (value = ""))}
      className="bg-secound shadow-md px-9 py-6 rounded-full 
    flex justify-center items-center transition-all ease-in"
    >
      <span>C</span>
    </button>
  );
};

export default Clear;
