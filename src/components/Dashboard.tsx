import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import QRCodeGenerator from './QRCodeGenerator';
import { useFeedbackStats } from '../utils/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const { stats, isLoading, error } = useFeedbackStats();

  const feedbackData: ChartData<'bar'> = {
    labels: ['Muy Malo', 'Malo', 'Regular', 'Bueno', 'Excelente'],
    datasets: [
      {
        label: 'Cantidad de Opiniones',
        data: stats ? [
          stats.ratingCounts[1] || 0,
          stats.ratingCounts[2] || 0,
          stats.ratingCounts[3] || 0,
          stats.ratingCounts[4] || 0,
          stats.ratingCounts[5] || 0,
        ] : [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Resumen de Opiniones',
      },
    },
  };

  if (isLoading) {
    return <div className="text-center py-10">Cargando estadísticas...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Estadísticas de Opiniones</h2>
        <Bar data={feedbackData} options={options} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Resumen</h3>
          <p>Calificación promedio: {stats?.averageRating.toFixed(1)}</p>
          <p>Total de opiniones: {stats?.totalFeedbacks}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Opiniones Recientes</h3>
          <ul className="space-y-2">
            {stats?.recentFeedbacks.map((feedback, index) => (
              <li key={index}>
                <p className="font-medium">Calificación: {feedback.rating}</p>
                <p className="text-sm text-gray-600">{feedback.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Acciones Rápidas</h3>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-2 w-full"
          onClick={() => setShowQRGenerator(true)}
        >
          Generar Código QR
        </button>
      </div>
      {showQRGenerator && (
        <QRCodeGenerator onClose={() => setShowQRGenerator(false)} />
      )}
    </div>
  );
};

export default Dashboard;