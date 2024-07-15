import React from 'react'

function Hero() {
    return (
        <div className="bg-[url('./hero-bg.png')] bg-cover bg-center lg:relative lg:min-h-[400px] xl:min-h-[800px]">
            <div className="px-4 py-8 text-center text-white lg:absolute lg:left-1/2 lg:top-1/2 lg:max-w-[724px] lg:-translate-y-1/2 lg:transform">
                <h1 className="mb-4 font-display text-4xl md:text-6xl">
                    Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="mx-auto mb-8 max-w-xl text-sm leading-6 lg:text-base lg:leading-8">
                    It's coffee time - Sip & Savor - Relaxation in every sip!
                    Get the nostalgia back!! Your companion of every moment!!!
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <button className="border border-transparent bg-tan px-5 py-2 font-display text-base transition hover:border-white hover:bg-transparent">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Hero
