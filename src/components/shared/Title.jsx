import React from 'react'

function Title({subText, mainText}) {
    return (
        <div className='text-center '>
            <p className="mb-2 text-sm sm:text-base">{subText}</p>
            <h2 className="font-display text-4xl text-dark-sienna [text-shadow:_0px_0px_9px_rgba(51,26,21,0.8)] sm:text-6xl">
                {mainText}
            </h2>
        </div>
    )
}

export default Title
