import "@testing-library/jest-dom";
import * as NextImage from "next/image";
import { ImageProps } from "next/image";

const ActualNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  // eslint-disable-next-line react/display-name
  value: (props: ImageProps) => <ActualNextImage {...props} unoptimized />,
});
