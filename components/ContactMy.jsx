import { JSX } from "preact";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";
import FormContact from "../islands/FormContact.jsx";

export function ContactMy() {
  const contacts = [
    { name: "Address", info: "Rivne", icon: "uil-location-point" },
    {
      name: "Telegram",
      info: "https://t.me/VasyaKow",
      icon: "uil-telegram-alt",
    },
    { name: "Email", info: "ortoswt@gmail.com", icon: "uil-envelope-alt" },
  ];
  return (
    <section id="contact" class="dark:bg-[#201F38] bg-[#F8FAFC]">
      <div class="max-w-screen-lg mx-auto pt-14 pb-5 md:py-24">
        <div class="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mx-5">
          <div class="w-full md:w-1/2">
            <FormContact />
          </div>
          <div class="w-full md:w-1/2">
            {contacts.map((contact) => (
              <div class="flex items-center gap-6 my-10">
                <div class="flex justify-center items-center w-14 h-14 bg-blue-100 text-xl rounded-2xl text-[#237bff]">
                  <i class={`uil ${contact.icon}`}></i>
                </div>
                <div class="flex flex-col">
                  <h5 class="dark:text-white font-medium">{contact.name}</h5>
                  <p class="text-sm text-gray-400
                    ">
                    {contact.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
