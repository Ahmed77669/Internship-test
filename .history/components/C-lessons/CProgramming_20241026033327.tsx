import { button } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'


interface quiz {
    quiz_id: number;
    course_id: number;
    quiz_name: string;
    topic_id: string;
    questions_count: number;
    points: number;
    duration_in_seconds: number;
    level:string;
  }
const CProgramming = () => {
    const [quizzes, setQuizzes] = useState<quiz[]>([]);

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
            const data: User[] = await response.json();
            setUsers(data);
          } catch (error) {
            console.error("Error fetching user rankings:", error);
          }
        }
    
        fetchData();
      }, []);
  return (
    {
        users.map((index)=>(
            <button>{quiz.title}</button>
        ))
    }
    
  )
}

export default CProgramming