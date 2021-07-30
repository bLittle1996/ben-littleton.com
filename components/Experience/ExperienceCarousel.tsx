import React, { useRef, useState } from "react";
import Experience, { ExperienceProps } from ".";
import { classNames } from "../../utils";
import styles from "./ExperienceCarousel.module.scss";

export type ExperienceCarouselProps = {
  children:
    | React.ReactElement<ExperienceProps>
    | React.ReactElement<ExperienceProps>[];
  wrapperProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
};

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({
  children,
  wrapperProps = {},
}) => {
  const numberOfChildren = React.Children.count(children);
  const titles = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? (child.props as ExperienceProps).title
      : undefined
  ).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const experienceListRef = useRef<HTMLUListElement>(null);

  return (
    <section
      {...wrapperProps}
      className={classNames(["relative", wrapperProps.className])}
    >
      <ul
        className={classNames(["grid grid-rows-1 transition-transform"])}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          gridTemplateColumns: `repeat(${numberOfChildren}, 100%)`,
        }}
        aria-live="polite"
        ref={experienceListRef}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const props = child.props as ExperienceProps;
            return (
              <li
                key={child.key || props.title}
                aria-hidden={activeIndex !== index}
                className={classNames([
                  "row-start-1 transition-all",
                  activeIndex === index && "visible opacity-100",
                  activeIndex !== index && "invisible opacity-0",
                ])}
              >
                {child}
              </li>
            );
          }

          return null;
        })}
      </ul>

      <ul className="flex my-4 justify-center">
        {(activeIndex === numberOfChildren - 1
          ? [...titles].reverse()
          : titles
        ).map((title, index, arr) => {
          const isReversed = arr !== titles;
          const correctedIndex = isReversed
            ? Math.abs(index - (numberOfChildren - 1))
            : index;
          const isActiveIndex = correctedIndex === activeIndex;

          return (
            !isActiveIndex && (
              <li key={title} className="mr-4 last:mr-0">
                <button
                  className={"text-sm border-b-1 border-accent-500"}
                  onClick={() => {
                    setActiveIndex(correctedIndex);
                    experienceListRef.current?.scrollIntoView();
                  }}
                  disabled={isActiveIndex}
                  aria-label={`Learn about my experience at ${title}`}
                >
                  View {title}
                </button>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};

export default ExperienceCarousel;
