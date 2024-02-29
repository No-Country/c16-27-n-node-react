const Button = ({ text, bgColor }) => {
  return (
    <button
      className={`bg-[${bgColor}] h-15 rounded-[20px] text-3xl text-white p-4 font-bold tracking-wider`}
    >
      {text}
    </button>
  );
};

export default Button;
