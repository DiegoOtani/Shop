import Price from "../Price";
import Rating from "../Rating";
import { ProductInfoProps } from "./types";

const ProductInfo: React.FC<ProductInfoProps> = ({ name, rating, price, discount, size, description }) => {
  return <div className="flex flex-col gap-2">
    <h2 className={`font-bold ${size === "lg" ? 'text-4xl max-sm:text-2xl' : 'text-xl max-sm:text-base'} `}>{name}</h2>
    <Rating rating={rating} showValue/>
    <Price price={price} discount={discount} size={size}/>
    {description && <p className="text-black text-opacity-60 text-base max-sm:text-sm">{description}</p>}
  </div>
}

export default ProductInfo;