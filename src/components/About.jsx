import React from 'react'

const About = () => {
  return (
    <section className="relative mt-72 mb-10">
      <p className="text-center mb-4">Get To Know More</p>
      <h1 className="text-5xl text-center font-semibold mb-16">About Me</h1>
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="h-96 w-96 mx-auto md:mr-20 md:ml-40 mb-16 md:mb-0 flex-none">
          <img
            src="profile_picture.jpg"
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
              <p>B.Sc.Bachelors Degree <br /></p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
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