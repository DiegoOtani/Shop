import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ icon: Icon, onChange, placeholder, value, onSearch }) => {
  return <div className=" w-full flex items-center gap-3 bg-[#f0f0f0] rounded-full py-3 px-4">
    <button onClick={onSearch}>
      <Icon className="text-black text-opacity-40 max-sm:size-5" size={24}/>
    </button>
    <input 
      className="bg-[#f0f0f0] text-base max-sm:text-sm text-black text-opacity-60 w-full focus:outline-none"
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
    />
  </div>
}

export default Input;