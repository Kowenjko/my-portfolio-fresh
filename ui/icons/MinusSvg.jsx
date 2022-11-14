import { JSX } from "preact";
import SvgLayout from "../../components/layouts/SvgLayout.jsx";

export default function MinusSvg({ custom = "", classSvg = "w-6 h-6" }) {
  return (
    <span class={`${custom}`}>
      <SvgLayout classSvg={classSvg}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
      </SvgLayout>
    </span>
  );
}
