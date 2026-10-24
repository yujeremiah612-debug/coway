import React, { useState } from 'react';
import { X, Phone, CheckCircle, Send, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductId?: string;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProductId
}) => {
  const { language, t } = useLanguage();
  const [productId, setProductId] = useState<string>(selectedProductId || 'chpi-620l');
  const [interestType, setInterestType] = useState<'rental' | 'purchase' | 'service'>('rental');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cityZip, setCityZip] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update when selectedProductId changes
  React.useEffect(() => {
    if (selectedProductId) {
      setProductId(selectedProductId);
    }
  }, [selectedProductId]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = language === 'kr' ? '성함을 입력해주세요.' : 'Please enter your name.';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = language === 'kr' ? '유효한 10자리 전화번호를 입력해주세요.' : 'Please enter a valid 10-digit phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate saving lead
    const currentInquiries = JSON.parse(localStorage.getItem('coway_dallas_inquiries') || '[]');
    currentInquiries.push({
      date: new Date().toISOString(),
      productId,
      interestType,
      name,
      phone,
      email,
      cityZip,
      message
    });
    localStorage.setItem('coway_dallas_inquiries', JSON.stringify(currentInquiries));

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setCityZip('');
    setMessage('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0073b2] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-200">
              {language === 'kr' ? '코웨이 달라스 공식 지국' : 'Coway Dallas Authorized Dealer'}
            </div>
            <h3 className="text-xl font-bold">
              {language === 'kr' ? '무료 상담 및 견적 신청' : 'Request Consultation & Quote'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">
              {language === 'kr' ? '상담 신청이 접수되었습니다!' : 'Inquiry Received Successfully!'}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              {language === 'kr' 
                ? '코웨이 달라스 지국장 Lisa Min이 신청 내용을 확인 후 빠른 시간 내에 친절히 연락드리겠습니다.'
                : 'Thank you for reaching out to Coway Dallas. Lisa Min PRO will review your request and contact you promptly with promotional rates.'}
            </p>

            <div className="bg-sky-50 rounded-xl p-4 border border-sky-100 text-left text-xs space-y-1 text-slate-700">
              <div className="flex items-center gap-1.5 font-semibold text-[#0073b2]">
                <Phone className="w-3.5 h-3.5" />
                <span>{language === 'kr' ? '즉시 통화 연결' : 'Need Immediate Assistance?'}</span>
              </div>
              <p>{language === 'kr' ? '급한 상담이나 설치 일정 문의는 직통 전화로 연락주세요:' : 'Call our showroom directly:'}</p>
              <a 
                href="tel:2145418301" 
                className="inline-block font-bold text-base text-[#0073b2] hover:underline"
              >
                (214) 541-8301
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 bg-[#0073b2] hover:bg-[#005f94] text-white font-medium rounded-xl transition-colors"
            >
              {language === 'kr' ? '확인 및 닫기' : 'Done & Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Direct Call Banner */}
            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0073b2]/10 text-[#0073b2] rounded-lg flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">
                    {language === 'kr' ? '상담 직통 전화 (Lisa Min)' : 'Direct Phone (Lisa Min)'}
                  </div>
                  <a href="tel:2145418301" className="text-base font-bold text-[#0073b2] hover:underline">
                    (214) 541-8301
                  </a>
                </div>
              </div>
              <a
                href="tel:2145418301"
                className="px-3 py-1.5 bg-[#0073b2] text-white text-xs font-semibold rounded-lg hover:bg-[#005f94] transition-colors"
              >
                {language === 'kr' ? '전화걸기' : 'Call Now'}
              </a>
            </div>

            {/* Interest Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                {language === 'kr' ? '문의 유형' : 'Inquiry Type'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'rental', labelEn: 'Monthly Rental', labelKr: '월 렌탈' },
                  { id: 'purchase', labelEn: 'Direct Purchase', labelKr: '일시불 구매' },
                  { id: 'service', labelEn: 'Service / Relocation', labelKr: '필터/이전설치' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInterestType(type.id as any)}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                      interestType === type.id
                        ? 'bg-[#0073b2] text-white border-[#0073b2] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {language === 'kr' ? type.labelKr : type.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Product selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                {language === 'kr' ? '관심 제품' : 'Interested Product'}
              </label>
              <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b2] focus:border-[#0073b2]"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.model} - {language === 'kr' ? p.nameKr : p.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  {language === 'kr' ? '성함 *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'kr' ? '홍길동' : 'John Doe'}
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b2] ${
                    errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  {language === 'kr' ? '연락처 *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(214) 000-0000"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b2] ${
                    errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Email & City / Zip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  {language === 'kr' ? '이메일 (선택)' : 'Email (Optional)'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  {language === 'kr' ? '지역 / 우편번호 (DFW)' : 'City / Zip Code (DFW)'}
                </label>
                <input
                  type="text"
                  value={cityZip}
                  onChange={(e) => setCityZip(e.target.value)}
                  placeholder={language === 'kr' ? '예: Dallas, Carrollton, Plano' : 'e.g. Dallas, TX 75229'}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                {language === 'kr' ? '상담 요청 사항 (선택)' : 'Questions or Notes (Optional)'}
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  language === 'kr' 
                    ? '설치 희망 일자, 가정/업소용 구분, 프로모션 혜택 등 궁금한 점을 적어주세요.' 
                    : 'Mention any preferred installation date, home vs office needs, or current specials.'
                }
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
              />
            </div>

            {/* Assurance */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'kr' 
                  ? '무료 방문 수질 테스트 및 코웨이 본사 정품 약정 보증' 
                  : 'Free DFW water test, authentic Coway warranty & Heart Service.'}
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#0073b2] hover:bg-[#005f94] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#0073b2]/20 transition-all hover:shadow-lg active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'kr' ? '상담 신청하기' : 'Submit Consultation Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
