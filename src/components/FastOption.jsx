import React from "react";
import { motion } from "framer-motion";
import "./FastOption.css";

const FastOption = () => {
  return (
    <motion.div
      className="fast-option"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Experience the Speed</h2>
      <p>Fast, secure, and optimized for your device.</p>
      {/* Additional animations or interactive elements */}
    </motion.div>
  );
};

export default FastOption;
