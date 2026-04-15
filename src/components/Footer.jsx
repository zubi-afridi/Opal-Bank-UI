import { motion } from "framer-motion";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
} from "../utils/motion";

const Footer = () => (
  <motion.section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
  >
    <motion.div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
      variants={staggerContainer(0.15, 0)}
    >
      <motion.div
        className="flex-[1] flex flex-col justify-start mr-10"
        variants={fadeInLeft}
      >
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </motion.div>

      <motion.div
        className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10"
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {footerLinks.map((footerlink) => (
          <motion.div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            variants={staggerItem(0)}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"
      variants={fadeInUp}
    >
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ {new Date().getFullYear()} HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </motion.div>
  </motion.section>
);

export default Footer;
