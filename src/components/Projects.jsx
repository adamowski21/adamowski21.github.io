import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="mt-96 mb-10">
      <p className="text-center mb-4">Browse My Recent</p>
      <h1 className="text-5xl text-center font-semibold mb-16">Projects</h1>
      <div className="flex justify-center">
        <div className="inline-flex flex-col items-center border border-black bg-[#F8F8FA] rounded-3xl px-10 py-8">
          <div>
            <img src="supp-logo-white.svg"
              alt="project 1"
              className="h-96 object-cover rounded-3xl bg-[#383838]"
            />
          </div>
          <h2 className="font-bold text-3xl my-4">Online Store</h2>
          <div>
            <button className="font-semibold transition-all duration-300 ease-in-out p-4 w-36 border border-black rounded-full bg-white text-black hover:bg-[#383838] hover:text-white"
              onClick={() => window.open('https://github.com/adamowski21/projekt', '_blank')}>
              GitHub
            </button>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="arrow icon"
        className="absolute -right-0 translate-y-48 mr-24 h-8 cursor-pointer lg:block hidden"
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
      />
    </section>
  )
}

export default Projects