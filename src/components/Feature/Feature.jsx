import icon1 from './../../assets/icons/1.png'
import icon2 from './../../assets/icons/2.png'
import icon3 from './../../assets/icons/3.png'
import icon4 from './../../assets/icons/4.png'

function Feature() {
    return (
        <div className="container space-y-5 py-7 lg:flex lg:gap-7 lg:space-y-0 lg:py-14">
            {/* one */}
            <div className="">
                <img src={icon1} alt={icon1} className="mb-4" />
                <h3 className="mb-2 font-display text-4xl">Awesome Aroma</h3>
                <p>
                    You will definitely be a fan of the design & aroma of your
                    coffee
                </p>
            </div>
            {/* two */}
            <div className="">
                <img src={icon2} alt={icon2} className="mb-4" />
                <h3 className="mb-2 font-display text-4xl">High Quality</h3>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            {/* three */}
            <div className="">
                <img src={icon3} alt={icon3} className="mb-4" />
                <h3 className="mb-2 font-display text-4xl">Pure Grades</h3>
                <p>
                    The coffee is made of the green coffee beans which you will
                    love
                </p>
            </div>
            {/* four */}
            <div className="">
                <img src={icon4} alt={icon4} className="mb-4" />
                <h3 className="mb-2 font-display text-4xl">Proper Roasting</h3>
                <p>
                    Your coffee is brewed by first roasting the green coffee
                    beans
                </p>
            </div>
        </div>
    )
}

export default Feature
