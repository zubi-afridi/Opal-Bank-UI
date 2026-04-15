import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import {
  navbarVariant,
  logoVariant,
  navLinksContainerVariant,
  navLinkItemVariant,
} from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`w-full flex py-6 justify-between items-center navbar fixed top-0 left-0 right-0 z-50 px-6 ss:px-16 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-primary/70 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      variants={navbarVariant}
      initial="hidden"
      animate="show"
    >
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer"
      >
        <motion.img
          src={logo}
          alt="hoobank"
          className="w-[124px] h-[32px]"
          variants={logoVariant}
          initial="hidden"
          animate="show"
        />
      </div>

      <motion.ul
        className="list-none sm:flex hidden justify-end items-center flex-1"
        variants={navLinksContainerVariant}
        initial="hidden"
        animate="show"
      >
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
              active === nav.title ? "text-secondary" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            variants={navLinkItemVariant}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <motion.div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            toggle ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
