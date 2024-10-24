"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Book, Code, Database, Cpu, Layers, ChevronRight, Clock, Award } from 'lucide-react'

interface Course {
  name: string;
  icon: React.ElementType;
  lessons: number;
  progress: number;
  rating: number;
  color: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  category: string;
  buttonColor: string;
}

const courses: Course[] = [
  { name: "C Programming", icon: Code, lessons: 83, progress: 1, rating: 4, color: "from-blue-400 to-blue-600", difficulty: "Beginner", estimatedTime: "40 hours", category: "Systems", buttonColor: "bg-blue-400 hover:bg-blue-600" },
  { name: "C++ Programming", icon: Cpu, lessons: 50, progress: 0, rating: 4, color: "from-purple-400 to-purple-600", difficulty: "Intermediate", estimatedTime: "60 hours", category: "Systems", buttonColor: "bg-purple-400 hover:bg-purble-600" },
  { name: "Data Structures", icon: Database, lessons: 50, progress: 0, rating: 4, color: "from-green-400 to-green-600", difficulty: "Intermediate", estimatedTime: "50 hours", category: "Computer Science", buttonColor: "bg-green-400 hover:bg-green-600" },
  { name: "Algorithms", icon: Layers, lessons: 65, progress: 0, rating: 4, color: "from-yellow-400 to-yellow-600", difficulty: "Advanced", estimatedTime: "70 hours", category: "Computer Science", buttonColor: "bg-yellow-400 hover:bg-yellow-600" },
  { name: "OOP", icon: Book, lessons: 11, progress: 0, rating: 4, color: "from-red-400 to-red-600", difficulty: "Intermediate", estimatedTime: "30 hours", category: "Programming Paradigms", buttonColor: "bg-red-400 hover:bg-red-600" },
]

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
  )
}

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = course.icon

  return (
    <Link href={`/course/${course.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
      <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-${course.color.split('-')[1]}-200 cursor-pointer`}>
        <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className={`p-2 rounded-full bg-gradient-to-r ${course.color} text-white mr-3`}>
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
            </div>
            <div className={`${course.buttonColor} rounded-full px-3 py-1 text-sm font-semibold text-${course.color.split('-')[1]}-600 whitespace-nowrap`}>
              {course.lessons} lessons
            </div>
          </div>
          <div className="flex items-center mb-4">
            <StarRating rating={course.rating} />
            <span className="ml-2 text-sm text-gray-600">({course.rating}.0)</span>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-${course.color.split('-')[1]}-600 bg-${course.color.split('-')[1]}-200`}>
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className={`text-xs font-semibold inline-block text-${course.color.split('-')[1]}-600`}>
                  {course.progress}%
                </span>
              </div>
            </div>
            <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${course.color.split('-')[1]}-200`}>
              <div style={{ width: `${course.progress}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${course.color}`}></div>
            </div>
          </div>
          <div className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40' : 'max-h-0'}`}>
            <div className="flex items-center mb-2">
              <Award className={`w-4 h-4 mr-2 text-${course.color.split('-')[1]}-500`} />
              <span className={`text-sm text-${course.color.split('-')[1]}-600`}>Difficulty: {course.difficulty}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className={`w-4 h-4 mr-2 text-${course.color.split('-')[1]}-500`} />
              <span className={`text-sm text-${course.color.split('-')[1]}-600`}>Estimated Time: {course.estimatedTime}</span>
            </div>
            <div className="flex items-center">
              <Database className={`w-4 h-4 mr-2 text-${course.color.split('-')[1]}-500`} />
              <span className={`text-sm text-${course.color.split('-')[1]}-600`}>Category: {course.category}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className={`px-4 py-2 ${course.buttonColor} text-white rounded-md hover:bg-${course.color.split('-')[1]}-600 transition-colors duration-300`}>
              Start Course
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className={`flex items-center text-sm font-medium text-${course.color.split('-')[1]}-600 hover:text-${course.color.split('-')[1]}-500 transition-all duration-300`}
            >
              <span>{isExpanded ? 'Less Info' : 'More Info'}</span>
              <ChevronRight className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function CoreCoursesPage() {
  const [filter, setFilter] = useState('All')

  const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.difficulty === filter)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          Core Courses
        </h1>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setFilter(level)}
                className={`px-4 py-2 text-sm font-medium ${
                  filter === level
                    ? 'text-white bg-teal-600'
                    : 'text-teal-700 bg-white hover:bg-teal-50'
                } border border-teal-300 first:rounded-l-lg last:rounded-r-lg transition-colors duration-300`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}