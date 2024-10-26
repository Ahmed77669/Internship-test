'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Quiz {
  quiz_id: number;
  course_id: number;
  quiz_name: string;
  topic_id: string;
  questions_count: number;
  points: number;
  duration_in_seconds: number;
  level: string;
}

const CProgramming = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const router =useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://exam.gammal.tech/API/courses/1/quizzes",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data: Quiz[] = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="mt-[5%] w-[92%] container mx-auto lg:flex-row justify-between flex-wrap hero-section mb-44">
      <div className="mb-6 lg:mb-5 flex justify-center">
        <h1 className="text-3xl font-bold flex justify-center text-[#007676] sm:text-2xl">
          C Programming Quizzes
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {quizzes.map((quiz) => (
          <button
            key={quiz.quiz_id}
            className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors"
            onClick={() => {
              router.push(`/quizzes/${quiz.quiz_id}`);
            }}
          >
            {quiz.quiz_name} {/* Display the quiz name */}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CProgramming;
