/* eslint-disable react/prop-types */

const Badge = ({ children }) => {
    return (
        <div id="card-1" className="flex flex-col justify-center items-center w-[250px] h-auto p-4 gap-2 rounded-[1.2vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative hover:border-2 hover:border-gray-200">
            {children}
        </div>
    )
}

const description = ({ title, value }) => {
    return (
        <div className="flex flex-col w-full justify-start pt-2 text-[1.2rem]">
            <span className="font-bold">{title}</span>
            <span>{value}</span>
        </div>
    )
}

const price = ({ price, quantity }) => {
    return (
        <span className="flex text-[1.2rem] text-red-600 font-bold">
            {price}
            <p className="flex translate-y-2 text-[0.9rem] text-black font-normal">/{quantity}</p>
        </span>
    )
}

const icon = ({ icon, className }) => {
    return (
        <div className={` ${className}`}>
            {icon}
        </div>
    )
}

Badge.icon = icon
Badge.description = description
Badge.price = price
export default Badge