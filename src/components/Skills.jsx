import React from 'react'

const Skills = () => {

  const articles = [
    { img: "html.png", title: "HTML", description: "Advanced" },
    { img: "css.png", title: "CSS", description: "Advanced" },
    { img: "tailwind.png", title: "Tailwind", description: "Advanced" },
    { img: "javascript.png", title: "JavaScript", description: "Competent" },
    { img: "react.png", title: "React", description: "Competent" },
    { img: "nextjs.png", title: "Next.js", description: "Competent" },
  ]

  return (
    <section id="skills" className="mt-96 mb-10">
      <p className="text-center mb-4">Explore my</p>
      <h1 className="text-5xl text-center font-semibold mb-16">Skills</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 border border-black rounded-3xl">
          <h2 className="mb-10 mt-2 text-center  font-semibold text-3xl"> Frontend Development</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 p-4">
            {articles.map((article) => (
              <article className="flex items-center">
                <img
                  src={article.img}
                  alt="logo"
                  className="cursor-pointer h-16"
                />
                <div className="ml-2">
                  <h3 className="font-bold text-lg">{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="arrow icon"
        className="absolute -right-0 translate-y-48 mr-24 h-8 cursor-pointer lg:block hidden"
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
      />
    </section>
  )
}

export default Skills