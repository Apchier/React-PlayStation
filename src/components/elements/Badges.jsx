
const CardWrapper = ({children}) => {
    return (
        <div id="card-1" className="flex flex-col justify-center items-center w-[250px] h-auto p-4 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
            {children}
        </div>
    )
}
