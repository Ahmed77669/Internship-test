// 'use client';
// import { Poppins } from "next/font/google";
// import { useState, useEffect } from 'react';
// import React from 'react';
// import Cookies from 'js-cookie';
// import { StarIcon } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// interface CircularProgressWithLabelProps {
//     percentage: number;
//     color?: string;
//     sign?: string; 
//     seconds?: string;
//     percentageText: number;
// }

// const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ 
//     percentage, 
//     color = "#000",
//     sign, 
//     seconds, 
//     percentageText 
// }) => {
//     const radius = 120;
//     const strokeWidth = 30;
//     const normalizedRadius = radius - strokeWidth * 0.5;
//     const circumference = normalizedRadius * 2 * Math.PI;
//     const [currentPercentage, setCurrentPercentage] = useState(0);
  
//     useEffect(() => {
//         const animationDuration = 2000;
//         const stepTime = 20; 
//         const steps = animationDuration / stepTime; 
//         const stepValue = percentage / steps; 
  
//         let currentStep = 0;

//         const interval = setInterval(() => {
//             if (currentStep < steps) {
//                 setCurrentPercentage((prev) => Math.min(prev + stepValue, percentage));
//                 currentStep++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, stepTime);

//         return () => clearInterval(interval);
//     }, [percentage]);

//     const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

//     return (
//         <svg width={250} height={250}>
//             <circle
//                 stroke="#d6d6d6"
//                 fill="transparent"
//                 strokeWidth={strokeWidth}
//                 r={normalizedRadius}
//                 cx={radius}
//                 cy={radius}
//             />
            
//             <circle
//                 stroke={color}
//                 fill="transparent"
//                 strokeWidth={strokeWidth}
//                 strokeDasharray={circumference + ' ' + circumference}
//                 strokeDashoffset={strokeDashoffset}
//                 r={normalizedRadius}
//                 cx={radius}
//                 cy={radius}
//                 strokeLinecap="round" 
//             />
           
//             <text
//                 x="50%"
//                 y="50%"
//                 alignmentBaseline="middle"
//                 textAnchor="middle"
//                 fontSize="40"
//                 fill="#000"
//             >
//                 {Math.round(percentageText)}{sign}
//             </text>
//             <text
//                 x="50%"
//                 y="63%"
//                 alignmentBaseline="middle"
//                 textAnchor="middle"
//                 fontSize="30"
//                 fill="#000"
//             >
//                 {seconds}
//             </text>
//         </svg>
//     );
// };

// const ResultPage = () => {
//     const router = useRouter();
//     const [parsedResults, setParsedResults] = useState<{ myNumber: number; seconds: number } | null>(null);
//     const [loading, setLoading] = useState(true); 

//     useEffect(() => {
//         const storedResults = Cookies.get('results');
//         const storedTime = Cookies.get('time');

//         if (storedResults && storedTime) {
//             const results = JSON.parse(storedResults);
//             const time = parseInt(storedTime, 10);
//             setParsedResults({ myNumber: results, seconds: time });
//         }
//         setLoading(false);
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="loader">Loading...</div> 
//             </div>
//         ); 
//     }

//     if (!parsedResults) {
//         return null; // or another loading state
//     }

//     const { myNumber, seconds } = parsedResults;
//     const result = (myNumber / 3) * 100;

//     return (
//         <section className={`px-4 text-black`}>
//             <div className="text-5xl font-normal mb-12 text-teal-800 flex justify-center mt-7 ">Result</div>

//             <div className="flex justify-center mb-16">
//                 {myNumber === 3 ? (
//                     <>
//                         <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
//                         <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
//                         <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400" />
//                     </>
//                 ) : myNumber === 2 ? (
//                     <>
//                         <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
//                         <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
//                         <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400" />
//                     </>
//                 ) : myNumber === 1 ? (
//                     <>
//                         <StarIcon className="w-20 h-20 fill-yellow-400 text-yellow-400 mr-16" />
//                         <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400 mr-16" />
//                         <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400" />
//                     </>
//                 ) : (
//                     <>
//                         <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400 mr-16" />
//                         <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400 mr-16" />
//                         <StarIcon className="w-20 h-20 text-gray-400 fill-gray-400" />
//                     </>
//                 )}
//             </div>

