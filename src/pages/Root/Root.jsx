import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

function Root() {
    return (
        <>
            <div className="mx-auto max-w-[1920px]">
                <Header />
            </div>
            <div className="mx-auto max-w-[1920px]">
                <Outlet />
            </div>
            <div className="mx-auto max-w-[1920px] bg-charcoal py-4 text-center text-white">
                <h1>footer</h1>
            </div>
            {/* // Footer */}
        </>
    )
}

export default Root
