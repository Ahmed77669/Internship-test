'use client'
import React from 'react';
import Image from 'next/image';
import heart from "@/public/Vector.png";
// import clock from "@/public/clock.png";
import { HeartIcon, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import questions from '@/app/dummy-data/questions';
import { useRouter } from 'next/navigation';


const Exams = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(30); 
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(''); 
  const currentQuestion = questions[questionIndex];
  const typingSpeed = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    if (currentQuestion && currentQuestion.options) {
      if (prevQuestion !== currentQuestion.question) {
        setDisplayedText('');
        setIndex(0);
        setPrevQuestion(currentQuestion.question); 
      }

      if (index < currentQuestion.question.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentQuestion.question.charAt(index));
          setIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      }
    }
  }, [index, currentQuestion, prevQuestion]);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      
      if (currentQuestion == null) {
        navigateToPage2();
      }
      return () => clearInterval(timer);
    } else {
      setQuestionIndex(questionIndex + 1);
      setTime(30);
    }
  }, [time]);

  const navigateToPage2 = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myData', String(results));
      localStorage.setItem('myTime', String(seconds));
      router.push('/exams-languages/exams-level/exams/result');
    }
  };

  return (
    <section>
      <div className="font-medium mb-5 text-[#006565] text-5xl flex justify-center">Exam 1</div>
      <div className="flex justify-end mb-2 pr-8">
        <div className="flex items-center">
          {/* <Image src={clock} alt='clock image' width={40} /> */}
          <Clock color='black'/>
          <p className={`ml-2 text-2xl ${time < 11 ? "text-red-500" : "text-black"}`}>{time}</p>
        </div>
        <div className="flex items-center ml-4">
          <Image src={heart} alt='heart image' width={25} />
          <p className="ml-2 text-2xl text-black">65</p>
        </div>
      </div>
      <div className="flex justify-evenly p-8">
        <div className="h-full  min-h-[700px] w-2/3 min-w-[800px] bg-black mb-10 rounded-lg p-8">
          <pre className="text-green-400">
            {currentQuestion && currentQuestion.options ? displayedText : null}
          </pre>
        </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-2xl text-[#006565] mt-4">
              {currentQuestion && currentQuestion.id ? `Question ${currentQuestion.id}` : null}
            </div>
            <div className="text-left text-lg text-black mt-6 ml-2">The output will be:</div>
            <div className="flex flex-col items-center h-[300px] justify-around">
              {currentQuestion && currentQuestion.options ? (
                currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className="w-4/5 bg-[#006565] text-white text-lg py-2 rounded mt-2 hover:bg-[#004d4d]"
                    onClick={() => {
                      setTime(30);
                      if (option === currentQuestion.answer) {
                        setResults(results + 1);
                      }
                      setQuestionIndex(questionIndex + 1);
                      console.log(results);
                    }}>
                    {option}
                  </button>
                ))
              ) : null}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Exams;
