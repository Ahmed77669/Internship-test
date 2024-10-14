import React from 'react'

const Home = () => {
  return (
    <section className='mt-32'>
        <div className="w-[92%]  container mx-auto flex justify-between">
            <div className='w-[640px]'>
                <div className="text-[#094546] text-5xl w-2/3 leading-[60px]">The Engaging and Effective Way to Master Programming</div>
                
                    <p className='text-black w-1/3 text-xl mt-8'>
                    Take interactive exams and challenges designed to make learning fun and impactful. Start your journey toward becoming a coding expert today!
                    </p>
              
                <button
              // onClick={() => route("/")}
              className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg mt-8"
            >
              GET STARTED
            </button>
            </div>
            <div className='bg-black rounded-md w-[500px] h-[450px]'></div>
        </div>
    </section>
  )
}

export default Home