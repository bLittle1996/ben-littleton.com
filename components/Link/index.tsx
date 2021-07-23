import NextLink, { LinkProps } from "next/link";

const Link: React.FC<LinkProps> = (props) => {
  const { children, ...linkProps } = props;

  return (
    <NextLink {...linkProps}>
      <a className="border-b-2 border-accent-500">{children}</a>
    </NextLink>
  );
};

export default Link;
