import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

import logo from "../assets/logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">

      {/* Gold top accent */}
      <div className="h-[3px] bg-[#C89B3C]" />

      <nav className="bg-[#FAF7F0]/95 backdrop-blur-xl border-b border-[#E8DFD0]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ========================================
              MAIN NAVBAR
          ======================================== */}

          <div className="h-[72px] sm:h-20 flex items-center justify-between">

            {/* ========================================
                LOGO + COMPANY NAME
            ======================================== */}

            <Link
              to="/"
              onClick={closeMobile}
              className="flex items-center gap-3 group min-w-0"
            >

              {/* Logo */}

              <img
                src={logo}
                alt="Rajdhani Dryfruits Logo"
                className="
                  h-11
                  sm:h-14
                  w-auto
                  max-w-[95px]
                  sm:max-w-[110px]
                  object-contain
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              {/* Company Name */}

              <div className="flex flex-col leading-none">

                <span
                  className="
                    text-lg
                    sm:text-2xl
                    font-serif
                    font-semibold
                    tracking-wide
                    text-[#0F2B20]
                    group-hover:text-[#C89B3C]
                    transition-colors
                    duration-300
                  "
                >
                  Rajdhani
                </span>

                <span
                  className="
                    mt-1
                    text-[8px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#8A7654]
                  "
                >
                  Dryfruits
                </span>

              </div>

            </Link>


            {/* ========================================
                DESKTOP NAVIGATION
            ======================================== */}

            <div className="hidden md:flex items-center gap-7 lg:gap-9">

              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative
                    py-2
                    text-sm
                    font-medium
                    tracking-wide
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#C89B3C]"
                        : "text-[#355548] hover:text-[#C89B3C]"
                    }
                    `
                  }
                >

                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`
                          absolute
                          left-1/2
                          -bottom-0.5
                          h-[2px]
                          -translate-x-1/2
                          rounded-full
                          bg-[#C89B3C]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-full"
                              : "w-0"
                          }
                        `}
                      />
                    </>
                  )}

                </NavLink>

              ))}

            </div>


            {/* ========================================
                DESKTOP ACTIONS
            ======================================== */}

            <div className="hidden md:flex items-center gap-3">

              {/* Search */}

              <Link
                to="/products"
                aria-label="Search products"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#DCD1C0]
                  flex
                  items-center
                  justify-center
                  text-[#355548]
                  hover:bg-[#0F2B20]
                  hover:text-white
                  hover:border-[#0F2B20]
                  transition-all
                  duration-300
                "
              >
                <Search
                  size={17}
                  strokeWidth={1.8}
                />
              </Link>


              {/* Shop Collection */}

              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  lg:px-6
                  py-3
                  rounded-full
                  bg-[#0F2B20]
                  text-white
                  text-sm
                  font-medium
                  tracking-wide
                  shadow-sm
                  hover:bg-[#C89B3C]
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <ShoppingBag
                  size={16}
                  strokeWidth={1.8}
                />

                Shop Collection

              </Link>

            </div>


            {/* ========================================
                MOBILE MENU BUTTON
            ======================================== */}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="
                md:hidden
                w-10
                h-10
                sm:w-11
                sm:h-11
                shrink-0
                rounded-full
                border
                border-[#DCD1C0]
                bg-white/50
                flex
                items-center
                justify-center
                text-[#0F2B20]
                active:scale-95
                hover:bg-[#0F2B20]
                hover:text-white
                hover:border-[#0F2B20]
                transition-all
                duration-300
              "
            >

              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}

            </button>

          </div>


          {/* ========================================
              MOBILE NAVIGATION
          ======================================== */}

          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ${
                mobileOpen
                  ? "max-h-[500px] opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              }
            `}
          >

            <div className="border-t border-[#E8DFD0] pt-4">

              {/* Mobile Links */}

              <div className="space-y-1.5">

                {navItems.map((item) => (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3.5
                      rounded-2xl
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[#0F2B20] text-white shadow-sm"
                          : "text-[#355548] hover:bg-[#EFE8DB] hover:text-[#0F2B20]"
                      }
                      `
                    }
                  >

                    <span>
                      {item.name}
                    </span>

                    <ChevronRight size={17} />

                  </NavLink>

                ))}

              </div>


              {/* ========================================
                  MOBILE ACTIONS
              ======================================== */}

              <div className="grid grid-cols-2 gap-3 mt-4">

                {/* Search */}

                <Link
                  to="/products"
                  onClick={closeMobile}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3.5
                    rounded-2xl
                    border
                    border-[#DCD1C0]
                    text-[#0F2B20]
                    text-sm
                    font-medium
                    active:scale-[0.98]
                    transition
                  "
                >

                  <Search size={17} />

                  Search

                </Link>


                {/* Shop */}

                <Link
                  to="/products"
                  onClick={closeMobile}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3.5
                    rounded-2xl
                    bg-[#C89B3C]
                    text-white
                    text-sm
                    font-medium
                    active:scale-[0.98]
                    transition
                    hover:bg-[#0F2B20]
                  "
                >

                  <ShoppingBag size={17} />

                  Shop Now

                </Link>

              </div>

            </div>

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;