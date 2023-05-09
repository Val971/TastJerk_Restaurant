import { motion } from "framer-motion";
import MenuIcon from "feather-icons/dist/icons/menu.svg";
import CloseIcon from "feather-icons/dist/icons/x.svg";

import useAnimatedNavToggler from "../helpers/useAnimatedNavToggler";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const cssLink =
    "text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-[#6415FF] hocus:text-[#6415FF]";
  const logoLink = (
    <a
      href="/"
      className="flex items-center font-black border-b-0 text-2xl ml-0"
    >
      <img className="w-10 mr-3" src={logo} alt="logo" />
      Tast Jerk
    </a>
  );
  const links = (cssLinks: string) => [
    <div key={1} className={cssLinks}>
      <a className={cssLink} href="/home">
        Home
      </a>
      <a className={cssLink} href="/about">
        About
      </a>
      <a className={cssLink} href="/#">
        Contact Us
      </a>
      <a className={cssLink} href="/Login">
        Login
      </a>
      <a
        className="lg:mx-0
  px-8 py-3 rounded bg-[#6415FF] hover:bg-[#511660]  text-gray-100
  hocus:bg-purple-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0"
        href="/Register"
      >
        Sign Up
      </a>
    </div>,
  ];
  return (
    <div
      className="flex justify-between items-center
  max-w-screen-xl mx-auto"
    >
      {/* DesktopNavLinks */}
      <nav className="hidden sm:flex md:flex lg:flex flex-1 justify-between items-center">
        {logoLink}
        {links("inline-block")}
      </nav>
      {/* MobileNavLinksContainer */}
      <nav className="flex flex-1 items-center justify-between sm:hidden md:hidden lg:hidden">
        {logoLink}
        <motion.div
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          className="z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white sm:hidden md:hidden lg:hidden"
        >
          {links("flex flex-col items-center")}
        </motion.div>
        <button
          onClick={toggleNavbar}
          className={`${
            showNavLinks ? "open" : "closed"
          } lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300`}
        >
          {showNavLinks ? (
            <img src={CloseIcon} className="w-6 h-6" alt="" />
          ) : (
            <img src={MenuIcon} className="w-6 h-6" alt="" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
