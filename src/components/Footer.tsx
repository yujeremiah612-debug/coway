import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Award, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cowayLogo from '../assets/coway/logo.png';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Branding & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-950 p-2.5 px-3 rounded-xl border border-slate-800 inline-block">
                <img 
                  src={cowayLogo} 
                  alt="Coway Dallas" 
                  className="h-6 w-auto object-contain"
                />
                <div className="text-[9px] tracking-[0.3em] font-extrabold text-sky-400 uppercase text-center mt-0.5">
                  D A L L A S
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {language === 'kr' 
                ? '코웨이 달라스 공식 지국 (지국장 Lisa Min). 달라스-포트워스 지역 최고의 프리미엄 정수기, 공기청정기, 비데, 안마의자 렌탈 및 구매 전문.'
                : 'Authorized Coway Dallas branch (Director Lisa Min). Serving Dallas-Fort Worth with world-class water purifiers, air purifiers, bidets, and massage chairs.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold bg-slate-800/60 p-2.5 rounded-lg border border-slate-800">
              <Award className="w-4 h-4 shrink-0" />
              <span>WQA Gold Seal & NSF Certified Filtration</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {language === 'kr' ? '제품 카테고리' : 'Product Categories'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/water-purifiers" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>{t('waterPurifiers')} (P & CHP Series)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link to="/air-purifiers" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>{t('airPurifiers')} (Noble & Airmega)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link to="/bidets" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>{t('bidets')} (BAS Series & BB Softener)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link to="/massage-chairs" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>{t('massageChairs')} (Mine & Noble)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>{t('promotions')} (Monthly Specials)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {language === 'kr' ? '서비스 & 고객지원' : 'Customer Care & Services'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {language === 'kr' ? '코웨이 하트서비스 (Cody 케어)' : 'Coway Heart Service (Cody System)'}
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-white transition-colors">
                  {language === 'kr' ? '상담 및 방문 일정 예약' : 'Schedule Consultation / Service'}
                </Link>
              </li>
              <li>
                <span className="text-slate-400">
                  {language === 'kr' ? '무료 방문 수질 테스트' : 'Complimentary In-Home Water Testing'}
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  {language === 'kr' ? '달라스-포트워스 무료 설치' : 'Free Installation across DFW'}
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  {language === 'kr' ? '정기 필터 교체 관리' : 'Regular Scheduled Filter Replacement'}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Showroom */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {language === 'kr' ? '매장 방문 & 상담' : 'Showroom & Contact'}
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Direct Line (Lisa Min)</div>
                  <a href="tel:2145418301" className="text-white font-bold hover:text-sky-300 text-base">
                    (214) 541-8301
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Coway Dallas (Inside Komart)</div>
                  <div className="text-xs text-slate-400">2240 Royal Ln, Dallas, TX 75229</div>
                  <a
                    href="https://maps.google.com/?q=2240+Royal+Ln,+Dallas,+TX+75229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 hover:underline inline-block mt-0.5"
                  >
                    {language === 'kr' ? '구글 지도로 보기 →' : 'View on Google Maps →'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div>Mon - Sat: 9:30 AM – 7:00 PM</div>
                  <div>Sun: 10:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright matching source website */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2020 by Lisa Min. Authorized Coway Dallas Branch. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-400">About Coway</Link>
            <Link to="/contact" className="hover:text-slate-400">Contact</Link>
            <Link to="/schedule" className="hover:text-slate-400">Bookings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
