import { ProductCardProps } from "./types";
import ProductInfo from "../ProductInfo";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({ name, imgUrl, rating, price, discount }) => {
  return <div className="flex flex-col gap-2">
    <Image 
      alt={name}
      src={imgUrl}
      width={250}
      height={250}
      className="rounded-3xl max-sm:w-[200px] max-sm:h-[200px]"
    />
    <ProductInfo 
      name={name} 
      price={price} 
      rating={rating} 
      size="sm" 
      discount={discount}
    />
  </div>
}

export default ProductCard;