"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import {
  A11y,
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import useWindowDimensions from "hooks/useWindowDimensions";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomSectionHeading from "components/common/customSectionHeading";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { width } = useWindowDimensions();

  const portfolioData = [
    {
      image: Images.PortfolioSlider1,
      title: "Brand Identity Design",
      desc: "Crafting unique logos, typography, and color palettes to establish strong brand presence.",
    },
    {
      image: Images.PortfolioSlider2,
      title: "Website Development",
      desc: "Building responsive, high-performance websites tailored to your business needs.",
    },
    {
      image: Images.PortfolioSlider3,
      title: "Social Media Marketing",
      desc: "Creating engaging campaigns to boost brand awareness and audience interaction.",
    },
    {
      image: Images.PortfolioSlider1,
      title: "Video Production",
      desc: "Producing high-quality promotional videos, ads, and animations for digital platforms.",
    },
    {
      image: Images.PortfolioSlider2,
      title: "SEO & Digital Advertising",
      desc: "Optimizing websites and running targeted ad campaigns for maximum online visibility.",
    },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <CustomAnimatedBorder
          gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
          animationSpeed="5s"
          borderRadius="8px"
        >
          <div className={classNames(styles.sliderWrapper)}>
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
              spaceBetween={15}
              slidesPerView={width > 992 ? 3 : width > 768 ? 2 : 1}
              loop={true}
              centeredSlides={width > 992 && true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              effect="fade"
              speed={800}
              fadeEffect={{ crossFade: true }}
              breakpoints={{
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              modules={[
                Pagination,
                Navigation,
                A11y,
                Autoplay,
                EffectCoverflow,
              ]}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
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
    </section>
  );
};

export default Testimonials;
