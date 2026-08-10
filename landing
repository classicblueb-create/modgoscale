import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Zap, 
  Users, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Cpu,
  Layout,
  TrendingUp,
  Server,
  BookOpen,
  Monitor,
  Rocket,
  Palette,
  Video,
  Target,
  User,
  Bot,
  Clapperboard,
  Sparkles,
  Sheet,
  Mail,
  Clock,
  Presentation,
  Sliders,
  Wrench,
  Globe,
  Star,
  Layers,
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';

// Animated CountUp Component for Stats Numbers
const CountUpNumber = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('TH');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // LINE Contact Link
  const lineLink = "https://line.me/R/ti/p/@237dhtqp?oat_content=url&ts=12080435";

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#1A1A1A] selection:bg-neutral-900 selection:text-white" style={{ fontFamily: '"Kanit", sans-serif' }}>
      
      {/* Google Fonts: Kanit (Thai body), Plus Jakarta Sans (English Headings), Instrument Serif (Accent Italic) */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Instrument+Serif:ital@1&display=swap');
          body { font-family: 'Kanit', sans-serif; background-color: #F5F3EF; -webkit-font-smoothing: antialiased; }
          .font-heading { font-family: 'Plus Jakarta Sans', 'Kanit', sans-serif; }
          .font-serif-italic { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; }
          .text-outline {
            -webkit-text-stroke: 1.5px #1A1A1A;
            color: transparent;
          }
          .text-outline-white {
            -webkit-text-stroke: 1.5px rgba(255,255,255,0.85);
            color: transparent;
          }
        `}
      </style>

      {/* Navigation Header */}
      <nav className="fixed w-full z-50 bg-[#F5F3EF]/90 backdrop-blur-md border-b border-neutral-300/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
                MODGOSCALE<span className="text-neutral-400">.</span>
              </span>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 lg:space-x-10 items-center text-xs font-semibold tracking-widest uppercase text-neutral-600">
              <button onClick={() => scrollToSection('concept')} className="hover:text-black transition">Concept</button>
              <button onClick={() => scrollToSection('speaker')} className="hover:text-black transition">Keynote Speaker</button>
              <button onClick={() => scrollToSection('expertise')} className="hover:text-black transition">Expertise</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-black transition">Portfolio</button>
              <button onClick={() => scrollToSection('initiate')} className="hover:text-black transition">Initiate</button>
              
              {/* Language Switcher */}
              <button 
                onClick={() => setLang(lang === 'TH' ? 'EN' : 'TH')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-400/60 hover:bg-neutral-900 hover:text-white transition text-xs font-medium"
              >
                <Globe size={13} /> {lang}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button 
                onClick={() => setLang(lang === 'TH' ? 'EN' : 'TH')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-neutral-400 text-xs font-medium"
              >
                <Globe size={12} /> {lang}
              </button>
              <button onClick={toggleMenu} className="text-neutral-900 p-1.5 rounded-lg focus:outline-none" aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F5F3EF] border-b border-neutral-300 px-6 py-6 space-y-4 shadow-xl">
            <button onClick={() => scrollToSection('concept')} className="block w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-neutral-800 border-b border-neutral-200/60">Concept</button>
            <button onClick={() => scrollToSection('speaker')} className="block w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-neutral-800 border-b border-neutral-200/60">Keynote Speaker</button>
            <button onClick={() => scrollToSection('expertise')} className="block w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-neutral-800 border-b border-neutral-200/60">Expertise</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-neutral-800 border-b border-neutral-200/60">Portfolio</button>
            <button onClick={() => scrollToSection('initiate')} className="block w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-neutral-800 border-b border-neutral-200/60">Initiate</button>
            <a 
              href={lineLink}
              target="_blank" 
              rel="noreferrer"
              className="block w-full text-center mt-4 bg-neutral-900 text-white py-3 rounded-full font-medium text-sm tracking-wider uppercase shadow-md active:scale-95 transition"
            >
              Contact via LINE
            </a>
          </div>
        )}
      </nav>

      {/* Floating Chat Bubble Button */}
      <a 
        href={lineLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition duration-300"
        title="Contact via LINE"
      >
        <MessageCircle size={26} />
      </a>

      {/* 1. HERO SECTION */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          
          {/* Subheader Tag */}
          <div className="mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase">
              THE ARCHITECTURE OF INTELLIGENCE
            </span>
          </div>

          {/* Main Title Typography */}
          <h1 className="font-heading text-4xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-[1.02] sm:leading-[0.95] mb-8 sm:mb-10 text-neutral-900">
            SCALE YOUR <br/>
            <span className="font-serif-italic text-outline font-normal uppercase tracking-normal text-5xl sm:text-8xl lg:text-9xl">BUSINESS</span> WITH AI
          </h1>

          {/* Subtext and Action */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 pt-2">
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed font-light">
              ModGoScale ช่วยคุณลดขั้นตอนการทำงาน สร้างระบบอัตโนมัติ และพัฒนา Digital Product ไม่ว่าคุณจะอยากเรียนรู้เพื่อทำเอง ปรึกษาเชิงกลยุทธ์ หรือให้เราลงมือทำให้
            </p>
            
            <button 
              onClick={() => scrollToSection('concept')}
              className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase border-b-2 border-neutral-900 pb-1 hover:pr-3 transition-all"
            >
              DISCOVER MORE <ArrowRight size={16} className="group-hover:translate-x-1.5 transition" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. CONCEPT / ABOUT US SECTION */}
      <section id="concept" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 scroll-mt-20 border-t border-neutral-300/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Portrait Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-300/80 bg-neutral-200">
                <img 
                  src="/my_photo.jpg?v=2" 
                  alt="Modty Profile" 
                  className="w-full h-[450px] sm:h-[540px] object-cover object-top hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Solopreneur to <br/>
                <span className="text-neutral-400 font-normal">Professional Partner.</span>
              </h2>

              <div className="w-16 h-[2px] bg-neutral-900"></div>

              <div className="space-y-4 text-neutral-700 text-base leading-relaxed font-light">
                <p>
                  สวัสดีค่ะ! <strong>ModGoScale</strong> คือจุดเริ่มต้นจากช่อง <strong>Modty.ai</strong> เราเข้าใจคนทำธุรกิจยุคใหม่ที่ต้องการความคล่องตัวและทรงพลัง
                </p>
                <p>
                  เป้าหมายของเราคือการช่วยให้คุณสร้างระบบและเว็บไซต์ด้วย <strong>AI Vibe Coding (No-Code หรือ Low-Code)</strong> โดยเลือกใช้เครื่องมือที่ง่าย ประหยัด และมีภาพลักษณ์ระดับองค์กร
                </p>
              </div>

              {/* Category Pill Badges */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-neutral-200/80 border border-neutral-300 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-800">
                  AI IMAGE & GRAPHICS
                </span>
                <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-neutral-200/80 border border-neutral-300 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-800">
                  AI VIDEO GENERATION
                </span>
                <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-neutral-200/80 border border-neutral-300 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-800">
                  CUSTOM AI WEB DEV
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. KEYNOTE SPEAKER SECTION (Girl in ICT by DCT) */}
      <section id="speaker" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 scroll-mt-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase">
              KEYNOTE SPEAKER & CORPORATE TRAINER
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-4">
            NATIONAL EVENT & WORKSHOP
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light mb-10 sm:mb-12">
            มดได้รับเกียรติเป็นวิทยากรบรรยายและจัด In-House Workshop ด้าน AI, Vibe Coding และ Digital Transformation ให้กับสถาบันและองค์กรระดับประเทศ
          </p>

          {/* Main Speaker Highlight Card */}
          <div className="bg-neutral-800/80 border border-neutral-700/80 rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-neutral-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    NATIONAL EVENT
                  </span>
                  <span className="bg-white text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Girl in ICT by DCT
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold leading-tight">
                  สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย (DCT)
                </h3>

                <p className="text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
                  วิทยากรบรรยายในโครงการ <strong>Girl in ICT</strong> จัดโดย <strong>สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย</strong> ส่งเสริมศักยภาพของผู้หญิงและคนรุ่นใหม่ในการประยุกต์ใช้ AI สร้างนวัตกรรมดิจิทัล
                </p>

                <div className="bg-neutral-900/90 p-4 sm:p-5 rounded-2xl border border-neutral-700/60 space-y-3 text-xs sm:text-sm text-neutral-300 font-light">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-white shrink-0 mt-0.5" />
                    <span><strong>หัวข้อการบรรยาย:</strong> "Girl in ICT: ไม่เคยเขียนโค้ด ก็สร้างเว็บและแชตบอทได้ — สร้างระบบได้ด้วย AI จากไอเดีย สู่เว็บและแชตบอทที่ใช้งานจริง"</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-white shrink-0 mt-0.5" />
                    <span><strong>แนวคิด Vibe Coding:</strong> ทุกไอเดียเป็นจริงได้ด้วย AI โดยไม่ต้องมีพื้นฐานการเขียนโค้ดมาก่อน</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-white shrink-0 mt-0.5" />
                    <span><strong>เส้นทางเติบโต:</strong> จากการทำธุรกิจ สู่การเป็น AI Consultant ที่สร้างระบบอัตโนมัติให้ธุรกิจ</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <img 
                  src="/images/dct_speaking_vibe.jpg" 
                  alt="Modty Speaker Girl in ICT" 
                  className="rounded-2xl w-full h-[260px] sm:h-[320px] object-cover border border-neutral-700 shadow-xl"
                />
              </div>

            </div>
          </div>

          {/* Speaker Event Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-2xl overflow-hidden shadow-md">
              <img src="/images/dct_speaking_consultant.jpg" alt="จาก Business สู่ AI Consultant" className="w-full h-52 sm:h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-sm text-white mb-1">จาก Business สู่ AI Consultant</h4>
                <p className="text-neutral-400 text-xs font-light">บรรยายถ่ายทอดการประยุกต์ใช้ AI แก้โจทย์ธุรกิจจริง</p>
              </div>
            </div>

            <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-2xl overflow-hidden shadow-md">
              <img src="/images/dct_group.jpg" alt="DCT Event" className="w-full h-52 sm:h-full min-h-[200px] object-cover" />
            </div>

            <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-2xl overflow-hidden shadow-md">
              <img src="/images/dct_gift.jpg" alt="DCT Event" className="w-full h-52 sm:h-full min-h-[200px] object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. DARK STATS BANNER WITH ANIMATED NUMBER COUNTER */}
      <section className="py-16 sm:py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            
            <div className="pt-6 md:pt-0">
              <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">ยอดขายที่ช่วยเพิ่มขึ้น</p>
              <h3 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-2 text-white">
                <CountUpNumber end={150000} prefix="฿" suffix="+" duration={2500} />
              </h3>
              <p className="text-xs text-neutral-400 font-light">ต่อเดือนจากระบบ Automation</p>
            </div>

            <div className="pt-6 md:pt-0">
              <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">ประหยัดเวลาการทำงาน</p>
              <h3 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-2 text-white">
                <CountUpNumber end={1200} suffix=" hrs" duration={2200} />
              </h3>
              <p className="text-xs text-neutral-400 font-light">ลดงาน Manual ซ้ำซ้อนตลอดปี</p>
            </div>

            <div className="pt-6 md:pt-0">
              <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">ธุรกิจที่เติบโตไปกับเรา</p>
              <h3 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-2 text-white">
                <CountUpNumber end={45} suffix="+" duration={1800} />
              </h3>
              <p className="text-xs text-neutral-400 font-light">ความไว้วางใจจากผู้ประกอบการ</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. EXPERTISE SECTION */}
      <section id="expertise" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 scroll-mt-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16">
            <div>
              <h2 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-neutral-900">
                EXPERTISE<span className="text-neutral-400">.</span>
              </h2>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mt-2 md:mt-0">
              OUR DISCIPLINES
            </span>
          </div>

          {/* 01 EDUCATION SECTION */}
          <div className="mb-20 sm:mb-24">
            <div className="flex items-baseline gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-300">01</span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-neutral-900">Education</h3>
            </div>
            
            <p className="text-neutral-600 text-base max-w-3xl font-light mb-8 sm:mb-10 leading-relaxed">
              เปลี่ยนไอเดียให้เป็น Web จริง ด้วย Vibe Coding Master Route คอร์สเรียนระดับพรีเมียมที่จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันด้วย AI และ Google Ecosystem เต็มรูปแบบ โดยที่คุณไม่จำเป็นต้องมีพื้นฐานการเขียนโค้ดมาก่อน
            </p>

            {/* Why This Course - 4 Light Cards */}
            <div className="mb-8 sm:mb-10">
              <h4 className="font-bold text-lg mb-4 sm:mb-6 text-neutral-900">ทำไมต้องคอร์สนี้?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-white/80 border border-neutral-300/70 p-5 sm:p-6 rounded-2xl shadow-sm">
                  <h5 className="font-bold text-sm text-neutral-900 mb-2">ไม่ใช่แค่สร้างเว็บหน้าเดียว</h5>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    สอนสร้าง Web App มีระบบสมาชิก (Login) และฐานข้อมูล (Database)
                  </p>
                </div>

                <div className="bg-white/80 border border-neutral-300/70 p-5 sm:p-6 rounded-2xl shadow-sm">
                  <h5 className="font-bold text-sm text-neutral-900 mb-2">คิดแบบ SAAS</h5>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    สอนระบบคิดการสร้าง "บริการ" เพื่อแก้ปัญหาผู้ใช้และสร้างรายได้ระยะยาว
                  </p>
                </div>

                <div className="bg-white/80 border border-neutral-300/70 p-5 sm:p-6 rounded-2xl shadow-sm">
                  <h5 className="font-bold text-sm text-neutral-900 mb-2">ใช้ AI ทำงานเบื้องหลัง</h5>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    ลดเวลา Coding เองด้วยการใช้ AI ช่วยเขียนโครงสร้างที่ถูกต้อง
                  </p>
                </div>

                <div className="bg-white/80 border border-neutral-300/70 p-5 sm:p-6 rounded-2xl shadow-sm">
                  <h5 className="font-bold text-sm text-neutral-900 mb-2">สอนทำระบบ E-COMMERCE</h5>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    สำหรับสินค้าดิจิตอล (E-book, Course) พร้อมระบบชำระเงินออโต้
                  </p>
                </div>

              </div>
            </div>

            {/* Vibe Coding Dark Highlight Card */}
            <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10">
                <div className="lg:w-7/12 space-y-4 sm:space-y-6">
                  <span className="bg-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase inline-block">
                    HOT SELLING
                  </span>
                  <p className="text-neutral-400 text-xs tracking-widest uppercase">แพ็กเกจครบชุด | ออนไลน์ + วิดีโอซ้ำได้ตลอด</p>
                  <h4 className="font-heading text-2xl sm:text-4xl font-extrabold">Vibe Coding Master Route</h4>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light">
                    <div className="flex items-center gap-2.5"><CheckCircle size={16} className="text-white shrink-0"/> <span><strong>เรียนครบทุกบท Vibe Coding:</strong> Workshop สร้าง AI Web App สำหรับ MVP</span></div>
                    <div className="flex items-center gap-2.5"><CheckCircle size={16} className="text-white shrink-0"/> <span><strong>Full Stack Skills:</strong> สอน AI Coding, API, หลังบ้าน และคลาวด์พื้นฐาน</span></div>
                    <div className="flex items-center gap-2.5"><CheckCircle size={16} className="text-white shrink-0"/> <span><strong>Self-Paced Video:</strong> ทบทวนได้ตลอดชีวิต พร้อมอัปเดตบทเรียนฟรีตลอดปี</span></div>
                    <div className="flex items-center gap-2.5"><CheckCircle size={16} className="text-white shrink-0"/> <span><strong>ดูแลใกล้ชิด:</strong> เข้ากลุ่ม Vibe Coding with Modty ดูแล 60 วัน</span></div>
                  </div>
                </div>

                <div className="lg:w-5/12 w-full text-center lg:text-right border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-12 flex flex-col items-center lg:items-end">
                  <img src="/course-cover.png" alt="Vibe Coding Cover" className="w-full max-w-[280px] rounded-2xl mb-6 shadow-xl border border-neutral-700" />
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-1">2,990 <span className="text-base font-light text-neutral-400">THB</span></div>
                  <p className="text-neutral-500 text-xs line-through mb-1">ราคาปกติ 9,900 บาท</p>
                  <p className="text-rose-400 text-xs font-medium mb-6">** สำหรับ 10 ท่านแรกเท่านั้น</p>
                  <a 
                    href={lineLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block sm:inline-block w-full sm:w-auto px-8 py-3.5 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition text-sm tracking-wider uppercase text-center"
                  >
                    สมัครเรียนทันที
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 02 SHORT COURSES & WORKSHOPS */}
          <div className="mb-20 sm:mb-24">
            <div className="flex items-baseline gap-3 sm:gap-4 mb-4">
              <span className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-300">02</span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-neutral-900">Short Courses & Workshops</h3>
            </div>
            
            <p className="text-neutral-600 text-base max-w-3xl font-light mb-8 sm:mb-10">
              คอร์สระยะสั้นและ Workshop เฉพาะทาง สำหรับผู้ที่ต้องการแก้ปัญหาเฉพาะจุด หรืออัปสกิลเครื่องมือ AI ใหม่ๆ อย่างรวดเร็ว
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: AI System Architect */}
              <div className="bg-white/90 border border-neutral-300 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">AI PRODUCTIVITY</span>
                  <h4 className="font-bold text-lg text-neutral-900 mt-2 mb-1">AI System Architect</h4>
                  <p className="text-xs text-neutral-600 font-light mb-4">สร้างผู้ช่วยส่วนตัว ลดงานซ้ำซาก</p>
                  <ul className="space-y-2 text-xs text-neutral-600 font-light mb-6">
                    <li>• <strong>Prompt Engineering:</strong> สั่งงาน AI ให้แม่นยำ</li>
                    <li>• <strong>Custom Gems:</strong> สอนสร้าง AI ผู้ช่วยส่วนตัว</li>
                    <li>• <strong>Bonus:</strong> แถมสูตร Gen ภาพ 5 สไตล์</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-neutral-200">
                  <div className="text-xl font-bold text-neutral-900 mb-3">1,290 <span className="text-xs font-normal text-neutral-500">THB</span></div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2.5 rounded-full border border-neutral-900 text-neutral-900 text-xs font-medium hover:bg-neutral-900 hover:text-white transition">
                    จองเวลาเรียน
                  </a>
                </div>
              </div>

              {/* Card 2: AI Video & Content (Dark Card) */}
              <div className="bg-neutral-900 text-white p-6 rounded-2xl flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CONTENT CREATOR</span>
                  <h4 className="font-bold text-lg mt-2 mb-1">AI Video & Content</h4>
                  <p className="text-xs text-neutral-400 font-light mb-4">ปั้นคลิปรีวิวระดับโปร ด้วย AI</p>
                  <ul className="space-y-2 text-xs text-neutral-300 font-light mb-6">
                    <li>• <strong>Grok, Flow & Avatar:</strong> สคริปต์และวิดีโอ AI</li>
                    <li>• <strong>Affiliate Workflow:</strong> ทำคลิปรีวิวให้ขายได้จริง</li>
                    <li>• <strong>Consistency:</strong> วางแผน Prompt ต่อเนื่อง</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <div className="text-xl font-bold text-white mb-3">2,990 <span className="text-xs font-normal text-neutral-400">THB</span></div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2.5 rounded-full border border-white text-white text-xs font-medium hover:bg-white hover:text-black transition">
                    สอบถามรายละเอียด
                  </a>
                </div>
              </div>

              {/* Card 3: Google Automation */}
              <div className="bg-white/90 border border-neutral-300 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">POPULAR FOR WORK</span>
                  <h4 className="font-bold text-lg text-neutral-900 mt-2 mb-1">Google Automation</h4>
                  <p className="text-xs text-neutral-600 font-light mb-4">สร้างเว็บง่ายๆ ด้วย Gemini + Apps Script</p>
                  <ul className="space-y-2 text-xs text-neutral-600 font-light mb-6">
                    <li>• <strong>Gemini Coding:</strong> ให้ AI ช่วยเขียน Code</li>
                    <li>• <strong>Automation:</strong> แจ้งเตือน LINE, ส่งเมล Auto</li>
                    <li>• <strong>Free Web App:</strong> สร้างเว็บใช้ฟรี ไม่ต้องเช่า Host</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-neutral-200">
                  <div className="text-xl font-bold text-neutral-900 mb-3">2,990 <span className="text-xs font-normal text-neutral-500">THB</span></div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2.5 rounded-full border border-neutral-900 text-neutral-900 text-xs font-medium hover:bg-neutral-900 hover:text-white transition">
                    จองเวลาเรียน
                  </a>
                </div>
              </div>

              {/* Card 4: E-Commerce Digital Product (Dark Card) */}
              <div className="bg-neutral-900 text-white p-6 rounded-2xl flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">PASSIVE INCOME</span>
                  <h4 className="font-bold text-lg mt-2 mb-1">E-Commerce Digital Product</h4>
                  <p className="text-xs text-neutral-400 font-light mb-4">ระบบร้านค้าสินค้าดิจิตอลอัตโนมัติ</p>
                  <ul className="space-y-2 text-xs text-neutral-300 font-light mb-6">
                    <li>• <strong>Conversion-Focused:</strong> เพิ่มยอดขาย</li>
                    <li>• <strong>Dashboard:</strong> สรุปยอดขายดูง่าย</li>
                    <li>• <strong>Auto Delivery:</strong> ส่งสินค้าอัตโนมัติ</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <div className="text-xl font-bold text-white mb-3">2,990 <span className="text-xs font-normal text-neutral-400">THB</span></div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2.5 rounded-full border border-white text-white text-xs font-medium hover:bg-white hover:text-black transition">
                    จองเวลาเรียน
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 03 CONSULTATION SECTION */}
          <div className="mb-20 sm:mb-24">
            <div className="flex items-baseline gap-3 sm:gap-4 mb-4">
              <span className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-300">03</span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-neutral-900">Consultation</h3>
            </div>

            <p className="text-neutral-600 text-base max-w-3xl font-light mb-8 sm:mb-10">
              <strong>AI & Business Automation Consultant</strong> — ปลดล็อกศักยภาพทีมงานและธุรกิจของคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญ ลดงานซ้ำซ้อน เพิ่มเวลาโฟกัสในสิ่งที่คุณต้องการจริงๆ
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7 bg-white/90 border border-neutral-300 p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
                <h4 className="font-bold text-lg text-neutral-900">บริการนี้เหมาะกับใคร?</h4>
                <div className="space-y-4 text-xs sm:text-sm text-neutral-700 font-light">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div>
                    <div><strong>เจ้าของธุรกิจ:</strong> นำ AI มาลดต้นทุนและขั้นตอนการทำงาน</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div>
                    <div><strong>ทีม Operations:</strong> วางระบบ Workflow อัตโนมัติ ลดงาน Manual</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div>
                    <div><strong>ผู้นำยุคใหม่:</strong> เลือก Tech Stack ที่เหมาะสมกับการ Scale ในอนาคต</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div>
                    <div><strong>AI Enthusiast:</strong> ต้องการเจาะลึกการใช้ AI ในระดับธุรกิจ</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">PRIVATE SESSION</span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold">รายละเอียดค่าบริการ</h4>
                <div className="space-y-3 text-xs text-neutral-300 font-light border-y border-neutral-800 py-4">
                  <div className="flex justify-between"><span>รูปแบบการปรึกษา</span><span className="text-white font-medium">Online Meeting</span></div>
                  <div className="flex justify-between"><span>การดูแลหลังปรึกษา</span><span className="text-white font-medium">ดูแลต่อ 7 วัน</span></div>
                  <div className="flex justify-between"><span>รีวิวยอดเดิม</span><span className="text-white font-medium">รวมในแพ็กเกจ</span></div>
                </div>
                <div className="text-3xl font-heading font-extrabold">2,000 <span className="text-xs font-light text-neutral-400">THB/H</span></div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-3 rounded-full border border-white text-white text-xs font-medium hover:bg-white hover:text-black transition">
                  จองคิวปรึกษา
                </a>
              </div>
            </div>
          </div>

          {/* 04 DEVELOPMENT SECTION */}
          <div className="mb-20 sm:mb-24">
            <div className="flex items-baseline gap-3 sm:gap-4 mb-4">
              <span className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-300">04</span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-neutral-900">Development</h3>
            </div>

            <p className="text-neutral-600 text-base max-w-3xl font-light mb-8 sm:mb-10">
              <strong>รับทำเว็บไซต์และระบบ พร้อมใช้ทันที</strong> — พัฒนาด้วยเทคโนโลยีล่าสุด รวดเร็ว สวยงาม และรองรับการขยายธุรกิจในอนาคต
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white/90 border border-neutral-300 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">E-COMMERCE</span>
                  <h4 className="font-bold text-lg sm:text-xl text-neutral-900 mt-2 mb-2">Digital Product Store</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mb-6">ระบบร้านค้าสินค้าดิจิตอลอัตโนมัติ</p>
                  <ul className="space-y-2 text-xs text-neutral-600 font-light mb-6">
                    <li>• ดีไซน์ Conversion-Focused: เพิ่มยอดขาย</li>
                    <li>• หน้า Dashboard: สรุปยอดขายดูง่าย</li>
                    <li>• ส่งสินค้าและไฟล์อัตโนมัติทันทีหลังชำระเงิน</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">STARTING FROM</p>
                  <div className="text-2xl font-bold text-neutral-900 mb-4">3,000 <span className="text-xs font-normal text-neutral-500">THB</span></div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-3 rounded-full border border-neutral-900 text-neutral-900 text-xs font-medium hover:bg-neutral-900 hover:text-white transition">
                    สนใจทำเว็บไซต์
                  </a>
                </div>
              </div>

              <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CUSTOM SOLUTION</span>
                  <h4 className="font-bold text-lg sm:text-xl mt-2 mb-2">Custom Web Development</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">ระบบเว็บไซต์ตามสั่ง (Vibe Coding Style)</p>
                  <ul className="space-y-2 text-xs text-neutral-300 font-light mb-6">
                    <li>• โค้ดคุณภาพสูง: ปรับแต่งและขยายได้อิสระ</li>
                    <li>• ดูแลใกล้ชิด: ตั้งแต่เริ่มจนขึ้นระบบจริง</li>
                    <li>• เชื่อมต่อ API และ AI Agent ตามต้องการ</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-neutral-800">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">STARTING FROM</p>
                  <div className="text-2xl font-bold text-white mb-4">3,000 <span className="text-xs font-normal text-neutral-400">THB+</span></div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center py-3 rounded-full border border-white text-white text-xs font-medium hover:bg-white hover:text-black transition">
                    สอบถามรายละเอียด
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 05 AI AUTOMATION CASE STUDY */}
          <div className="mb-12">
            <div className="flex items-baseline gap-3 sm:gap-4 mb-4">
              <span className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-300">05</span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-neutral-900">AI Automation Case Study</h3>
            </div>
            <p className="text-neutral-600 text-base max-w-3xl font-light mb-8">สร้างระบบ AI Automation ให้ธุรกิจของคุณ</p>

            <div className="bg-white/90 border border-neutral-300/80 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
                
                <div className="bg-neutral-100 p-5 sm:p-6 rounded-2xl border border-neutral-200 text-center flex flex-col justify-between">
                  <div className="rounded-xl overflow-hidden mb-4 border border-neutral-200 shadow-sm bg-white">
                    <img src="/property-workflow.png" alt="N8N Workflow" className="w-full h-48 sm:h-52 object-contain" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-900 mb-1">🗄️ ฐานข้อมูลทรัพย์ NPA</h5>
                    <p className="text-xs text-neutral-600 font-light">คลังข้อมูลทรัพย์รอการขาย (NPA) ครบถ้วน รหัสทรัพย์ ราคา ที่ตั้ง ซิงก์กับ LINE Bot</p>
                  </div>
                </div>

                <div className="bg-neutral-100 p-5 sm:p-6 rounded-2xl border border-neutral-200 text-center flex flex-col justify-between">
                  <div className="rounded-xl overflow-hidden mb-4 border border-neutral-200 shadow-sm bg-white">
                    <img src="/property-line-chat.png" alt="LINE Property Bot" className="w-full h-48 sm:h-52 object-contain" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-900 mb-1">🤖 LINE Search Bot</h5>
                    <p className="text-xs text-neutral-600 font-light">ลูกค้าพิมพ์ "บ้านเดี่ยว ชลบุรี 2-5 ล้าน" AI วิเคราะห์ความต้องการ ส่งการ์ดทรัพย์พร้อมรูปและราคา</p>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 text-xs text-neutral-700 font-light">
                <div className="p-4 bg-neutral-100/70 rounded-xl border border-neutral-200">
                  <strong className="block text-neutral-900 text-sm mb-1">👥 CRM Pipeline</strong>
                  ติดตามสถานะลูกค้าอัตโนมัติ: สอบถาม ➔ นัดดูทรัพย์ ➔ เจรจา ➔ ปิดดีล ไม่พลาดทุก Lead
                </div>
                <div className="p-4 bg-neutral-100/70 rounded-xl border border-neutral-200">
                  <strong className="block text-neutral-900 text-sm mb-1">✨ AI โพสต์อัตโนมัติ</strong>
                  เมื่อมีทรัพย์ใหม่ n8n ดึงรูป ใส่ watermark อัตโนมัติ สร้างแคปชั่น AI แล้วโพสต์ลง Facebook Groups ซื้อ-ขายบ้านทันที
                </div>
              </div>

              <div className="text-center pt-4 border-t border-neutral-200">
                <a 
                  href={lineLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block sm:inline-block w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 text-white font-medium hover:bg-black transition text-xs sm:text-sm tracking-wider uppercase shadow-md"
                >
                  ติดต่อปรึกษาและวางระบบกับเรา
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PORTFOLIO SECTION (02 WebApp & Website) */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 scroll-mt-20 border-t border-neutral-300/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">PORTFOLIO & PROJECTS</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-neutral-900 mt-2">
              WebApp & Website<span className="text-neutral-400">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            
            {/* Project 1 */}
            <div className="bg-white/90 border border-neutral-300 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="h-48 sm:h-56 bg-neutral-200 flex items-center justify-center border-b border-neutral-200 overflow-hidden relative">
                <img src="/retirement-app.png" alt="Retirement Planning Web App" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">BESTIE INVESTING</span>
                  <h4 className="font-bold text-base sm:text-lg text-neutral-900 mt-1 mb-2">Retirement Planning Web App</h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                    เว็บแอปวางแผนเกษียณสำหรับนักลงทุนรายย่อย แปลง Logic ทางการเงินที่ซับซ้อนให้เป็นเครื่องมือที่ใช้งานง่าย
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6 text-[10px] font-semibold text-neutral-500">
                    <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200">REACT / VITE</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200">TAILWIND</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200">VERCEL</span>
                  </div>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:gap-3 transition">
                  เข้าใช้งาน <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Project 2 (Dark Card) */}
            <div className="bg-neutral-900 text-white rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="h-48 sm:h-56 bg-neutral-800 flex items-center justify-center overflow-hidden border-b border-neutral-800 relative">
                <img src="/bestie-bot.png" alt="Bestie Bot US" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">BESTIE INVESTING</span>
                  <h4 className="font-bold text-base sm:text-lg text-white mt-1 mb-2">Bestie Bot US</h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                    LINE Bot 11 ฟีเจอร์ AI — หุ้น US, คริปโต, ทองคำโลก, ETF, Market Pulse และราคาทองไทย แบบ real-time สำหรับนักลงทุนรายย่อย
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6 text-[10px] font-semibold text-neutral-400">
                    <span className="px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">LINE BOT</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">AI ANALYSIS</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">FINTECH</span>
                  </div>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:gap-3 transition">
                  ลองใช้งาน LINE BOT <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/90 border border-neutral-300 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="h-48 sm:h-56 bg-neutral-200 flex items-center justify-center p-6 text-center border-b border-neutral-200">
                <span className="font-heading font-bold text-neutral-600 text-base sm:text-lg">RetroLens AI</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">OPEN SOURCE</span>
                  <h4 className="font-bold text-base sm:text-lg text-neutral-900 mt-1 mb-2">RetroLens AI</h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">
                    เว็บแอปเปลี่ยนภาพถ่ายเป็นสไตล์กล้องฟิล์มด้วย AI
                  </p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:gap-3 transition">
                  ดูโปรเจกต์ <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Large Overlay Banner */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] bg-neutral-900 flex items-center justify-center shadow-2xl border border-neutral-800">
            <img src="/bg-automation.jpg" alt="Automation Background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xs z-10"></div>
            <div className="relative z-20 text-center space-y-1 sm:space-y-2">
              <h2 className="font-heading text-4xl sm:text-7xl font-extrabold text-outline-white tracking-widest uppercase">AUTOMATE</h2>
              <h2 className="font-heading text-4xl sm:text-7xl font-extrabold text-outline-white tracking-widest uppercase">YOUR</h2>
              <h2 className="font-heading text-4xl sm:text-7xl font-extrabold text-outline-white tracking-widest uppercase">BUSINESS</h2>
            </div>
          </div>

        </div>
      </section>

      {/* 7. INITIATE / TESTIMONIALS & CONTACT SECTION */}
      <section id="initiate" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 scroll-mt-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          
          {/* Voices of Success */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase">VOICES OF SUCCESS</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase text-neutral-900 mt-2">สิ่งที่ผู้เรียนและลูกค้าพูดถึงเรา</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
            
            <div className="bg-white/90 border border-neutral-300 p-6 sm:p-8 rounded-3xl space-y-4 sm:space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden mx-auto border border-neutral-300">
                <img src="/nisa.png" alt="คุณนิสา" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-neutral-600 font-light leading-relaxed italic text-center">
                "งานบัญชีที่เคยทำหลักชั่วโมง ตอนนี้กริ๊กเดียวเสร็จด้วย App Script ใช้เวลาไปบริหารภาพรวมธุรกิจได้เยอะมากเลยค่ะ"
              </p>
              <div className="text-center pt-2">
                <h5 className="font-bold text-sm text-neutral-900">คุณนิสา</h5>
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">ACCOUNTING</span>
              </div>
            </div>

            <div className="bg-white/90 border border-neutral-300 p-6 sm:p-8 rounded-3xl space-y-4 sm:space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden mx-auto border border-neutral-300">
                <img src="/gib.png" alt="คุณกิ๊บ" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-neutral-600 font-light leading-relaxed italic text-center">
                "พอร์ตอสังหาสวยขึ้นเยอะมาก ระบบ AI Vibe Coding ช่วยให้การทำคอนเทนต์เป็นเรื่องง่ายและลูกค้าทักไวขึ้นชัดเจน"
              </p>
              <div className="text-center pt-2">
                <h5 className="font-bold text-sm text-neutral-900">คุณกิ๊บ</h5>
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">REAL ESTATE</span>
              </div>
            </div>

            <div className="bg-white/90 border border-neutral-300 p-6 sm:p-8 rounded-3xl space-y-4 sm:space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden mx-auto border border-neutral-300">
                <img src="/pat.png" alt="คุณพัต" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-neutral-600 font-light leading-relaxed italic text-center">
                "ระบบ Automate ตอบโจทย์การ Scale ธุรกิจมากๆ ช่วยลดงานจุกจิก และคุมคุณภาพได้ดีโดยไม่ต้องจ้างพนักงานเพิ่มเยอะ"
              </p>
              <div className="text-center pt-2">
                <h5 className="font-bold text-sm text-neutral-900">คุณพัต</h5>
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">BUSINESS OWNER</span>
              </div>
            </div>

          </div>

          {/* Final Call To Action Banner */}
          <div className="border-t border-neutral-300/80 pt-12 sm:pt-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 sm:mb-16">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase">READY TO BUILD?</span>
                <h2 className="font-heading text-4xl sm:text-7xl font-extrabold uppercase text-neutral-900 tracking-tight leading-none mt-2">
                  LET'S <br/> SCALE.
                </h2>
              </div>

              <div className="space-y-3 text-left lg:text-right w-full sm:w-auto">
                <a 
                  href={lineLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-base sm:text-xl font-bold text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:pr-4 transition-all"
                >
                  Contact via LINE <ArrowRight size={20} />
                </a>
                <p className="text-xs text-neutral-500 font-light">Bangkok, Thailand</p>
                <p className="text-xs font-bold tracking-wider text-neutral-800">LINE ID: @237DHTQP</p>
              </div>
            </div>

            {/* Giant Watermark Text */}
            <div className="overflow-hidden border-t border-neutral-300/60 pt-8 sm:pt-12 pb-4 sm:pb-6">
              <span className="font-heading text-5xl sm:text-9xl font-extrabold text-neutral-300/40 tracking-tighter uppercase whitespace-nowrap block select-none">
                goscale. modgoscale.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F3EF] border-t border-neutral-300/80 py-6 sm:py-8 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-bold tracking-widest text-neutral-500 uppercase text-center sm:text-left">
          <div>© 2026 MODGOSCALE. ALL RIGHTS RESERVED.</div>
          <div>ARCHITECTED IN BANGKOK</div>
        </div>
      </footer>

    </div>
  );
};

export default App;
