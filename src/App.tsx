import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickInquiryModal } from './components/QuickInquiryModal';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { SchedulePage } from './pages/SchedulePage';
import { PromotionsPage } from './pages/PromotionsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout: React.FC = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (productId?: string) => {
    setSelectedProductId(productId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <ScrollToTop />
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/en" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          <Route 
            path="/water-purifiers" 
            element={<CategoryPage category="water" onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route 
            path="/air-purifiers" 
            element={<CategoryPage category="air" onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route 
            path="/bidets" 
            element={<CategoryPage category="bidet" onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route 
            path="/massage-chairs" 
            element={<CategoryPage category="massage" onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route 
            path="/products/:id" 
            element={<ProductDetailPage onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenInquiry={() => handleOpenInquiry()} />} 
          />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route 
            path="/promotions" 
            element={<PromotionsPage onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all */}
          <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Call & Quote Buttons on Mobile */}
      <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2 md:hidden">
        <button
          type="button"
          onClick={() => handleOpenInquiry()}
          className="p-3 bg-sky-600 text-white rounded-full shadow-xl hover:bg-sky-700 active:scale-95 transition-transform flex items-center justify-center"
          title="Quick Consultation"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <a
          href="tel:2145418301"
          className="p-3 bg-[#0073b2] text-white rounded-full shadow-xl hover:bg-[#005f94] active:scale-95 transition-transform flex items-center justify-center"
          title="Call Lisa Min (214) 541-8301"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Global Quick Consultation Modal */}
      <QuickInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedProductId={selectedProductId}
      />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
