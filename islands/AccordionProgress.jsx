import { useState } from "preact/hooks";
import { Progress } from "../ui/components/Progress.jsx";

export default function AccordionProgress({ progress }) {
  const [show, setShow] = useState(progress.start);

  const positionArrow = () => show ? "" : "-rotate-180";
  const showDetail = () => show ? "max-h-screen" : "max-h-0";

  const currentYear = new Date().getFullYear() - 2021;

  return (
    <div class="dark:bg-[#17172E] w-full text-center bg-white px-4 rounded-xl py-4">
      <div
        class="flex items-center justify-center cursor-pointer gap-4 "
        onClick={() => setShow(!show)}
      >
        <i class={`text-[#237BFF] text-2xl uil ${progress.icon}`}></i>
        <div class="text-left">
          <h4 class="dark:text-white">{progress.title}</h4>
          <span class="text-sm text-gray-400">
            More than {currentYear} years
          </span>
        </div>
        <i
          class={`transition-all duration-300  text-[#237BFF] text-2xl uil uil-angle-down  ${positionArrow()}`}
        >
        </i>
      </div>

      <div
        class={` transition-all duration-300 overflow-hidden pb-5 ${showDetail()}`}
      >
        {progress.frontend.map((item, index) => (
          <Progress name={item.name} progress={item.progress} key={index} />
        ))}
      </div>
    </div>
  );
}