//             <div className="flex gap-5 justify-evenly">
//                 <div className="mt-10">
//                     <CircularProgressWithLabel 
//                         percentage={100} 
//                         color={"#E25822"} 
//                         seconds={`seconds`} 
//                         percentageText={seconds} 
//                     />
//                     <p className="text-center text-2xl">Duration</p>
//                 </div>
//                 <div>
//                     <CircularProgressWithLabel 
//                         percentage={result} 
//                         color={"#006060"} 
//                         sign={"%"} 
//                         percentageText={result} 
//                     />
//                     <p className="text-center text-2xl">Final Result</p>
//                 </div>
//                 <div className="mt-10">
//                     <CircularProgressWithLabel 
//                         percentage={0} 
//                         percentageText={myNumber === 3 ? 30 : 0} 
//                     />
//                     <p className="text-center text-2xl">Points</p>
//                 </div>
//             </div>

//             <div className="flex justify-center mt-24">
//                 {myNumber !== 3 ? (
//                     <p className="text-4xl">You must achieve 100% to move to the next stage</p>
//                 ) : (
//                     <p className="text-4xl">Congratulations, You Passed the Exam</p>
//                 )}
//             </div>

//             <div className="flex justify-center mt-10">
//                 {myNumber !== 3 ? (
//                     <button className="rounded-md w-40 h-14 bg-teal-600 text-white mb-4" onClick={() => { router.push('/lessons/exam') }}>Try again</button>
//                 ) : (
//                     <button className="rounded-md w-40 h-14 bg-teal-600 text-white mb-4" onClick={() => { router.push('/') }}>Next ..</button>
//                 )}
//             </div>

//         </section>
//     );
// };

// export default ResultPage;


'use client';

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
        <svg width={250} height={250} className="w-full h-auto max-w-[250px]">
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
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const storedResults = Cookies.get('results');
        const storedTime = Cookies.get('time');

        if (storedResults && storedTime) {
            const results = JSON.parse(storedResults);
            const time = parseInt(storedTime, 10);
            setParsedResults({ myNumber: results, seconds: time });
        }
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader">Loading...</div> 
            </div>
        ); 
    }

    if (!parsedResults) {
        return null; // or another loading state
    }

    const { myNumber, seconds } = parsedResults;
    const result = (myNumber / 3) * 100;

    return (
        <section className="px-4 text-black max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-normal mb-8 md:mb-12 text-teal-800 text-center mt-7">Result</h1>

            <div className="flex justify-center mb-8 md:mb-16 space-x-4 md:space-x-16">
                {[...Array(3)].map((_, index) => (
                    <StarIcon 
                        key={index}
                        className={`w-12 h-12 md:w-20 md:h-20 ${index < myNumber ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 fill-gray-400'}`}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <div className="flex flex-col items-center">
                    <CircularProgressWithLabel 
                        percentage={100} 
                        color={"#E25822"} 
                        seconds={`seconds`} 
                        percentageText={seconds} 
                    />
                    <p className="text-center text-xl md:text-2xl mt-2">Duration</p>
                </div>
                <div className="flex flex-col items-center">
                    <CircularProgressWithLabel 
                        percentage={result} 
                        color={"#006060"} 
                        sign={"%"} 
                        percentageText={result} 
                    />
                    <p className="text-center text-xl md:text-2xl mt-2">Final Result</p>
                </div>
                <div className="flex flex-col items-center">
                    <CircularProgressWithLabel 
                        percentage={0} 
                        percentageText={myNumber === 3 ? 30 : 0} 
                    />
                    <p className="text-center text-xl md:text-2xl mt-2">Points</p>
                </div>
            </div>

            <div className="text-center mt-12 md:mt-24">
                <p className="text-2xl md:text-4xl">
                    {myNumber !== 3 
                        ? "You must achieve 100% to move to the next stage"
                        : "Congratulations, You Passed the Exam"}
                </p>
            </div>

            <div className="flex justify-center mt-8 md:mt-10">
                <button 
                    className="rounded-md w-40 h-14 bg-teal-600 text-white mb-4 hover:bg-teal-700 transition-colors"
                    onClick={() => router.push(myNumber !== 3 ? '/lessons/exam' : '/')}
                >
                    {myNumber !== 3 ? "Try again" : "Next .."}
                </button>
            </div>
        </section>
    );
};

export default ResultPage;