import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  styles?: string;
  type?: "button" | "submit" | "reset" | undefined;
  handler?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, styles, handler, type }) => {
  return (
    <motion.button
      type={type}
      className={styles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handler}
    >
      {children}
    </motion.button>
  );
};

export default Button;
