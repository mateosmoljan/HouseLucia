"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdKeyboardArrowDown } from "react-icons/md";
import { SwiperNavButtons } from "./SwiperNavButton";
import { getHeadSwiperLib } from "@/lib/HeadSwiperLib";
import { useLocale } from "next-intl";

export default function EventsSwiper() {
  const localeActive = useLocale();

  const pagination = {
    clickable: true,
  };

  const headSwiperLib = getHeadSwiperLib(localeActive);

  return (
    <section className="h-[30vh] md:h-[30vh] lg:h-[40vh] w-full relative">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
        <Swiper
          loop={true}
          spaceBetween={0}
          modules={[FreeMode, Autoplay, Pagination]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          pagination={pagination}
          grabCursor={true}
          speed={900}
        >
          {headSwiperLib.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative  h-full aspect-[screen/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-screen"
                  loading="lazy"
                />
                {/* <div className="left-1/20 right-1/20 md:left-auto md:right-auto md:mx-0 md:max-w-2xl z-20 absolute bottom-8 flex items-center justify-center flex-col bg-black bg-opacity-60 rounded-md p-8 gap-3">
                  <h1 className="text-white font-arbutus text-center text-3xl font-bold">
                    {image.title}
                  </h1>
                  <p className="text-white">{image.des}</p>
                  <a href="#about">
                    <button className="btn">
                      {image.button}{" "}
                      <MdKeyboardArrowDown className="text-2xl" />
                    </button>
                  </a>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperNavButtons /> */}
        </Swiper>
      </div>
    </section>
  );
}
