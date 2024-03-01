import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='justify-around items-center h-17vh flex'>
        <div>
          <ul className="flex gap-8 list-none text-2xl">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }) }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Contact</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mb-10">Copyright &#169; 2024 Adam Michałowski. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer