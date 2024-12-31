import { NavButtonProps } from "./types";

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, onClick }) => {
  return <button onClick={onClick}>
    <Icon size={24} color="black"/>
  </button>
}

export default NavButton;