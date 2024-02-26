const ListNumber = ({ numb, number }) => {
  return (
    <button
      onClick={() => numb(number)}
      className="bg-primary shadow-md px-9 py-6 rounded-full 
    flex justify-center items-center transition-all ease-in hover:bg-slate-500 
    hover:bg-opacity-10"
    >
      <span>{number}</span>
    </button>
  );
};

export default ListNumber;
