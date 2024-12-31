import Link from "next/link"
import { NavItemProps } from "./types";

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  return <li>
    <Link href={href} className="text-base font-medium hover:font-bold">
      {text}
    </Link>
  </li>
}

export default NavItem;