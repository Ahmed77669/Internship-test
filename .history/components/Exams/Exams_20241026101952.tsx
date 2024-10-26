"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import heart from "@/public/Vector.png";
import { Clock } from "lucide-react";
import questions from "@/app/dummy-data/questions"; // Make sure this path is correct
import { useRouter } from "next/navigation";

interface Quiz {
  quiz_id: number;
  course_id: number;
  question_text: string;
  topic_id: string;
  questions_count: number;
  points: number;
  duration_in_seconds: number;
  level: string;
  options: string[]; // Added to ensure options are available
  answer: string;    // Added for answer checking
}

const Exams = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(30);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState("");
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const { quiz } = router.query;

  // Timer for seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch quiz data
  useEffect(() => {
    if (router.isReady && quiz) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://exam.gammal.tech/API/quiz/${quiz}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });
          const data: Quiz[] = await response.json();
          setQuizzes(data);
        } catch (error) {
          console.error("Error fetching quizzes:", error);
        }
      };
      fetchData();
    }
  }, [router.isReady, quiz]);

  // Ensure router is ready and not on server-side rendering
  if (typeof window === "undefined" || !router.isReady) {
    return null; // Avoid rendering until on client side and router is ready
  }

  const currentQuestion = quizzes[questionIndex];
  const typingSpeed = 10;

  // Typing effect for question text
  useEffect(() => {
    if (currentQuestion) {
      if (prevQuestion !== currentQuestion.question_text) {
        setDisplayedText("");
        setIndex(0);
        setPrevQuestion(currentQuestion.question_text);
      }

      if (index < currentQuestion.question_text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentQuestion.question_text.charAt(index));
          setIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      }
    } else {
      navigateToResultPage();
    }
  }, [index, currentQuestion, prevQuestion]);

  // Countdown timer
  useEffect(() => {
    if (time > 0 && currentQuestion) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (currentQuestion) {
      handleNextQuestion();
    }
  }, [time, currentQuestion]);

  // Navigate to result page
  const navigateToResultPage = () => {
    Cookies.set("results", JSON.stringify(results), { expires: 1 });
    Cookies.set("time", String(seconds), { expires: 1 });
    router.push("/lessons/Levels/exam/result");
  };

  // Handle next question
  const handleNextQuestion = () => {
    setTime(30);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Handle answer selection
  const handleAnswerClick = (option: string) => {
    if (option === currentQuestion.answer) {
      setResults((prevResults) => prevResults + 1);
    }
    handleNextQuestion();
  };

  if (!currentQuestion) {
    return null; // Wait for current question to load
  }

  return (
    <section className="p-4 md:p-8">
      <h1 className="font-medium mb-5 text-[#006565] text-3xl md:text-5xl text-center">
        Exam 1
      </h1>
      <div className="flex justify-end mb-2 pr-2 md:pr-8">
        <div className="flex items-center">
          <Clock color="black" size={20} className="md:w-8 md:h-8" />
          <p className={`ml-2 text-xl md:text-2xl ${time < 11 ? "text-red-500" : "text-black"}`}>
            {time}
          </p>
        </div>
        <div className="flex items-center ml-4">
          <Image
            src={heart}
            alt="heart image"
            width={20}
            height={20}
            className="md:w-6 md:h-6"
          />
          <p className="ml-2 text-xl md:text-2xl text-black">65</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-2 md:p-8">
        <div className="w-full lg:w-2/3 h-[300px] md:h-[500px] lg:h-[700px] bg-black mb-6 lg:mb-0 rounded-lg p-4 md:p-8 overflow-auto">
          <pre className="text-green-400 text-sm md:text-base">
            {displayedText || "Loading..."}
          </pre>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center h-[70vh]">
          <div className="border border-black rounded-xl p-4 w-full max-w-[400px]">
            <div className="text-center text-xl md:text-2xl text-[#006565] mt-4">
              Question {currentQuestion.quiz_id}
            </div>
            <div className="text-left text-base md:text-lg text-black mt-6 ml-2">
              The output will be:
            </div>
            <div className="flex flex-col items-center justify-around mt-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full max-w-[300px] bg-[#006565] text-white text-base md:text-lg py-2 rounded mt-2 hover:bg-[#004d4d]"
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exams;
