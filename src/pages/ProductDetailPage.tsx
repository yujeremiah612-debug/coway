import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Droplet, 
  Snowflake, 
  Flame, 
  Cuboid, 
  Maximize2,
  Truck,
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';

interface ProductDetailPageProps {
  onOpenInquiry: (productId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenInquiry }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('6 yrs');
  const [zoomOpen, setZoomOpen] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">
          {language === 'kr' ? '제품을 찾을 수 없습니다.' : 'Product Not Found'}
        </h2>
        <p className="text-slate-600 text-sm">
          {language === 'kr' ? '요청하신 모델 정보가 없습니다.' : 'The requested product could not be found.'}
        </p>
        <Link to="/" className="inline-block px-5 py-2.5 bg-[#0073b2] text-white rounded-xl text-sm font-bold">
          {language === 'kr' ? '홈으로 돌아가기' : 'Return Home'}
        </Link>
      </div>
    );
  }

  const currentImage = language === 'kr' ? product.imageKr : product.imageEn;
  const name = language === 'kr' ? product.nameKr : product.nameEn;
  const description = language === 'kr' ? product.descriptionKr : product.descriptionEn;
  const features = language === 'kr' ? product.featuresKr : product.featuresEn;

  const currentPricingTier = product.pricing.find((p) => p.period === selectedPeriod) || product.pricing[0];
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#0073b2]">Home</Link>
          <span>/</span>
          <Link to={`/${product.category}-purifiers`} className="hover:text-[#0073b2]">
            {language === 'kr' ? product.categoryLabelKr : product.categoryLabelEn}
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">{product.model}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Authentic Promotional Flyer Graphic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden group">
              {product.isNew && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-rose-500 text-white font-extrabold text-xs tracking-wider rounded-md uppercase shadow-sm">
                  NEW
                </div>
              )}

              <img
                src={currentImage}
                alt={name}
                className="w-full max-h-[580px] object-contain transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                onClick={() => setZoomOpen(true)}
              />

              <button
                type="button"
                onClick={() => setZoomOpen(true)}
                className="absolute bottom-4 right-4 p-2.5 bg-white/95 text-slate-700 hover:text-[#0073b2] rounded-xl shadow-md flex items-center gap-1.5 text-xs font-bold transition-all"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{language === 'kr' ? '원본 카탈로그 확대' : 'Enlarge Flyer'}</span>
              </button>
            </div>

            <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl text-center text-xs text-slate-600">
              {language === 'kr' 
                ? '위 이미지는 코웨이 달라스 본사 공식 가격 및 사양 안내문입니다.' 
                : 'Authentic Coway Dallas promotional specification flyer & pricing table.'}
            </div>
          </div>

          {/* Right Column: Model Info & Interactive Rental Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0073b2] bg-sky-50 px-2.5 py-1 rounded-md">
                  {product.model}
                </span>
                {product.subTypeEn && (
                  <span className="text-xs font-medium text-slate-500">
                    {language === 'kr' ? product.subTypeKr : product.subTypeEn}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {name}
              </h1>

              {/* Water Icons */}
              {product.waterTypes && (
                <div className="flex items-center gap-2 pt-1">
                  {product.waterTypes.includes('ambient') && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg border border-emerald-200">
                      <Droplet className="w-3.5 h-3.5" />
                      Ambient (정수)
                    </span>
                  )}
                  {product.waterTypes.includes('cold') && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-lg border border-sky-200">
                      <Snowflake className="w-3.5 h-3.5" />
                      Cold (냉수)
                    </span>
                  )}
                  {product.waterTypes.includes('hot') && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 text-rose-700 text-xs font-semibold rounded-lg border border-rose-200">
                      <Flame className="w-3.5 h-3.5" />
                      Hot (온수)
                    </span>
                  )}
                  {product.waterTypes.includes('ice') && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-lg border border-indigo-200">
                      <Cuboid className="w-3.5 h-3.5" />
                      Ice (얼음)
                    </span>
                  )}
                </div>
              )}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {description}
            </p>

            {/* Interactive Rental Plan Selector */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {language === 'kr' ? '약정 기간 선택 (Rental Contract)' : 'Select Rental Contract Period'}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">ACH / CCR Rate</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {product.pricing.map((tier) => (
                  <button
                    key={tier.period}
                    type="button"
                    onClick={() => setSelectedPeriod(tier.period)}
                    className={`py-3 px-3 rounded-xl border text-center transition-all ${
                      selectedPeriod === tier.period
                        ? 'bg-[#0073b2] text-white border-[#0073b2] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold">
                      {language === 'kr' ? tier.periodKr : tier.period}
                    </div>
                    <div className={`text-base font-extrabold mt-0.5 ${
                      selectedPeriod === tier.period ? 'text-white' : 'text-[#0073b2]'
                    }`}>
                      ${tier.rentalFee.toFixed(2)}
                      <span className="text-[10px] font-normal">/mo</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Price Details */}
              <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">
                    {language === 'kr' ? '선택 약정 월 렌탈료' : 'Selected Monthly Rental Fee'}
                  </span>
                  <div className="text-2xl font-black text-[#0073b2]">
                    ${currentPricingTier.rentalFee.toFixed(2)}
                    <span className="text-xs font-medium text-slate-500"> / month</span>
                  </div>
                </div>

                {product.purchasePrice > 0 && (
                  <div className="text-right">
                    <span className="text-slate-500 block">
                      {language === 'kr' ? '일시불 구매가' : 'One-time Purchase'}
                    </span>
                    <div className="text-xl font-bold text-slate-800">
                      ${product.purchasePrice.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>

              {/* Self Service Notice if available */}
              {currentPricingTier.selfServiceFee && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                  <span>Self-Service Program Available:</span>
                  <span className="font-bold">From ${currentPricingTier.selfServiceFee.standard.toFixed(2)}/mo</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => onOpenInquiry(product.id)}
                className="w-full py-3.5 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#0073b2]/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {language === 'kr' ? `${product.model} 렌탈/구매 상담 신청하기` : `Request Consultation for ${product.model}`}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:2145418301"
                  className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call (214) 541-8301</span>
                </a>

                <Link
                  to="/schedule"
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Calendar className="w-4 h-4 text-[#0073b2]" />
                  <span>{language === 'kr' ? '설치일정 예약' : 'Book Install Date'}</span>
                </Link>
              </div>
            </div>

            {/* Core Specs Table */}
            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                {language === 'kr' ? '상세 사양 및 규격' : 'Specifications & Dimensions'}
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs">
                <div className="p-3 flex justify-between">
                  <span className="text-slate-500">{language === 'kr' ? '외형 치수 (WxHxD)' : 'Dimensions (WxHxD)'}</span>
                  <span className="font-semibold text-slate-800">{product.dimensions}</span>
                </div>
                {product.capacity && (
                  <div className="p-3 flex justify-between">
                    <span className="text-slate-500">{language === 'kr' ? '탱크 용량' : 'Tank Capacity'}</span>
                    <span className="font-semibold text-slate-800">{product.capacity}</span>
                  </div>
                )}
                {product.roomCoverage && (
                  <div className="p-3 flex justify-between">
                    <span className="text-slate-500">{language === 'kr' ? '청정 면적' : 'Coverage Area'}</span>
                    <span className="font-semibold text-slate-800">{product.roomCoverage}</span>
                  </div>
                )}
                {Object.entries(product.specificationDetails).map(([key, value]) => (
                  <div key={key} className="p-3 flex justify-between">
                    <span className="text-slate-500">{key}</span>
                    <span className="font-semibold text-slate-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg">
                <Truck className="w-4 h-4 text-[#0073b2] shrink-0" />
                <span>{language === 'kr' ? '달라스 무료 설치' : 'Free DFW Installation'}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg">
                <RotateCcw className="w-4 h-4 text-[#0073b2] shrink-0" />
                <span>{language === 'kr' ? '정기 필터 무상 교체' : 'Free Filter Replacements'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              {language === 'kr' ? '함께 비교하기 좋은 모델' : 'Related Coway Models'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden mb-3 p-2">
                    <img
                      src={language === 'kr' ? p.imageKr : p.imageEn}
                      alt={p.model}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0073b2]">{p.model}</div>
                  <h4 className="text-sm font-semibold text-slate-800 truncate">
                    {language === 'kr' ? p.nameKr : p.nameEn}
                  </h4>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">
                      ${Math.min(...p.pricing.map(x => x.rentalFee)).toFixed(2)}/mo
                    </span>
                    <Link
                      to={`/products/${p.id}`}
                      className="text-xs font-semibold text-[#0073b2] hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal Zoom */}
      {zoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setZoomOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-sky-400 font-bold uppercase">{product.model}</span>
                <h4 className="text-sm font-semibold">{name}</h4>
              </div>
              <button
                onClick={() => setZoomOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <Maximize2 className="w-5 h-5 rotate-45" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-slate-100">
              <img 
                src={currentImage} 
                alt={name} 
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
