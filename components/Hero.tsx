import { JSX } from "preact";
import { SocialLinks } from "../ui/components/SolialLinks.tsx";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";

export function Hero() {
  return (
    <section id="home" class="dark:bg-[#17172E] px-2">
      <div class=" md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col md:flex-row  space-x-2 items-center justify-center pt-24 md:pt-40 pb-14  md:pb-24 gap-7">
        <div class="w-full md:w-1/3 md:order-1 flex md:block justify-center">
          <div class="relative wrapper-hero__image cursor-pointer ">
            <div class="h-[350px] w-72 md:h-96 md:w-80 bg-[#237BFF] wrapper-hero__back transition-all duration-300 rounded-2xl -rotate-[10deg]">
            </div>
            <div class="h-[350px] w-72 md:h-96 md:w-80 bg-[#EAE6FE] absolute rounded-2xl top-0 left-0 overflow-hidden">
              <img
                class="absolute bottom-0 -left-12"
                src="/i.webp"
                alt="Kovenko"
              />
              <img
                class="absolute -top-2 -right-2 md:top-0 md:right-0 scale-[0.9] md:scale-100"
                src="/lines.webp"
                alt="line"
              />
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/3 px-3 md:px-0">
          <TitleCategory customClass="pt-4" title="My name is" />
          <div class="text-4xl md:text-5xl font-bold dark:text-white text-[#232e35]">
            Vasya <span class="text-[#237BFF]">Kovenko</span>
          </div>
          <p class="dark:text-white py-8 md:w-auto lg:w-[538px] leading-8">
            Front-end developer with more than +1 year of experience in a
            corporate company. I am proficient in JavaScript, Vue, React and
            Python.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
