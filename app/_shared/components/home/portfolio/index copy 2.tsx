// "use client";

// import { useState, useRef, useEffect } from "react";
// import classNames from "classnames";
// import styles from "./style.module.scss";
// import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
// import { Images } from "assets";
// import Image from "next/image";
// import useWindowDimensions from "hooks/useWindowDimensions";
// import CustomAnimatedBorder from "components/common/customAnimatedBorder";
// import CustomSectionHeading from "components/common/customSectionHeading";
// import PortfolioModal from "modals/portfolioModal";
// import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

// const Portfolio = () => {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
//     null
//   );
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [isHovered, setIsHovered] = useState<boolean>(false);
//   const [selectedItem, setSelectedItem] = useState<{
//     type: "video" | "image" | "pdf";
//     src: string;
//   } | null>(null);
//   const { width } = useWindowDimensions();
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
//   const [portfolioModal, setPortfolioModal] = useState(false);

//   const portfolioData = [
//     { type: "video", src: "/portfolio/CampVideo1.mp4" },
//     { type: "video", src: "/portfolio/BogStreet1.mp4" },
//     { type: "video", src: "/portfolio/Comp7.mp4" },
//     { type: "video", src: "/portfolio/GlitchfestCommercial.mp4" },
//     { type: "video", src: "/portfolio/LineUpRelease.webm" },
//     { type: "video", src: "/portfolio/OpenerComp.webm" },
//     { type: "video", src: "/portfolio/Reel1.webm" },
//     { type: "video", src: "/portfolio/TheGoldenClip.webm" },
//     { type: "video", src: "/portfolio/Video1.webm" },
//     { type: "video", src: "/portfolio/Video20.webm" },
//     { type: "pdf", src: "/portfolio/portfolio-doc-1.pdf" },
//     { type: "pdf", src: "/portfolio/portfolio-doc-2.pdf" },
//     { type: "image", src: Images.PortfolioImgHayes1 },
//     { type: "image", src: Images.PortfolioImgHayes2 },
//     { type: "image", src: Images.PortfolioImgHayes3 },
//     { type: "image", src: Images.PortfolioImgHayes4 },
//     { type: "image", src: Images.PortfolioImgHayes5 },
//   ];

//   return (
//     <section className={classNames(styles.sectionContainer)}>
//       <div className={classNames(styles.customContainer)}>
//         <CustomAnimatedBorder
//           gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
//           animationSpeed="5s"
//           borderRadius="8px"
//         >
//           <div
//             className={classNames(styles.sliderWrapper)}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <CustomSectionHeading centered heading="OUR PREVIOUS WORK" />

//             <Swiper
//               className={classNames(
//                 styles.newsSlider,
//                 "newsSlider w-10/12 mx-auto"
//               )}
//               slidesPerView={width > 992 ? 3 : width > 768 ? 2 : 1}
//               loop={true}
//               spaceBetween={15}
//               centeredSlides={width > 992 && true}
//               autoplay={{ delay: 3000, disableOnInteraction: true }}
//               speed={800}
//               breakpoints={{
//                 1200: { slidesPerView: 3 },
//                 992: { slidesPerView: 3 },
//                 768: { slidesPerView: 2 },
//                 0: { slidesPerView: 1 },
//               }}
//               modules={[Pagination, Navigation, A11y, Autoplay]}
//               onSwiper={setSwiperInstance}
//               onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             >
//               {portfolioData.map((item, index) => (
//                 <SwiperSlide
//                   key={index}
//                   className={classNames(styles.slide)}
//                   onClick={() => {
//                     setSelectedItem(item);
//                     setPortfolioModal(true);
//                   }}
//                 >
//                   {item.type === "video" ? (
//                     <video
//                       className="w-full h-full object-contain"
//                       src={item.src}
//                       loop
//                       muted
//                     />
//                   ) : item.type === "image" ? (
//                     <Image
//                       className="w-full h-auto"
//                       src={item.src}
//                       alt="Portfolio Image"
//                     />
//                   ) : (
//                     <embed
//                       className="w-full h-full"
//                       src={item.src}
//                       type="application/pdf"
//                     />
//                   )}
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </CustomAnimatedBorder>
//       </div>

//       <PortfolioModal
//         isOpen={portfolioModal}
//         onClose={() => setPortfolioModal(false)}
//         item={selectedItem}
//       />
//     </section>
//   );
// };

// export default Portfolio;
