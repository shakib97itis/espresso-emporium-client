import React from 'react'
import cup from './../../assets/icons/cup.svg'
import Title from '../shared/Title'

function PopularProducts() {
    return (
        <div className="container mb-12">
            {/* Products Title */}
            <div>
                <div className='mb-6'>
                    <Title
                        subText="--- Sip & Savor ---"
                        mainText="Our Popular Products"
                        div
                    />
                </div>
                <button className="mx-auto flex items-center justify-center gap-2 rounded-md border-2 border-dark-sienna bg-middle-yellow-red px-5 py-3 font-display transition hover:bg-cultured">
                    <span className="font-display text-2xl text-white [text-shadow:_0px_0px_14px_rgba(27,26,26,1)] sm:text-4xl">
                        Add Coffee
                    </span>
                    <span>
                        <img className="w-7" src={cup} alt={cup} />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PopularProducts
