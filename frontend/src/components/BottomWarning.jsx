import {Link} from "react-router-dom"

export function BottomWarning ({label, buttonText, to}) {
    return (
        <div className="text-sm text-gray-500 pt-6">
            <div>{label}</div>
            <Link className="text-blue-500 cursor-pointer hover:underline" to={to}>{buttonText}</Link>
        </div>
    )
}