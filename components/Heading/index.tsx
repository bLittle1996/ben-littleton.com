import React from "react";

export type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children);

export default Heading;
