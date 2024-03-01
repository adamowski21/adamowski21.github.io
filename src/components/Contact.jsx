import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="mt-44 flex justify-center flex-col h-70vh">
      <p className="text-center mb-4">Get In Touch</p>
      <h1 className="text-5xl text-center font-semibold mb-4">Contact Me</h1>
      <div className="flex justify-center">
        <div className="inline-flex flex-col sm:flex-row border rounded-full border-[#353535] m-4 sm:m-8 p-4 sm:p-6 gap-2 sm:gap-4">
          <div className="flex items-center justify-center gap-2 m-2 sm:m-4">
            <img src="email.png"
              alt="email"
              className="cursor-pointer h-10"
            />
            <p className="text-xl"><a href="mailto: adam.michalowski01@gmail.com">adam.michalowski01@gmail.com</a></p>
          </div>
          <div className="flex items-center justify-center gap-2 m-2 sm:m-4">
            <img src="linkedin.png"
              alt="linkedin"
              className="cursor-pointer h-8"
            />
            <p className="text-xl" ><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact