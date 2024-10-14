import { useState, useEffect } from 'react';

interface FeedbackData {
  businessId: string;
  rating: number;
  comment: string;
}

interface FeedbackStats {
  averageRating: number;
  totalFeedbacks: number;
  ratingCounts: { [key: number]: number };
  recentFeedbacks: FeedbackData[];
}

export const useFeedbackSubmission = () => {
  // ... (código existente)
};

export const useFeedbackStats = () => {
  const [stats, setStats] = useState<FeedbackStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simular una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Datos de ejemplo
        const mockStats: FeedbackStats = {
          averageRating: 4.2,
          totalFeedbacks: 50,
          ratingCounts: { 1: 2, 2: 3, 3: 10, 4: 20, 5: 15 },
          recentFeedbacks: [
            { businessId: '1', rating: 5, comment: 'Excelente servicio, muy recomendado.' },
            { businessId: '1', rating: 4, comment: 'Buena atención, pero los precios son un poco altos.' },
            { businessId: '1', rating: 3, comment: 'El servicio fue regular, podrían mejorar en algunos aspectos.' },
          ]
        };

        setStats(mockStats);
      } catch (err) {
        setError('Error al cargar las estadísticas de feedback.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, isLoading, error };
};