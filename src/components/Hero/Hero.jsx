import React from 'react'
// lg:min-h-[400px] xl:min-h-[800px]

function Hero() {
    return (
        <div className="h-[80vh] bg-[url('./hero-bg.png')] bg-cover bg-center">
            <div className="container grid h-full md:grid-cols-2 md:items-center">
                <div>&nbsp;</div>
                <div className="text-white">
                    <h1 className="mb-4 font-display text-4xl md:text-6xl">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="mb-8 text-sm leading-6 lg:text-base lg:leading-8">
                        It's coffee time - Sip & Savor - Relaxation in every
                        sip! Get the nostalgia back!! Your companion of every
                        moment!!! Enjoy the beautiful moments and make them
                        memorable.
                    </p>
                    <button className="border border-transparent bg-tan px-5 py-2 font-display text-base text-dark-sienna transition hover:border-white hover:bg-transparent">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
