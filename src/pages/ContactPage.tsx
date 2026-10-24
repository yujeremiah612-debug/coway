import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle2, Send, Building, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Product Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = language === 'kr' ? '성함을 입력해주세요.' : 'Please enter your name.';
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = language === 'kr' ? '전화번호를 입력해주세요.' : 'Please enter a valid phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const list = JSON.parse(localStorage.getItem('coway_dallas_contact_messages') || '[]');
    list.push({
      date: new Date().toISOString(),
      name,
      phone,
      email,
      subject,
      message,
    });
    localStorage.setItem('coway_dallas_contact_messages', JSON.stringify(list));
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Showroom & Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {language === 'kr' ? '코웨이 달라스 전시장 안내 및 문의' : 'Contact Coway Dallas Showroom'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {language === 'kr'
              ? '코마트 매장 내에 전시장이 위치해 있어 언제든 편하게 방문하실 수 있습니다.'
              : 'Located inside Komart on Royal Lane in Dallas. Visit in person, give us a call, or submit an inquiry.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                {language === 'kr' ? '달라스 지국 안내' : 'Store Information'}
              </h2>

              {/* Showroom inside Komart */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    Coway Dallas (Inside Komart)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    2240 Royal Ln, Dallas, TX 75229
                  </p>
                  <a
                    href="https://maps.google.com/?q=2240+Royal+Ln,+Dallas,+TX+75229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0073b2] hover:underline inline-block pt-0.5"
                  >
                    Open Google Maps Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0073b2] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    Direct Call / Text (Lisa Min PRO)
                  </h4>
                  <a
                    href="tel:2145418301"
                    className="text-lg font-extrabold text-[#0073b2] hover:underline block"
                  >
                    (214) 541-8301
                  </a>
                  <p className="text-xs text-slate-500">
                    {language === 'kr' ? '한국어 / English 상담 가능' : 'English & Korean assistance available'}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-xs text-slate-600">
                  <h4 className="text-sm font-bold text-slate-900">
                    Showroom Hours
                  </h4>
                  <div>Monday – Saturday: 9:30 AM – 7:00 PM</div>
                  <div>Sunday: 10:00 AM – 6:00 PM</div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-800">
                  {language === 'kr' ? '서비스 관할 지역' : 'DFW Service Coverage'}
                </div>
                <p className="leading-relaxed">
                  Dallas, Carrollton, Plano, Frisco, Irving, Richardson, Lewisville, Fort Worth, Garland, McKinney, Allen, Denton, and surrounding Texas cities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            {submitted ? (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {language === 'kr' ? '문의가 접수되었습니다!' : 'Message Sent Successfully!'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {language === 'kr'
                    ? '소중한 문의 감사합니다. Lisa Min 지국장이 확인 후 신속하게 연락드리겠습니다.'
                    : 'Thank you for contacting Coway Dallas. Director Lisa Min will respond to your inquiry shortly.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0073b2] text-white text-xs font-bold rounded-xl hover:bg-[#005f94]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {language === 'kr' ? '온라인 문의 양식' : 'Send an Inquiry'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      {language === 'kr' ? '성함 *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
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
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                    >
                      <option value="Water Purifier Rental">Water Purifier Rental</option>
                      <option value="Ice Water Purifier">Ice Water Purifier Inquiry</option>
                      <option value="Air Purifier Promotion">Air Purifier Promotion</option>
                      <option value="Bidet or Water Softener">Bidet or Water Softener</option>
                      <option value="Massage Chair Demo">Massage Chair Demo</option>
                      <option value="Filter Change / Cody Service">Filter Change / Cody Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'kr' ? '문의 내용' : 'Message'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'kr' 
                        ? '궁금하신 점이나 상담 희망 사항을 자유롭게 적어주세요.'
                        : 'How can we help? Let us know what appliances you are considering.'
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0073b2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0073b2] hover:bg-[#005f94] text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'kr' ? '문의 보내기' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}

            {/* Google Maps iFrame */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Coway Dallas Map"
                  src="https://maps.google.com/maps?q=2240+Royal+Ln,+Dallas,+TX+75229&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
