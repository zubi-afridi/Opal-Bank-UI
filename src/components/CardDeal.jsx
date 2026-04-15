import { motion } from "framer-motion";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { fadeInLeft, fadeInRight } from "../utils/motion";

const CardDeal = () => (
  <motion.section
    className={layout.section}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <motion.div className={layout.sectionInfo} variants={fadeInLeft}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div className={layout.sectionImg} variants={fadeInRight}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </motion.div>
  </motion.section>
);

export default CardDeal;
