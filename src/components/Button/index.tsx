import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ onClick, text, style }) => {
  return (
    <button 
      onClick={onClick} 
      className={`
        w-full p-[15px] rounded-full border-transparent border-2 text-base font-medium 
        ${style === 'black' ? 'bg-black text-white' : 'bg-white text-black'}
        hover:opacity-80 hover:border-black hover:font-semibold
      `}
    >
      {text}
    </button>
  );
};

export default Button;