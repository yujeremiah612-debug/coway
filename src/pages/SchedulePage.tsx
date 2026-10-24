import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Droplet, 
  Sparkles, 
  Truck, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SchedulePage: React.FC = () => {
  const { language } = useLanguage();

  const [serviceType, setServiceType] = useState('new-consultation');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    {
      id: 'new-consultation',
      titleEn: 'New Appliance Consultation & Price Quote',
      titleKr: '신규 렌탈/구매 제품 상담 및 견적',
      descEn: 'Compare water purifiers, air purifiers, and bidets with monthly promotions.',
      descKr: '고객님 공간에 알맞은 모델 추천과 이달의 프로모션 특별 혜택 안내.'
    },
    {
      id: 'water-test',
      titleEn: 'Free In-Home Water Quality Test (DFW)',
      titleKr: '달라스/포트워스 무료 방문 수질 테스트',
      descEn: 'Professional TDS and hardness testing of your tap water before choosing a system.',
      descKr: '현재 사용하시는 수돗물의 석회질 및 유해물질 수치를 무료로 점검해 드립니다.'
    },
    {
      id: 'installation',
      titleEn: 'Delivery & Professional Installation',
      titleKr: '신규 주문 제품 배송 및 전문 설치',
      descEn: 'White-glove technician installation and plumbing connection.',
      descKr: '전문 설치 기사의 방문 설치 및 안전한 배관 연결 서비스.'
    },
    {
      id: 'maintenance',
      titleEn: 'Filter Replacement & Cody Heart Care',
      titleKr: '정기 필터 교체 및 코디 하트 서비스',
      descEn: 'Periodic scheduled filter change and steam sanitization for active rentals.',
      descKr: '기존 코웨이 고객님을 위한 필터 교체 및 스팀 살균 클리닝.'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = language === 'kr' ? '성함을 입력해주세요.' : 'Please enter your name.';
    }
    const clean = phone.replace(/\D/g, '');
    if (!clean || clean.length < 10) {
      errs.phone = language === 'kr' ? '유효한 10자리 전화번호를 입력해주세요.' : 'Please enter a valid phone number.';
    }
    if (!preferredDate) {
      errs.date = language === 'kr' ? '희망 날짜를 선택해주세요.' : 'Please select a preferred date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = 'CW-DFW-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);

    const saved = JSON.parse(localStorage.getItem('coway_dallas_bookings') || '[]');
    saved.push({
      code,
      serviceType,
      preferredDate,
      preferredTime,
      name,
      phone,
      email,
      address,
      notes,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('coway_dallas_bookings', JSON.stringify(saved));

    setConfirmed(true);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Online Booking</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {language === 'kr' ? '상담 및 방문 서비스 예약' : 'Schedule a Consultation or Service'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {language === 'kr'
              ? '원하시는 날짜와 시간을 선택해 주시면 Lisa Min 지국장이 확인 후 확정 연락을 드립니다.'
              : 'Select your preferred date, time window, and service type. Director Lisa Min will confirm your appointment promptly.'}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {confirmed ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0073b2]">
                Booking Reference: {bookingCode}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {language === 'kr' ? '예약 접수가 완료되었습니다!' : 'Appointment Confirmed!'}
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'kr'
                  ? `${name}님, ${preferredDate} (${preferredTime === 'morning' ? '오전' : preferredTime === 'afternoon' ? '오후' : '저녁'}) 방문 상담 일정이 등록되었습니다. Lisa Min 지국장이 사전 연락을 드리겠습니다.`
                  : `Thank you, ${name}. Your appointment for ${preferredDate} (${preferredTime}) has been recorded. Director Lisa Min will contact you shortly to confirm.`}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-3 max-w-md mx-auto text-xs text-slate-700">
              <div className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                {language === 'kr' ? '예약 세부 정보' : 'Appointment Details'}
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'kr' ? '신청 서비스:' : 'Service:'}</span>
                <span className="font-semibold text-slate-800">
                  {services.find(s => s.id === serviceType)?.titleEn}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'kr' ? '희망 일자:' : 'Date:'}</span>
                <span className="font-semibold text-slate-800">{preferredDate} ({preferredTime})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'kr' ? '연락처:' : 'Phone:'}</span>
                <span className="font-semibold text-slate-800">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'kr' ? '전시장 위치:' : 'Showroom:'}</span>
                <span className="font-semibold text-slate-800">Inside Komart (2240 Royal Ln, Dallas)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:2145418301"
                className="px-6 py-3 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-sm rounded-xl shadow transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (214) 541-8301 Directly</span>
              </a>

              <button
                type="button"
                onClick={() => setConfirmed(false)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors"
              >
                {language === 'kr' ? '새로운 예약 작성' : 'Schedule Another'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBook} className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8">
            {/* Step 1: Select Service */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0073b2] font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-[#0073b2] text-white flex items-center justify-center text-xs">1</span>
                <span>{language === 'kr' ? '서비스 선택' : 'Select Desired Service'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setServiceType(srv.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      serviceType === srv.id
                        ? 'bg-sky-50/70 border-[#0073b2] ring-2 ring-[#0073b2]/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">
                      {language === 'kr' ? srv.titleKr : srv.titleEn}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {language === 'kr' ? srv.descKr : srv.descEn}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Time */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-[#0073b2] font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-[#0073b2] text-white flex items-center justify-center text-xs">2</span>
                <span>{language === 'kr' ? '희망 일정 선택' : 'Choose Date & Time Window'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '희망 날짜 *' : 'Preferred Date *'}
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2] ${
                      errors.date ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '희망 시간대' : 'Time Window'}
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                  >
                    <option value="morning">Morning (9:30 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="evening">Late Afternoon / Evening (4:00 PM – 7:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-[#0073b2] font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-[#0073b2] text-white flex items-center justify-center text-xs">3</span>
                <span>{language === 'kr' ? '예약자 정보' : 'Your Contact Information'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '성함 *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2] ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '전화번호 *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(214) 000-0000"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2] ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '이메일' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '설치/방문 주소 (DFW 지역)' : 'Installation Address (DFW)'}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Carrollton, Plano, Dallas TX"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  {language === 'kr' ? '추가 문의 및 메모' : 'Special Notes / Specific Models'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    language === 'kr'
                      ? '관심 있는 모델(예: CHPI-7520L 얼음정수기, 노블 공기청정기)이나 주방 환경 등을 기재해 주세요.'
                      : 'Mention any specific models of interest (e.g. Ice Purifier, BAS42-B Bidet) or appointment requests.'
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                />
              </div>
            </div>

            {/* Direct Phone Shortcut */}
            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0073b2]" />
                <div className="text-xs text-slate-700">
                  <div className="font-bold text-slate-900">Prefer to book by phone?</div>
                  <div>Lisa Min PRO is available during showroom hours.</div>
                </div>
              </div>
              <a
                href="tel:2145418301"
                className="px-4 py-2 bg-[#0073b2] text-white text-xs font-bold rounded-lg hover:bg-[#005f94]"
              >
                (214) 541-8301
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-base rounded-2xl shadow-xl shadow-[#0073b2]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              {language === 'kr' ? '예약 신청 완료하기' : 'Confirm & Request Appointment'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
