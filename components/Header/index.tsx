import Link, { LinkProps } from "next/link";
import Logo from "./Logo";
import { UrlObject } from "url";
import { isString } from "../../utils/guards";

export type Link = LinkProps & {
  text: string;
};

export interface HeaderProps {
  links?: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header>
      <Logo />
      {links && links.length > 0 && (
        <nav>
          <ul>
            {links.map((link) => {
              const { text, ...linkProps } = link;
              return (
                <li key={text}>
                  <Link {...linkProps}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
