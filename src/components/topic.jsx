import React from "react";
import { motion } from "framer-motion";

const Topic = ({ image, title, children }) => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-start bg-contain bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >

      <motion.div
        className="flex flex-col items-start max-w-screen-lg p-8"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="text-2xl font-bold mb-8 text-yellow-400">{title}</span>
        <p className="text-xl text-white whitespace-pre-line">{children}</p>
      </motion.div>

    </div>
  );
};

export default Topic;