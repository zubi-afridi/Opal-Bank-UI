import { motion } from "framer-motion";
import { clients } from "../constants";
import styles from "../style";
import { staggerContainer, staggerItem } from "../utils/motion";

const Clients = () => (
  <motion.section
    className={`${styles.flexCenter} my-4`}
    variants={staggerContainer(0.15, 0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <motion.div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          variants={staggerItem(index * 0.08)}
        >
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Clients;
