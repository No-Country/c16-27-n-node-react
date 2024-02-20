// MainButton component
const MainButton = ({ text, width, height, color }) => {
  return (
    <button className={`w-${width} h-${height} bg-${color} text-white font-bold px-4 py-2 rounded`}>
      {text}
    </button>
  );
};
