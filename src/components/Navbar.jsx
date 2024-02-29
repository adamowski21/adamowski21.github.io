import React, { useState } from 'react'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <nav className='justify-around items-center h-17vh lg:flex hidden'>
                <div className="text-3xl cursor-default">
                    Adam Michałowski
                </div>
                <div>
                    <ul className="flex gap-8 list-none text-2xl">
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>About</a></li>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }) }}>Skills</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}>Projects</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="flex justify-around items-center h-17vh lg:hidden">
                <div className="text-3xl cursor-default">
                    Adam Michałowski
                </div>
                <div className="relative inline-block">
                    <div className="flex flex-col justify-between h-6 w-8 cursor-pointer" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {showMenu && (
                        <div className="absolute top-full right-0 bg-white w-fit transition-all duration-300 ease-in-out">
                            <ul className="flex flex-col gap-8 list-none text-2xl p-2">
                                <li><a className="block p-1 text-center text-2xl text-black no-underline transition-all duration-300 ease-in-out" href="#about" onClick={toggleMenu}>About</a></li>
                                <li><a className="block p-1 text-center text-2xl text-black no-underline transition-all duration-300 ease-in-out" href="#experience" onClick={toggleMenu}>Experience</a></li>
                                <li><a className="block p-1 text-center text-2xl text-black no-underline transition-all duration-300 ease-in-out" href="#projects" onClick={toggleMenu}>Projects</a></li>
                                <li><a className="block p-1 text-center text-2xl text-black no-underline transition-all duration-300 ease-in-out" href="#contact" onClick={toggleMenu}>Contact</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>

    )
}

export default Navbar