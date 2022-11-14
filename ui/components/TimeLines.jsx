import { Fragment, JSX } from "preact";

export function TimeLines({ lists }) {
  const listsLenght = lists.length;
  return (
    <Fragment>
      {lists.map((item, index) => (
        <div class="flex " key={index}>
          <div class="w-[48%] flex  justify-end">
            {index % 2 == 0 &&
              (
                <div class="pr-[2%]">
                  <h5 class="dark:text-white font-medium">
                    {item.title}
                  </h5>
                  <span class="dark:text-white text-sm">
                    {item.city}
                  </span>
                  <div class="text-gray-400 text-sm">
                    <i class="uil uil-calendar-alt pr-2"></i>
                    {item.date}
                  </div>
                </div>
              )}
          </div>
          <div class="w-[7%] md:w-[4%] pl-[0.2%]  md:pl-[1.2%]">
            <span class="w-3 h-3 bg-[#237BFF] block rounded-full"></span>
            <span class="inline-block w-[1px] bg-[#237BFF] h-full translate-x-[6px] -translate-y-[7px]">
            </span>
            {listsLenght > index &&
              (
                <span class="w-3 h-3 bg-[#237BFF] inline-block rounded-full">
                </span>
              )}
          </div>
          <div class="w-[48%] ">
            {index % 2 !== 0 &&
              (
                <div class="pr-[2%]">
                  <h5 class="dark:text-white font-medium">
                    {item.title}
                  </h5>
                  <span class="dark:text-white text-sm">
                    {item.city}
                  </span>
                  <div class="text-gray-400 text-sm">
                    <i class="uil uil-calendar-alt pr-2"></i>
                    {item.date}
                  </div>
                </div>
              )}
          </div>
        </div>
      ))}
    </Fragment>
  );
}
