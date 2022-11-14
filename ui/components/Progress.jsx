import { Fragment, JSX } from "preact";

export function Progress({ name, progress }) {
  return (
    <Fragment>
      <div class="flex justify-between pt-4">
        <h5 class="dark:text-white font-medium">{name}</h5>
        <span class="dark:text-white">{progress} %</span>
      </div>
      <div class=" w-full rounded-lg h-1 bg-blue-100 relative mb-2">
        <span
          class={`absolute left-0 w-[${progress}%] rounded-lg h-1 bg-[#237BFF]`}
        >
        </span>
      </div>
    </Fragment>
  );
}
