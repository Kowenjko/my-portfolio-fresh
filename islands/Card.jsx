import { JSX } from "preact";

export default function Card({ openModal, project }) {
  return (
    <div class="dark:bg-[#201F38] overflow-hidden transition-all duration-300 rounded-lg shadow-xl mx-2 cards-slider hover:-translate-x-1 hover:-translate-y-1 cursor-pointer">
      <a onClick={() => openModal(project)}>
        <img
          class="rounded-t-lg object-cover h-56 w-full opacity-50 transition-all duration-300"
          src={`${project.imageUrl}`}
          alt={project.title}
        />
      </a>

      <div class="p-6">
        <h5 class="dark:text-white font-medium">{project.title}</h5>
        <p class="text-[#656D72] text-xs pt-1">{project.category}</p>
        <div class="flex gap-2 pt-4">
          {project.keywords.map((keyword) => (
            <div class="transition-all duration-300 dark:text-white inline-block text-[#656D72] text-xs rounded border border-[#F5F5F5] px-2 py-1 dark:hover:text-[#201F38] hover:bg-[#F5F5F5]">
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
