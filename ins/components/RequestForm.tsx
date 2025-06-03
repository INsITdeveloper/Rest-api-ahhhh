import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatedSlash } from './AnimatedSlash';

interface FormData {
  url: string;
  type: string;
}

export const RequestForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [useCurl, setUseCurl] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <input
            {...register('url')}
            type="text"
            placeholder="Enter URL"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-xs text-gray-500">cek status account</p>
        </div>
        <AnimatedSlash isActive={isProcessing} />
      </div>

      <div className="flex items-center justify-between">
        <select
          {...register('type')}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="image">Image Analysis</option>
          <option value="text">Text Analysis</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useCurl}
            onChange={(e) => setUseCurl(e.target.checked)}
            className="rounded text-blue-500"
          />
          <span className="text-sm text-gray-700">Curl x</span>
        </label>
      </div>
    </form>
  );
};
