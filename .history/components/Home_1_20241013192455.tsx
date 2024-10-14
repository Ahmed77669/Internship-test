import React from 'react'
import Image from 'next/image'
import lang from "@/public/landingPage-photos/lang.png"

const Home = () => {
  return (
    <section className='mt-40'>
        <div className="w-[92%]  container mx-auto flex justify-between flex-wrap">
            <div className='w-[660px]'>
                <div className="text-[#094546] text-5xl w-full leading-[60px]">The Engaging and Effective Way to Master Programming</div>
                
                    <p className='text-black w-2/3 text-xl mt-8 leading-[40px]'>
                    Take interactive exams and challenges designed to make learning fun and impactful. Start your journey toward becoming a coding expert today!
                    </p>
              
                <button
              // onClick={() => route("/")}
              className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg mt-8"
            >
              GET STARTED
            </button>
            </div>
            <div className='bg-black rounded-md w-[500px] h-[450px] p-10 flex flex-wrap'>


              <pre className='text-[#4ADE80]'>
              {`#include <stdio.h>

int main() {
    int year;

    printf("Enter a year: ");
    scanf("%d", &year);

    if ((year % 100 != 0 && year % 4 == 0)) {
        printf("%d is a leap year.\\n", year);
    } else {
        printf("%d is not a leap year.\\n", year);
    }

    return 0;
}`}
                             
               </pre>
               </div>

        </div>
<div className='bg-[#095051] mt-[12%] mb-[12%] py-36 h-[1140px]'>

<div className="w-[92%]  container mx-auto flex justify-between flex-wrap">
            <div className='w-[700px]'>
                <div className="text-white text-5xl w-full leading-[60px]">Practice Over 30 Programming Languages!</div>
                
                    <p className='text-white w-2/3 text-xl mt-8 leading-[40px]'>
                    Enhance your skills with exams in over 30 programming languages. Our premium service offers a comprehensive and engaging way to advance your coding expertise.
                    </p>
              
                <button
              // onClick={() => route("/")}
              className="bg-[#ffffff] text-[#007676] rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg mt-8"
            >
              GET STARTED
            </button>
            </div>
            <div className='rounded-md w-[500px] h-[450px]  flex flex-wrap'>

              <Image src={lang} alt='programming languages photo'/>
               {/* </div> */}</div>

        </div>
</div>

<div className="w-[92%]  container mx-auto flex justify-between flex-wrap">
            <div className='w-[700px]'>
                <div className="text-white text-5xl w-full leading-[60px]">Practice Over 30 Programming Languages!</div>
                
                    <p className='text-white w-2/3 text-xl mt-8 leading-[40px]'>
                    Enhance your skills with exams in over 30 programming languages. Our premium service offers a comprehensive and engaging way to advance your coding expertise.
                    </p>
              
                <button
              // onClick={() => route("/")}
              className="bg-[#ffffff] text-[#007676] rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg mt-8"
            >
              GET STARTED
            </button>
            </div>
            <div className='rounded-md w-[500px] h-[450px] p-10 flex flex-wrap'>

              <Image src={lang} alt='programming languages photo'/>
               {/* </div> */}</div>

        </div>
        
    </section>
  )
}

export default Home