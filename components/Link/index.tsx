import NextLink, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import { classNames } from "../../utils";
import { WithClassName } from "../../utils/types";

const Link: React.FC<
  { target?: HTMLAttributeAnchorTarget } & WithClassName<true> & LinkProps
> = (props) => {
  const { children, className, overrideClassName, target, ...linkProps } =
    props;

  return (
    <NextLink {...linkProps}>
      <a
        className={
          overrideClassName
            ? className
            : classNames(["border-b-1 border-accent-500", className])
        }
        target={target}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
