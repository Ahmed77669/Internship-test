// 'use client'
// import { useRouter } from 'next/navigation';
// import React from 'react'

// const Lessons = () => {
//   const router = useRouter();
//   return (
//     <section className="mt-[8%]  w-[92%] container mx-auto lg:flex-row justify-between flex-wrap hero-section mb-44">
//       <div className="mb-6 lg:mb-0 flex justify-center">
//         <h1 className="text-3xl font-bold flex justify-center text-[#007676] sm:text-2xl">C Programming Lessons</h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="flex flex-col">
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 1</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 2</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 3</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 4</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 5</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 6</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 7</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl  rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 8</button>
//         </div>

//         <div className="flex flex-col">
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 9</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 10</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 11</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 12</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 13</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 14</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 15</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl  rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 16</button>
//         </div>

//         <div className="flex flex-col">
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 17</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 18</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 19</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 20</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 21</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 22</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 23</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl  rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 24</button>
//         </div>

//         <div className="flex flex-col">
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 25</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 26</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 27</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 28</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 29</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 30</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 31</button>
//           <button className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl  rounded-2xl hover:text-white hover:bg-[#007676] transition-colors" onClick={()=>{router.push('lessons/exam')}}>Lesson 32</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Lessons;



'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Lessons = () => {
  const router = useRouter();
  return (
    <section className="mt-[5%] w-[92%] container mx-auto lg:flex-row justify-between flex-wrap hero-section mb-44">
      <div className="mb-6 lg:mb-5 flex justify-center">
        <h1 className="text-3xl font-bold flex justify-center text-[#007676] sm:text-2xl">C Programming Lessons</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {/* Group the buttons in one div, since grid will handle the columns */}
        {Array.from({ length: 32 }, (_, i) => (
          <button
            key={i + 1}
            className="text-[#007676] w-full py-4 border-[#007676] border-2 text-xl mb-3 rounded-2xl hover:text-white hover:bg-[#007676] transition-colors"
            onClick={() => {
              router.push('lessons/exam');
            }}
          >
            Lesson {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Lessons;
