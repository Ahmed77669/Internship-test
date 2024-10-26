import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    rank: number;
    name: string;
    state: string;
    total_points: number;
  }
const CProgramming = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          // Step 1: Fetch all quiz IDs
          const quizResponse = await fetch("https://exam.gammal.tech/API/quizzes", {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });
  
          const quizData = await quizResponse.json();
  
          // Step 2: Fetch details for each quiz
          const quizPromises = quizData.map(async (quiz: { quizId: any; }) => {
            const response = await fetch(
              `https://exam.gammal.tech/API/quiz/${quiz.quizId}`, // Replace with the correct field name for quiz ID
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                },
              }
            );
            return response.json();
          });
  
          // Wait for all quiz details to be fetched
          const quizzesDetails:any = await Promise.all(quizPromises);
          setQuizzes(quizzesDetails);
        } catch (error) {
          console.error("Error fetching quizzes:", error);
        }
      }
  
      fetchData();
    }, []);
  return (
    <div>CProgramming</div>
  )
}

export default CProgramming