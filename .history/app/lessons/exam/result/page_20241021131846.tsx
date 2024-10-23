'use client';
import { Poppins } from "next/font/google";
import { useState, useEffect } from 'react';
import React from 'react';
import Cookies from 'js-cookie';
import { StarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CircularProgressWithLabelProps {
    percentage: number;
    color?: string;
    sign?: string; 
    seconds?: string;
    percentageText: number;
}

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ 
    percentage, 
    color = "#000",
    sign, 
    seconds, 
    percentageText 
}) => {
    const radius = 120;
    const strokeWidth = 30;
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const [currentPercentage, setCurrentPercentage] = useState(0);
  
    useEffect(() => {
        const animationDuration = 2000;
        const stepTime = 20; 
        const steps = animationDuration / stepTime; 
        const stepValue = percentage / steps; 
  
        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep < steps) {
                setCurrentPercentage((prev) => Math.min(prev + stepValue, percentage));
                currentStep++;
            } else {
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [percentage]);

    const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

    return (
        <svg width={250} height={250}>
            <circle
                stroke="#d6d6d6"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeLinecap="round" 
            />
           
            <text
                x="50%"
                y="50%"
                alignmentBaseline="middle"
                textAnchor="middle"
                fontSize="40"
                fill="#000"
            >
                {Math.round(percentageText)}{sign}
            </text>
            <text
                x="50%"
                y="63%"
                alignmentBaseline="middle"
                textAnchor="middle"
                fontSize="30"
                fill="#000"
            >
                {seconds}
            </text>
        </svg>
    );
};

const ResultPage = () => {
    const router = useRouter();
    const [parsedResults, setParsedResults] = useState<{ myNumber: number; seconds: number } | null>(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const storedResults = Cookies.get('results');
        const storedTime = Cookies.get('time');

        if (storedResults && storedTime) {
            const results = JSON.parse(storedResults);
            const time = parseInt(storedTime, 10);
            setParsedResults({ myNumber: results, seconds: time });
        }
        setLoading(false); // Set loading to false after fetching data
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader">Loading...</div> {/* Replace with a spinner or skeleton */}
            </div>
        ); 
    }

    if (!parsedResults) {
        return null; // or another loading state
    }

    const { myNumber, seconds } = parsedResults;
    const result = (myNumber / 3) * 100;

    return (
        <section className={`px-4 text-black`}>
            <div className="text-3xl font-normal mb-12 text-teal-800">Result</div>

            <div className="flex justify-center mb-16">
                {myNumber === 3 ? (
                    <>
                        <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
                        <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
                        <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400" />
                    </>
                ) : myNumber === 2 ? (
                    <>
                        <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
                        <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
                        <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400" />
                    </>
                ) : myNumber === 1 ? (
                    <>
                        <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
                        <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400 mr-16" />
                        <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400" />
                    </>
                ) : (
                    <>
                        <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400 mr-16" />
                        <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400 mr-16" />
                        <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400" />
                    </>
                )}
            </div>

            <div className="flex gap-5 justify-evenly">
                <div className="mt-10">
                    <CircularProgressWithLabel 
                        percentage={100} 
                        color={"#E25822"} 
                        seconds={`seconds`} 
                        percentageText={seconds} 
                    />
                    <p className="text-center text-2xl">Duration</p>
                </div>
                <div>
                    <CircularProgressWithLabel 
                        percentage={result} 
                        color={"#006060"} 
                        sign={"%"} 
                        percentageText={result} 
                    />
                    <p className="text-center text-2xl">Final Result</p>
                </div>
                <div className="mt-10">
                    <CircularProgressWithLabel 
                        percentage={0} 
                        percentageText={myNumber === 3 ? 30 : 0} 
                    />
                    <p className="text-center text-2xl">Points</p>
                </div>
            </div>

            <div className="flex justify-center mt-24">
                {myNumber !== 3 ? (
                    <p className="text-4xl">You must achieve 100% to move to the next stage</p>
                ) : (
                    <p className="text-4xl">Congratulations, You Passed the Exam</p>
                )}
            </div>

            <div className="flex justify-center mt-10">
                {myNumber !== 3 ? (
                    <button className="rounded-md w-40 h-14 bg-teal-600 text-white" onClick={() => { router.push('/lessons/exam') }}>Try again</button>
                ) : (
                    <button className="rounded-md w-40 h-14 bg-teal-600 text-white" onClick={() => { router.push('/') }}>Next ..</button>
                )}
            </div>

            {/* Footer */}
            <footer className="mt-10">
                <div className="flex justify-center">
                    <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default ResultPage;
