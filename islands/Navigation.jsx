import { JSX } from "preact";
import { useState } from "preact/hooks";

export default function Navigation({ links }) {
  const [activeLink, setActiveLink] = useState("#home");

  const activeLinkNavigation = (event) => {
    const scrollY = window.pageYOffset;
    const sections = [...event.target.body.children[0].children[1].children]
      .filter((elem) => elem.hasAttribute("id"));

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 282;

      if (scrollY >= sectionTop) {
        setActiveLink("#" + current.getAttribute("id"));
      }
    });
  };
  window.addEventListener("scroll", activeLinkNavigation);
  return (
    <nav class="flex items-center">
      <ul class=" inline-flex flex-col md:flex-row md:items-center gap-7 md:gap-7 lg:gap-14">
        {links.map((link, index) => (
          <li class="link-underline " key={index}>
            <a
              class={` transition-all duration-300 font-medium  cursor-pointer  ${
                activeLink === link.url ? "text-[#237BFF]" : "dark:text-white "
              }`}
              href={link.url}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
