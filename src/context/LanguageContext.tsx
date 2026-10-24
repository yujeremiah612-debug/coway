import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const DICTIONARY: Record<string, { en: string; kr: string }> = {
  // Top bar
  callUs: { en: 'Call (214) 541-8301', kr: '문의 전화 (214) 541-8301' },
  agentName: { en: 'Lisa Min PRO', kr: 'Lisa Min 지국장' },
  location: { en: 'Inside Komart • 2240 Royal Ln, Dallas, TX 75229', kr: '코마트 매장 내 • 2240 Royal Ln, Dallas, TX 75229' },
  specialsUpdated: { en: 'Specials Updated Every Month!', kr: '매월 특별 프로모션 진행 중!' },

  // Nav
  home: { en: 'Home', kr: '홈' },
  waterPurifiers: { en: 'Water Purifiers', kr: '정수기' },
  airPurifiers: { en: 'Air Purifiers', kr: '공기청정기' },
  bidets: { en: 'Bidets & Softeners', kr: '비데 & 연수기' },
  massageChairs: { en: 'Massage Chairs', kr: '안마의자' },
  aboutCoway: { en: 'Why Coway', kr: '코웨이 소개' },
  promotions: { en: 'Monthly Specials', kr: '이달의 혜택' },
  schedule: { en: 'Schedule Appointment', kr: '상담 / 예약' },
  contact: { en: 'Contact & Showroom', kr: '매장 안내 / 문의' },
  viewProducts: { en: 'Shop Water Purifiers >>', kr: '정수기 보기 >>' },
  requestQuote: { en: 'Free Consultation', kr: '무료 견적 / 상담신청' },

  // Hero
  heroIceTitle: { en: 'ICE WATER PURIFIER', kr: '아이스 정수기' },
  heroIceSubtitle: { en: 'Plenty of Ice, Easy to Use', kr: '얼음은 넉넉하게, 사용은 편리하게' },
  heroBadgeNew: { en: 'NEW RELEASE', kr: '신제품 출시' },
  heroSubtitle2: { en: 'No more wasted plastic water bottles. Rent or buy premium Coway appliances today in Dallas-Fort Worth.', kr: '더 이상 무거운 생수 사서 나르지 마세요! 코웨이 달라스에서 프리미엄 정수기/공기청정기/비데를 렌탈하세요.' },

  // Section titles
  premiumWaterTitle: { en: 'PREMIUM Water Purifiers', kr: '프리미엄 정수기' },
  premiumWaterSubtitle: { en: 'Pure, mineral-rich drinking water with NSF & WQA Gold Seal certified filtration.', kr: '미국 수질협회 WQA 골드시일 인증 RO 멤브레인 필터로 항상 맑고 신선한 물을 제공합니다.' },
  premiumAirTitle: { en: 'PREMIUM Air Purifiers', kr: '프리미엄 공기청정기' },
  premiumAirSubtitle: { en: 'Medical-grade H13 True HEPA filters with 4D circulation and whisper-quiet motors.', kr: 'H13 트루 헤파 필터와 혁신적인 4D 입체 순환으로 집안 공기를 맑고 쾌적하게 케어합니다.' },
  premiumBidetTitle: { en: 'PREMIUM Bidets & Water Softeners', kr: '프리미엄 비데 & 연수기' },
  premiumBidetSubtitle: { en: 'Instant ceramic warm water, automatic UV nozzle sanitization, and Texas hard water softening.', kr: '순간온수 연속 세정과 UV 노즐 살균, 텍사스 석회수를 부드럽게 바꿔주는 프리미엄 연수기.' },
  premiumMassageTitle: { en: 'PREMIUM Massage Chairs', kr: '프리미엄 안마의자' },
  premiumMassageSubtitle: { en: 'Free Delivery and Installation across DFW. SL-Track 3D rollers and zero gravity luxury.', kr: '달라스-포트워스 전 지역 무료 배송 및 전문 설치. 무중력 리클라이닝과 3D 온열 마사지.' },

  // Card & actions
  rentalFrom: { en: 'Rental from', kr: '렌탈 월' },
  purchaseFrom: { en: 'Purchase', kr: '일시불 구매' },
  perMonth: { en: '/mo', kr: '원/월' },
  viewDetails: { en: 'View Details', kr: '상세보기' },
  quickQuote: { en: 'Request Inquiry', kr: '상담 문의' },
  dimensions: { en: 'Dimensions', kr: '규격/치수' },
  capacity: { en: 'Capacity', kr: '용량' },
  coverage: { en: 'Coverage', kr: '청정 면적' },
  keyFeatures: { en: 'Key Features', kr: '주요 특징' },
  rentalTiers: { en: 'Rental Contract Tiers', kr: '약정 기간별 렌탈료' },
  zoomImage: { en: 'View Official Promo Flyer', kr: '공식 안내문 원본 크게보기' },

  // About
  whyCowayTitle: { en: 'Why Choose Coway?', kr: '왜 코웨이인가요?' },
  heartService: { en: 'Heart Service System', kr: '하트 서비스 (전문 코디 케어)' },
  filterService: { en: 'Regular Filter Replacement', kr: '정기 필터 교체 서비스' },
  freeInstallation: { en: 'Free Delivery & Installation', kr: '무료 배송 및 전문 설치' },
  usLocations: { en: '16 Locations Across the U.S.', kr: '미국 전역 16개 지점 운영' },

  // Showroom
  showroomTitle: { en: 'Visit Coway Dallas Showroom', kr: '코웨이 달라스 전시장 안내' },
  showroomSubtitle: { en: 'Experience Coway appliances firsthand inside Komart Dallas on Royal Lane.', kr: '로열 레인 코마트 매장 내에 위치한 코웨이 전시장으로 오시면 제품을 직접 체험하실 수 있습니다.' },
  hours: { en: 'Mon - Sat: 9:30 AM - 7:00 PM | Sun: 10:00 AM - 6:00 PM', kr: '월 - 토: 오전 9:30 - 오후 7:00 | 일: 오전 10:00 - 오후 6:00' },
  getDirections: { en: 'Get Directions (Google Maps)', kr: '구글 지도 길찾기' },

  // Footer
  copyright: { en: '© 2020 by Lisa Min. Authorized Coway Dallas Branch. Proudly serving Dallas-Fort Worth, TX.', kr: '© 2020 by Lisa Min. 코웨이 달라스 공인 지국. 달라스-포트워스 및 텍사스 전역 서비스.' },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (k) => k,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize from pathname or localStorage
  const [language, setLanguageState] = useState<Language>(() => {
    if (location.pathname.startsWith('/en')) {
      return 'en';
    }
    const saved = localStorage.getItem('coway_dallas_lang');
    return (saved === 'kr' || saved === 'en') ? saved : 'en';
  });

  // Sync if route changes to /en or /
  useEffect(() => {
    if (location.pathname === '/en') {
      setLanguageState('en');
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('coway_dallas_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'kr' : 'en';
    setLanguage(next);
  };

  const t = (key: string): string => {
    const item = DICTIONARY[key];
    if (!item) return key;
    return language === 'kr' ? item.kr : item.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
