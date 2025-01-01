import Link from "next/link";
import NavItem from "../NavItem";
import Input from "../Input";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavButton from "../NavButton";

const Header = () => {
  const [search, setSearch] = useState<string>('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <header className="w-full px-12 py-8 max-md:px-5 max-md:py-5 flex items-center justify-between gap-10 border-b-black border-2">

    <div className="flex items-center gap-6 max-md:gap-3">
      {isSmallScreen && 
        <button>
          <IoMenu size={24}/>
        </button>
      }
      
      <Link href={'/'} className="text-4xl max-md:text-2xl font-bold">
        SHOP.CO
      </Link>
    </div>

    {!isSmallScreen && <>
        <nav className="hidden sm:block">
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
      </>
    }

    <div className="flex gap-6 max-md:gap-3">
      {isSmallScreen && <NavButton icon={IoIosSearch} onClick={() => setIsSmallScreen(true)} key="search button"/>}
      <NavButton icon={FiShoppingCart} onClick={() => console.log("Market cart button")} key="cart button"/>
      <NavButton icon={BsPersonCircle} onClick={() => console.log("Personal account button")} key="Personal account button"/>
    </div>
  </header>
}

export default Header;