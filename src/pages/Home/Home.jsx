import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
function Home() {
    return (
        <>
            <Hero />
            <Feature />
        </>
    )
}

export default Home
