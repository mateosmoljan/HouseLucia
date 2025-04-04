import { StaticImageData } from "next/image";

import one from "@/public/assets/images/i/42.jpg";
import two from "@/public/assets/images/i/45.jpg";
import three from "@/public/assets/images/i/49.jpg";
import four from "@/public/assets/images/i/36.jpg";

type LocationData = {
  src: StaticImageData;
  alt: string;
  title?: string;
  des?: string;
  button?: string;
};

type DataObject = {
  images: LocationData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

// Define image data
const imageData: LocationData[] = [
  { src: one, alt: "House Lucia at night" },
  { src: two, alt: "House Lucia" },
  { src: three, alt: "Jacuzzi House Lucia" },
  { src: four, alt: "Dinning table House Lucia" },

  // Define other image data similarly
];

// Function to replace titles and descriptions with translations from JSON files
const replaceTitlesAndDescriptions = (
  data: LocationData[],
  titles: string[],
  descriptions: string[],
  button: string
) => {
  return data.map((image, index) => ({
    ...image,
    title: titles[index],
    des: descriptions[index],
    button: button,
  }));
};

// Define the data object
export const HeadSwiperLibEN: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    enData.HeaderSwiper.titles,
    enData.HeaderSwiper.descriptions,
    enData.HeaderSwiper.button
  ),
};

// You can also define a separate object for German translations if needed
export const HeadSwiperLibDE: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    deData.HeaderSwiper.titles,
    deData.HeaderSwiper.descriptions,
    deData.HeaderSwiper.button
  ),
};

export const HeadSwiperLibHR: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    hrData.HeaderSwiper.titles,
    hrData.HeaderSwiper.descriptions,
    hrData.HeaderSwiper.button
  ),
};

export const HeadSwiperLibIT: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    itData.HeaderSwiper.titles,
    itData.HeaderSwiper.descriptions,
    itData.HeaderSwiper.button
  ),
};

export const getHeadSwiperLib = (language: string): DataObject => {
  switch (language) {
    case "en":
      return HeadSwiperLibEN;
    case "de":
      return HeadSwiperLibDE;
    case "hr":
      return HeadSwiperLibHR;
    case "it":
      return HeadSwiperLibIT;
    default:
      return HeadSwiperLibEN; // Default to English
  }
};
