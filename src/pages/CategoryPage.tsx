import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Droplets, 
  Wind, 
  Sparkles, 
  Armchair, 
  Filter, 
  Phone, 
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Sparkle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../types';

interface CategoryPageProps {
  category: ProductCategory;
  onOpenInquiry: (productId?: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category, onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');

  const products = PRODUCTS.filter((p) => p.category === category);

  const categoryMeta = {
    water: {
      titleEn: 'Premium Coway Water Purifiers',
      titleKr: '코웨이 프리미엄 정수기',
      subtitleEn: 'Clean, mineral-balanced water with multi-stage RO filtration, ice making, and instant temperature selection.',
      subtitleKr: '미국 수질협회 WQA 골드시일 인증 RO 멤브레인 필터와 편리한 제빙 기능의 프리미엄 정수기 라인업.',
      icon: Droplets,
      color: 'sky',
      heroBg: 'from-sky-900 to-slate-900',
    },
    air: {
      titleEn: 'Premium Coway Air Purifiers',
      titleKr: '코웨이 프리미엄 공기청정기',
      subtitleEn: 'Medical-grade H13 True HEPA filters, 4D multi-directional circulation, and smart room sensors up to 2,800+ sq ft.',
      subtitleKr: 'H13 트루 헤파 필터와 건축학적 노블 타워, 가구 감성의 스퀘어핏으로 텍사스 가정의 실내 공기를 맑게 지켜드립니다.',
      icon: Wind,
      color: 'emerald',
      heroBg: 'from-emerald-950 via-teal-900 to-slate-900',
    },
    bidet: {
      titleEn: 'Coway Bidets & Texas Water Softeners',
      titleKr: '코웨이 비데 & 욕실 연수기',
      subtitleEn: 'Instant continuous warm water, UV nozzle care, and mineral water softening designed to combat Texas hard water.',
      subtitleKr: '전기분해 살균수와 순간온수 세정의 비데, 달라스의 센 석회수를 부드러운 온천수로 바꿔주는 욕실 연수기.',
      icon: Sparkles,
      color: 'pink',
      heroBg: 'from-pink-950 via-rose-900 to-slate-900',
    },
    massage: {
      titleEn: 'Coway Luxury Massage Chairs',
      titleKr: '코웨이 프리미엄 힐링 안마의자',
      subtitleEn: 'Zero gravity reclining posture, 3D SL-track deep tissue rollers, and free white-glove installation across DFW.',
      subtitleKr: '목부터 엉덩이까지 이어지는 3D 입체 롤러와 무중력 리클라이닝. 달라스-포트워스 전 지역 무료 배송 및 전문 설치.',
      icon: Armchair,
      color: 'indigo',
      heroBg: 'from-indigo-950 via-slate-900 to-slate-900',
    },
  }[category];

  const Icon = categoryMeta.icon;

  // Filter sub-logic if water
  const filteredProducts = products.filter((p) => {
    if (filterType === 'all') return true;
    if (filterType === 'ice') return p.waterTypes?.includes('ice');
    if (filterType === 'hot') return p.waterTypes?.includes('hot');
    if (filterType === 'standing') return p.subTypeEn?.includes('Standing') || p.subTypeEn?.includes('Floor');
    if (filterType === 'counter') return p.subTypeEn?.includes('Countertop') || p.subTypeEn?.includes('Under');
    return true;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Category Hero Banner */}
      <section className={`bg-gradient-to-r ${categoryMeta.heroBg} text-white py-14 px-4 sm:px-6`}>
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'kr' ? '홈으로 돌아가기' : 'Back to Home'}</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {language === 'kr' ? categoryMeta.titleKr : categoryMeta.titleEn}
            </h1>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {language === 'kr' ? categoryMeta.subtitleKr : categoryMeta.subtitleEn}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="tel:2145418301"
              className="px-4 py-2 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#0073b2]" />
              <span>Call (214) 541-8301</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenInquiry()}
              className="px-4 py-2 bg-[#0082c8] hover:bg-[#0073b2] text-white font-bold text-xs sm:text-sm rounded-lg transition-colors shadow"
            >
              {language === 'kr' ? '무료 상담 신청' : 'Request Free Quote'}
            </button>
          </div>
        </div>
      </section>

      {/* Sub-filters for Water Category */}
      {category === 'water' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {[
              { id: 'all', label: language === 'kr' ? '전체 모델' : 'All Water Models' },
              { id: 'ice', label: language === 'kr' ? '얼음 정수기' : 'Ice Makers' },
              { id: 'hot', label: language === 'kr' ? '냉온 정수기' : 'Hot & Cold' },
              { id: 'counter', label: language === 'kr' ? '카운터탑 / 언더싱크' : 'Countertop & Under Sink' },
              { id: 'standing', label: language === 'kr' ? '스탠드형 대용량' : 'Standing Floor Models' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterType(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  filterType === f.id
                    ? 'bg-[#0073b2] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-slate-500">
            {language === 'kr'
              ? `총 ${filteredProducts.length}개의 모델이 준비되어 있습니다.`
              : `Showing ${filteredProducts.length} available models with monthly rental & purchase options.`}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>
      </section>

      {/* Assistance callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'kr' ? '어떤 모델이 우리 집에 맞을지 고민이신가요?' : 'Not Sure Which Model Fits Your Space?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'kr'
                ? '가족 인원 수, 주방 구조, 수질 환경에 맞춰 Lisa Min 지국장이 가장 알맞은 모델과 최적의 할인 프로모션을 추천해 드립니다.'
                : 'Director Lisa Min will assess your kitchen layout, family size, and water needs to recommend the ideal unit and highest promotional discount.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:2145418301"
              className="px-5 py-2.5 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(214) 541-8301</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenInquiry()}
              className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              {language === 'kr' ? '상담 신청' : 'Online Inquiry'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
