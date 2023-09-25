import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  className: string;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
}) => (
  <div className={`bg-custom-gray p-6 rounded-lg ${className}`}>{children}</div>
);

export default SectionContainer;
