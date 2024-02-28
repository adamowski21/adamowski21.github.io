import React from 'react'

const Hero = () => {

  return (
    <section className="flex flex-col md:flex-row justify-center">
      <div className="h-96 w-96 mr-20 mt-20">
        <img
          src="mcqueen.jpg"
          alt="profile"
          className="rounded-full border-black border"
        />
      </div>
      <div className="self-center text-center mt-20">
        <p className="font-semibold text-center text-xl mb-4">Hello, I'm</p>
        <h1 className="text-4xl text-center font-bold">Adam Michałowski</h1>
        <p className="font-semibold text-2xl m-4">Frontend Developer</p>
        <div className="flex justify-center gap-4">
          <button className="font-semibold transition-all duration-300 ease-in-out p-4 w-36 border border-black rounded-full bg-white text-black hover:bg-[#383838] hover:text-white">
            Download CV
          </button>
          <button className="font-semibold transition-all duration-300 ease-in-out p-4 w-36 rounded-full bg-black text-white hover:bg-[#383838]" onClick={() => window.location.href = './#contact'}>
            Contact Me
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <img
            src="./linkedin.png"
            alt="linkedin"
            onClick={() => window.open('https://www.linkedin.com', '_blank')}
            className="cursor-pointer h-8"
          />
          <img
            src="./github.png"
            alt="github"
            onClick={() => window.open('https://github.com/adamowski21', '_blank')}
            className="cursor-pointer h-8"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero