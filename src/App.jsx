import React, { useState } from 'react';
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
  Award,
  Presentation,
  Sliders,
  Wrench,
  Layers,
  Globe,
  Star,
  Check
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('all');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Link LINE ใหม่
  const lineLink = "https://line.me/R/ti/p/@237dhtqp?oat_content=url&ts=12080435";

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-500 selection:text-white" style={{ fontFamily: '"Kanit", sans-serif' }}>
      
      {/* Import Google Font Kanit */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Kanit', sans-serif; }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo MGS Minimal */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 px-2 py-1 rounded-md flex items-center justify-center shadow-md">
                <span className="font-bold text-white text-sm tracking-widest">MGS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                ModGoScale
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-7 items-center">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-purple-600 transition font-medium">เกี่ยวกับเรา</button>
              <button onClick={() => scrollToSection('speaker')} className="text-slate-600 hover:text-purple-600 transition font-medium flex items-center gap-1">
                <Award size={16} className="text-purple-500" /> ผลงานวิทยากร
              </button>
              <button onClick={() => scrollToSection('course')} className="text-slate-600 hover:text-purple-600 transition font-medium">คอร์สเรียน & Workshop</button>
              <button onClick={() => scrollToSection('consult')} className="text-slate-600 hover:text-purple-600 transition font-medium">ที่ปรึกษา</button>
              <button onClick={() => scrollToSection('development')} className="text-slate-600 hover:text-purple-600 transition font-medium">รับทำเว็บไซต์</button>
              <a 
                href={lineLink}
                target="_blank" 
                rel="noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg shadow-purple-200 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                LINE: AI VibeCoding
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-purple-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">เกี่ยวกับเรา</button>
              <button onClick={() => scrollToSection('speaker')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">ผลงานวิทยากร</button>
              <button onClick={() => scrollToSection('course')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">คอร์สเรียน & Workshop</button>
              <button onClick={() => scrollToSection('consult')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">ที่ปรึกษา</button>
              <button onClick={() => scrollToSection('development')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">รับทำเว็บไซต์</button>
              <a 
                href={lineLink}
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-3 rounded-md font-medium shadow-md"
              >
                ติดต่อ LINE: AI VibeCoding
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-white">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-pink-200/30 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm mb-8">
            <Rocket size={16} className="text-purple-600" />
            <span className="text-sm text-slate-600 font-medium">Your Partner in Tech & Business Growth</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
            ยกระดับธุรกิจคุณด้วย <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
              ระบบ AI ที่ขยายให้คุณโตได้ไวกว่าเดิม
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            <strong>ModGoScale</strong> ช่วยคุณลดขั้นตอนการทำงาน สร้างระบบอัตโนมัติ และพัฒนา Digital Product 
            ไม่ว่าคุณจะอยาก <span className="text-purple-600 font-medium">เรียนรู้เพื่อทำเอง</span>, 
            <span className="text-pink-600 font-medium"> ปรึกษาเชิงกลยุทธ์</span> หรือ 
            <span className="text-rose-500 font-medium"> ให้เราลงมือทำให้</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
             <button onClick={() => scrollToSection('course')} className="group p-5 bg-white border border-slate-200 hover:border-purple-400 rounded-2xl transition shadow-lg hover:shadow-purple-100 text-left">
                <div className="bg-purple-100 w-11 h-11 rounded-xl flex items-center justify-center text-purple-600 mb-3 group-hover:scale-110 transition">
                  <BookOpen size={22} />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-1">Education</h3>
                <p className="text-xs text-slate-500">สอนสร้าง Web & AI Systems แบบจับมือทำ</p>
             </button>

             <button onClick={() => scrollToSection('speaker')} className="group p-5 bg-white border border-slate-200 hover:border-purple-400 rounded-2xl transition shadow-lg hover:shadow-purple-100 text-left">
                <div className="bg-purple-100 w-11 h-11 rounded-xl flex items-center justify-center text-purple-600 mb-3 group-hover:scale-110 transition">
                  <Presentation size={22} />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-1">Keynote Speaker</h3>
                <p className="text-xs text-slate-500">วิทยากรบรรยาย AI & Tech ให้องค์กร</p>
             </button>
             
             <button onClick={() => scrollToSection('consult')} className="group p-5 bg-white border border-slate-200 hover:border-pink-400 rounded-2xl transition shadow-lg hover:shadow-pink-100 text-left">
                <div className="bg-pink-100 w-11 h-11 rounded-xl flex items-center justify-center text-pink-600 mb-3 group-hover:scale-110 transition">
                  <Users size={22} />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-1">Consultation</h3>
                <p className="text-xs text-slate-500">ที่ปรึกษา AI & Business Automation</p>
             </button>

             <button onClick={() => scrollToSection('development')} className="group p-5 bg-white border border-slate-200 hover:border-rose-400 rounded-2xl transition shadow-lg hover:shadow-rose-100 text-left">
                <div className="bg-rose-100 w-11 h-11 rounded-xl flex items-center justify-center text-rose-500 mb-3 group-hover:scale-110 transition">
                  <Monitor size={22} />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-1">Development</h3>
                <p className="text-xs text-slate-500">บริการรับทำเว็บไซต์และระบบพร้อมใช้</p>
             </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            {/* Left Content: Text */}
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <User size={16} /> WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-snug">
                จากประสบการณ์ Solopreneur <br/> สู่ <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">ผู้ช่วยของคุณ</span>
              </h2>
              <p className="text-slate-600 mb-6 text-lg font-light leading-relaxed">
                สวัสดีค่ะ! <strong>ModGoScale</strong> คือแบรนด์ของช่อง <strong>Modty.ai</strong> เราคือ Solopreneur ที่เข้าใจหัวอกคนทำธุรกิจคนเดียวและอยากเห็นทุกคนสร้างธุรกิจได้ด้วยตัวเอง
              </p>
              <p className="text-slate-600 mb-6 font-light leading-relaxed">
                เป้าหมายของเราคือช่วยให้คุณ <strong>สร้างระบบและเว็บไซต์ด้วย AI Vibe Coding</strong> แบบไม่ต้องเขียนโค้ดเอง (No-Code) เน้นสอนให้เข้าใจ <strong>คอนเซปต์ (Concept)</strong> และ <strong>โครงสร้าง (Structure)</strong> เพื่อให้คุณนำไปต่อยอดได้จริงกับทุกธุรกิจ
              </p>
              <p className="text-slate-600 mb-8 font-light leading-relaxed">
                เราเน้นการเลือกใช้เครื่องมือที่ <strong>"ง่าย ประหยัด และคุ้มค่า"</strong> พร้อมให้คำปรึกษาเรื่อง AI รอบด้าน ไม่ว่าจะเป็นงานสร้างภาพ กราฟิก วิดีโอ หรือถ้าคุณไม่มีเวลา เราก็มีบริการรับทำให้นะคะ
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-purple-200 shadow-sm text-sm text-slate-600">
                    <Palette size={16} className="text-purple-600"/> AI Image & Graphics
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-pink-200 shadow-sm text-sm text-slate-600">
                    <Video size={16} className="text-pink-600"/> AI Video Generation
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-rose-200 shadow-sm text-sm text-slate-600">
                    <Code size={16} className="text-rose-500"/> Custom AI Web Dev
                 </div>
              </div>
            </div>
            
            {/* Right Content: Profile Image & Features */}
            <div className="md:w-1/2 w-full flex flex-col items-center">
              {/* Profile Image Wrapper */}
              <div className="relative mb-8 group cursor-pointer">
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                
                {/* Image */}
                <img 
                  src="image.png" 
                  alt="Modty Profile" 
                  className="relative w-56 h-56 rounded-full object-cover border-4 border-white shadow-xl z-10"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-2 right-2 z-20 bg-white border border-purple-200 text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <CheckCircle size={14} /> Modty.ai Founder
                </div>
              </div>

              {/* Features Box */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 blur-2xl opacity-30 rounded-3xl -z-10"></div>
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">เพื่อนคู่คิดสำหรับธุรกิจของคุณ</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                <Users size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Solopreneur Mindset</h4>
                                <p className="text-sm text-slate-500 mt-1">เข้าใจคนทำงานคนเดียว เข้าถึงง่าย คุยง่าย ไม่ยุ่งยากค่ะ</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                                <Zap size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">AI Mastery</h4>
                                <p className="text-sm text-slate-500 mt-1">เชี่ยวชาญเครื่องมือ AI หลากหลาย พร้อมแนะนำสิ่งที่เหมาะกับคุณที่สุด</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                                <Layout size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Flexible Service</h4>
                                <p className="text-sm text-slate-500 mt-1">รับทำเว็บไซต์ที่ยืดหยุ่น ปรับแต่งได้ตามใจลูกค้า ใส่ใจเหมือนทำใช้เอง</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Speaker & Workshop Highlights Section */}
      <section id="speaker" className="py-24 bg-white scroll-mt-16 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4 border border-purple-200">
                <Presentation size={16} /> KEYNOTE SPEAKER & CORPORATE TRAINER
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                ผลงานการบรรยาย <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                  และวิทยากรพิเศษ (Keynote Speaker)
                </span>
              </h2>
            </div>
            <p className="text-slate-600 text-base max-w-md font-light">
              แบ่งปันความรู้ด้าน AI, Vibe Coding และ Digital Transformation ให้กับองค์กร หน่วยงานภาครัฐ และสถาบันชั้นนำระดับประเทศ
            </p>
          </div>

          {/* Featured Highlight Event Card: Girl in ICT by DCT */}
          <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative mb-12 border border-purple-800/40">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Event Context & Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-purple-500/30 text-purple-200 border border-purple-400/40 text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
                    NATIONAL EVENT
                  </span>
                  <span className="bg-pink-500/30 text-pink-200 border border-pink-400/40 text-xs px-3 py-1 rounded-full font-semibold">
                    สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย (DCT)
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold leading-snug">
                  วิทยากรบรรยายงาน <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">Girl in ICT by DCT</span>
                </h3>

                <p className="text-slate-300 font-light text-base leading-relaxed">
                  ได้รับเกียรติเป็นวิทยากรพิเศษบรรยายในงาน <strong>Girl in ICT</strong> จัดโดย <strong>สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย (Digital Council of Thailand - DCT)</strong> เพื่อเสริมสร้างศักยภาพผู้หญิงและคนรุ่นใหม่ในการสร้างสรรค์นวัตกรรมเทคโนโลยี
                </p>

                {/* Highlight Topics */}
                <div className="space-y-3 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h4 className="text-amber-300 font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                    <Sparkles size={16} /> หัวข้อและไฮไลต์การบรรยาย
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-200 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>"Girl in ICT: ไม่เคยเขียนโค้ด ก็สร้างเว็บและแชตบอทได้"</strong> — สร้างระบบได้ด้วย AI จากไอเดีย สู่เว็บและแชตบอทที่ใช้งานจริง</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Vibe Coding + AI = ทุกไอเดียเป็นจริงได้</strong> — แนวทางการเปลี่ยนวิสัยทัศน์ทางธุรกิจให้เป็นซอฟต์แวร์โดยไม่ต้องลงมือเขียนโค้ดเอง</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>จาก Business สู่ AI Consultant</strong> — แชร์ประสบการณ์เปลี่ยนผ่านจากการบริหารธุรกิจ สู่การสร้าง AI Agent & Workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a 
                    href={lineLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-full text-sm transition shadow-lg shadow-purple-900/50 flex items-center gap-2"
                  >
                    <MessageCircle size={18} /> ติดต่อเชิญบรรยาย / In-House Workshop
                  </a>
                </div>
              </div>

              {/* Right Column: Key Photo Feature */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <img 
                    src="images/dct_speaking_vibe.jpg" 
                    alt="Modty Speaker Girl in ICT by DCT" 
                    className="relative rounded-2xl w-full h-[340px] object-cover shadow-2xl border border-white/20"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs text-slate-200">
                    <p className="font-semibold text-white">เวทีบรรยาย Girl in ICT by DCT</p>
                    <p className="text-slate-400 font-light truncate">หัวข้อ: ไม่เคยเขียนโค้ด ก็สร้างเว็บและแชตบอทได้ด้วย AI</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Event Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Photo 1: Speaker Presentation - Business to AI Consultant */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src="images/dct_speaking_consultant.jpg" 
                  alt="จาก Business สู่ AI Consultant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                  Keynote Session
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-800 mb-2">จาก Business สู่ AI Consultant</h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  นำเสนอโครงสร้างการนำ AI มาใช้แก้ปัญหาธุรกิจ ทั้ง AI Automation, Vibe Coding, Digital Products และ Business Systems
                </p>
              </div>
            </div>

            {/* Photo 2: Group Photo with DCT Executives */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src="images/dct_group.jpg" 
                  alt="บรรยากาศร่วมกับคณะผู้บริหารสภาดิจิทัลฯ" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-pink-600/90 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                  Honor & Network
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-800 mb-2">ภาพบรรยากาศร่วมกับผู้บริหาร DCT</h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  ถ่ายภาพที่ระลึกร่วมกับผู้บริหารและคณะผู้จัดงานสภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย (DCT) ในโครงการ Girl in ICT
                </p>
              </div>
            </div>

            {/* Photo 3: Gift Presentation */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src="images/dct_gift.jpg" 
                  alt="รับมอบของที่ระลึกจากสภาดิจิทัลฯ" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-600/90 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                  Recognition
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-800 mb-2">รับมอบของที่ระลึกจาก DCT</h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  รับมอบของที่ระลึกแทนคำขอบคุณจากตัวแทนคณะกรรมการสภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 1. Education & Courses Section */}
      <section id="course" className="py-24 bg-white scroll-mt-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Customization Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                SERVICE 1: EDUCATION & WORKSHOPS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              คอร์สเรียน AI และ Workshop <br/>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                เน้นการสร้างระบบและใช้งานได้จริง
              </span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
              เปลี่ยนคุณจากผู้ใช้งาน AI ทั่วไป ให้เป็นผู้สร้างระบบ (System Creator) ด้วยหลักสูตรประยุกต์เข้มข้น
            </p>

            {/* Customize Banner Highlight */}
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border border-purple-200 rounded-2xl p-4 shadow-sm inline-flex items-center gap-3 text-left">
              <div className="bg-purple-600 text-white p-2.5 rounded-xl shrink-0">
                <Sliders size={22} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm md:text-base">
                  ✨ ปรับ Customize ตามผู้เรียนและเป้าหมายองค์กรได้ทุกคอร์ส!
                </p>
                <p className="text-slate-600 text-xs md:text-sm font-light">
                  รองรับทั้งการเรียนส่วนตัว (Private), ทีมงานในองค์กร (In-House Training) หรือเน้นทำโปรเจกต์เฉพาะทางของคุณ
                </p>
              </div>
            </div>
          </div>

          {/* Featured Flagship Course 1: Vibe Coding Master Route */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  FLAGSHIP COURSE #1
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Vibe Coding Master Route <br/>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-amber-200 bg-clip-text text-transparent">
                    เปลี่ยนไอเดียให้เป็น Web จริง ด้วย AI & Google Ecosystem
                  </span>
                </h3>
                <p className="text-slate-300 font-light text-base leading-relaxed">
                  คอร์สที่จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันด้วย AI แบบไม่ต้องเริ่มเขียนโค้ดบรรทัดแรกเอง สอนคิดแบบ SaaS มีระบบสมาชิก ฐานข้อมูล และใช้งานบน Cloud จริง
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <p className="font-semibold text-purple-300 text-sm mb-1">ไม่ใช่แค่เว็บหน้าเดียว</p>
                    <p className="text-slate-400 text-xs font-light">มีระบบสมาชิก (Login) และจัดการฐานข้อมูล (Database) แบบครบวงจร</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <p className="font-semibold text-purple-300 text-sm mb-1">คิดแบบ SaaS Product</p>
                    <p className="text-slate-400 text-xs font-light">สอนระบบคิดบริการแก้ปัญหาผู้ใช้ และสร้างรายได้ระยะยาว</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a href={lineLink} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-full text-sm transition shadow-lg shadow-purple-900/50">
                    สอบถามแพ็กเกจเรียนส่วนตัว (5,900 THB)
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                <h4 className="font-bold text-white mb-4 text-center border-b border-white/10 pb-3">สิ่งที่ได้รับในคอร์สนี้</h4>
                <ul className="space-y-3 text-sm text-slate-300 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Workshop สร้าง AI Web App สำหรับ MVP พร้อมใช้งานจริง</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Full Stack Skills: AI Coding, API, Backend & Cloud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>เข้ากลุ่ม Vibe Coding with Modty ดูแลต่อเนื่อง 60 วัน</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>แจก Template, Code Architecture และ Prompt Ready-to-Use</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main 5 Courses Grid */}
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            หลักสูตรคอร์สหลักและ Workshop <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">(เจาะลึกรายวิชา)</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

            {/* Course 2: ChatGPT Work + Codex (Highlight for Modty's Brand) */}
            <div className="bg-white border-2 border-purple-400 rounded-3xl p-8 relative shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between">
              <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <Star size={14} className="fill-white" /> BEST MATCH FOR MODTY BRAND
              </div>
              
              <div>
                <div className="mb-6 mt-2">
                  <span className="text-purple-600 text-xs font-bold tracking-wider uppercase bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                    COURSE #2
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                    ChatGPT Work + Codex: <span className="text-purple-600">สร้าง AI Operating System</span>
                  </h4>
                  <p className="text-slate-600 text-sm font-light">
                    เปลี่ยน ChatGPT จากเครื่องมือถามตอบ ให้เป็นผู้ช่วยทำงานและสร้างระบบส่วนตัว (แตกต่างจากคอร์ส ChatGPT พื้นฐานทั่วไป)
                  </p>
                </div>

                {/* Core Content */}
                <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen size={16} className="text-purple-600" /> เนื้อหาหลักที่สอน
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light">
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> ตั้งค่า Projects & Instructions</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> เชื่อม Apps (Gmail, Drive, Notion, GitHub)</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> วิเคราะห์ข้อมูลและไฟล์หลายรูปแบบ</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> สร้าง Docs, Slides, Sheets & Dashboard</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> ตั้ง Scheduled Tasks ทำงานตามเวลา</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> สร้าง Custom Skills สำหรับงานซ้ำ</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> ใช้ Codex สร้างเว็บและเครื่องมือ</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-purple-600 shrink-0"/> ออกแบบ Workflow หลาย Agent</div>
                    <div className="flex items-center gap-1.5 col-span-1 sm:col-span-2 font-medium text-purple-700"><Check size={14} className="text-purple-600 shrink-0"/> สร้าง AI Company หรือทีม AI ตามตำแหน่งงาน</div>
                  </div>
                </div>

                {/* Example Projects */}
                <div className="mb-6">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 text-purple-700">
                    🚀 โปรเจกต์ตัวอย่างที่ได้ทำจริง:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {['AI Calendar Assistant', 'Morning Brief', 'Weekly Business Review', 'Client Project Dashboard', 'Content Production System', 'AI Marketing Team', 'Founder OS'].map((item, idx) => (
                      <span key={idx} className="bg-purple-50 text-purple-700 text-xs px-2.5 py-1 rounded-md border border-purple-100 font-light">
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">เหมาะสำหรับ: Solopreneur, Founders & Executive</span>
                <a href={lineLink} target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition shadow-md">
                  สนใจคอร์สนี้
                </a>
              </div>
            </div>

            {/* Course 3: AI Visual Content System */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-pink-300 transition duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl">
              <div>
                <div className="mb-6">
                  <span className="text-pink-600 text-xs font-bold tracking-wider uppercase bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">
                    COURSE #3
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                    AI Visual Content System: <span className="text-pink-600">สร้างภาพและคารูเซลเป็นระบบ</span>
                  </h4>
                  <p className="text-slate-600 text-sm font-light">
                    สร้างภาพ คารูเซล โฆษณา และคอนเทนต์ภาพให้เป็นระบบเดียวกัน ปรับแต่งได้ตามภาพลักษณ์แบรนด์
                  </p>
                </div>

                {/* Core Content */}
                <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Palette size={16} className="text-pink-600" /> เนื้อหาหลักที่สอน
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light">
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> วิเคราะห์ Style จากภาพ Reference</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> สร้าง Visual Direction & Design System</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> เขียน Structured Prompt แบบมืออาชีพ</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> ล็อกใบหน้า สินค้า สี ฟอนต์ และสไตล์</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> สร้าง Carousel ให้ทุกหน้าธีมเดียวกัน</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> ใช้ AI แยกเนื้อหาเป็นแต่ละ Slide</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-pink-600 shrink-0"/> สร้าง Prompt / Skill ตามสูตรคอนเทนต์</div>
                    <div className="flex items-center gap-1.5 col-span-1 sm:col-span-2 font-medium text-pink-700"><Check size={14} className="text-pink-600 shrink-0"/> สร้าง AI Carousel Tool จัดข้อความและวางภาพอัตโนมัติ</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 text-pink-700">
                    🎯 เหมาะสำหรับ:
                  </h5>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-600 font-light">
                    <span className="bg-pink-50 text-pink-700 px-2.5 py-1 rounded-md border border-pink-100">Creators</span>
                    <span className="bg-pink-50 text-pink-700 px-2.5 py-1 rounded-md border border-pink-100">Marketers</span>
                    <span className="bg-pink-50 text-pink-700 px-2.5 py-1 rounded-md border border-pink-100">เจ้าของแบรนด์</span>
                    <span className="bg-pink-50 text-pink-700 px-2.5 py-1 rounded-md border border-pink-100">Agency</span>
                    <span className="bg-pink-50 text-pink-700 px-2.5 py-1 rounded-md border border-pink-100">ร้านค้าออนไลน์</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">พร้อม Workflow สร้างภาพต่อเนื่อง</span>
                <a href={lineLink} target="_blank" rel="noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition shadow-md">
                  สนใจคอร์สนี้
                </a>
              </div>
            </div>

            {/* Course 4: AI Video & Motion Content Workshop */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-rose-300 transition duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl">
              <div>
                <div className="mb-6">
                  <span className="text-rose-600 text-xs font-bold tracking-wider uppercase bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    COURSE #4
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                    AI Video & Motion Content: <span className="text-rose-600">สร้างวิดีโอจาก AI และโค้ด</span>
                  </h4>
                  <p className="text-slate-600 text-sm font-light">
                    สร้างวิดีโอ AI, Motion Graphic และวิดีโอจากโค้ด โดยไม่ต้องตัดต่อเก่ง
                  </p>
                </div>

                {/* Core Content */}
                <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Clapperboard size={16} className="text-rose-600" /> เนื้อหาหลักที่สอน
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light">
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> สร้างภาพและฉากด้วย AI</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> AI Talking Person & Clone Voice</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> ทำ AI UGC และวิดีโอสินค้า</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> ใช้ Google Flow สร้างวิดีโอ</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> สร้าง Motion Video จาก HTML</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> ChatGPT Work + Codex ควบคุมการผลิต</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> ทำ Subtitle, B-roll, Motion & Render</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-rose-600 shrink-0"/> แปลง PDF/Sheets เป็นวิดีโอ</div>
                    <div className="flex items-center gap-1.5 col-span-1 sm:col-span-2 font-medium text-rose-700"><Check size={14} className="text-rose-600 shrink-0"/> สร้าง AI Video Editor ส่วนตัว</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 text-rose-700">
                    🎯 เหมาะสำหรับ:
                  </h5>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-600 font-light">
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md border border-rose-100">Content Creator</span>
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md border border-rose-100">Video Editor</span>
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md border border-rose-100">แบรนด์สินค้า</span>
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md border border-rose-100">ทีม Social Media</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">สาย Reels, TikTok & Shorts</span>
                <a href={lineLink} target="_blank" rel="noreferrer" className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition shadow-md">
                  สนใจคอร์สนี้
                </a>
              </div>
            </div>

            {/* Course 5: AI Automation + AI Agent สำหรับธุรกิจ */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-emerald-300 transition duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl">
              <div>
                <div className="mb-6">
                  <span className="text-emerald-600 text-xs font-bold tracking-wider uppercase bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    COURSE #5 (COLLABORATION WITH PARTNER AI ENGINEER)
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                    AI Automation + AI Agent: <span className="text-emerald-600">ระบบอัตโนมัติสำหรับธุรกิจ</span>
                  </h4>
                  <p className="text-slate-600 text-sm font-light">
                    สร้างระบบอัตโนมัติและ AI Agent ที่นำไปใช้ในองค์กร หรือขายให้บริการลูกค้าได้จริง
                  </p>
                </div>

                {/* Core Content */}
                <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Zap size={16} className="text-emerald-600" /> เนื้อหาหลักที่สอน
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light">
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> พื้นฐาน n8n & Workflow Design</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> Trigger, Webhook & Data Flow</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> เชื่อม Forms, Gmail, Sheets & LINE OA</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> ใช้ API & JSON เบื้องต้น</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> AI Agent มี Memory & Tools</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> ระบบตอบลูกค้าจากฐานข้อมูล</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> ระบบสรุปอีเมลสร้างงานต่ออัตโนมัติ</div>
                    <div className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600 shrink-0"/> ระบบ Lead, CRM & Follow-up</div>
                    <div className="flex items-center gap-1.5 col-span-1 sm:col-span-2 font-medium text-emerald-700"><Check size={14} className="text-emerald-600 shrink-0"/> Deploy, ดูแล & ตั้งแพ็กเกจขาย Automation</div>
                  </div>
                </div>

                {/* Templates Included */}
                <div className="mb-6">
                  <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 text-emerald-700">
                    📦 Workflows & Prompt Pack พร้อมใช้:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {['Google Form → n8n → Email', 'Gmail → Extract Data → Sheets', 'AI Chatbot → Telegram → Sheets', 'Email → AI Summary → Voice Alert', 'Template Workflows'].map((item, idx) => (
                      <span key={idx} className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-md border border-emerald-100 font-light">
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">สอนร่วมกับ Partner AI Engineer</span>
                <a href={lineLink} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition shadow-md">
                  สนใจคอร์สนี้
                </a>
              </div>
            </div>

            {/* Course 6: สร้าง AI Content Tool ของตัวเอง */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-indigo-300 transition duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl lg:col-span-2">
              <div>
                <div className="mb-6">
                  <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    COURSE #6 (PROJECT-BASED WORKSHOP)
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                    สร้าง AI Content Tool ของตัวเอง: <span className="text-indigo-600">เรียนจบได้เครื่องมือกลับไปใช้จริง</span>
                  </h4>
                  <p className="text-slate-600 text-sm font-light">
                    คอร์สแบบ Project-based สื่อสารผลลัพธ์ชัดเจน ให้ผู้เรียนได้เครื่องมือ AI ส่วนตัวกลับไปใช้งานหรือทำขายเป็น Digital Product
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Selectable Tools */}
                  <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
                    <h5 className="font-semibold text-indigo-900 text-xs uppercase tracking-wider mb-3">
                      🛠️ เลือกสร้าง Tool ได้ตามต้องการ:
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-light">
                      <div className="flex items-center gap-1.5">• AI Carousel Generator</div>
                      <div className="flex items-center gap-1.5">• UGC Image Generator</div>
                      <div className="flex items-center gap-1.5">• UGC Video Generator</div>
                      <div className="flex items-center gap-1.5">• Content Research Tool</div>
                      <div className="flex items-center gap-1.5">• Hook & Script Generator</div>
                      <div className="flex items-center gap-1.5">• AI Infographic Tool</div>
                      <div className="flex items-center gap-1.5">• Prompt Generator</div>
                      <div className="flex items-center gap-1.5">• Content Calendar Assistant</div>
                    </div>
                  </div>

                  {/* Skills Taught */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-3">
                      📚 สิ่งที่จะได้เรียนรู้:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-light">
                      <li className="flex items-center gap-1.5"><Check size={14} className="text-indigo-600 shrink-0"/> ออกแบบ UX ก่อนสร้างเครื่องมือ</li>
                      <li className="flex items-center gap-1.5"><Check size={14} className="text-indigo-600 shrink-0"/> สร้าง Prompt System (ไม่ใช่ Prompt เดียว)</li>
                      <li className="flex items-center gap-1.5"><Check size={14} className="text-indigo-600 shrink-0"/> สร้างหน้ากรอกข้อมูล และ Generate หลายชิ้น</li>
                      <li className="flex items-center gap-1.5"><Check size={14} className="text-indigo-600 shrink-0"/> Auto-save เข้า Google Drive & Duplicate ใช้หลายแบรนด์</li>
                      <li className="flex items-center gap-1.5"><Check size={14} className="text-indigo-600 shrink-0"/> แพ็กเป็นบริการ หรือ Digital Product ทำเงิน</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">เน้นผลลัพธ์: จบแล้วได้ Tool ของตัวเองใช้งานได้ทันที</span>
                <a href={lineLink} target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition shadow-md">
                  จองเวลาทำโปรเจกต์
                </a>
              </div>
            </div>

          </div>

          {/* Future Mini-Courses & Workshops */}
          <div className="bg-gradient-to-r from-slate-900 to-purple-950 rounded-3xl p-8 md:p-10 text-white mb-24 border border-purple-900/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <span className="bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  MINI COURSES & SPECIAL WORKSHOPS
                </span>
                <h4 className="text-2xl font-bold mt-2 text-white">
                  หลักสูตรย่อยเสริมทักษะเฉพาะทาง
                </h4>
              </div>
              <p className="text-slate-300 text-xs md:text-sm font-light max-w-md">
                เนื้อหาพร้อมสอน เหมาะสำหรับ Mini Course, Special Workshop หรือ Bonus ในองค์กร
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Google Sheets Dashboard', desc: 'สร้าง Dashboard ด้วย AI และ Apps Script' },
                { title: 'Claude Skills', desc: 'ประยุกต์ใช้ Claude Skills สำหรับงานและธุรกิจ' },
                { title: 'Prompt Engineering + Gemini Gems', desc: 'สร้าง Gems ช่วยงานเฉพาะทาง' },
                { title: 'Reverse Engineer Systems', desc: 'ถอดรหัสเว็บไซต์ ภาพ และ Workflow' },
                { title: 'Digital Product & Sales Auto', desc: 'สร้างสินค้าดิจิทัลและระบบขายอัตโนมัติ' },
                { title: 'AI Tools 10 ตัวสำหรับผู้เริ่มต้น', desc: 'เริ่มต้นใช้ AI อย่างมืออาชีพใน 1 วัน' },
                { title: 'Build with Gemini Canvas', desc: 'ตั้งแต่ปั้นไอเดียจน Deploy เว็บจริง' }
              ].map((course, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition">
                  <span className="text-purple-400 font-bold text-xs">MINI #{idx + 1}</span>
                  <h5 className="font-semibold text-white text-sm mt-1">{course.title}</h5>
                  <p className="text-slate-400 text-xs font-light mt-1">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Service Structure Overview */}
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">
                โครงสร้างรูปแบบบริการและราคา <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">(Service & Pricing Tiers)</span>
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-light">
                เลือกรูปแบบการเรียนรู้และบริการที่เหมาะสมกับงบประมาณและเป้าหมายของคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Tier 1: Starter */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-purple-300 transition">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md">ระดับเริ่มต้น</span>
                <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">eBook / Prompt Pack</h4>
                <p className="text-slate-500 text-xs font-light mb-4">คู่มือ Prompt & Template พร้อมใช้งาน</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">299 – 990 <span className="text-xs text-slate-500 font-normal">THB</span></div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block text-center text-xs font-medium text-purple-600 bg-white border border-purple-200 py-2.5 rounded-lg hover:bg-purple-50 transition">
                  สอบถามแค็ตตาล็อก
                </a>
              </div>

              {/* Tier 2: Workshop */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-purple-300 transition">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md">Workshop</span>
                <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">เรียนสด 2–3 ชั่วโมง</h4>
                <p className="text-slate-500 text-xs font-light mb-4">เจาะลึกและทำเสร็จ 1 โปรเจกต์</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">1,500 – 2,900 <span className="text-xs text-slate-500 font-normal">THB</span></div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block text-center text-xs font-medium text-purple-600 bg-white border border-purple-200 py-2.5 rounded-lg hover:bg-purple-50 transition">
                  ดูรอบ Workshop
                </a>
              </div>

              {/* Tier 3: Main Course */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-purple-300 transition">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md">คอร์สหลัก</span>
                <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">คอร์สเรียน + Community</h4>
                <p className="text-slate-500 text-xs font-light mb-4">วิดีโอ + Dashboard + Prompt + ชุมชนดูแล</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">2,900 – 4,900 <span className="text-xs text-slate-500 font-normal">THB</span></div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block text-center text-xs font-medium text-purple-600 bg-white border border-purple-200 py-2.5 rounded-lg hover:bg-purple-50 transition">
                  สมัครเรียนคอร์สหลัก
                </a>
              </div>

              {/* Tier 4: Private Learning */}
              <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-6 hover:border-purple-400 transition">
                <span className="text-xs font-bold text-white bg-purple-600 px-2.5 py-1 rounded-md">เรียนส่วนตัว (Private)</span>
                <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">1-on-1 Customized</h4>
                <p className="text-slate-500 text-xs font-light mb-4">ปรับเนื้อหาและโค้ชตามโปรเจกต์ผู้เรียน</p>
                <div className="text-2xl font-bold text-purple-700 mb-4">5,900 – 9,900 <span className="text-xs text-slate-500 font-normal">THB</span></div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block text-center text-xs font-medium text-white bg-purple-600 py-2.5 rounded-lg hover:bg-purple-700 transition shadow-sm">
                  จองคิวเรียนส่วนตัว
                </a>
              </div>

              {/* Tier 5: Consultation */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-pink-300 transition">
                <span className="text-xs font-bold text-pink-600 bg-pink-100 px-2.5 py-1 rounded-md">Consultation</span>
                <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">ที่ปรึกษาธุรกิจ & AI</h4>
                <p className="text-slate-500 text-xs font-light mb-4">วิเคราะห์และวางระบบให้ตรงจุด</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">เริ่ม 2,000 <span className="text-xs text-slate-500 font-normal">THB / ชม.</span></div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block text-center text-xs font-medium text-pink-600 bg-white border border-pink-200 py-2.5 rounded-lg hover:bg-pink-50 transition">
                  นัดหมายปรึกษา
                </a>
              </div>

              {/* Tier 6: Done-for-You */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-rose-300 transition">
                <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2.5 py-1 rounded-md">Done-for-You</span>
                <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">รับทำระบบพร้อมใช้</h4>
                <p className="text-slate-500 text-xs font-light mb-4">มดและทีมสร้างระบบให้แบบสร้างเสร็จพร้อมใช้</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">ประเมินตาม Scope</div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="block text-center text-xs font-medium text-rose-600 bg-white border border-rose-200 py-2.5 rounded-lg hover:bg-rose-50 transition">
                  เสนอโจทย์เพื่อประเมินราคา
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Consultation Section */}
      <section id="consult" className="py-24 px-4 scroll-mt-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4 border border-pink-200">
              SERVICE 2: CONSULTATION
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">AI & Business Automation Consultant</h2>
            <p className="text-slate-600 text-lg max-w-2xl font-light">
              ปลดล็อกศักยภาพทีมงานและธุรกิจของคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญ ลดงานซ้ำซ้อน เพิ่มเวลาโฟกัสสิ่งที่สำคัญ
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 hover:border-pink-300 transition duration-500 shadow-sm hover:shadow-lg">
            <div className="md:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">บริการนี้เหมาะกับใคร?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg text-pink-600 h-fit"><TrendingUp size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">เจ้าของธุรกิจ</h4>
                      <p className="text-slate-500 text-sm font-light">ที่ต้องการนำ AI มาลดต้นทุนและขั้นตอนการทำงาน</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg text-pink-600 h-fit"><Layout size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">ทีมงาน Operations</h4>
                      <p className="text-slate-500 text-sm font-light">ที่ต้องการวางระบบ Workflow อัตโนมัติ (Automation)</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg text-pink-600 h-fit"><Server size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">ผู้ที่ต้องการเลือก Tools</h4>
                      <p className="text-slate-500 text-sm font-light">ต้องการคำแนะนำการเลือก Tech Stack ที่เหมาะสมกับธุรกิจที่สุด</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">รายละเอียดค่าบริการ</h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-light">รูปแบบการปรึกษา</span>
                  <span className="text-slate-900 font-medium">Online Meeting (Zoom/Google Meet)</span>
                </div>
                 <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-light">การดูแลหลังปรึกษา</span>
                  <span className="text-green-600 font-medium">ดูแลต่อ 7 วัน</span>
                </div>
                 <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-light">ที่ปรึกษาระยะยาว</span>
                  <span className="text-slate-900 font-medium">ประจำโปรเจกต์ (สอบถามราคา)</span>
                </div>
                
                <div className="bg-white border border-pink-100 rounded-xl p-6 text-center mt-6 shadow-sm">
                  <p className="text-slate-500 text-sm mb-1 font-light">ราคาเริ่มต้นเพียง</p>
                  <div className="text-4xl font-bold text-pink-600 mb-4">2,000 THB <span className="text-lg text-slate-400 font-normal">/ชั่วโมง</span></div>
                  <a 
                    href={lineLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md shadow-pink-200"
                  >
                    จองคิวปรึกษา
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Web Development Services */}
      <section id="development" className="py-24 bg-white border-t border-slate-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4 border border-rose-200">
              SERVICE 3: DEVELOPMENT
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">รับทำเว็บไซต์และระบบ <span className="text-rose-500">พร้อมใช้ทันที</span></h2>
            <p className="text-slate-600 text-lg font-light">เหมาะสำหรับเจ้าของธุรกิจที่ต้องการความรวดเร็ว สวยงาม และรองรับการขยายตัว</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service A */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-rose-300 transition duration-300 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-rose-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-3xl -z-10 group-hover:bg-rose-200 transition"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Service A: Digital Product Store</h3>
                <p className="text-rose-500 font-medium">ระบบร้านค้าสินค้าดิจิตอล</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-slate-600 leading-relaxed font-light">
                  สร้างเว็บไซต์สำหรับขายสินค้า Digital (E-book, คอร์สเรียน, Template, Preset) เชื่อมต่อระบบชำระเงิน และระบบส่งสินค้าอัตโนมัติ
                </p>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-rose-500"/> ระบบหลังบ้านจัดการง่าย
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-rose-500"/> ดีไซน์ทันสมัย (Modern UI)
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-rose-500"/> รองรับการขยายตัว (Scalable)
                    </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                    <p className="text-sm text-slate-500 font-light">ราคาเริ่มต้น</p>
                    <p className="text-2xl font-bold text-slate-900">3,000 THB</p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition">
                    สนใจทำเว็บนี้
                </a>
              </div>
            </div>

            {/* Service B */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-400 transition duration-300 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-emerald-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -z-10 group-hover:bg-emerald-200 transition"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Service B: Custom Web Development</h3>
                <p className="text-emerald-500 font-medium">ระบบเว็บไซต์ตามสั่ง (Vibe Coding Style)</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-slate-600 leading-relaxed font-light">
                  รับทำเว็บไซต์ตามความต้องการเฉพาะทาง ไม่ว่าจะเป็นระบบจัดการหอพัก, ระบบดีลเลอร์รถยนต์, หรือ Landing Page สำหรับธุรกิจเฉพาะทาง
                </p>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-emerald-500"/> ออกแบบตามโจทย์ธุรกิจ
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-emerald-500"/> โค้ดคุณภาพสูง สะอาด
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-emerald-500"/> ปรึกษาฟีเจอร์ที่ทำได้จริง
                    </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                    <p className="text-sm text-slate-500 font-light">ราคาแพคเกจ</p>
                    <p className="text-2xl font-bold text-slate-900">3,000 THB <span className="text-sm font-normal text-slate-500">เริ่มต้น</span></p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition">
                    สอบถามรายละเอียด
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-purple-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">พร้อมที่จะ Scale ธุรกิจของคุณหรือยังคะ?</h2>
          <p className="text-slate-600 mb-10 text-lg font-light">
            ModGoScale คือ Partner ที่ครบวงจรที่สุดสำหรับคุณ <br/>
            ทักหาเราวันนี้ เพื่อเริ่มโปรเจกต์ของคุณทันทีค่ะ
          </p>
          <a 
            href={lineLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-lg shadow-purple-200"
          >
            <MessageCircle size={24} />
            แอดไลน์ปรึกษาฟรี: AI VibeCoding
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              ModGoScale
            </span>
            <p className="text-slate-500 mt-2 text-sm font-light">
              Helping businesses grow with AI & Modern Web Technology.
            </p>
          </div>
          <div className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} ModGoScale. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
