"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Lessons = () => {
  const router = useRouter();
  return (
    <section className="mt-[5%] w-[92%] container mx-auto lg:flex-row justify-between flex-wrap hero-section mb-44">
      <div className="mb-6 lg:mb-5 flex justify-center">
        <h1 className="text-3xl font-bold flex justify-center text-[#007676] sm:text-2xl">
          C Programming Lessons
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {Array.from({ length: 32 }, (_, i) => (
          <button
            key={i + 1}
            className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors"
            onClick={() => {
              router.push("lessons/Levels");
            }}
          >
            Lesson {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Lessons;
