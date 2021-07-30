import tailwindcss from "tailwindcss";
import postcss from "postcss";
import twConfig from "./tailwind.config";
import fs from "fs";
import path from "path";
import { render } from "@testing-library/react";
// Inject tailwind CSS into document
export const generateTailwindCSS = () => {
  const tailwindFile = fs.readFileSync(path.resolve("./styles/tailwind.css"));

  return postcss(tailwindcss(twConfig))
    .process(tailwindFile, { from: undefined })
    .then((result) => result.css);
};

export const injectCSSIntoContainer = (
  container: HTMLElement,
  cssString: string
) => {
  const style = document.createElement("style");
  style.innerHTML = cssString;

  container.appendChild(style);

  return style;
};
