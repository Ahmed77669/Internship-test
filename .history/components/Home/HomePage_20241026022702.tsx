import Link from "next/link";
import {
  Book,
  Award,
  Users,
  BarChart,
  ChevronRight,
  Brain,
  Zap,
  Target,
  BookOpen,
  PenTool,
} from "lucide-react";
import React, { useEffect, useState } from "react";

// Define the User interface
interface User {
  id: number;
  rank: number;
  name: string;
  state: string;
  total_points: number;
}

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]); // Specify the User type for useState

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://exam.gammal.tech/API/users/rankings", {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        });
        const data: User[] = await response.json();

        // Sort users by total_points in descending order and assign rank
        const sortedData = data
          .sort((a, b) => b.total_points - a.total_points)
          .map((user, index) => ({ ...user, rank: index + 1 }));
        
        setUsers(sortedData);
      } catch (error) {
        console.error("Error fetching user rankings:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen text-gray-800 py-12 px-4">
      <main className="max-w-6xl mx-auto space-y-16">
        {/* Main Content */}
        <section className="text-center relative">
          {/* Hero Section */}
          <div className="absolute inset-0 bg-teal-200 transform -skew-y-6 z-0"></div>
          <div className="relative z-10 py-12">
            <h1 className="text-5xl font-extrabold mb-4 text-teal-800">
              Gammal Tech
            </h1>
            <p className="text-xl mb-8 text-teal-700">
              Unlock Your Potential, One Exam at a Time
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/lessons"
                className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition duration-300 inline-flex items-center"
              >
                <BookOpen className="mr-2" size={24} />
                Practice
              </Link>
              <Link
                href="/lessons"
                className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300 inline-flex items-center"
              >
                <PenTool className="mr-2" size={24} />
                Exams
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {[ /* features array here */ ]}
        </section>

        {/* Progress Section */}
        <section className="bg-teal-600 text-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Book className="mr-2" /> Your Learning Journey
          </h2>
          {/* Content here */}
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-teal-800 flex items-center">
            <Award className="mr-2" /> Your Achievements
          </h2>
          {/* Achievements Content */}
        </section>

        {/* Top Performers Table */}
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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className={user.rank % 2 === 0 ? "bg-teal-50" : "bg-white"}
                  >
                    <td className="p-3">{user.rank}</td>
                    <td className="p-3 font-semibold">{user.name}</td>
                    <td className="p-3">{user.state}</td>
                    <td className="p-3">{user.total_points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right mt-4">
            <Link
              href="/leaderboard"
              className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center"
            >
              View Full Leaderboard <ChevronRight className="ml-1" size={20} />
            </Link>
          </div>
        </section>

        {/* Trending Exams Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-teal-800 flex items-center">
            <BarChart className="mr-2" /> Trending Exams
          </h2>
          {/* Content here */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
