"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Utility for conditional class names

export const Expandable = ({
  children,
  expanded = false,
  transitionDuration = 0.3,
  easeType = "easeInOut",
  expandDirection = "vertical", // "vertical" or "horizontal"
  initialDelay = 0,
  expandBehavior = "push", // "push" or "overlay"
  className,
  onExpandStart,
  onExpandEnd,
  onCollapseStart,
  onCollapseEnd,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  const handleAnimationStart = () => {
    if (isExpanded) {
      if (onExpandStart) onExpandStart();
    } else {
      if (onCollapseStart) onCollapseStart();
    }
  };

  const handleAnimationComplete = () => {
    if (isExpanded) {
      if (onExpandEnd) onExpandEnd();
    } else {
      if (onCollapseEnd) onCollapseEnd();
    }
  };

  const motionVariants = {
    initial: {
      scale: expandBehavior === "overlay" ? 1 : 1,
      height: expandDirection === "vertical" ? 0 : "auto",
      width: expandDirection === "horizontal" ? 0 : "auto",
      opacity: 0,
    },
    animate: {
      scale: 1,
      height: "auto",
      width: "auto",
      opacity: 1,
      transition: {
        duration: transitionDuration,
        ease: easeType,
        delay: initialDelay,
      },
    },
    exit: {
      scale: expandBehavior === "overlay" ? 1 : 1,
      height: expandDirection === "vertical" ? 0 : "auto",
      width: expandDirection === "horizontal" ? 0 : "auto",
      opacity: 0,
      transition: {
        duration: transitionDuration,
        ease: easeType,
      },
    },
  };

  return (
    <motion.div
      className={cn("relative", className)}
      {...props}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={motionVariants}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
