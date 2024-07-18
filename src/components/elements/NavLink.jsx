/* eslint-disable react/prop-types */
export default function NavLink(props) {
    return (
        <button className="items-center gap-1 hover:bg-red-600 hover:text-white p-2 rounded-[1vh]">
            {props.children}
        </button>
    );
}