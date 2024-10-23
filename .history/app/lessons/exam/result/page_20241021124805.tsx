'use client';
import { Poppins } from "next/font/google";
import { useState, useEffect } from 'react';
import React from 'react';
import Cookies from 'js-cookie';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CircularProgressWithLabelProps {
    percentage: number;
    color?: string; // color can be optional
    sign?: string; // sign can be optional
    seconds?: string; // seconds can be optional
    percentageText: number;
}

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ 
    percentage, 
    color = "#000", // default color
    sign, 
    seconds, 
    percentageText 
}) => {
    const radius = 120; // Radius of the circle
    const strokeWidth = 30; // Stroke width
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const [currentPercentage, setCurrentPercentage] = useState(0);
  
    useEffect(() => {
        const animationDuration = 2000; // Duration in milliseconds
        const stepTime = 20; // Time in milliseconds for each step
        const steps = animationDuration / stepTime; // Total number of steps
        const stepValue = percentage / steps; // Increment value for each step
  
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
            {/* Background circle */}
            <circle
                stroke="#d6d6d6"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            {/* Progress circle */}
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeLinecap="round" // Make the ends of the stroke rounded
            />
            {/* Text in the center */}
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

    useEffect(() => {
        const storedResults = Cookies.get('results');
        const storedTime = Cookies.get('time');

        if (storedResults && storedTime) {
            const results = JSON.parse(storedResults);
            const time = parseInt(storedTime, 10);
            setParsedResults({ myNumber: results, seconds: time });
        }
    }, []);

    if (!parsedResults) {
        return <p>Loading...</p>; // Optional loading state
    }

    const { myNumber, seconds } = parsedResults;
    const result = (myNumber / 3) * 100;

    return (
        <section className={`px-4`}>
            <div className="text-3xl font-normal mb-12 text-teal-800">Result</div>

            <div className="flex justify-center mb-16">
                {myNumber === 3 ? (
                    <>
                        <Star className="text-8xl text-yellow-400 mr-16" />
                        <Star className="text-8xl text-yellow-400 mr-16" />
                        <Star className="text-8xl text-yellow-400" />
                    </>
                ) : myNumber === 2 ? (
                    <>
                        <Star className="text-8xl text-yellow-400 mr-16" />
                        <Star className="text-8xl text-yellow-400 mr-16" />
                        <Star className="text-8xl text-gray-400" />
                    </>
                ) : myNumber === 1 ? (
                    <>
                        <Star className="text-8xl text-yellow-400 mr-16" />
                        <Star className="text-8xl text-gray-400 mr-16" />
                        <Star className="text-8xl text-gray-400" />
                    </>
                ) : (
                    <>
                        <Star className="text-8xl text-gray-400 mr-16" />
                        <Star className="text-8xl text-gray-400 mr-16" />
                        <Star className="text-8xl text-gray-400" />
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
                    <button className="rounded-md w-40 h-14 bg-teal-600 text-white">Go Back</button>
                ) : (
                    <button className="rounded-md w-40 h-14 bg-teal-600 text-white">Next ..</button>
                )}
            </div>
        </section>
    );
};

export default ResultPage;
