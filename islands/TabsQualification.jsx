import { useState } from "preact/hooks";
import TimeLines from "./TimeLines.jsx";

export default function TabsQualification({ qualification }) {
  const [show, setShow] = useState(false);
  return (
    <div class="mx-5 md:mx-0">
      <div class="flex justify-around  md:gap-24 pb-10">
        <div
          class="flex  gap-4 cursor-pointer hover:opacity-80"
          onClick={() => setShow(false)}
        >
          <i class={` text-[#237BFF] text-2xl uil uil-graduation-cap`}></i>
          <div class="dark:text-white text-left">
            <h4
              class={`dark:text-white ${
                !show && "dark:text-[#237BFF] text-[#237BFF]"
              }`}
            >
              Education
            </h4>
          </div>
        </div>
        <div
          class="flex gap-4 cursor-pointer hover:opacity-80"
          onClick={() => setShow(true)}
        >
          <i class={`text-[#237BFF] text-2xl uil uil-briefcase-alt`}></i>
          <div class="text-left">
            <h4
              class={`dark:text-white ${
                show && "dark:text-[#237BFF] text-[#237BFF]"
              }`}
            >
              Work
            </h4>
          </div>
        </div>
      </div>

      <div class="relative pb-32">
        <div
          class={`transition-all duration-300 absolute top-0 left-0 w-full ${
            show && "opacity-0"
          }`}
        >
          <TimeLines lists={qualification.educations} />
        </div>
        <div
          class={`transition-all duration-300 absolute top-0 left-0 w-full ${
            !show && "opacity-0"
          }`}
        >
          <TimeLines lists={qualification.works} />
        </div>
      </div>
    </div>
  );
}
