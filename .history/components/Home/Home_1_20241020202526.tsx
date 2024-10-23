'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import langImage from "@/public/landingPage-photos/lang.png";
import AIImage from "@/public/landingPage-photos/AI.png";
import coder1Image from "@/public/coders photos/coder1.jpg";
import coder2Image from "@/public/coders photos/coder2.jpg";
import coder3Image from "@/public/coders photos/coder3.jpg";
// import coder4Image from "@/public/coders-photos/coder4.jpg";
// import coder5Image from "@/public/coders-photos/coder5.jpg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coderImages = [coder1Image, coder2Image, coder3Image];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= coderImages.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? coderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mt-[10%]">
      <div className="w-[92%] container mx-auto flex flex-col xl:flex-row justify-between flex-wrap hero-section">
        <div className="w-full xl:w-[660px] mb-10 xl:mb-0">
          <div className="text-[#094546] text-3xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[60px]">
            The Engaging and Effective Way to Master Programming
          </div>

          <p className="text-black w-full xl:w-2/3 text-lg md:text-xl mt-6 md:mt-8 leading-[30px] md:leading-[35px] xl:leading-[40px]">
            Take interactive exams and challenges designed to make learning fun
            and impactful. Start your journey toward becoming a coding expert
            today!
          </p>

          <button className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg mt-6 md:mt-8">
            GET STARTED
          </button>
        </div>

        <div className="bg-black rounded-md w-full xl:w-[500px] h-[350px] md:h-[400px] xl:h-[450px] p-5 md:p-8 xl:p-10">
          <pre className="text-[#4ADE80] text-sm md:text-base overflow-auto">
            {`#include <stdio.h>

int main() {
    int year;

    printf("Enter a year: ");
    scanf("%d", &year);

    if ((year % 100 != 0 && year % 4 == 0)) {
        printf("%d is a leap year.\\n", year);
    } else {
        printf("%d is not a leap year.\\n", year);
    }

    return 0;
}`}
          </pre>
        </div>
      </div>

      <div className="bg-[#095051] mt-[12%] mb-[12%] py-36 min-h-[800px]">
        <div className="w-[92%] container mx-auto flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-[700px] mb-10 xl:mb-0">
            <div className="text-white text-3xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[60px]">
              Practice Over 30 Programming Languages!
            </div>

            <p className="text-white w-full xl:w-2/3 text-lg md:text-xl mt-6 md:mt-8 leading-[30px] md:leading-[35px] xl:leading-[40px]">
              Enhance your skills with exams in over 30 programming languages.
              Our premium service offers a comprehensive and engaging way to
              advance your coding expertise.
            </p>

            <button className="bg-[#ffffff] text-[#007676] rounded-md w-[156px] h-[50px] text-[16px] font-semibold py-1 px-3 transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg mt-6 md:mt-8">
              Try it
            </button>
          </div>

          <div className="rounded-md w-full xl:w-[500px] h-auto flex justify-center">
            <Image src={langImage} alt="programming languages photo" />
          </div>
        </div>
      </div>

      <div className="w-[92%] container mx-auto flex flex-col xl:flex-row justify-between mb-52">
        <div className="w-full xl:w-[700px] mb-10 xl:mb-0">
          <div className="text-[#095051] text-3xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[60px]">
            AI Challenge
          </div>

          <p className="text-black w-full xl:w-2/3 text-lg md:text-xl mt-6 md:mt-8 leading-[30px] md:leading-[35px] xl:leading-[40px]">
            Try our AI Challenge, which customizes exercises based on your
            skills and experience to help you grow even faster.
          </p>

          <button className="bg-[#007676] text-[#ffffff] rounded-md w-[156px] h-[50px] text-[16px] font-semibold py-1 px-3 transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg mt-6 md:mt-8">
            Try it
          </button>
        </div>

        <div className="rounded-md w-full xl:w-[400px] flex justify-center">
          <Image src={AIImage} alt="AI Challenge" />
        </div>
      </div>

      <div className="w-[92%] container mx-auto mb-14">
        <div className="text-[#095051] font-medium text-3xl md:text-4xl xl:text-5xl flex justify-center mb-10 md:mb-16">
          How The Final Exam in Gammal Tech Looks
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://player.vimeo.com/video/914890102?h=31941f72b5"
            width="100%"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            className="rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="bg-[#095051] mt-[12%] mb-[12%] py-20 min-h-[400px]">
        <div className="w-[92%] container mx-auto">
          <div className="flex justify-center text-3xl md:text-4xl text-white mb-10 md:mb-14">
            Gammal Tech exam's success stories
          </div>
          <div className="flex flex-col xl:flex-row justify-between space-y-6 xl:space-y-0 xl:space-x-5">
            {["Oqkr13uO0l0", "W7vnW2IOP3c", "zZZK00r7qM8", "-dkVLXDhFJM"].map(
              (id, index) => (
                <iframe
                  key={index}
                  src={`https://www.youtube.com/embed/${id}?si=tVq1cUpqDLvFm3u9`}
                  width="100%"
                  height="280"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="rounded-xl transition-transform duration-300 hover:scale-110"
                  allowFullScreen
                ></iframe>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-[12%] mb-[12%] py-20 min-h-[400px]">
        <div className="w-[92%] container mx-auto">
          <div className="flex justify-center text-3xl md:text-4xl text-[#095051] mb-10 md:mb-14 font-medium">
            Meet Top Coders on the Final exams's Website
          </div>
          <div className="relative">
            <div className="flex justify-center items-center">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % coderImages.length;
                return (
                  <div key={index} className="mx-2">
                    <Image
                      src={coderImages[index]}
                      width={300}
                      height={300}
                      alt={`coder photo ${index + 1}`}
                      className="rounded-xl transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#095051]  rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#095051]rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}