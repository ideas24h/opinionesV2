import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Star, TrendingUp, BarChart, QrCode, Send } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-24 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl mb-6">
            Transforma las opiniones de tus clientes en éxito
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            opiniones.app te ayuda a recopilar, analizar y actuar sobre el feedback de tus clientes, impulsando la mejora continua y el crecimiento de tu negocio.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-10"
          >
            Comenzar ahora
          </Link>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Características principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<MessageSquare className="w-8 h-8 text-blue-600" />}
              title="Recopilación sencilla"
              description="Obtén opiniones fácilmente a través de QR, enlaces o integraciones con tus canales de comunicación."
            />
            <Feature
              icon={<BarChart className="w-8 h-8 text-blue-600" />}
              title="Análisis detallado"
              description="Visualiza tendencias, métricas clave y obtén insights valiosos de las opiniones de tus clientes."
            />
            <Feature
              icon={<TrendingUp className="w-8 h-8 text-blue-600" />}
              title="Mejora continua"
              description="Identifica áreas de mejora y toma decisiones informadas para impulsar el crecimiento de tu negocio."
            />
            <Feature
              icon={<QrCode className="w-8 h-8 text-blue-600" />}
              title="Códigos QR personalizados"
              description="Genera códigos QR únicos para cada ubicación o servicio y facilita la recopilación de feedback."
            />
            <Feature
              icon={<Send className="w-8 h-8 text-blue-600" />}
              title="Solicitudes automáticas"
              description="Configura envíos automáticos de solicitudes de feedback por correo o SMS tras cada interacción."
            />
            <Feature
              icon={<Star className="w-8 h-8 text-blue-600" />}
              title="Gestión de reputación"
              description="Monitorea y mejora tu reputación online respondiendo oportunamente a las opiniones de los clientes."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            ¿Listo para mejorar la experiencia de tus clientes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a las empresas que ya están transformando el feedback de sus clientes en crecimiento.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-10"
          >
            Empieza gratis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;