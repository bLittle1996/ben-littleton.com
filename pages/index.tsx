import Head from "next/head";
import Image from "next/image";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Link from "../components/Link";
import jalupNextImage from "../public/images/projects/jalup-next.jpg";

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
          <h2 className="mb-3 mt-2">About Me</h2>

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

        <article id="projects">
          <h2 className="mb-3 mt-2">Projects</h2>

          <Experience
            image={jalupNextImage}
            title="Jalup NEXT"
            projectLink="https://japaneselevelup.com/jalup-next-web-app-shutting-down-service/"
            techUsed={[
              { name: "Laravel", link: "https://laravel.com/" },
              { name: "Vue", link: "https://vuejs.org/" },
              { name: "D3.js", link: "https://d3js.org/" },
              { name: "SASS", link: "https://sass-lang.com/" },
            ]}
          >
            Jalup NEXT is a web app designed to teach Japanese from zero in a
            very natural way. I created the schema used by the app{"'"}s
            database and built the RESTful API to talk to that database. I coded
            several quality of life features, such as card searching, and
            designed and built the exploration feature using d3.js, Vue.js, and
            Vuex.
          </Experience>
        </article>

        <article id="skills">
          <h2 className="mb-3 mt-2">Skills</h2>

          <p>
            I have experience working with the full web stack. I am proficient
            with the following: HTML5, CSS3, DOM, JavaScript, Vue.js, Vuex, Vue
            Router, jQuery, PHP, Laravel, and SQL databases
          </p>
        </article>
      </main>
    </div>
  );
}
