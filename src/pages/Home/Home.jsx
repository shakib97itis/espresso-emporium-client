import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import ProductCards from '../../components/ProductCards/ProductCards'
import InstagramSection from '../../components/InstagramSection/InstagramSection'
// import popularProductBG from './../../assets/popular_product_bg.png'

function Home() {
    return (
        <>
            <Hero />

            {/* Features */}
            <div className="bg-alabaster">
                <Feature />
            </div>
            {/* Popular products and product cards */}
            <div
                className={`my-32 bg-[url(./popular_product_bg.png)] bg-cover bg-no-repeat`}
            >
                <PopularProducts />
                {/* --------------------- */}
                <ProductCards />
            </div>
            {/* Follow us section */}
            <div className='mb-28'>
                <InstagramSection />
            </div>
        </>
    )
}

export default Home
