import axios from 'axios';
import https from 'https';
import FormData from 'form-data';

const downloadImage = async (url: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const data: Uint8Array[] = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
      res.on('error', (err) => reject(err));
    });
  });
};

const detectPorn = async (imageUrl: string) => {
  try {
    const imageBuffer = await downloadImage(imageUrl);

    const formData = new FormData();
    formData.append('file', imageBuffer, {
      filename: 'upload.jpg',
      contentType: 'image/jpeg',
    });

    const response = await axios.post(
      'https://www.nyckel.com/v1/functions/o2f0jzcdyut2qxhu/invoke',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error during detection:', error);
    throw new Error('Gagal mendeteksi konten gambar');
  }
};

export const analyzeContent = async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Metode Tidak Diizinkan' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await req.json();
  const { imageUrl } = body;

  if (!imageUrl) {
    return new Response(JSON.stringify({ error: 'Parameter URL gambar tidak ada' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const detectionResult = await detectPorn(imageUrl);
    const { labelName, confidence } = detectionResult;

    let hasil = '';
    if (labelName === 'Porn') {
      hasil = `Terdeteksi konten dewasa dengan tingkat keyakinan ${(confidence * 100).toFixed(2)}%.`;
    } else {
      hasil = `Tidak terdeteksi konten dewasa. Tingkat keyakinan ${(confidence * 100).toFixed(2)}%.`;
    }

    return new Response(JSON.stringify({ hasil, keyakinan: `${confidence * 100}%` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Kesalahan tak terduga terjadi';
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan', detail: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
