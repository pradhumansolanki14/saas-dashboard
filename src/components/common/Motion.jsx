import { motion } from "framer-motion";

const Motion = ({
  children,
  className,
  variant,
  transition,
}) => {
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;