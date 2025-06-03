import { RequestForm } from './RequestForm';

export const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">POST Request</h2>
          <RequestForm />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">RESULT</h2>
            <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm">
              <option value="all">type: *</option>
            </select>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
            <p className="text-gray-600">Hasil di sini</p>
            <p className="text-xs text-gray-500 mt-2">jika diperlukan, akan keluar alasan penggunaan</p>
          </div>
        </div>
      </div>
    </main>
  );
};
