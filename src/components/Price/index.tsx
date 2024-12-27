import { PriceProps } from "./types";

const Price: React.FC<PriceProps> = ({ price, discount, size }) => {
  const discountedPrice = discount ? price - (price * discount / 100) : price;

  return <div className={`flex gap-[10px] ${size === "sm" ? 'text-2xl max-sm:text-xl' : 'text-3xl max-sm:text-2xl' }`}>

    <span className="font-bold">
      ${discountedPrice}
    </span>

    {discount && <>
        <span className="font-bold line-through text-black text-opacity-40">${price}</span>
        <span className={`
            text-red-500 bg-red-100 px-3 py-2 rounded-full font-medium 
            ${size === "sm" ? 'text-xs max-sm:text-[10px]' : 'text-base max-sm:text-sm'} 
          `}>
          -{discount}%
        </span>
      </>
    }
  </div>
}

export default Price;