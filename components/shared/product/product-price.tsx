import { cn } from "@/lib/utils";
import React from "react";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  // Get the integer part of the value
  const [intValue, floateValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floateValue}</span>
    </p>
  );
};

export default ProductPrice;
