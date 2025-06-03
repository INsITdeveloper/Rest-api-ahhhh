import { FileText, Download, Code } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm h-full p-4">
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">SEARCH</h2>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <Download className="w-4 h-4" />
            /DOWNLOADER
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <Code className="w-4 h-4" />
            /Download TikTok Team
          </a>
        </nav>
      </div>
      
      <div>
        <h2 className="text-sm font-semibold text-gray-500 mb-4">DOCUMENTATION</h2>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <FileText className="w-4 h-4" />
            Read Me
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <FileText className="w-4 h-4" />
            Developer INS
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <FileText className="w-4 h-4" />
            Backend INS
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <FileText className="w-4 h-4" />
            Frontend INS
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg">
            <FileText className="w-4 h-4" />
            Terima kasih INS
          </a>
        </nav>
      </div>
    </aside>
  );
};
