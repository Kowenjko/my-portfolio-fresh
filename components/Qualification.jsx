import { JSX } from "preact";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";
import TabsQualification from "../islands/TabsQualification.jsx";

export function Qualification() {
  const qualification = {
    educations: [
      {
        title: "Automation and computer-integrated technologies",
        city: "Rivne - NUWEE",
        date: "2001 - 2006",
      },
      {
        title: "Development of Web projects on Python",
        city: "Rivne - IT Academy Step",
        date: "2020 - 2021",
      },
    ],
    works: [
      {
        title: "Volunteer work",
        city: "Rivne - IT Academy Step",
        date: "2021",
      },
      {
        title: "Web Development",
        city: "Nexoft UG",
        date: "2021 - 2022",
      },
    ],
  };
  return (
    <section class="dark:bg-[#201F38] bg-[#F8FAFC]">
      <div class="max-w-screen-lg mx-auto pt-14 pb-52 md:py-24">
        <TitleCategory customClass="justify-center" title="Qualification" />
        <h3 class="dark:text-white text-center py-3">My personal journey</h3>
        <TabsQualification qualification={qualification} />
      </div>
    </section>
  );
}
