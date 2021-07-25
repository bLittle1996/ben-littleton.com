import NextLink, { LinkProps } from "next/link";
import { classNames } from "../../utils";
import { WithClassName } from "../../utils/types";

const Link: React.FC<WithClassName<true> & LinkProps> = (props) => {
  const { children, className, overrideClassName, ...linkProps } = props;

  return (
    <NextLink {...linkProps}>
      <a
        className={
          overrideClassName
            ? className
            : classNames(["border-b-1 border-accent-500", className])
        }
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
