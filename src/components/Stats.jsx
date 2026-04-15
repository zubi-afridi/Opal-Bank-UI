import { motion } from "framer-motion";
import { stats } from "../constants";
import styles from "../style";
import { staggerContainer, staggerItem } from "../utils/motion";

const Stats = () => (
  <motion.section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    variants={staggerContainer(0.2, 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    {stats.map((stat, index) => (
      <motion.div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
        variants={staggerItem(index * 0.1)}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </motion.section>
);

export default Stats;
