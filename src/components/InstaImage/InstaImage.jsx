import React from 'react'

function InstaImage({ img }) {
    return (
        <div className="overflow-hidden">
            <img src={img} alt={img} className="w-full" />
        </div>
    )
}

export default InstaImage
