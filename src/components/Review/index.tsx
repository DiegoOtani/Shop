import Rating from "../Rating";
import { ReviewProps } from "./types";
import { FaCircleCheck } from "react-icons/fa6";

const Review: React.FC<ReviewProps> = ({ rating, name, comment, postedOn }) => {
  return <div className="flex flex-col gap-4 border border-gray-300 p-7 rounded-xl min-h-60 max-sm:min-h-44">
    <Rating rating={rating}/>
    <span className="text-xl font-bold flex items-center gap-2 max-sm:text-base">{name}<FaCircleCheck color="green"/></span>
    <p className="text-base text-black text-opacity-60 max-sm:text-sm">&quot;{comment}&quot;</p>
    {postedOn && <p className="font-medium text-base text-black text-opacity-60 max-sm:text-sm">Posted on {postedOn}</p>}
  </div>
}

export default Review;