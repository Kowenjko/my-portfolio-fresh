import { JSX } from "preact";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";
import Slides from "../islands/Slides.jsx";

export function Works() {
  const workProjects = [
    {
      title: "Jounce",
      git: false,
      href: "#",
      keywords: ["Vue", "Vite", "Tailwind", "Firebase"],
      category: "E-Mail System",
      description: "Newsletter System with Email and Flow builder.",
      imageUrl: "/webp/jounce.webp",
    },
    {
      title: "NewPet",
      git: false,
      href: "https://pfotenkompass.fressnapf.de/",
      keywords: ["Nuxt", "Vuetify"],
      category: "Pet shelter service",
      description:
        "Developed the frontend based on the design, connecting to the backend CRUD, JWT authorization.",
      imageUrl: "/webp/newpet.webp",
    },
    {
      title: "Bitburger",
      git: false,
      href: "#",
      keywords: ["Shopware", "Vue"],
      category: "Online-Shop",
      description: "Made design changes, developed functionality.",
      imageUrl: "/webp/pitburger.webp",
    },
    {
      title: "Mylo",
      git: false,
      href: "https://mylo.de/pages/suewag-ebike-abo",
      keywords: ["Shopify"],
      category: "Online-Shop",
      description: "Creation of individual sections by design",
      imageUrl: "/webp/mylo.webp",
    },
    {
      title: "Planted",
      git: false,
      href: "https://uk.shop.eatplanted.com/",
      keywords: ["Shopify"],
      category: "Online-Shop",
      description: "Made changes to the frontend design.",
      imageUrl: "/webp/planted.webp",
    },
    {
      title: "Purenature",
      git: false,
      href: "https://www.purenature-shop.de/",
      keywords: ["Shopify"],
      category: "Online-Shop",
      description: "Made changes to the frontend design.",
      imageUrl: "/webp/purenature.webp",
    },
  ];

  return (
    <section id="portfolios" class="dark:bg-[#17172E]">
      <div class="max-w-screen-lg mx-auto py-14 md:py-24 ">
        <div class="flex justify-between items-center mx-5 md:mx-0">
          <div>
            <TitleCategory title="My Works" />
            <h3 class="dark:text-white py-3">Portfolios</h3>
          </div>
        </div>
        <Slides projects={workProjects} />
      </div>
    </section>
  );
}
