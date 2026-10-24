import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Globe, Menu, X, Droplets, Wind, Sparkles, Armchair, Calendar, Info, Tag, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cowayLogo from '../assets/coway/logo.png';

interface HeaderProps {
  onOpenInquiry: (productId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('home'), id: 'home' },
    { to: '/water-purifiers', label: t('waterPurifiers'), icon: Droplets },
    { to: '/air-purifiers', label: t('airPurifiers'), icon: Wind },
    { to: '/bidets', label: t('bidets'), icon: Sparkles },
    { to: '/massage-chairs', label: t('massageChairs'), icon: Armchair },
    { to: '/promotions', label: t('promotions'), icon: Tag },
    { to: '/about', label: t('aboutCoway'), icon: Info },
    { to: '/schedule', label: t('schedule'), icon: Calendar },
    { to: '/contact', label: t('contact'), icon: MapPin },
  ];

  const isActive = (path: string) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/en')) return true;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top utility notification bar */}
      <div className="bg-[#0f172a] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Phone & Representative */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:2145418301" 
              className="flex items-center gap-1.5 font-bold hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>(214) 541-8301</span>
            </a>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="text-slate-300 font-medium">
              Lisa Min <span className="text-sky-400 font-bold">PRO</span>
            </span>
          </div>

          {/* Center: Location */}
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>Inside Komart • 2240 Royal Ln, Dallas, TX 75229</span>
          </div>

          {/* Right: Language switch KR / EN */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800 rounded-md p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setLanguage('kr')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  language === 'kr' 
                    ? 'bg-[#0073b2] text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                KR (한국어)
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  language === 'en' 
                    ? 'bg-[#0073b2] text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN (English)
              </button>
            </div>

            <button
              onClick={() => onOpenInquiry()}
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-[11px] rounded transition-colors shadow-sm"
            >
              <MessageSquare className="w-3 h-3" />
              <span>{language === 'kr' ? '간편 상담' : 'Quick Quote'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <div className="bg-[#0f172a] p-2.5 px-3 rounded-xl shadow-sm flex flex-col items-center justify-center border border-slate-800">
              <img 
                src={cowayLogo} 
                alt="Coway Dallas Official Logo" 
                className="h-6 sm:h-7 w-auto object-contain"
              />
              <span className="text-[10px] tracking-[0.3em] font-extrabold text-sky-400 uppercase mt-0.5">
                D A L L A S
              </span>
            </div>
            <div className="hidden xl:block">
              <div className="text-sm font-extrabold text-slate-800 leading-tight">
                {language === 'kr' ? '코웨이 달라스 지국' : 'COWAY DALLAS'}
              </div>
              <div className="text-[11px] text-slate-500">
                {language === 'kr' ? '텍사스 공인 렌탈/구매 센터' : 'Authorized Sales & Service'}
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-[#0073b2] bg-sky-50 font-bold'
                    : 'text-slate-700 hover:text-[#0073b2] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions: Call CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:2145418301"
              className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#0073b2] hover:bg-[#005f94] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#0073b2]/20 transition-all hover:shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(214) 541-8301</span>
              <span className="sm:hidden">{language === 'kr' ? '전화' : 'Call'}</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {/* Showroom badge */}
            <div className="p-3 bg-sky-50 rounded-xl mb-3 border border-sky-100 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#0073b2] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <div className="font-bold text-[#0073b2]">
                  {language === 'kr' ? '코웨이 달라스 전시장 (코마트 매장 내)' : 'Coway Dallas Showroom (Inside Komart)'}
                </div>
                <div>2240 Royal Ln, Dallas, TX 75229</div>
              </div>
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(link.to)
                      ? 'bg-sky-50 text-[#0073b2] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 bg-[#0073b2] text-white font-semibold text-sm rounded-xl text-center shadow"
              >
                {language === 'kr' ? '무료 견적 / 상담 신청' : 'Request Consultation / Quote'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
