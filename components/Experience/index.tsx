import Image from "next/image";
import { NonEmptyArray, StaticImport } from "../../utils/types";
import Link from "../Link";

export type Tech = {
  name: string;
  link: string;
};

export interface ExperienceProps {
  image: StaticImport;
  imageAlt?: string;
  title: string;
  projectLink: string;
  techUsed: NonEmptyArray<Tech>;
}

const Experience: React.FC<ExperienceProps> = ({
  children,
  image,
  imageAlt,
  title,
  projectLink,
  techUsed,
}) => {
  return (
    <div>
      <Image
        src={image}
        alt={imageAlt || title}
        layout="fill"
        placeholder="blur"
      />

      <h3>
        <Link href={projectLink}>{title}</Link>
      </h3>

      <div>{children}</div>

      <div>
        <span>Technologies Used: </span>
        <ul>
          {techUsed.map((tech, i, arr) => {
            const isLast = i === arr.length - 1;

            return (
              <li key={tech.name}>
                {isLast && "and"} <Link href={tech.link}>{tech.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
