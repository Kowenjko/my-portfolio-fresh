import { Head } from "$fresh/runtime.ts";

import BaseLayout from "../components/layouts/BaseLayout.jsx";
import { Hero } from "../components/Hero.tsx";
import { Services } from "../components/Services.jsx";
import { Skills } from "../components/Skills.jsx";
import { Qualification } from "../components/Qualification.jsx";
import { Works } from "../components/Works.jsx";
import { TestProjects } from "../components/TestProjects.jsx";
import { ContactMy } from "../components/ContactMy.jsx";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Services />
      <Skills />
      <Qualification />
      <Works />
      <TestProjects />
      <ContactMy />
    </BaseLayout>
  );
}
