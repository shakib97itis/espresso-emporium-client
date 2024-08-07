import React from 'react'
import GoToBtn from '../../components/shared/GoToBtn'
import coffeeImage from '../../assets/cup/5.png'

function SingleCoffee() {
    return (
        <div className="container">
            <div className="mt-10 text-3xl">
                <GoToBtn />
            </div>
            <div className="mb-32 mt-12 flex items-center gap-28 bg-anti-flash-white px-32 py-16">
                <div>
                    <img className="w-80" src={coffeeImage} alt={coffeeImage} />
                </div>
                <div>
                    <h1 className="mb-8 font-display text-4xl text-dark-sienna [text-shadow:_0px_0px_9px_rgba(55,65,81,0.8)]">
                        Niceties
                    </h1>
                    <div className="text-xl mb-4">
                        <span className="mr-2 font-semibold text-dark-sienna">
                            Name:
                        </span>
                        <span className="text-davys-grey">
                            Americano Coffee
                        </span>
                    </div>
                    <div className="text-xl mb-4">
                        <span className="mr-2 font-semibold text-dark-sienna">
                            Chef:
                        </span>
                        <span>Mr. Matin Paul</span>
                    </div>
                    <div className="text-xl mb-4">
                        <span className="mr-2 font-semibold text-dark-sienna">
                            Supplier:
                        </span>
                        <span>Cappu Authorizer</span>
                    </div>
                    <div className="text-xl mb-4">
                        <span className="mr-2 font-semibold text-dark-sienna">
                            Taste:
                        </span>
                        <span>Sweet and hot</span>
                    </div>
                    <div className="text-xl mb-4">
                        <span className="mr-2 font-semibold text-dark-sienna">
                            Category:
                        </span>
                        <span>Americano</span>
                    </div>
                    <div className="text-xl mb-4">
                        <span className="mr-2 font-semibold text-dark-sienna">
                            Details:
                        </span>
                        <span>Espresso with hot water</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCoffee
