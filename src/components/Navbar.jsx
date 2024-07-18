import NavLink from './elements/NavLink.jsx'

export default function Navbar() {
    return (
        <nav id="navbar" className="flex w-full justify-between text-gray-400 rounded-[1.2vh] gap-2">
            <div id="left" className="flex items-center w-full sm:w-1/2">
                <div id="logo" className="hidden justify-center items-center w-[50px] h-[50px] mr-[20px] p-2 bg-red-600 rounded-[10px] sm:flex">
                    <i className="fa-solid fa-gamepad flex justify-center items-center text-white w-[50px] h-[50px] text-[2rem]"></i>
                </div>
                <div id="search" className="flex justify-center items-center w-full ">
                    <input type="text" placeholder="Brands, Product, Price, ..." className="flex w-full h-[50px] p-2 outline-none rounded-tl-[1.5vh] rounded-bl-[1.5vh] bg-gray-100" />
                    <i className="fa-solid fa-magnifying-glass flex justify-center items-center bg-gray-100 text-gray-400 h-[50px] w-[50px] rounded-br-[1.5vh] rounded-tr-[1.5vh]"></i>
                </div>
            </div>
            <div id="right" className="flex justify-end items-center gap-[20px] sm:w-1/2">
                <div id="action-list" className="hidden justify-center items-center text-black gap-[20px] sm:flex">
                    <NavLink>
                        <span className="text-[1.1rem]">Brands</span>
                        <i className="fa-solid fa-chevron-down text-[0.7rem]"></i>
                    </NavLink>
                    <NavLink>
                        <span className="text-[1.1rem]">Product</span>
                        <i className="fa-solid fa-chevron-down text-[0.7rem]"></i>
                    </NavLink>
                    <NavLink>
                        <span className="text-[1.1rem]">About Us</span>
                    </NavLink>
                    <NavLink>
                        <span className="text-[1.1rem]">More</span>
                    </NavLink>
                </div>
                <div id="menu" className="flex justify-center items-center w-[50px] h-[50px] p-2 bg-red-600 rounded-[10px]">
                    <i className="fa-solid fa-bars-progress flex justify-center items-center text-white w-[50px] h-[50px] text-[2rem]"></i>
                </div>
            </div>
        </nav>
    )
}