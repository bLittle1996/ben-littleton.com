import Image from "next/image";
import { NonEmptyArray, StaticImport } from "../../utils/types";
import Heading from "../Heading";
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
        layout="responsive"
        placeholder="blur"
      />

      <Heading level={3} className="my-4">
        <Link href={projectLink}>{title}</Link>
      </Heading>

      <div className="mb-1">{children}</div>

      <div>
        <strong>Technologies Used: </strong>
        <ul className="inline">
          {techUsed.map((tech, i, arr) => {
            const isLast = i === arr.length - 1;
            const shouldApostropheBeBequeathed = !isLast && arr.length > 2;

            return (
              <li key={tech.name} className="inline">
                {isLast && "and "}
                <Link href={tech.link}>{tech.name}</Link>
                {shouldApostropheBeBequeathed && ", "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
