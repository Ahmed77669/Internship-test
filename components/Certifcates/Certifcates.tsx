"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import * as LucideIcons from 'lucide-react'

const languages = [
  { name: "C Programming", category: "systems", icon: "Server", difficulty: "intermediate", popularity: 80 },
  { name: "C++", category: "systems", icon: "Server", difficulty: "advanced", popularity: 85 },
  { name: "Python", category: "scripting", icon: "Terminal", difficulty: "beginner", popularity: 95 },
  { name: "Java", category: "general", icon: "FileCode", difficulty: "intermediate", popularity: 90 },
  { name: "JavaScript", category: "web", icon: "Globe", difficulty: "beginner", popularity: 100 },
  { name: "PHP", category: "web", icon: "Globe", difficulty: "intermediate", popularity: 75 },
  { name: "Dart", category: "mobile", icon: "Smartphone", difficulty: "intermediate", popularity: 60 },
  { name: "HTML", category: "web", icon: "Globe", difficulty: "beginner", popularity: 100 },
  { name: "CSS", category: "web", icon: "Globe", difficulty: "beginner", popularity: 100 },
  { name: "Kotlin", category: "mobile", icon: "Smartphone", difficulty: "intermediate", popularity: 70 },
  { name: "Rust", category: "systems", icon: "Server", difficulty: "advanced", popularity: 65 },
  { name: "Ruby", category: "scripting", icon: "Terminal", difficulty: "intermediate", popularity: 70 },
  { name: "Swift", category: "mobile", icon: "Smartphone", difficulty: "intermediate", popularity: 75 },
  { name: "TypeScript", category: "web", icon: "Globe", difficulty: "intermediate", popularity: 85 },
  { name: "Go", category: "systems", icon: "Server", difficulty: "intermediate", popularity: 80 },
  { name: "C#", category: "general", icon: "FileCode", difficulty: "intermediate", popularity: 85 },
  { name: "VisualBasic", category: "general", icon: "FileCode", difficulty: "beginner", popularity: 50 },
  { name: "CoffeeScript", category: "web", icon: "Globe", difficulty: "intermediate", popularity: 40 },
  { name: "Haskell", category: "functional", icon: "Code2", difficulty: "advanced", popularity: 45 },
  { name: "Qiskit", category: "quantum", icon: "Cpu", difficulty: "advanced", popularity: 30 },
  { name: "Ocean", category: "quantum", icon: "Cpu", difficulty: "advanced", popularity: 25 },
  { name: "Cirq", category: "quantum", icon: "Cpu", difficulty: "advanced", popularity: 25 },
  { name: "Elixir", category: "functional", icon: "Code2", difficulty: "advanced", popularity: 50 },
  { name: "Verilog", category: "hardware", icon: "Database", difficulty: "advanced", popularity: 35 }
]

const difficultyColors = {
  beginner: "bg-teal-100 text-teal-800",
  intermediate: "bg-teal-200 text-teal-800",
  advanced: "bg-teal-300 text-teal-800"
}

export default function TealCertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("name")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const filteredLanguages = languages
    .filter(lang => 
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "all" || lang.category === activeCategory)
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "popularity") return b.popularity - a.popularity
      return 0
    })

  const categories = ["all", ...new Set(languages.map(lang => lang.category))]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-teal-900' : 'bg-teal-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-extrabold ${isDarkMode ? 'text-teal-100' : 'text-teal-900'}`}>
            Programming Language Certificates
          </h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-teal-800 text-teal-100' : 'bg-teal-200 text-teal-800'}`}
          >
            {isDarkMode ? <LucideIcons.Moon className="w-5 h-5" /> : <LucideIcons.Sun className="w-5 h-5" />}
          </button>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search languages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full max-w-md p-2 rounded-md ${isDarkMode ? 'bg-teal-800 text-teal-100' : 'bg-white text-teal-900'} border ${isDarkMode ? 'border-teal-700' : 'border-teal-300'}`}
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full capitalize ${
                activeCategory === category
                  ? (isDarkMode ? 'bg-teal-600 text-teal-100' : 'bg-teal-500 text-white')
                  : (isDarkMode ? 'bg-teal-800 text-teal-200' : 'bg-teal-100 text-teal-800')
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? (isDarkMode ? 'bg-teal-700' : 'bg-teal-200') : ''}`}
            >
              <LucideIcons.Grid className={`w-5 h-5 ${isDarkMode ? 'text-teal-100' : 'text-teal-800'}`} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? (isDarkMode ? 'bg-teal-700' : 'bg-teal-200') : ''}`}
            >
              <LucideIcons.List className={`w-5 h-5 ${isDarkMode ? 'text-teal-100' : 'text-teal-800'}`} />
            </button>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`border rounded p-2 ${isDarkMode ? 'bg-teal-800 text-teal-100 border-teal-700' : 'bg-white text-teal-900 border-teal-300'}`}
          >
            <option value="name">Sort by Name</option>
            <option value="popularity">Sort by Popularity</option>
          </select>
        </div>

        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
          {filteredLanguages.map((language) => {
            const Icon = LucideIcons[language.icon as keyof typeof LucideIcons]
            return (
              <Link href={`/certificates/${language.name.toLowerCase().replace(/\s+/g, '-')}`} key={language.name}>
                <div className={`overflow-hidden rounded-lg ${isDarkMode ? 'bg-teal-800 border-teal-700' : 'bg-white border-teal-200'} border hover:shadow-lg transition-all duration-300 ${viewMode === "list" ? "flex items-center" : ""}`}>
                  <div className={`p-6 ${viewMode === "list" ? "flex items-center justify-between w-full" : ""}`}>
                    <div className={`flex items-center ${viewMode === "list" ? "w-1/3" : "mb-4"}`}>
                      <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-teal-700' : 'bg-teal-100'} flex items-center justify-center mr-4`}>
                        {Icon && <Icon className={`w-6 h-6 ${isDarkMode ? 'text-teal-200' : 'text-teal-600'}`} />}
                      </div>
                      <div>
                        <h2 className={`font-bold text-xl ${isDarkMode ? 'text-teal-100' : 'text-teal-800'}`}>{language.name}</h2>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${isDarkMode ? 'bg-teal-700 text-teal-200' : 'bg-teal-100 text-teal-800'} capitalize mt-1`}>
                          {language.category}
                        </span>
                      </div>
                    </div>
                    {viewMode === "list" && (
                      <div className="flex items-center space-x-4 w-2/3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${difficultyColors[language.difficulty]} capitalize`}>
                          {language.difficulty}
                        </span>
                        <div className="flex items-center">
                          <span className={`text-sm ${isDarkMode ? 'text-teal-300' : 'text-teal-600'} mr-2`}>Popularity:</span>
                          <div className="w-24 h-2 bg-teal-200 rounded-full">
                            <div
                              className="h-full bg-teal-500 rounded-full"
                              style={{ width: `${language.popularity}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {viewMode === "grid" && (
                      <div className="mt-4">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${difficultyColors[language.difficulty]} capitalize mb-2`}>
                          {language.difficulty}
                        </span>
                        <div className="flex items-center">
                          <span className={`text-sm ${isDarkMode ? 'text-teal-300' : 'text-teal-600'} mr-2`}>Popularity:</span>
                          <div className="w-full h-2 bg-teal-200 rounded-full">
                            <div
                              className="h-full bg-teal-500 rounded-full"
                              style={{ width: `${language.popularity}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
