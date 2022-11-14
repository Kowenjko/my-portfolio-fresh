import { JSX } from "preact";
import MinusSvg from "../icons/MinusSvg.jsx";

export function TitleCategory({ title, customClass = "" }) {
  return (
    <div class={`flex items-center gap-2 ${customClass}`}>
      <MinusSvg custom="dark:text-gray-500 text-[#d9d9d9] " />
      <span class="dark:text-gray-500 text-[#656d72] tracking-[7.5px] uppercase text-xs">
        {title}
      </span>
    </div>
  );
}
