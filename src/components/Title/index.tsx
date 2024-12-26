import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({ text, size, color }) => {
  let sizeClass = '';

  switch (size) {
    case 'large':
      sizeClass = 'text-6xl max-sm:text-3xl';
      break;
    case 'medium':
      sizeClass = 'text-5xl max-sm:text-3xl';
      break;
    case 'small':
      sizeClass = 'text-4xl max-sm:text-2xl';
      break;
    default:
      sizeClass = 'text-4xl';
  }

  return <h1 className={`font-bold ${sizeClass} text- ${color === 'black' ? 'text-black' : 'text-white'}`}>
    {text}
  </h1>;
};

export default Title;