"use client";

import { cn } from "@/common/lib/utils";
import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 max-w-screen-2xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
