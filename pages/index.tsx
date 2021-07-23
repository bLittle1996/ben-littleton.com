import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const styles: any = {};

export default function Home() {
  return (
    <div>
      <Header
        links={[
          {
            text: "About",
            href: "/#about",
          },
          {
            text: "Projects",
            href: "/#projects",
          },
          {
            text: "Skills",
            href: "/#skills",
          },
          {
            text: "Contact",
            href: "/#contact",
          },
        ]}
      />
    </div>
  );
}
