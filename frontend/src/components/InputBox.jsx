export function InputBox({ onChange, label, placeholder, type = 'text' }) {
    return (
      <div className="w-full mb-4">
        <label className="block text-left text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
          type={type}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
}