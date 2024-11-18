import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
