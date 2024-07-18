import stik1 from '../Img/stik1.jpg'
import stik2 from '../Img/stik2.jpg'

export default function Card() {
    return (
        <div id="card" className="flex w-full gap-6 pt-[20px] pb-[50px] bg-white overflow-x-scroll">
            <div id="card-1" className="flex flex-col justify-center items-center w-[250px] h-auto p-4 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-2" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-3" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <div id="card-4" className="flex flex-col justify-center items-center w-[250px] h-auto p-3 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">Solar Red Joystick</span>
                    <span>Accessories</span>
                </div>
                <div className="flex w-full justify-between">
                    <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/pcs</p></span>
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-xmark"></i></span>
                    <span className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100"><i className="fa-solid fa-star"></i></span>
                    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
        </div>
    )
}