import NextLink, { LinkProps } from "next/link";
import { classNames } from "../../utils";
import { MergableClassName } from "../../utils/types";

const Link: React.FC<MergableClassName & LinkProps> = (props) => {
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
