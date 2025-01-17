"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Utility for conditional class names

export const ExpandableContent = ({
  children,
  preset = "fade", // "fade", "slide-up", "slide-down", etc.
  stagger = false,
  staggerChildren = 0.1,
  keepMounted = true,
  className,
  ...props
}) => {
  const motionPresets = {
    "fade": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    "slide-up": {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
    },
    "slide-down": {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
    },
  };

  const variants = motionPresets[preset] || motionPresets["fade"];

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      {...(stagger && {
        variants: {
          animate: { transition: { staggerChildren } },
        },
      })}
      {...props}
    >
      {children}
    </motion.div>
  );
};
