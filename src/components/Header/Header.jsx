import logo from './../../assets/espressoEmporiumLogo.png'

function Header() {
    return (
        <div className="">
            <div
                className={`flex items-center justify-center bg-[url('./header-bg.jpg')] bg-cover py-2 font-display`}
            >
                <span className="mr-2">
                    <img
                        src={logo}
                        className="max-h-24 max-w-16"
                        alt="Espresso Emporium Logo"
                    />
                </span>
                <p className="text-3xl text-white lg:text-6xl">
                    Espresso Emporium
                </p>
            </div>
        </div>
    )
}

export default Header
