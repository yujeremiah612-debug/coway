import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Wind, 
  Sparkles, 
  Armchair, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle,
  Truck,
  RotateCcw,
  Sparkle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';

import whyCowayEn from '../assets/coway/why_coway_en.jpg';
import whyCowayKr from '../assets/coway/why_coway_kr.png';

interface HomePageProps {
  onOpenInquiry: (productId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'water' | 'air' | 'bidet' | 'massage'>('all');

  const waterProducts = PRODUCTS.filter((p) => p.category === 'water');
  const airProducts = PRODUCTS.filter((p) => p.category === 'air');
  const bidetProducts = PRODUCTS.filter((p) => p.category === 'bidet');
  const massageProducts = PRODUCTS.filter((p) => p.category === 'massage');

  const displayedProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* 1. Hero Carousel */}
      <HeroSlider onOpenInquiry={() => onOpenInquiry()} />

      {/* 2. Key Value Pillars Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-xs">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0073b2] flex items-center justify-center shrink-0 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {language === 'kr' ? 'WQA 골드시일 인증' : 'WQA Gold Seal'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {language === 'kr' ? '미국 수질협회 최상위 필터링' : 'Highest standard water quality'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {language === 'kr' ? 'DFW 무료 설치' : 'Free DFW Delivery'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {language === 'kr' ? '달라스/포트워스 전문 기사 방문' : 'White-glove technician install'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {language === 'kr' ? '코디 하트 서비스' : 'Cody Heart Service'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {language === 'kr' ? '정기 필터 교체 & 위생 스팀 살균' : 'Free scheduled filter replacement'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
              <Sparkle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {language === 'kr' ? '매월 특별 프로모션' : 'Monthly Promotions'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {language === 'kr' ? '등록비 면제 및 콤보 렌탈 할인' : '$0 Reg fee & combo discounts'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-[#0073b2] tracking-wider">
              {language === 'kr' ? '코웨이 달라스 카탈로그' : 'COWAY DALLAS CATALOG'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'kr' ? '프리미엄 가전 렌탈 & 구매 라인업' : 'Explore Featured Appliances'}
            </h2>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {[
              { id: 'all', label: language === 'kr' ? '전체 보기' : 'All Products', count: PRODUCTS.length },
              { id: 'water', label: t('waterPurifiers'), count: waterProducts.length },
              { id: 'air', label: t('airPurifiers'), count: airProducts.length },
              { id: 'bidet', label: t('bidets'), count: bidetProducts.length },
              { id: 'massage', label: t('massageChairs'), count: massageProducts.length },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#0073b2] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>
      </section>

      {/* 4. Dedicated Section: PREMIUM Water Purifiers (Anchor: #watepurifiers) */}
      <section id="watepurifiers" className="bg-sky-50/50 py-16 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0073b2] bg-white px-3 py-1 rounded-full border border-sky-200 mb-2">
                <Droplets className="w-3.5 h-3.5" />
                <span>{language === 'kr' ? '정수기 전문관' : 'PURE WATER SYSTEMS'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                {t('premiumWaterTitle')}
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-1">
                {t('premiumWaterSubtitle')}
              </p>
            </div>

            <Link
              to="/water-purifiers"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0073b2] hover:text-[#005f94]"
            >
              <span>{language === 'kr' ? '정수기 전체 9종 비교하기' : 'View All Water Purifiers'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dedicated Section: PREMIUM Air Purifiers (Anchor: #airpurifiers) */}
      <section id="airpurifiers" className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <Wind className="w-3.5 h-3.5" />
              <span>{language === 'kr' ? '공기청정기 전문관' : 'CLEAN AIR SYSTEMS'}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              {t('premiumAirTitle')}
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1">
              {t('premiumAirSubtitle')}
            </p>
          </div>

          <Link
            to="/air-purifiers"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0073b2] hover:text-[#005f94]"
          >
            <span>{language === 'kr' ? '공기청정기 전 모델 보기' : 'View All Air Purifiers'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>
      </section>

      {/* 6. Dedicated Section: Bidets & Water Softener (Anchor: #bidet) */}
      <section id="bidet" className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-50 px-3 py-1 rounded-full border border-pink-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'kr' ? '비데 & 연수기' : 'BATH & WELLNESS'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                {t('premiumBidetTitle')}
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-1">
                {t('premiumBidetSubtitle')}
              </p>
            </div>

            <Link
              to="/bidets"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0073b2] hover:text-[#005f94]"
            >
              <span>{language === 'kr' ? '비데 & 연수기 자세히 보기' : 'View All Bidets & Softeners'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bidetProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dedicated Section: Massage Chairs (Anchor: #massagechair) */}
      <section id="massagechair" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold">
                <Armchair className="w-3.5 h-3.5" />
                <span>{language === 'kr' ? '프리미엄 안마의자' : 'COWAY LUXURY MASSAGE CHAIRS'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                {language === 'kr' ? '무료 배송 및 전문 방문 설치' : 'Free Delivery and Installation'}
              </h2>
              <p className="text-sky-200 text-lg font-semibold">
                {language === 'kr' ? 'Coway has you covered from the beginning to the end.' : 'Coway has you covered from the beginning to the end.'}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                {language === 'kr' 
                  ? '무중력 리클라이닝과 온열 지압 에어백으로 하루의 피로를 완벽하게 풀어드립니다. 달라스-포트워스 쇼룸(코마트 내)에서 직접 무료 체험해보세요!'
                  : 'Experience ergonomic zero gravity contouring, heated deep tissue rollers, and white-glove installation right in your home. Test it in person at our Dallas Komart showroom!'}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenInquiry('massage-chairs')}
                  className="px-6 py-3 bg-[#0082c8] hover:bg-[#0073b2] text-white font-bold text-sm rounded-xl shadow-lg transition-transform hover:scale-105"
                >
                  {language === 'kr' ? '안마의자 무료 체험/상담' : 'Request Massage Chair Demo'}
                </button>
                <Link
                  to="/massage-chairs"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  {language === 'kr' ? '안마의자 상세 스펙' : 'View Specifications'}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/20 max-w-sm">
                <img
                  src={language === 'kr' ? massageProducts[0]?.imageKr : massageProducts[0]?.imageEn}
                  alt="Coway Massage Chairs"
                  className="w-full h-auto rounded-xl object-contain shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Original Why Coway Feature Graphic (Anchor: #aboutcoway) */}
      <section id="aboutcoway" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs uppercase font-extrabold text-[#0073b2] tracking-wider">
            {language === 'kr' ? '코웨이 글로벌 브랜드 스토리' : 'WHY COWAY'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            {language === 'kr' ? '미국 16개 지점과 함께하는 코웨이' : 'What Makes Coway Special'}
          </h2>
          <p className="text-sm text-slate-600">
            {language === 'kr'
              ? 'WQA 골드시일 인증 RO 멤브레인, 전국 전문 코디 하트 서비스, 합리적인 렌탈 프로그램의 차이를 확인하세요.'
              : 'RO membrane filtration, WQA Gold Seal certification, professional Cody Heart Service, and dedicated US branch support.'}
          </p>
        </div>

        {/* Original High Res Graphic */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-lg overflow-hidden flex flex-col items-center">
          <img
            src={language === 'kr' ? whyCowayKr : whyCowayEn}
            alt="Why Coway Dallas"
            className="w-full max-w-5xl h-auto object-contain rounded-2xl"
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-sm rounded-xl transition-all shadow-md"
            >
              {language === 'kr' ? '코웨이 하트서비스 및 전국 지점 상세 안내' : 'Learn More About Coway & Heart Service'}
            </Link>
            <a
              href="tel:2145418301"
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0073b2]" />
              <span>(214) 541-8301</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Visit Coway Dallas Showroom Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Showroom Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'kr' ? '공식 전시장 위치' : 'DALLAS SHOWROOM'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                {language === 'kr' ? '코마트 매장 내 코웨이 달라스 전시장' : 'Visit Coway Dallas Showroom'}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {language === 'kr'
                  ? '달라스 로열 레인(Royal Ln) 코마트 매장 내에 위치하여 장보시면서 편하게 둘러보실 수 있습니다. Lisa Min 지국장이 정수기, 공기청정기, 비데, 안마의자를 직접 시연해 드립니다.'
                  : 'Located inside the popular Komart on Royal Lane in Dallas. Stop by during your shopping trip to see our appliances running live and consult with Director Lisa Min.'}
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Inside Komart (코마트 매장 내)</div>
                    <div className="text-slate-300 text-xs mt-0.5">2240 Royal Ln, Dallas, TX 75229</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Direct Phone (Lisa Min PRO)</div>
                    <a href="tel:2145418301" className="text-sky-400 text-base font-extrabold hover:underline">
                      (214) 541-8301
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=2240+Royal+Ln,+Dallas,+TX+75229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0082c8] hover:bg-[#0073b2] text-white font-bold text-sm rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{language === 'kr' ? '구글 지도로 길찾기' : 'Get Directions (Google Maps)'}</span>
                </a>

                <Link
                  to="/schedule"
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-colors inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>{language === 'kr' ? '방문 상담 예약' : 'Book a Consultation'}</span>
                </Link>
              </div>
            </div>

            {/* Interactive Location Embed / Preview Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-700">
                  <span className="font-bold text-white uppercase tracking-wider">Dallas-Fort Worth Center</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open Today
                  </span>
                </div>

                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 relative border border-slate-700">
                  {/* Google Maps iFrame */}
                  <iframe
                    title="Coway Dallas Inside Komart Map"
                    src="https://maps.google.com/maps?q=2240+Royal+Ln,+Dallas,+TX+75229&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
                  <span>Showroom Hours: Mon-Sat 9:30AM-7PM, Sun 10AM-6PM</span>
                  <span className="text-sky-400 font-semibold">Free Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
