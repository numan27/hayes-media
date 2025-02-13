"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Images } from "assets";
import Image from "next/image";
import useWindowDimensions from "hooks/useWindowDimensions";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomSectionHeading from "components/common/customSectionHeading";
import VideoModal from "modals/videoModal";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const Portfolio = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    video: string;
  } | null>(null);
  const [muted, setMuted] = useState<boolean>(true);
  const { width } = useWindowDimensions();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [portfolioModal, setPortfolioModal] = useState(false);

  const portfolioData = [
    {
      video: "/portfolio/CampVideo1.mp4",
    },
    {
      video: "/portfolio/BogStreet1.mp4",
    },
    {
      video: "/portfolio/Comp7.mp4",
    },
    {
      video: "/portfolio/GlitchfestCommercial.mp4",
    },
    {
      video: "/portfolio/LineUpRelease.webm",
    },
    {
      video: "/portfolio/OpenerComp.webm",
    },
    {
      video: "/portfolio/Reel1.webm",
    },
    {
      video: "/portfolio/TheGoldenClip.webm",
    },
    {
      video: "/portfolio/Video1.webm",
    },
    {
      video: "/portfolio/Video20.webm",
    },
    { doc: "/public/portfolio/portfolio-doc-1.pdf" },
    { doc: "/public/portfolio/portfolio-doc-2.pdf" },
    { img: Images.PortfolioImgHayes1 },
    { img: Images.PortfolioImgHayes2 },
    { img: Images.PortfolioImgHayes3 },
    { img: Images.PortfolioImgHayes4 },
    { img: Images.PortfolioImgHayes5 },
  ];
  const [mutedVideos, setMutedVideos] = useState<boolean[]>(
    portfolioData.map(() => true)
  );

  const toggleMute = (index: number) => {
    setMutedVideos((prev) => {
      const newMutedStates = [...prev];
      newMutedStates[index] = !newMutedStates[index];

      if (videoRefs.current[index]) {
        videoRefs.current[index]!.muted = newMutedStates[index];
      }

      return newMutedStates;
    });
  };

  useEffect(() => {
    // Ensure only the active video is played
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    if (swiperInstance) {
      if (isHovered) {
        swiperInstance.autoplay.start(); // Start autoplay on hover
      } else {
        swiperInstance.autoplay.stop(); // Stop autoplay on mouse leave
      }
    }
  }, [isHovered, swiperInstance]);

  // useEffect(() => {
  //   if (swiperInstance) {
  //     isHovered
  //       ? swiperInstance.autoplay.start()
  //       : swiperInstance.autoplay.stop();
  //   }
  // }, [isHovered, swiperInstance]);

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <CustomAnimatedBorder
          gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
          animationSpeed="5s"
          borderRadius="8px"
        >
          <div
            className={classNames(styles.sliderWrapper)}
            onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
          >
            <CustomSectionHeading centered heading="OUR PREVIOUS WORK" />
            {/* Left Navigation Button */}
            <button
              className={classNames(styles.swiperButton, styles.prevButton)}
              onClick={() => swiperInstance?.slidePrev()}
            >
              <Image src={Images.SliderArrowLeft} alt="icon" />
            </button>

            <Swiper
              className={classNames(
                styles.newsSlider,
                "newsSlider w-10/12 mx-auto"
              )}
              slidesPerView={width > 992 ? 3 : width > 768 ? 2 : 1}
              loop={true}
              spaceBetween={15}
              centeredSlides={width > 992 && true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              speed={800}
              breakpoints={{
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              modules={[Pagination, Navigation, A11y, Autoplay]}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {portfolioData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={classNames(
                    "swiper-slide",
                    "transition-all duration-200 ease-in-out",
                    {
                      [styles.activeSlide]: index === activeIndex,
                      [styles.hoveredSlide]:
                        index === hoveredIndex && index !== activeIndex,
                    }
                  )}
                  onClick={() => {
                    // @ts-ignore
                    setSelectedVideo(item);
                    setPortfolioModal(true);
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={classNames(styles.reviewItem, "relative h-full")}
                  >
                    {item.video ? (
                      <>
                        <video
                          // @ts-ignore
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="absolute inset-0 w-full h-full object-contain"
                          src={item.video}
                          loop
                          muted={mutedVideos[index]}
                        />

                        <span>
                          <button
                            className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute(index);
                            }}
                          >
                            {mutedVideos[index] ? (
                              <MdVolumeOff size={20} color="#fff" />
                            ) : (
                              <MdVolumeUp size={20} color="#fff" />
                            )}
                          </button>
                        </span>
                      </>
                    ) : (
                      <Image
                        className="absolute inset-0"
                        // @ts-ignore
                        src={item?.image}
                        alt="slider-img"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Navigation Button */}
            <button
              className={classNames(styles.swiperButton, styles.nextButton)}
              onClick={() => swiperInstance?.slideNext()}
            >
              <Image src={Images.SliderArrowRight} alt="icon" />
            </button>
          </div>
        </CustomAnimatedBorder>
      </div>
      <VideoModal
        isOpen={portfolioModal}
        onClose={() => setPortfolioModal(false)}
        // @ts-ignore
        videoSrc={selectedVideo?.video}
      />
    </section>
  );
};

export default Portfolio;
