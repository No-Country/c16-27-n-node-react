const Button = ({ text, bgColor }) => {
  return bgColor === 'dodgerBlue' ? (
    <button
      className={`bg-dodgerBlue h-15 rounded-[20px] text-3xl text-white p-4 font-bold tracking-wider`}
    >
      {text}
    </button>
  ) : (
    <button
      className={`bg-radicalRed h-15 rounded-[20px] text-3xl text-white p-4 font-bold tracking-wider`}
    >
      {text}
    </button>
  );
};

export default Button;
