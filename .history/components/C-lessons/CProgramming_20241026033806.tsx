'use client'
import React, { useEffect, useState } from 'react';

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
    <div>
      {quizzes.map((quiz) => (
        <button key={quiz.quiz_id} className='w-8 mr-6'>
          {quiz.quiz_name} {/* Use the quiz_name property to display the name */}
        </button>
      ))}
    </div>
  );
}

export default CProgramming;
