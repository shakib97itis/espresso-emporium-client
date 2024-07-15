import logo from "./../../assets/espressoEmporiumLogo.png";

function Header() {
  return (
    <div className="">
      <div className={`bg-cover font-display py-2 flex justify-center items-center bg-[url('./header-bg.jpg')]`}>
        <span className="mr-2">
          <img src={logo} className="max-w-16 max-h-24" alt="Espresso Emporium Logo" />
        </span>
        <p className="text-3xl lg:text-6xl text-white">Espresso Emporium</p>
      </div>
    </div>
  );
}

export default Header;
