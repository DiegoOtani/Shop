import Link from "next/link";
import NavItem from "../NavItem";
import Input from "../Input";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import NavButton from "../NavButton";

const Header = () => {
  const [search, setSearch] = useState<string>('');

  return <header className="w-full px-24 py-10 flex items-center gap-10 border-b-black border-2">
    <Link href={'/'} className="text-4xl font-bold">
      SHOP.CO
    </Link>
    <nav>
      <ul className="flex gap-6">
        <NavItem href="#" text="Shop" key="Shop"/>
        <NavItem href="#" text="On Sale" key="On Sale"/>
        <NavItem href="#" text="New Arrivals" key="New Arrivals"/>
        <NavItem href="#" text="Brands" key="Brands"/>
      </ul>
    </nav>
    <Input 
      icon={IoIosSearch} 
      placeholder="Search for products..." 
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      onSearch={() => console.log(search)}
    />
    <NavButton icon={FiShoppingCart} onClick={() => console.log("Market cart button")} key="cart button"/>
    <NavButton icon={BsPersonCircle} onClick={() => console.log("Personal account button")} key="Personal account button"/>
  </header>
}

export default Header;