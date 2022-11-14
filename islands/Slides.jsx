import { useEffect, useRef, useState } from "preact/hooks";
import ModalPortfolio from "./ModalPortfolio.jsx";
import Card from "./Card.jsx";

export default function Slides({ projects }) {
  const [positionSlider, setPositionSlider] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [movePosition, setMovePosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [projectPortfolio, setProjectPortfolio] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const container = useRef(null);
  const track = useRef(null);

  const styleBottomSlider =
    "transition-all duration-300 w-10 h-10  rounded-2xl flex justify-center items-center text-[#237BFF] text-xl cursor-pointer  ";

  const slidesToScroll = 1;

  const changeSlidesToShow = () => {
    if (window.innerWidth <= 768) setSlidesToShow(1);
    if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setSlidesToShow(2);
    }
    if (window.innerWidth >= 1024) {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    setItemsCount(track.current.childElementCount);
    setItemWidth(container.current.clientWidth / slidesToShow);
  }, []);

  changeSlidesToShow();
  setMovePosition(slidesToScroll * itemWidth);

  const calcPosition = (itemsLeft) =>
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  const nextSlide = () => {
    const itemsLeft = itemsCount -
      (Math.abs(positionSlider) + slidesToShow * itemWidth) / itemWidth;

    setPositionSlider(positionSlider - calcPosition(itemsLeft));
  };

  const prevtSlide = () => {
    const itemsLeft = Math.abs(positionSlider) / itemWidth;
    setPositionSlider(positionSlider + calcPosition(itemsLeft));
  };

  const disabledPrev = () =>
    positionSlider === 0
      ? "dark:bg-[#201F38] bg-[#F8FAFC]"
      : "bg-blue-100 hover:scale-110";

  const disabledNext = () =>
    (positionSlider <= -(itemsCount - slidesToShow) * itemWidth)
      ? "dark:bg-[#201F38] bg-[#F8FAFC]"
      : "bg-blue-100 hover:scale-110";

  const openModal = (data) => {
    setShowModal(true);
    setProjectPortfolio(data);
  };

  const closeModal = () => setShowModal(false);

  const correctWithSlider = () => {
    changeSlidesToShow();
    setItemWidth(container.current?.clientWidth / slidesToShow);
    setMovePosition(slidesToScroll * itemWidth);
    setPositionSlider(0);
  };

  window.addEventListener("resize", correctWithSlider);
  return (
    <div class="relative mx-5 md:mx-0">
      <div class="absolute w-full -top-16 flex justify-end gap-3">
        <div
          class={`${styleBottomSlider + disabledPrev()} `}
          onClick={prevtSlide}
        >
          <i class="uil uil-angle-left-b"></i>
        </div>
        <div
          class={`${styleBottomSlider + disabledNext()}`}
          onClick={nextSlide}
        >
          <i class="uil uil-angle-right-b"></i>
        </div>
      </div>
      <div ref={container} class="overflow-hidden py-10">
        <div
          ref={track}
          class={`flex transition-all duration-1000  translate-x-[${positionSlider}px]`}
        >
          {projects.map((project) => (
            <div class={`min-w-[${itemWidth}px]`}>
              <Card openModal={openModal} project={project} />
            </div>
          ))}
        </div>
      </div>

      <ModalPortfolio
        showModal={showModal}
        projectPortfolio={projectPortfolio}
        closeModal={closeModal}
      />
    </div>
  );
}
