import React, { ReactNode } from "react";
import bg from "../../assets/images/bg.png";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`container mx-auto overflow-hidden ${className}`}
      style={{
        backgroundImage: `url('${bg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
