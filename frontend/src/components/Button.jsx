export function Button ({label, onClick}) {
    return (
        <button onClick={onClick} type="button" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">{label}</button>
    )
}