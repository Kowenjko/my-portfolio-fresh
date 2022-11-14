import { JSX } from "preact";
import Navigation from "./Navigation.jsx";
import SwitchTheme from "./SwitchTheme.tsx";
import { useState } from "preact/hooks";

export default function MobileHeader({ links }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  return (
    <>
      <div
        class="transition-all duration-300 flex md:hidden text-3xl cursor-pointer dark:text-white hover:text-[#237BFF]"
        onClick={openSidebar}
      >
        <i class="uil uil-bars"></i>
      </div>
      <div
        class={` fixed top-0 right-0 bg-[#0c0c0ca6] h-screen ${
          showSidebar ? " w-full" : " w-0"
        }`}
      >
        <div
          class={`dark:bg-[#201F38] transition-all duration-700 fixed right-0  bg-white h-screen ${
            showSidebar ? "w-[60%]" : "w-0"
          }`}
        >
          <div class="flex w-full justify-between items-center py-5 px-6">
            <SwitchTheme />
            <div
              class=" text-2xl dark:text-white text-black hover:scale-110 cursor-pointer "
              onClick={closeSidebar}
            >
              <i class="uil uil-multiply"></i>
            </div>
          </div>

          <div class="w-full px-6">
            <Navigation links={links} />
            <div class="py-20">
              <a
                href="/resume.pdf"
                class="transition-all duration-300  rounded-lg px-5 py-2 bg-[#237BFF] text-white hover:bg-blue-700 cursor-pointer"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
