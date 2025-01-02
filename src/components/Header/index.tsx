"use client"

import Link from "next/link";
import NavItem from "./components/NavItem";
import Input from "../Input";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavButton from "./components/NavButton";

const Header = () => {
  const [search, setSearch] = useState<string>('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return <header className="w-full px-12 py-8 max-md:px-5 max-md:py-5 flex flex-col gap-4 border-b-black border-2">
    <div className="flex items-center justify-between gap-10">
      <div className="flex items-center gap-6 max-md:gap-3">
        {isSmallScreen && 
          <button onClick={handleOpenMenu}>
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
        {isSmallScreen && <NavButton icon={IoIosSearch} onClick={() => setIsSearchOpen((prev) => !prev)} key="search button"/>}
        <NavButton icon={FiShoppingCart} onClick={() => console.log("Market cart button")} key="cart button"/>
        <NavButton icon={BsPersonCircle} onClick={() => console.log("Personal account button")} key="Personal account button"/>
      </div>
    </div>

    {isSearchOpen && <Input 
        icon={IoIosSearch} 
        placeholder="Search for products..." 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onSearch={() => console.log(search)}
      />
    }
    
    {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          onClick={handleCloseMenu}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <div
            className="relative w-64 h-full bg-white shadow-lg flex flex-col p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="self-end mb-4" onClick={handleCloseMenu}>
              <IoClose size={24} />
            </button>
            <Link href={'/'} className="text-4xl max-md:text-2xl font-bold mb-6">
              SHOP.CO
            </Link>
            <nav className="flex flex-col gap-4 ">
              <NavItem href="#" text="Shop" />
              <NavItem href="#" text="On Sale" />
              <NavItem href="#" text="New Arrivals" />
              <NavItem href="#" text="Brands" />
            </nav>
          </div>
        </div>
      )}

  </header>
}

export default Header;