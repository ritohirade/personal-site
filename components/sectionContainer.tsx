import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}) => {
  return <div className="bg-custom-gray p-6 rounded-lg">{children}</div>;
};
