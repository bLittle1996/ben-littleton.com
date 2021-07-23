import { LinkProps } from "next/link";
import Link from "../Link";
import Logo from "./Logo";

export type HeaderLink = LinkProps & {
  text: string;
};

export interface HeaderProps {
  links?: HeaderLink[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="max-w-3xl mx-auto my-8 px-8 flex justify-between">
      <Logo />
      {links && links.length > 0 && (
        <nav className="flex items-center justify-center">
          <ul>
            {links.map((link) => {
              const { text, ...linkProps } = link;
              return (
                <li key={text} className="inline mr-4 last:mr-0">
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
