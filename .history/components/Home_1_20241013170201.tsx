import React from 'react'

const Home = () => {
  return (
    <section className='mt-20'>
        <div className="w-[92%]  container mx-auto flex">
            <div>
                <div className="text-[#094546] text-5xl w-2/3 leading-[60px]">The Engaging and Effective Way to Master Programming</div>
                <div className="mt-5">
                    <p className='text-black w-1/3 text-xl'>
                    Take interactive exams and challenges designed to make learning fun and impactful. Start your journey toward becoming a coding expert today!
                    </p>
                </div>
                <button
              // onClick={() => route("/")}
              className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg mt-6"
            >
              GET STARTED
            </button>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default Home