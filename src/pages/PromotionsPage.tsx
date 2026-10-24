import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Sparkles, Phone, CheckCircle2, ArrowRight, Gift, Percent, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface PromotionsPageProps {
  onOpenInquiry: (productId?: string) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onOpenInquiry }) => {
  const { language } = useLanguage();

  const promoProducts = PRODUCTS.filter((p) => p.isNew || p.id === 'chpi-620l' || p.id === 'p-6320l');

  return (
    <div className="space-y-14 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 via-[#0073b2] to-sky-800 text-white py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-amber-300" />
            <span>Updated Every Month</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === 'kr' ? '코웨이 달라스 이달의 특별 프로모션' : 'Coway Dallas Monthly Specials'}
          </h1>
          <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {language === 'kr'
              ? '등록비 면제, 패키지 렌탈 결합 할인, 무료 설치 등 지금 계약하시면 가장 큰 혜택을 드립니다.'
              : 'Take advantage of limited-time registration fee waivers, bundle discounts, and free white-glove DFW installation.'}
          </p>
        </div>
      </section>

      {/* Featured Deals Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deal 1 */}
          <div className="bg-gradient-to-b from-sky-50 to-white rounded-2xl p-6 border-2 border-sky-300 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2.5 py-1 bg-[#0073b2] text-white text-[11px] font-bold rounded-md uppercase">
                {language === 'kr' ? '등록비 $0 프로모션' : '$0 Registration Fee'}
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'kr' ? '초기 등록비 $100 전액 면제' : '$100 Registration Fee Waived'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'kr'
                  ? 'CHPI-620L 얼음정수기 및 P-6320L 신규 렌탈 고객 대상 등록비 면제 옵션 지원으로 초기 비용 부담 제로!'
                  : 'Zero upfront enrollment fees on select water purifiers including the CHPI-620L Ice Dispenser.'}
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('chpi-620l')}
              className="w-full py-2.5 bg-[#0073b2] text-white text-xs font-bold rounded-xl hover:bg-[#005f94]"
            >
              {language === 'kr' ? '등록비 면제 혜택 신청' : 'Claim $0 Reg Fee'}
            </button>
          </div>

          {/* Deal 2 */}
          <div className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-6 border-2 border-emerald-300 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-md uppercase">
                {language === 'kr' ? '결합 콤보 할인' : 'Combo Package Deal'}
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'kr' ? '정수기 + 공기청정기/비데 동시 렌탈' : 'Water + Air or Bidet Bundle'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'kr'
                  ? '두 개 이상의 제품을 동시에 렌탈 신청하시면 월 렌탈료 추가 할인 및 필터 정기 케어가 함께 제공됩니다.'
                  : 'Bundle a pure water system with an air purifier or bidet and save on your combined monthly rental.'}
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry()}
              className="w-full py-2.5 bg-emerald-700 text-white text-xs font-bold rounded-xl hover:bg-emerald-800"
            >
              {language === 'kr' ? '결합 견적 문의하기' : 'Request Combo Quote'}
            </button>
          </div>

          {/* Deal 3 */}
          <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl p-6 border-2 border-purple-300 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2.5 py-1 bg-purple-700 text-white text-[11px] font-bold rounded-md uppercase">
                {language === 'kr' ? '안마의자 특별 혜택' : 'Massage Chair Special'}
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'kr' ? '무료 배송 & 프리미엄 설치' : 'Free White-Glove Installation'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'kr'
                  ? '코웨이 마인 & 노블 안마의자 신청 시 전문 기사가 고객님 거실까지 직접 배송 및 세팅을 무상 지원합니다.'
                  : 'Zero delivery or assembly fees across DFW. Recline into luxury stress-free.'}
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('massage-chairs')}
              className="w-full py-2.5 bg-purple-800 text-white text-xs font-bold rounded-xl hover:bg-purple-900"
            >
              {language === 'kr' ? '안마의자 혜택 알아보기' : 'Massage Chair Deal'}
            </button>
          </div>
        </div>
      </section>

      {/* Products under promo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            {language === 'kr' ? '이달의 프로모션 추천 모델' : 'Featured Promotional Models'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === 'kr' ? '현재 가장 많은 고객분들이 선택하시는 인기 모델입니다.' : 'Top selected models with verified special pricing.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {promoProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
