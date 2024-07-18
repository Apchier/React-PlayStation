export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-screen pr-[41px]">
            <div id="icon-list" className="flex w-full justify-between sm:hidden text-[1.7rem] bg-white rounded-tl-[3vh] rounded-tr-[3vh] py-3 px-6 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div className="flex items-center gap-3 bg-red-600 text-white rounded-[4vh] p-2">
                    <i className="fa-solid fa-compass text-[1.5rem]"></i>
                    <span className="text-[0.7rem]">MEET ME</span>
                </div>
                <div className="">
                    <i className="fa-solid fa-gamepad text-gray-400"></i>
                </div>
                <div className="relative">
                    <i className="fa-solid fa-comment text-gray-400"></i>
                    <div className="flex justify-center items-center w-[10px] h-[10px] bg-red-600 text-white text-[0.5rem] border-2 border-white rounded-full p-[5px] absolute top-1 right-0 ">3</div>
                </div>
                <div className="">
                    <i className="fa-solid fa-user text-gray-400"></i>
                </div>
            </div>
        </footer>
    );
}