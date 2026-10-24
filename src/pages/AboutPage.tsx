import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  RotateCcw, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Building2, 
  Droplets,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import whyCowayEn from '../assets/coway/why_coway_en.jpg';
import whyCowayKr from '../assets/coway/why_coway_kr.png';

interface AboutPageProps {
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#0c1f38] via-[#0073b2] to-[#0c1f38] text-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-sky-200 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-sky-300" />
            <span>{language === 'kr' ? '글로벌 No.1 환경가전 코웨이' : 'Global No.1 Environmental Wellness'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === 'kr' ? '코웨이 달라스 & 브랜드 스토리' : 'Why Choose Coway Dallas?'}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {language === 'kr'
              ? '깨끗한 물과 공기, 건강한 수면과 힐링을 위해 전 세계 1,000만 고객이 선택한 코웨이. 달라스-포트워스 지역 공식 지국에서 최상의 서비스를 제공합니다.'
              : 'Coway has pioneered pure water, fresh air, and health innovation for over 30 years. Serving Dallas-Fort Worth through our authorized showroom inside Komart.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:2145418301"
              className="px-6 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-slate-100 transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0073b2]" />
              <span>Call (214) 541-8301</span>
            </a>
            <button
              onClick={() => onOpenInquiry()}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm rounded-xl transition-colors shadow"
            >
              {language === 'kr' ? '무료 방문 상담 신청' : 'Request Consultation'}
            </button>
          </div>
        </div>
      </section>

      {/* Original Authentic Why Coway Graphic */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#0073b2]">
              Official Company Presentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'kr' ? '코웨이만의 차별화된 4대 약속' : 'What Makes Coway Special'}
            </h2>
          </div>

          <div className="flex justify-center">
            <img
              src={language === 'kr' ? whyCowayKr : whyCowayEn}
              alt="Why Coway Dallas"
              className="w-full max-w-5xl h-auto rounded-2xl shadow-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars Breakdown */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-12 h-12 bg-sky-100 text-[#0073b2] rounded-xl flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'kr' ? 'WQA 골드시일 및 NSF 인증 필터' : 'WQA Gold Seal Certified RO Filtration'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'kr'
                ? '미국 수질협회(WQA)의 가장 엄격한 기준을 통과하여 골드시일 마크를 획득했습니다. 정밀 RO 멤브레인이 텍사스 수돗물의 석회질, 잔류 염소, 중금속, 미세 플라스틱을 99.9% 완벽 제거합니다.'
                : 'Coway RO membrane filter systems thoroughly remove limescale, heavy metals, microplastics, and tap impurities. Coway purifiers are certified with the prestigious Gold Seal from the Water Quality Association (WQA).'}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-bold">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'kr' ? '정기 코디 하트 서비스 (Heart Service)' : 'Cody Heart Service & Maintenance'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'kr'
                ? '렌탈 기간 동안 별도의 관리 걱정 없이 전문 코디(Cody)가 정기적으로 방문하여 필터를 무상 교체하고 탱크를 고온 스팀 살균해 드립니다.'
                : 'Enjoy effortless pure water and clean air. Our certified technicians provide scheduled filter replacements and sanitary tank cleaning completely free throughout your rental contract period.'}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'kr' ? '미국 전역 16개 지점의 탄탄한 인프라' : '16 Locations Across the United States'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'kr'
                ? '로스앤젤레스 미주 본사를 중심으로 달라스, 시애틀, 산호세, 라스베이거스, 샌디에고, 시카고, 애틀랜타, 탬파, 뉴욕, 뉴저지 등 미 전역 16개 지점을 운영하여 안정적인 A/S와 이전설치를 보장합니다.'
                : 'Headquartered in Los Angeles with 16 service centers nationwide including Dallas, Seattle, San Jose, Las Vegas, San Diego, Chicago, Atlanta, Tampa, New York, and New Jersey.'}
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'kr' ? '합리적인 렌탈 및 구매 프로그램' : 'Special Benefits & Flexible Tiers'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'kr'
                ? '신규 약정 시 무료 설치 혜택, 3년/5년/6년 맞춤형 약정 플랜, 등록비 면제 프로모션, 일시불 구매 고객을 위한 1년 무상 멤버십 및 무이자 할부 혜택을 제공합니다.'
                : 'Free installation upon new signup, flexible 3, 5, or 6-year rental contracts, promotional registration fee discounts, and interest-free installment options for direct purchase customers.'}
            </p>
          </div>
        </div>
      </section>

      {/* Authorized Dallas Showroom Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Local Authorized Dealer
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {language === 'kr' ? '코웨이 달라스 지국 소개 (Lisa Min)' : 'About Coway Dallas Showroom'}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {language === 'kr'
                  ? '달라스 코마트 매장 내에 자리한 코웨이 전시장에서는 아이스 정수기부터 타워형 노블 공기청정기, 살균 비데, 온열 안마의자까지 모든 전시 모델을 직접 눈으로 보고 물맛을 시음해보실 수 있습니다. Lisa Min 지국장이 정직하고 친절하게 상담해 드립니다.'
                  : 'Located inside Komart Dallas on Royal Lane, our showroom provides a hands-on experience of Coway full product lineup. Taste fresh ice-cold RO water, inspect whisper-quiet air cleaners, and receive expert advice directly from Director Lisa Min.'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2">
                <div>📍 Address: 2240 Royal Ln, Dallas, TX 75229 (Inside Komart)</div>
                <div>📞 Phone: (214) 541-8301 (Lisa Min PRO)</div>
                <div>⏰ Hours: Mon-Sat 9:30 AM - 7:00 PM | Sun 10:00 AM - 6:00 PM</div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href="tel:2145418301"
                className="w-full py-3.5 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-sm rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (214) 541-8301</span>
              </a>
              <Link
                to="/schedule"
                className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl text-center border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>{language === 'kr' ? '방문 상담 예약하기' : 'Book Showroom Consultation'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
