import { RatingProps } from "./types";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating: React.FC<RatingProps> = ({ rating, showValue }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<FaStar key={i} color="gold" size={19}/>);
    } else if (rating >= i + 0.5) {
      stars.push(<FaStarHalf key={i} color="gold" size={19}/>);
    }
  }

  return <div className="flex gap-1 items-center text-sm">
    {stars} 
    {showValue && <span>{rating}/5</span>}
  </div>
}

export default Rating;
