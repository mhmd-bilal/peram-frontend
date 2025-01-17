"use client";

import React, { useState } from "react";
import { Expandable } from "./Expandable"; // Adjust import path based on your setup
import { ExpandableContent } from "./ExpandableContent";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names

const ProductCard = ({
  product,
  className,
  hoverToExpand = false,
  expandDelay = 0,
}) => {
  const { image, name, startingPrice, closingPrice } = product;

  if (!name) {
    return <div>Product not found</div>;
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='border rounded-sm p-4'>
      <img src={image} alt={name} className='w-full h-48 object-cover' />
      <h2 className='text-lg font-bold'>{name}</h2>
      <p>Starting Price: {startingPrice}</p>
      <p>Closing Price: {closingPrice}</p>
    </div>
  );
};

export default ProductCard;
