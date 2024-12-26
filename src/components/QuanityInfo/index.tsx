import { QuantityInfoProps } from "./types";

const QuantityInfo: React.FC<QuantityInfoProps> = ({ quantity, text, hasBorder }) => {
  return (
    <div className={`flex flex-col ${hasBorder ? 'border-r border-gray-300 pr-8' : 'pr-8'}`}>
      <h2 className="text-[40px] font-bold">
        {quantity}+
      </h2>
      <p className="text-black text-opacity-60 text-base">
        {text}
      </p>
    </div>
  );
};

export default QuantityInfo;