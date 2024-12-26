import { QuantityInfoProps } from "./types";

const QuantityInfo: React.FC<QuantityInfoProps> = ({ quantity, text }) => {
  return (
    <div className="flex flex-col pr-8">
      <h2 className="text-[40px] max-sm:text-2xl font-bold">
        {quantity}+
      </h2>
      <p className="text-black max-sm:text-xs text-opacity-60 text-base">
        {text}
      </p>
    </div>
  );
};

export default QuantityInfo;