import { JSX } from "preact";

export function SocialLinks() {
  const socialLinks = [
    { icon: "uil-linkedin-alt", url: "https://www.linkedin.com/in/kovenko" },
    { icon: "uil-dribbble", url: "https://dribbble.com/" },
    { icon: "uil-github-alt", url: "https://github.com/kowenjko" },
  ];
  return (
    <div class="flex gap-8 ">
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          target="_blank"
          class="text-xl transition-all duration-300 dark:text-white hover:text-[#237BFF] "
          key={index}
        >
          <i class={`uil ${link.icon}`}></i>
        </a>
      ))}
    </div>
  );
}
