import React from 'react'
import coffeeCup from '../../assets/cup/5.png'
import { FaEye } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

function ProductCard() {
    return (
        <div className="flex flex-col gap-6 rounded-xl bg-cultured p-12 lg:flex-row lg:items-center lg:justify-center">
            <div className="">
                <img
                    className="w-auto sm:mx-auto md:mx-0"
                    src={coffeeCup}
                    alt={coffeeCup}
                />
            </div>
            <div className="space-y-3">
                <p className="text-xl text-davys-grey">
                    <span className="mr-1 text-xl font-semibold text-eerie-black">
                        Name:
                    </span>
                    <span>Americano Coffee</span>
                </p>
                <p className="text-xl text-davys-grey">
                    <span className="mr-1 text-xl font-semibold text-eerie-black">
                        Chef:
                    </span>
                    <span>Mr. Matin Paul</span>
                </p>
                <p className="text-xl text-davys-grey">
                    <span className="mr-1 text-xl font-semibold text-eerie-black">
                        Price:
                    </span>
                    <span>890 Taka</span>
                </p>
            </div>
            <div className="flex items-center gap-5 text-white sm:mx-auto md:mx-0 lg:flex-col">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-tan p-3 text-xl">
                    <FaEye />
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-black-olive p-3 text-xl">
                    <FaPen />
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-carmine-pink p-3 text-xl">
                    <FaTrash />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
