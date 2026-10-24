import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Snowflake, Flame, Cuboid, Maximize2, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
  onOpenInquiry: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const [zoomOpen, setZoomOpen] = useState(false);

  const currentImage = language === 'kr' ? product.imageKr : product.imageEn;
  const name = language === 'kr' ? product.nameKr : product.nameEn;
  const features = language === 'kr' ? product.featuresKr : product.featuresEn;
  const lowestRental = Math.min(...product.pricing.map(p => p.rentalFee));

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
        {/* Flyer Image Container */}
        <div className="relative bg-slate-50 border-b border-slate-100 overflow-hidden cursor-pointer aspect-[4/3] flex items-center justify-center p-2">
          {product.isNew && (
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-rose-500 text-white font-extrabold text-[10px] tracking-wider rounded-md uppercase shadow-sm">
              NEW
            </div>
          )}

          <img
            src={currentImage}
            alt={name}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            onClick={() => setZoomOpen(true)}
          />

          {/* Quick Zoom Overlay */}
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-700 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-semibold backdrop-blur-xs"
            title="Enlarge Original Card"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#0073b2]" />
            <span className="hidden sm:inline">{language === 'kr' ? '크게보기' : 'Zoom'}</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* Category / Subtype & Water Icons */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0073b2] bg-sky-50 px-2 py-0.5 rounded-md">
                {product.model}
              </span>

              {/* Water Icons if applicable */}
              {product.waterTypes && product.waterTypes.length > 0 && (
                <div className="flex items-center gap-1 text-xs">
                  {product.waterTypes.includes('ambient') && (
                    <span title="Ambient Room Temp Water" className="p-1 bg-emerald-50 text-emerald-600 rounded">
                      <Droplet className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {product.waterTypes.includes('cold') && (
                    <span title="Cold Water" className="p-1 bg-sky-50 text-sky-600 rounded">
                      <Snowflake className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {product.waterTypes.includes('hot') && (
                    <span title="Hot Water" className="p-1 bg-rose-50 text-rose-600 rounded">
                      <Flame className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {product.waterTypes.includes('ice') && (
                    <span title="Fresh Bullet Ice" className="p-1 bg-indigo-50 text-indigo-600 rounded">
                      <Cuboid className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              )}

              {/* Air Purifier room coverage if applicable */}
              {product.roomCoverage && (
                <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {product.roomCoverage.split(' ')[0]} sq ft
                </span>
              )}
            </div>

            {/* Product Name */}
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0073b2] transition-colors leading-snug">
              <Link to={`/products/${product.id}`}>
                {name}
              </Link>
            </h3>

            {/* Feature Bullets */}
            <ul className="space-y-1 text-xs text-slate-600 pt-1">
              {features.slice(0, 2).map((f, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-tight">
                  <Check className="w-3.5 h-3.5 text-[#0073b2] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Actions */}
          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block">
                  {language === 'kr' ? '월 렌탈료 (최저)' : 'Monthly Rental from'}
                </span>
                <div className="text-xl font-extrabold text-[#0073b2]">
                  ${lowestRental.toFixed(2)}
                  <span className="text-xs font-normal text-slate-500"> /mo</span>
                </div>
              </div>

              {product.purchasePrice > 0 && (
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block">
                    {language === 'kr' ? '일시불 구매' : 'Purchase'}
                  </span>
                  <div className="text-sm font-bold text-slate-700">
                    ${product.purchasePrice.toLocaleString()}
                  </div>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to={`/products/${product.id}`}
                className="py-2 px-3 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <span>{language === 'kr' ? '상세보기' : 'Details'}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenInquiry(product.id)}
                className="py-2 px-3 text-center text-xs font-semibold text-white bg-[#0073b2] hover:bg-[#005f94] rounded-lg transition-colors shadow-xs active:scale-95"
              >
                {language === 'kr' ? '상담 신청' : 'Inquire'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* High Res Original Flyer Modal */}
      {zoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setZoomOpen(false)}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">{product.model}</span>
                <h4 className="text-sm font-semibold">{name}</h4>
              </div>
              <button
                onClick={() => setZoomOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Maximize2 className="w-5 h-5 rotate-45" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-slate-100">
              <img 
                src={currentImage} 
                alt={name} 
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {language === 'kr' ? '코웨이 달라스 공식 카탈로그 원본' : 'Coway Dallas Authentic Product Specification'}
              </span>
              <button
                onClick={() => {
                  setZoomOpen(false);
                  onOpenInquiry(product.id);
                }}
                className="px-4 py-1.5 bg-[#0073b2] text-white text-xs font-bold rounded-lg hover:bg-[#005f94]"
              >
                {language === 'kr' ? '이 제품 상담하기' : 'Inquire About This Model'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
