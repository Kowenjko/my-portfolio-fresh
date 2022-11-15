import { JSX } from "preact";

export default function SvgLayout({ children, classSvg }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={`${classSvg}`}
    >
      {children}
    </svg>
  );
}
