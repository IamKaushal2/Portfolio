import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar(){
    return(
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">

                    <NavLink to="/" exact 
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-200 hover:text-white text-4xl font-bold cursive tracking-widest"
                    activeClassName="text-white"
                    >
                        Kaushal
                    </NavLink>

                    <NavLink to="/Post" 
                    className="inline-flex items-center py-3 px-3 mr-4 rounded text-red-200 hover:text-white text-2xl font-bold cursive tracking-widest"
                    activeClassName="text-red-100 bg-black"
                    >
                        Blog Posts
                    </NavLink>

                    <NavLink to="/Project" 
                    className="inline-flex items-center py-3 px-3 mr-4 rounded text-red-200 hover:text-white text-2xl font-bold cursive tracking-widest"
                    activeClassName="text-red-100 bg-black"
                    >
                        Projects
                    </NavLink>

                    <NavLink to="/About" 
                    className="inline-flex items-center py-3 px-3 mr-4 rounded text-red-200 hover:text-white text-2xl font-bold cursive tracking-widest"
                    activeClassName="text-red-100 bg-black"
                    >
                        About me!
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/kaushal-makadia-b21b951a0/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/IamKaushal2" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    
                </div>
            </div>
        </header>
    )
}