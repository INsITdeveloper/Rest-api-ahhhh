import { UserCircle2, Search } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <UserCircle2 className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
};
