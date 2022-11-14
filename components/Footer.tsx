import { JSX } from "preact";
import { SocialLinks } from "../ui/components/SolialLinks.tsx";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const nextYear = new Date().getFullYear() + 1;
  return (
    <footer class="dark:bg-[#17172E] px-2 py-12 flex flex-col items-center justify-center">
      <SocialLinks />
      <p class="dark:text-white text-sm mt-4">
        &copy; {currentYear} - {nextYear} @Kovenko
      </p>
    </footer>
  );
}
