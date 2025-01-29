"use client";

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    // y: 600,
    y: 400,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    // x: 10,
    rotate: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const OverlapCard = ({ content }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 1 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {content}
      </motion.div>
    </motion.div>
  );
};
export default OverlapCard;
