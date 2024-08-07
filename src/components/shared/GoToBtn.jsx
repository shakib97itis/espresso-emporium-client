import React from 'react'

import { FaArrowLeft } from 'react-icons/fa'

function GoToBtn() {
    return (
        <div className="flex cursor-pointer items-center gap-8">
            <FaArrowLeft />
            <span className='font-display [text-shadow:_0px_0px_9px_rgba(55,65,81,0.8)]'>Go to home</span>
        </div>
    )
}

export default GoToBtn
