import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const classButton =
    "transition-all duration-300  rounded-lg px-5 py-2 bg-[#237BFF] text-white hover:bg-blue-700 focus:outline-none";
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={classButton}
    />
  );
}
