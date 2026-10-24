import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import heroEnIce from '../assets/coway/hero_en_ice.jpg';
import heroEnWater from '../assets/coway/hero_en_water.jpg';
import heroKrIce from '../assets/coway/hero_kr_ice.jpg';
import heroKrWater from '../assets/coway/hero_kr_water.jpg';
import cowayBadge from '../assets/coway/coway_badge.png';

interface HeroSliderProps {
  onOpenInquiry: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'ice',
      tagEn: 'FLAGSHIP INNOVATION',
      tagKr: '대표 인기 모델',
      titleEn: 'ICE WATER PURIFIER',
      titleKr: '아이스 얼음정수기',
      subtitleEn: 'Plenty of Ice, Easy to Use',
      subtitleKr: '얼음은 넉넉하게, 사용은 편리하게',
      descEn: 'Enjoy crisp, cold purified water and crystal-clear ice right from your kitchen counter or floor stand. UV sterilization keeps your ice tank 100% hygienic.',
      descKr: '시원하고 깨끗한 정수와 투명한 얼음을 원하는 때 언제든지! 얼음 탱크 UV 살균으로 온 가족이 매일 안심하고 즐길 수 있습니다.',
      ctaEn: 'SHOP WATER PURIFIERS >>',
      ctaKr: '정수기 보기 >>',
      ctaLink: '/water-purifiers',
      imageEn: heroEnIce,
      imageKr: heroKrIce,
      priceHighlightEn: 'From $24.99/mo',
      priceHighlightKr: '월 $24.99부터',
    },
    {
      id: 'standing-ice',
      tagEn: 'SPECIAL PROMOTION',
      tagKr: '이달의 특별 프로모션',
      titleEn: 'STANDING ICE PURIFIER CHPI-620L',
      titleKr: '스탠드형 대용량 얼음정수기 CHPI-620L',
      subtitleEn: 'High Capacity Ice Storage (2.21 lbs)',
      subtitleKr: '2.21 lbs 넉넉한 얼음 저장 & 와이드 추출구',
      descEn: 'The perfect all-in-one hot, cold, ambient water and ice solution for spacious Texas homes, offices, and businesses. Ask about our $0 registration fee specials.',
      descKr: '달라스/포트워스 가정과 사무실에 최적화된 올인원 스탠드 얼음정수기. 텀블러/냄비도 쏙 들어가는 와이드 트레이와 등록비 면제 혜택을 확인하세요.',
      ctaEn: 'VIEW DETAILS & PRICING >>',
      ctaKr: '상세 가격 확인하기 >>',
      ctaLink: '/products/chpi-620l',
      imageEn: heroEnWater,
      imageKr: heroKrWater,
      priceHighlightEn: '$0 Reg Fee Option Available',
      priceHighlightKr: '등록비 $0 면제 혜택 지원',
    },
    {
      id: 'dfw-authorized',
      tagEn: 'COWAY DALLAS AUTHORIZED BRANCH',
      tagKr: '코웨이 달라스 공식 지국',
      titleEn: 'AUTHORIZED COWAY SHOWROOM',
      titleKr: '달라스 코마트 매장 내 공식 쇼룸',
      subtitleEn: 'Lisa Min PRO — Serving All of North Texas',
      subtitleKr: 'Lisa Min 지국장 직통 상담 (214) 541-8301',
      descEn: 'Visit our live display inside Komart Dallas on Royal Lane to test our water purifiers, air purifiers, bidets, and massage chairs before signing up.',
      descKr: '로열 레인 코마트 매장 내에 위치한 코웨이 공식 전시장에서 최신 모델을 직접 시연해 보시고 특별 프로모션 혜택을 받아보세요.',
      ctaEn: 'SCHEDULE FREE CONSULTATION >>',
      ctaKr: '무료 방문 상담 예약 >>',
      ctaLink: '/schedule',
      badgeImage: cowayBadge,
      priceHighlightEn: 'Free Installation & Heart Service',
      priceHighlightKr: 'DFW 전지역 무료 설치 & 코디 케어',
    }
  ];

  // Auto advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-[#0c1f38] via-[#102e52] to-[#07172b] text-white overflow-hidden">
      {/* Decorative background glow & pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{language === 'kr' ? slide.tagKr : slide.tagEn}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span className="text-white font-extrabold">{language === 'kr' ? slide.priceHighlightKr : slide.priceHighlightEn}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {language === 'kr' ? slide.titleKr : slide.titleEn}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-sky-300">
                {language === 'kr' ? slide.subtitleKr : slide.subtitleEn}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {language === 'kr' ? slide.descKr : slide.descEn}
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 max-w-lg mx-auto lg:mx-0 pt-1 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{language === 'kr' ? '정기 필터 교체 & 코디 케어' : 'Free Scheduled Filter Replacement'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{language === 'kr' ? 'DFW 전 지역 무료 배송 및 설치' : 'Free Installation Across DFW Area'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{language === 'kr' ? 'WQA 골드시일 미국 수질협회 인증' : 'WQA Gold Seal & NSF Certified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{language === 'kr' ? '3년 / 5년 / 6년 맞춤 약정' : 'Flexible 3, 5, or 6 Year Tiers'}</span>
              </div>
            </div>

            {/* CTAs matching reference: SHOP WATER PURIFIERS >> */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to={slide.ctaLink}
                className="px-6 py-3.5 bg-[#0082c8] hover:bg-[#0073b2] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-[#0082c8]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
              >
                <span>{language === 'kr' ? slide.ctaKr : slide.ctaEn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:2145418301"
                className="px-5 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call (214) 541-8301</span>
              </a>
            </div>
          </div>

          {/* Right Column: Original Promotional Flyer Graphics */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
              {slide.badgeImage ? (
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <img
                    src={slide.badgeImage}
                    alt="Coway Dallas Models"
                    className="max-h-72 w-auto object-contain drop-shadow-2xl"
                  />
                  <div className="bg-sky-950/60 p-4 rounded-xl border border-sky-500/30 text-xs space-y-1">
                    <div className="font-bold text-white text-sm">
                      {language === 'kr' ? '코웨이 달라스 전시장 오픈' : 'Coway Dallas Showroom Open'}
                    </div>
                    <div className="text-slate-300">
                      Inside Komart • 2240 Royal Ln, Dallas, TX 75229
                    </div>
                    <div className="text-sky-300 font-semibold pt-1">
                      Direct: (214) 541-8301 (Lisa Min PRO)
                    </div>
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-xl bg-white shadow-inner">
                  <img
                    src={language === 'kr' ? slide.imageKr : slide.imageEn}
                    alt={language === 'kr' ? slide.titleKr : slide.titleEn}
                    className="w-full h-auto max-h-[460px] object-contain transition-all duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Carousel indicators & manual controls */}
        <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-8 bg-[#0082c8]' : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
