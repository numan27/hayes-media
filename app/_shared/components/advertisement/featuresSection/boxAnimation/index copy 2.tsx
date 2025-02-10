import { motion } from "framer-motion";
import styles from "./style.module.scss";

const BoxAnimation = () => {
  return (
    <div className={styles.featureContainer}>
      <motion.div
        className={styles.hiddenContent}
        initial={{ opacity: 0, scale: 0.9 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className={styles.featureItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }}
        >
          Feature 1
        </motion.div>
        <motion.div
          className={styles.featureItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }}
        >
          Feature 2
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BoxAnimation;
