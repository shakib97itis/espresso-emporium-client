import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
function Root() {
    return (
        <>
            <div className="mx-auto max-w-[1920px]">
                <Header />
            </div>

            <div className="mx-auto max-w-[1920px]">
                <Outlet />
            </div>
            
            <div className="mx-auto max-w-[1920px]">
                <Footer />
            </div>
            {/* // Footer */}
        </>
    )
}

export default Root
