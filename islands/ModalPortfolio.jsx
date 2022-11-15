export default function ModalPortfolio(
  { projectPortfolio, closeModal, showModal },
) {
  const styleShowModal = showModal && "opacity-100 scale-100";
  return (
    <div
      class={`fixed top-0 left-0  dark:bg-[#17172ed2] bg-[#18294345] transition-all duration-300 z-50 w-full h-screen opacity-0 scale-0 flex justify-center items-center ${styleShowModal}`}
    >
      <div
        class="absolute text-2xl top-4 right-4 text-white hover:scale-110 cursor-pointer "
        onClick={() => closeModal()}
      >
        <i class="uil uil-multiply"></i>
      </div>
      <div class=" dark:bg-[#17172E] bg-white rounded-lg max-w-[800px]">
        <img
          class="rounded-t-lg object-cover w-full"
          src={`${projectPortfolio?.imageUrl}`}
          alt={projectPortfolio?.title}
        />
        <div class="p-6 ">
          <div class="flex justify-between items-center">
            <div>
              <h5 class="dark:text-white font-medium">
                {projectPortfolio?.title}
              </h5>
              <p class="text-[#656D72] text-xs pt-1">
                {projectPortfolio?.category}
              </p>
            </div>
            <a
              href={projectPortfolio?.href}
              class="dark:text-white text-xs dark:hover:text-[#237BFF] hover:text-[#237BFF] transition-all duration-300"
              target="_blank"
            >
              {projectPortfolio?.git
                ? <i class="uil uil-github text-3xl"></i>
                : projectPortfolio?.href}
            </a>
          </div>

          <div class="flex gap-4 py-4">
            {projectPortfolio?.keywords.map((keyword) => (
              <div class=" inline-block dark:text-white text-[#656D72] text-xs rounded border border-[#F5F5F5] px-2 py-1">
                {keyword}
              </div>
            ))}
          </div>
          <p class="dark:text-white text-sm">{projectPortfolio?.description}</p>
        </div>
      </div>
    </div>
  );
}
