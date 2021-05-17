import React from "react"
import image from "../bg1.jpg"

export default function Home(){
    return(
        <main>
            <img src={image} 
            alt="Background" 
            className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-5xl text-red-100 font-bold cursive leading-none lg:leading-snug home-name">Aloha. I'm Kaushal.</h1>
            </section>
        </main>
    )
}