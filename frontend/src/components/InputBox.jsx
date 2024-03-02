export function InputBox ({onChange, label, placeholder}) {
    return (
        <div>
            <div className="text-sm font-medium text-left py-2">{label}</div>
            <input className="w-full px-2 py-1 border rounded" onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}