import React from 'react'
import Title from '../shared/Title'
import InstaImage from '../InstaImage/InstaImage'
import img1 from './../../assets/cups/1.png'
import img2 from './../../assets/cups/2.png'
import img3 from './../../assets/cups/3.png'
import img4 from './../../assets/cups/4.png'
import img5 from './../../assets/cups/5.png'
import img6 from './../../assets/cups/6.png'
import img7 from './../../assets/cups/7.png'
import img8 from './../../assets/cups/8.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

function InstagramSection() {
    return (
        <div className="container">
            <div className="mb-12">
                <Title subText="Follow us now" mainText="Follow on Instagram" />
            </div>
            {/* instagram post container */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {images.map((img, i) => (
                    <InstaImage key={i} img={img} />
                ))}
            </div>
        </div>
    )
}

export default InstagramSection
