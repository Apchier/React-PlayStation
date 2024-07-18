import console from '../Img/console.png'

export default function Console() {
    return (
        <div id="content" className="flex flex-col w-full items-start pt-2 gap-4 sm:flex-row">
            <div id="label-1" className="flex w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 rounded-[2vh] hover:border-2 hover:border-gray-200 sm:grow">
                <div className="w-[150px] mr-2">
                    <img src={console} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">PS5 solar red</span>
                    <span>packages</span>
                </div>
                <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex text-[0.9rem] text-black font-normal">/pcs</p></span>
            </div>
            <div id="label-2" className="hidden w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 rounded-[2vh] hover:border-2 hover:border-gray-200 sm:grow sm:flex">
                <div className="w-[150px] mr-2">
                    <img src={console} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">PS5 solar red</span>
                    <span>packages</span>
                </div>
                <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex text-[0.9rem] text-black font-normal">/pcs</p></span>
            </div>
            <div id="label-3" className="hidden w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 rounded-[2vh] hover:border-2 hover:border-gray-200 sm:grow sm:flex">
                <div className="w-[150px] mr-2">
                    <img src={console} alt="" />
                </div>
                <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
                    <span className="font-bold">PS5 solar red</span>
                    <span>packages</span>
                </div>
                <span className="flex text-[1.2rem] text-red-600 font-bold">$233<p className="flex text-[0.9rem] text-black font-normal">/pcs</p></span>
            </div>
        </div>
    )
}