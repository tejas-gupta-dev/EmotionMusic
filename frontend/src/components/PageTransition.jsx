import { motion } from "framer-motion";

export default function PageTransition({
  children,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.89,
        filter: "blur(70px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -40,
        scale: 1.02,
        filter: "blur(70px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.28, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}