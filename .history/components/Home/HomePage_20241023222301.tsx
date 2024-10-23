import Link from 'next/link'
import { Book, Award, Users, BarChart, ChevronRight, Brain, Zap, Target, BookOpen, PenTool } from 'lucide-react'

import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen  text-gray-800 py-12 px-4">
<main className="max-w-6xl mx-auto space-y-16">
  <section className="text-center relative">
    <div className="absolute inset-0 bg-teal-200 transform -skew-y-6 z-0"></div>
    <div className="relative z-10 py-12">
      <h1 className="text-5xl font-extrabold mb-4 text-teal-800">Gammal Tech</h1>
      <p className="text-xl mb-8 text-teal-700">Unlock Your Potential, One Exam at a Time</p>
      <div className="flex justify-center space-x-4">
        <Link href="/lessons" className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition duration-300 inline-flex items-center">
          <BookOpen className="mr-2" size={24} />
          Practice
        </Link>
        <Link href="/exams" className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300 inline-flex items-center">
          <PenTool className="mr-2" size={24} />
          Exams
        </Link>
      </div>
    </div>
  </section>

  <section className="grid md:grid-cols-3 gap-8">
    {[
      { icon: Brain, title: 'Adaptive Learning', description: 'Personalized exam paths based on your performance' },
      { icon: Zap, title: 'Instant Feedback', description: 'Get immediate results and detailed explanations' },
      { icon: Target, title: 'Goal Tracking', description: 'Set and monitor your exam preparation goals' }
    ].map((feature, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
        <feature.icon className="text-teal-500 mb-4" size={40} />
        <h3 className="text-xl font-bold mb-2 text-teal-700">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
  </section>

  <section className="bg-teal-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6 flex items-center">
      <Book className="mr-2" /> Your Learning Journey
    </h2>
    <div className="flex flex-wrap justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p className="text-2xl font-semibold mb-2">Level: Beginner</p>
        <div className="w-64 bg-teal-300 rounded-full h-3">
          <div className="bg-white h-3 rounded-full" style={{width: '20%'}}></div>
        </div>
      </div>
      <div className="text-center mb-4 md:mb-0">
        <p className="text-4xl font-bold">2 / 10</p>
        <p className="text-sm">Exams Completed</p>
      </div>
      <Link href="/practice" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300">
        Continue Learning
      </Link>
    </div>
  </section>

  <section>
    <h2 className="text-3xl font-bold mb-6 text-teal-800 flex items-center">
      <Award className="mr-2" /> Your Achievements
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: 'Quick Learner', description: 'Completed 5 exams in a week', unlocked: true },
        { title: 'Perfect Score', description: 'Scored 100% on any exam', unlocked: false },
        { title: 'Consistency King', description: 'Practiced for 7 days in a row', unlocked: true }
      ].map((achievement, index) => (
        <div key={index} className={`p-4 rounded-lg ${achievement.unlocked ? 'bg-teal-100' : 'bg-gray-100'}`}>
          <Award className={`mb-2 ${achievement.unlocked ? 'text-teal-500' : 'text-gray-400'}`} size={32} />
          <h3 className={`font-semibold mb-1 ${achievement.unlocked ? 'text-teal-700' : 'text-gray-500'}`}>
            {achievement.title}
          </h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
        </div>
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-3xl font-bold mb-6 text-teal-800 flex items-center">
      <Users className="mr-2" /> Top Performers
    </h2>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="p-3 text-left">Rank</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {[
            { rank: 1, name: 'Alex Johnson', location: 'New York', score: 5890 },
            { rank: 2, name: 'Maria Garcia', location: 'Madrid', score: 5750 },
            { rank: 3, name: 'Yuki Tanaka', location: 'Tokyo', score: 5680 }
          ].map((performer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-teal-50' : 'bg-white'}>
              <td className="p-3">{performer.rank}</td>
              <td className="p-3 font-semibold">{performer.name}</td>
              <td className="p-3">{performer.location}</td>
              <td className="p-3">{performer.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="text-right mt-4">
      <Link href="/leaderboard" className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center">
        View Full Leaderboard <ChevronRight className="ml-1" size={20} />
      </Link>
    </div>
  </section>

  <section>
    <h2 className="text-3xl font-bold mb-6 text-teal-800 flex items-center">
      <BarChart className="mr-2" /> Trending Exams
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {['Web Development', 'Data Science', 'Machine Learning'].map((exam, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="font-bold text-xl mb-2 text-teal-700">{exam}</h3>
          <p className="text-gray-600 mb-4">Master the latest in {exam.toLowerCase()} technologies and concepts.</p>
          <Link href={`/exam/${exam.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold">
            Start Exam <ChevronRight className="ml-1" size={20} />
          </Link>
        </div>
      ))}
    </div>
  </section>
</main>
</div>
  )
}

export default HomePage

