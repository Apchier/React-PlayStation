import profilImg from '../Img/mek.jpg'

export default function Mobile() {
    return (
        <header className="flex w-full justify-between sm:hidden">
            <div id="left" className="flex flex-col text-[1.3rem] w-1/2">
                <span className="font-bold">Welcome Back!</span>
                <span>Hi, Andrea</span>
            </div>
            <div id="right" className="flex justify-end items-center gap-[10px] w-1/2">
                <div className="p-[2px] border-2 border-gray rounded-full relative">
                    <i className="fa-regular fa-bell flex text-[1.8rem] justify-center items-center w-[40px] h-[40px] rounded-full"></i>
                    <i className="fa-solid fa-circle absolute top-[10px] right-[10px] text-[0.5rem] text-red-700 border-2 border-white rounded-full"></i>
                </div>
                <span className="p-[2px] border-2 border-gray rounded-full"><img className="w-[40px] rounded-full" src={profilImg} alt="" /></span>
            </div>
        </header>
    );
}