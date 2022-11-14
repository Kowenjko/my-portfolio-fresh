import { JSX } from "preact";
import { Button } from "../ui/components/Button.tsx";
import Navigation from "../islands/Navigation.jsx";
import SwitchTheme from "../islands/SwitchTheme.tsx";
import MobileHeader from "../islands/MobileHeader.jsx";

export function Header() {
  const links = [
    { name: "Home", url: "#home" },
    { name: "Services", url: "#services" },
    { name: "Skills", url: "#skills" },
    { name: "Portfolios", url: "#portfolios" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header class="fixed w-full z-10 dark:bg-[#17172Ee6] bg-[#ffffffe6]">
      <div class="px-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex items-center justify-between h-16 ">
        <a class=" font-bold dark:text-white" href="#home">Kovenko</a>
        <div class="hidden md:block">
          <Navigation links={links} />
        </div>
        <div class="hidden md:flex items-center gap-2">
          <SwitchTheme />
          <a
            href="/resume.pdf"
            class="transition-all duration-300  rounded-lg px-5 py-2 bg-[#237BFF] text-white hover:bg-blue-700 cursor-pointer"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <MobileHeader links={links} />
      </div>
    </header>
  );
}
