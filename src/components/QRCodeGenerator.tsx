import React, { useState } from 'react';
import QRCode from 'qrcode.react';

interface QRCodeGeneratorProps {
  onClose: () => void;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    const feedbackUrl = `https://opiniones.app/feedback/${encodeURIComponent(businessName)}`;
    setQrValue(feedbackUrl);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${businessName}_qr_code.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Generar Código QR</h2>
        <input
          type="text"
          placeholder="Nombre de la empresa"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={generateQRCode}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-4 w-full"
        >
          Generar QR
        </button>
        {qrValue && (
          <div className="text-center">
            <QRCode id="qr-code" value={qrValue} size={200} level="H" />
            <button
              onClick={downloadQRCode}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
            >
              Descargar QR
            </button>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;