import React from 'react'

const Hero = () => {

  const downloadCV = () => {
    const cvUrl = "cv.pdf";

    const a = document.createElement('a');
    a.href= cvUrl;
    a.download = 'Adam_Michalowski_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section className="flex flex-col md:flex-row justify-center">
      <div className="h-96 w-96 mx-auto md:mr-20 md:ml-10 md:mt-40 flex-none">
        <img
          src="portfolio_picture.jpg"
          alt="profile"
          className="rounded-full border-black border"
        />
      </div>
      <div className="self-center text-center mt-20">
        <p className="font-semibold text-center text-xl mb-4">Hello, I'm</p>
        <h1 className="text-4xl text-center font-bold">Adam Michałowski</h1>
        <p className="font-semibold text-2xl m-4">Frontend Developer</p>
        <div className="flex justify-center gap-4">
          <button className="font-semibold transition-all duration-300 ease-in-out p-4 w-36 border border-black rounded-full bg-white text-black hover:bg-[#383838] hover:text-white"
          onClick={downloadCV}
          >
            Download CV
          </button>
          <button className="font-semibold transition-all duration-300 ease-in-out p-4 w-36 rounded-full bg-black text-white hover:bg-[#383838]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <img
            src="./linkedin.png"
            alt="linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/adam-michalowski21/', '_blank')}
            className="cursor-pointer h-8 transform transition duration-500 ease-in-out hover:scale-110"
          />
          <img
            src="./github.png"
            alt="github"
            onClick={() => window.open('https://github.com/adamowski21', '_blank')}
            className="cursor-pointer h-8 transform transition duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero