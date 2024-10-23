import React from 'react';
import Link from 'next/link';
// import { FiArrowRight } from 'react-icons/fi';
const ExamLevelsPage: React.FC = () => {

    const levels = [
        {
            name: 'Easy',
            description: 'Start your inspiration journey.',
            time: '(50s per Question - 10 Points)',
            color: 'bg-[#22C55E]',
        },
        {
            name: 'hard',
            description: 'You are ready to beat the world.',
            time: '25s per Question - 20 Points',
            color: 'bg-[#FF9500]',
        },
        {
            name: 'expert',
            description: 'Congratulations, you made it!',
            time: '15s per Question - 30 Points',
            color: 'bg-[#3B82F6]',
        },
        {
            name: 'super',
            description: 'Sorry wait, What!?!',
            time: '10s per Question - 40 Points',
            color: 'bg-[#DC2626]',
        },
    ];



    return (
        <>
            <div className="flex flex-col items-center min-h-screen bg-white p-8">
                <h1 className="text-5xl font-bold mb-10 text-center text-gray-900">Select Your Exam Level</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {levels.map((level) => (

                            <div
                                key={level.name}
                                className={`rounded-xl shadow-xl p-8 flex flex-col justify-between items-center text-white transition-all duration-300 ease-in-out ${level.color} cursor-pointer relative transform transition-transform duration-300 hover:scale-110`}

                            >
                                <h2 className="text-4xl font-semibold mb-4 text-center">{level.name}</h2>
                                <p className="mb-6 text-lg text-center">{level.description}</p>
                                <div className="mt-auto text-sm text-center">
                                    <p className="font-medium">{level.time}</p>
                                </div>
                                <Link key={level.name} href={`/exam?level=${level.name}`} replace>

                                <div className="flex items-center justify-center bg-white text-black rounded-full px-5 py-2 mt-6 transition-all duration-300 transform hover:bg-black hover:text-white hover:translate-x-2">
                                    <span className="font-bold">Start Exam</span>
                                    {/* <FiArrowRight className="text-xl ml-2" /> */}
                                </div>
                                </Link>

                                <div className="absolute bg-gray-800 text-white text-xs rounded-md p-2 hidden group-hover:block">
                                    <p>{level.description}</p>
                                </div>
                            </div>
                            

                    ))}
                        </div>
            </div>
            </>
            );
};

            export default ExamLevelsPage;
