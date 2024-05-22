import React from "react";
import styles from "./MaxWidthWrapper.module.css";
import { cn } from "@/lib/utils";


export const MaxWidthWrapper = ({ children, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
