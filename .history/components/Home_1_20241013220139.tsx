import React from "react";
import Image from "next/image";
import lang from "@/public/landingPage-photos/lang.png";
import AI from "@/public/landingPage-photos/AI.png";

const Home = () => {
  return (
    <section className="mt-40">
      <div className="w-[92%]  container mx-auto flex justify-between flex-wrap">
        <div className="w-[660px]">
          <div className="text-[#094546] text-5xl w-full leading-[60px]">
            The Engaging and Effective Way to Master Programming
          </div>

          <p className="text-black w-2/3 text-xl mt-8 leading-[40px]">
            Take interactive exams and challenges designed to make learning fun
            and impactful. Start your journey toward becoming a coding expert
            today!
          </p>

          <button
            // onClick={() => route("/")}
            className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg mt-8"
          >
            GET STARTED
          </button>
        </div>
        <div className="bg-black rounded-md w-[500px] h-[450px] p-10 flex flex-wrap">
          <pre className="text-[#4ADE80]">
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
      <div className="bg-[#095051] mt-[12%] mb-[12%] py-36 min-h-[800px] h-auto content-end">
        <div className="w-[92%]  container mx-auto flex justify-between flex-wrap align-middle">
          <div className="w-[700px]">
            <div className="text-white text-5xl w-full leading-[60px]">
              Practice Over 30 Programming Languages!
            </div>

            <p className="text-white w-2/3 text-xl mt-8 leading-[40px]">
              Enhance your skills with exams in over 30 programming languages.
              Our premium service offers a comprehensive and engaging way to
              advance your coding expertise.
            </p>

            <button
              // onClick={() => route("/")}
              className="bg-[#ffffff] text-[#007676] rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg mt-8"
            >
              Try it
            </button>
          </div>
          <div className="rounded-md w-[500px] h-[450px]  flex flex-wrap">
            <Image src={lang} alt="programming languages photo" />
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="w-[92%]  container mx-auto flex justify-between flex-wrap mb-52">
        <div className="w-[700px]">
          <div className="text-[#095051] text-5xl w-full leading-[60px]">
          AI Challenge
          </div>

          <p className="text-black w-2/3 text-xl mt-8 leading-[40px]">
          try our AI Challenge, which customizes exercises based on your skills and experience to help you grow even faster.
          </p>

          <button
            // onClick={() => route("/")}
            className="bg-[#007676] text-[#ffffff] rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg mt-8"
          >
            Try it
          </button>
        </div>
        <div className="rounded-md w-[400px] flex flex-wrap">
          <Image src={AI} alt="programming languages photo" />
          {/* </div> */}
        </div>
      </div>
      <div className="w-[92%]  container mx-auto">
      <div className="text-[#007676] text-5xl flex justify-center mb-16">
      How The Final Exam in Gammal Tech Looks
      </div>
      <div className="flex justify-center">
      <iframe
        src="https://player.vimeo.com/video/914890102?h=31941f72b5"
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        className="rounded-xl"
        allowFullScreen
      ></iframe>
      </div>
      </div>


      <div className="bg-[#095051] mt-[12%] mb-[12%] py-20 min-h-[400px] h-auto ">
        <div className="w-[92%]  container mx-auto">
          <div className="flex justify-center text-4xl text-white mb-14">Gammal Tech exam’s success stories</div>
          <div className="flex justify-between">
  <iframe
    src="https://www.youtube.com/embed/Oqkr13uO0l0?si=tVq1cUpqDLvFm3u9"
    width="360"
    height="280"
    allow="autoplay; fullscreen; picture-in-picture"
    className="rounded-xl transform transition-transform duration-300 hover:scale-110"
    allowFullScreen
  ></iframe>
  <iframe
    src="https://www.youtube.com/embed/W7vnW2IOP3c?si=oNy2TVfaQ5rSNn0G"
    width="360"
    height="280"
    allow="autoplay; fullscreen; picture-in-picture"
    className="rounded-xl transform transition-transform duration-300 hover:scale-110"
    allowFullScreen
  ></iframe>
  <iframe
    src="https://www.youtube.com/embed/zZZK00r7qM8?si=WmH8Nl8TpZaPXDVr"
    width="360"
    height="280"
    allow="autoplay; fullscreen; picture-in-picture"
    className="rounded-xl transform transition-transform duration-300 hover:scale-110"
    allowFullScreen
  ></iframe>
  <iframe
    src="https://www.youtube.com/embed/-dkVLXDhFJM?si=TYeijIVtHU-E-1Mk"
    width="360"
    height="280"
    allow="autoplay; fullscreen; picture-in-picture"
    className="rounded-xl transform transition-transform duration-300 hover:scale-110"
    allowFullScreen
  ></iframe>
</div>

        </div>
      </div>
    </section>
  );
};

export default Home;
