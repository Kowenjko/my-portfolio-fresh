import { JSX } from "preact";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";
import AccordionProgress from "../islands/AccordionProgress.jsx";

export function Skills() {
  const progressFrontent = {
    start: true,
    title: "Frontent developer",
    icon: "uil-brackets-curly",
    frontend: [
      { name: "HTML", progress: 90 },
      { name: "CSS", progress: 90 },
      { name: "JavaScript", progress: 80 },
      { name: "React", progress: 60 },
      { name: "Vue 3", progress: 85 },
    ],
  };
  const progressBackend = {
    start: false,
    title: "Backend developer",
    icon: "uil-server-network",
    frontend: [
      { name: "Python", progress: 80 },
      { name: "Node", progress: 40 },
      { name: "Deno", progress: 40 },
      { name: "Firebase", progress: 70 },
      { name: "PostgresSQL", progress: 75 },
    ],
  };

  return (
    <section id="skills" class="dark:bg-[#17172E]">
      <div class="max-w-screen-lg mx-auto py-14 md:py-24">
        <TitleCategory customClass="justify-center" title="Skills" />
        <h3 class="dark:text-white text-center py-3">My technical level</h3>
        <div class="flex flex-col md:flex-row justify-center gap-0 md:gap-24 mx-5 md:mx-0">
          <AccordionProgress progress={progressFrontent} />
          <AccordionProgress progress={progressBackend} />
        </div>
      </div>
    </section>
  );
}
