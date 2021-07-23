import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Link from "../components/Link";

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

      <main className="max-w-3xl mx-auto px-8">
        <article id="about">
          <h2 className="text-xl mb-3 mt-2">About Me</h2>

          <p>
            Hi, I am a Canadian web developer based in Southern Ontario. I have
            been programming and creating things since I was 13 years old.
            Nowadays I strive to create web applications that make a positive
            difference in people{"'"}s lives, no matter how small. I strive to
            learn at least one new thing everyday so that I can be better
            equipped to make that difference. If you want to take a look at what
            technologies and frameworks I am comfortable with, take a look at my{" "}
            <Link href="/#skills">skills</Link>.
          </p>
        </article>
      </main>
    </div>
  );
}
