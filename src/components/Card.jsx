import stik1 from '../Img/stik1.jpg'
import stik2 from '../Img/stik2.jpg'
import Badge from './elements/Badges'
import { FaCheck } from "react-icons/fa"
import { HiXMark } from "react-icons/hi2"
import { FaStar } from "react-icons/fa"


export default function Card() {
    return (
        <div id="card" className="flex w-full gap-6 pt-[20px] pb-[50px] bg-white overflow-x-scroll">
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <Badge.description title="Solar Red Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <Badge.description title="Solar Black Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <Badge.description title="Solar Red Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <Badge.description title="Solar Black Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <Badge.description title="Solar Red Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <Badge.description title="Solar Black Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <Badge.description title="Solar Red Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <Badge.description title="Solar Black Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik1} alt="" />
                </div>
                <Badge.description title="Solar Red Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
            <Badge>
                <div className="w-[220px] h-[200px]">
                    <img src={stik2} alt="" />
                </div>
                <Badge.description title="Solar Black Joystick" value="Accessories" />
                <div className="flex w-full justify-between">
                    <Badge.price price="233" quantity="pcs" />
                    <span className="flex justify-center items-center w-[45px] h-[45px] -translate-y-4 bg-gray-500 text-white rounded-lg"><i className="fa-solid fa-cart-shopping text-[1.5rem]"></i></span>
                </div>
                <div id="icon" className="flex w-full justify-center items-center gap-3 absolute -bottom-[20px]">
                    <Badge.icon icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Badge.icon icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Badge.icon icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Badge>
        </div>
    )
}