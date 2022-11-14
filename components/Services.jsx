import { JSX } from "preact";
import { TitleCategory } from "../ui/components/TitleCategory.jsx";

export function Services() {
  const services = [
    {
      title: "Application Development",
      icon: "uil-layer-group",
      description:
        "Standard designing, building, and implementing your applications.",
    },
    {
      title: "Web Development",
      icon: "uil-globe",
      description:
        "I create and maintain websites, according to the chosen design.",
    },
    {
      title: "Mobile Development",
      icon: "uil-android-alt",
      description:
        "I can quickly master technologies for developing mobile applications.",
    },
    {
      title: "Web Scraping",
      icon: "uil-servers",
      description:
        "I can collect content and data from the internet then manipulate and analyze as needed.",
    },
  ];
  return (
    <section id="services" class="dark:bg-[#201F38] bg-[#F8FAFC]">
      <div class="max-w-screen-lg mx-auto pt-14 md:pt-24">
        <TitleCategory customClass="justify-center" title="Services" />
        <h3 class="dark:text-white text-center py-3">Specialized in</h3>
        <div class="flex flex-wrap md:flex-nowrap gap-6 py-14 md:py-24">
          {services.map((service, index) => (
            <div class="dark:bg-[#17172E] w-full rounded-lg flex flex-col items-center  bg-white mx-5 md:mx-0">
              <div
                class="flex justify-center items-center w-14 h-14 bg-blue-100 text-xl rounded-2xl text-[#237bff] mt-12"
                key={index}
              >
                <i class={`uil ${service.icon}`}></i>
              </div>
              <h5 class="dark:text-white py-6 font-medium">{service.title}</h5>
              <p class="dark:text-white text-center px-3 text-sm pb-12">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <h3 class="dark:text-white text-center">Tecnologias</h3>
        <div class="text-3xl flex justify-center flex-wrap gap-5 md:gap-7 text-blue-300 py-14 md:py-24 mx-5 md:mx-0">
          <i class="devicon-html5-plain-wordmark "></i>
          <i class="devicon-css3-plain-wordmark "></i>
          <i class="devicon-gulp-plain "></i>
          <i class="devicon-sass-original "></i>
          <i class="devicon-tailwindcss-plain "></i>
          <i class="devicon-bootstrap-plain-wordmark "></i>
          <i class="devicon-materialui-plain "></i>
          <i class="devicon-vuetify-line "></i>
          <i class="devicon-javascript-plain "></i>
          <i class="devicon-typescript-plain "></i>
          <i class="devicon-react-original "></i>
          <i class="devicon-redux-original "></i>
          <i class="devicon-vuejs-plain "></i>
          <i class="devicon-nuxtjs-plain-wordmark "></i>

          <i class="devicon-shopware-original-wordmark "></i>
          <i class="devicon-vuestorefront-plain "></i>

          <i class="devicon-firebase-plain-wordmark "></i>
          <i class="devicon-mysql-plain-wordmark "></i>
          <i class="devicon-postgresql-plain-wordmark "></i>

          <i class="devicon-denojs-original-wordmark "></i>
          <i class="devicon-c-plain"></i>
          <i class="devicon-python-plain-wordmark "></i>
          <i class="devicon-django-plain "></i>

          <i class="devicon-git-plain "></i>
          <i class="devicon-npm-original-wordmark "></i>
          <i class="devicon-yarn-plain-wordmark"></i>

          <i class="devicon-github-original"></i>
          <i class="devicon-gitlab-plain"></i>

          <i class="devicon-figma-plain "></i>
          <i class="devicon-photoshop-plain "></i>

          <i class="devicon-vscode-plain "></i>
          <i class="devicon-docker-plain-wordmark "></i>
          <i class="devicon-slack-plain "></i>
          <i class="devicon-jira-plain-wordmark"></i>
          <i class="devicon-ubuntu-plain "></i>
          <i class="devicon-windows8-original"></i>
        </div>
      </div>
    </section>
  );
}
