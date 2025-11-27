import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import ServiceDetail from './views/ServiceDetail';
import Contact from './views/Contact';
import Admin from './views/Admin';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    navigateTo(Page.SERVICE_DETAIL);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={navigateTo} />;
      case Page.ABOUT:
        return <About />;
      case Page.SERVICES:
        return <Services onSelectService={handleSelectService} />;
      case Page.SERVICE_DETAIL:
        return selectedServiceId ? (
          <ServiceDetail serviceId={selectedServiceId} onNavigate={navigateTo} />
        ) : (
          <Services onSelectService={handleSelectService} />
        );
      case Page.CONTACT:
        return <Contact />;
      case Page.ADMIN:
        return <Admin />;
      default:
        return <div className="pt-32 text-center text-4xl">404 - Not Found</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      {/* 
        NOTE: As per instructions, this React App simulates the requested Node/EJS structure
        within a modern SPA environment for better performance and maintainability.
        Data is persisted in localStorage.
      */}
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow w-full">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;