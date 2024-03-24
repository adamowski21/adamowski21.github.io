import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative mt-72 mb-10">
      <p className="text-center mb-4">Get To Know More</p>
      <h1 className="text-5xl text-center font-semibold mb-16">About Me</h1>
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="h-1/4 w-1/4 mx-auto md:mr-20 md:ml-40 mb-16 md:mb-0 flex-none">
          <img
            src="about_picture.jpg"
            alt="about profile"
            className="rounded-3xl"
          />
        </div>
        <div className="justify-center flex-col flex mx-4 p-20 md:mx-auto md:mr-60">
          <div className="gap-8 my-8 flex">
            <div className="p-6 flex-1 bg-white rounded-3xl border border-[#383838] border-solid flex flex-col items-center">
              <img
                src="experience.png"
                alt="experience icon"
                className="cursor-pointer h-8"
              />
              <h3 className="font-bold text-xl">Experience</h3>
              <p>Looking for my first job<br /></p>
            </div>
            <div className="p-6 flex-1 bg-white rounded-3xl border border-[#383838] border-solid flex flex-col items-center">
              <img
                src="education.png"
                alt="education icon"
                className="cursor-pointer h-8"
              />
              <h3 className="font-bold text-xl">Education</h3>
              <p>Computer Science Engineer <br /></p>
            </div>
          </div>
          <div>
            <p>
              I have completed engineering studies specializing in Software Engineering,
              and I envision my future in programming web applications. During my studies,
              I delved into various programming languages, but programming web pages has always been my main interest.
              I see it not only as a field for expressing creativity but also as having the potential to create useful and innovative solutions.
              Consistently, I broaden my knowledge in technologies such as React, JavaScript, and Next.js
              by engaging in the development of personal projects. In my free time, I engage in physical activities such as football and tennis.

            </p>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="arrow icon"
        className="absolute -right-0 translate-y-56 mr-24 h-8 cursor-pointer lg:block hidden"
        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
      />
    </section>
  )
}

export default About