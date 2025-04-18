import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    return (
        <div className="relative w-full">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                className="w-full h-12 pl-10 pr-4 text-xs rounded-xl border border-[#cccccc]/80 outline-none"
                placeholder="Search your course here..."
            />
        </div>
    );
}
