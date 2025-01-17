import * as React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})

const SearchInput = React.forwardRef(({ className, type, startIcon, ...props }, ref) => {
  const StartIcon = startIcon;

  return (
    <div className="w-full relative">
      {StartIcon && (
        <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2 pointer-events-none ">
          <Image src={StartIcon} width={16} height={16} alt="image" />
        </div>
      )}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ",
          startIcon ? "pl-8" : "",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input"
SearchInput.displayName = "SearchInput";

export { Input, SearchInput }
