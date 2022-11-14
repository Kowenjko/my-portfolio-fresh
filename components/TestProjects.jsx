import { JSX } from "preact";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";
import Slides from "../islands/Slides.jsx";

export function TestProjects() {
  const testProjects = [
    {
      title: "Todo",
      git: true,
      href: "https://github.com/Kowenjko/todo-list-vue.git",
      keywords: ["Vue 3 composition"],
      category: "Todo list",
      description:
        "Demonstration site of the capabilities of Vue 3 composition.",
      imageUrl: "/webp/todo-vue.webp",
    },
    {
      title: "Game Marine Battle",
      git: true,
      href: "https://github.com/Kowenjko/See_batle_v2.git",
      keywords: ["HTML", "CSS", "JavaScript"],
      category: "Game",
      description:
        "The game is written on JS, the placement of ships can be automatic or manually. Rules are standard. Wins someone who will find all ships.",
      imageUrl: "/webp/mb.webp",
    },
    {
      title: "Movie Viewing",
      git: true,
      href: "https://github.com/Kowenjko/Kursova_2_JS_Kowenjko.git",
      keywords: ["HTML", "CSS", "JavaScript"],
      category: "Video",
      description:
        "The demonstration site is written on a clean JS without libraries, a minimum of HTML. An animation is present. Source News API.",
      imageUrl: "/webp/movie_js.webp",
    },
    {
      title: "World News",
      git: true,
      href: "https://github.com/Kowenjko/Kursova_JS_Kowenjko.git",
      keywords: ["HTML", "CSS", "JavaScript"],
      category: "News",
      description:
        "The demonstration site is written on a clean JS without libraries, a minimum of HTML. An animation is present. Source News API.",
      imageUrl: "/webp/news.webp",
    },
    {
      title: "React-Bootstrap",
      git: true,
      href: "https://github.com/Kowenjko/React_Bootstrap.git",
      keywords: ["React", "Bootstrap"],
      category: "Info",
      description:
        "In this project, the main components of REACT-BOOTSTRAP are used. To demonstrate the theme `History of Windows`.",
      imageUrl: "/webp/bootstrap_react.webp",
    },
    {
      title: "Contact List",
      git: true,
      href: "https://github.com/Kowenjko/React_Homework_1_Kowenjko.git",
      keywords: ["React", "Redux", "Bootstrap", "FireBase"],
      category: "List",
      description:
        "Demonstration site with contacts written on REACT - Redux + React - Bootstrap + React - Fontawesome. The list is written and read from FireBase.",
      imageUrl: "/webp/List.webp",
    },
    {
      title: "Material-UI",
      git: true,
      href: "https://github.com/Kowenjko/React_Material_UI.git",
      keywords: ["React", "Material-UI"],
      category: "Info",
      description: "The demonstration site on React where Material-UI is used.",
      imageUrl: "/webp/Material_ui.webp",
    },
    {
      title: "Yourcar",
      git: true,
      href: "https://github.com/Kowenjko/React_Yourcar.git",
      keywords: ["React", "Styled-Components", "Tailwind"],
      category: "Info",
      description:
        "The demonstration site is written on React where Styled-Components are used, Tailwind CSS.",
      imageUrl: "/webp/car.webp",
    },
    {
      title: "Internet-shop",
      git: true,
      href: "https://github.com/Kowenjko/React_Yourcar.git",
      keywords: ["React", "Redux"],
      category: "Shop",
      description:
        "The demonstration site of the online store of computer technology with the ability to add or remove goods from the basket. Written on React, Redux, Middleware.",
      imageUrl: "/webp/Shop.webp",
    },
    {
      title: "Movie React",
      git: true,
      href: "https://github.com/Kowenjko/Movie_React.git",
      keywords: ["React", "Styled-Components"],
      category: "Video",
      description:
        "Demonstration site on React + Hooks + Styled-Components. Outputs information about movies. TMDB API source.",
      imageUrl: "/webp/Movie_React.webp",
    },
  ];

  return (
    <section class="dark:bg-[#17172E]">
      <div class="max-w-screen-lg mx-auto pb-14 md:py-24 ">
        <div class="flex justify-between items-center mx-5 md:mx-0">
          <div>
            <TitleCategory title="My Test Works" />
            <h3 class="dark:text-white py-3">Portfolios</h3>
          </div>
        </div>
        <Slides projects={testProjects} />
      </div>
    </section>
  );
}
