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
  Presentation,
  Sliders,
  Wrench,
  Award
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2723] selection:bg-orange-500 selection:text-white" style={{ fontFamily: '"Kanit", sans-serif' }}>
      
      {/* Import Google Font Kanit */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Kanit', sans-serif; background-color: #FAF7F2; }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EFE8DE] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo MGS Minimal */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gradient-to-br from-orange-600 to-amber-500 px-2.5 py-1 rounded-lg flex items-center justify-center shadow-md">
                <span className="font-bold text-white text-sm tracking-widest">MGS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                ModGoScale
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-[#5C534C] hover:text-orange-600 transition font-medium">เกี่ยวกับเรา</button>
              <button onClick={() => scrollToSection('speaker')} className="text-[#5C534C] hover:text-orange-600 transition font-medium">ผลงานวิทยากร</button>
              <button onClick={() => scrollToSection('course')} className="text-[#5C534C] hover:text-orange-600 transition font-medium">คอร์สเรียน</button>
              <button onClick={() => scrollToSection('consult')} className="text-[#5C534C] hover:text-orange-600 transition font-medium">ที่ปรึกษา</button>
              <button onClick={() => scrollToSection('development')} className="text-[#5C534C] hover:text-orange-600 transition font-medium">รับทำเว็บไซต์</button>
              <a 
                href={lineLink}
                target="_blank" 
                rel="noreferrer"
                className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white px-5 py-2.5 rounded-full font-medium transition shadow-md shadow-orange-200 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                LINE: AI VibeCoding
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-[#5C534C] hover:text-orange-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#EFE8DE]">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-3 text-[#5C534C] hover:bg-amber-100/50 hover:text-orange-700 rounded-md font-medium">เกี่ยวกับเรา</button>
              <button onClick={() => scrollToSection('speaker')} className="block w-full text-left px-3 py-3 text-[#5C534C] hover:bg-amber-100/50 hover:text-orange-700 rounded-md font-medium">ผลงานวิทยากร</button>
              <button onClick={() => scrollToSection('course')} className="block w-full text-left px-3 py-3 text-[#5C534C] hover:bg-amber-100/50 hover:text-orange-700 rounded-md font-medium">คอร์สเรียน</button>
              <button onClick={() => scrollToSection('consult')} className="block w-full text-left px-3 py-3 text-[#5C534C] hover:bg-amber-100/50 hover:text-orange-700 rounded-md font-medium">ที่ปรึกษา</button>
              <button onClick={() => scrollToSection('development')} className="block w-full text-left px-3 py-3 text-[#5C534C] hover:bg-amber-100/50 hover:text-orange-700 rounded-md font-medium">รับทำเว็บไซต์</button>
              <a 
                href={lineLink}
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center mt-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-3 py-3 rounded-md font-medium shadow-md"
              >
                ติดต่อ LINE: AI VibeCoding
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-[#FAF7F2]">
        {/* Background Blobs (Warm Amber/Cream Blobs) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-200/40 rounded-full blur-[110px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-orange-200/30 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-8">
            <Rocket size={16} className="text-orange-600" />
            <span className="text-sm text-[#5C534C] font-medium">Your Partner in Tech & Business Growth</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-[#2D2723]">
            ยกระดับธุรกิจคุณด้วย <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
              ระบบ AI ที่ขยายให้คุณโตได้ไวกว่าเดิม
            </span>
          </h1>
          
          <p className="text-xl text-[#5C534C] mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            <strong>ModGoScale</strong> ช่วยคุณลดขั้นตอนการทำงาน สร้างระบบอัตโนมัติ และพัฒนา Digital Product 
            ไม่ว่าคุณจะอยาก <span className="text-orange-600 font-medium">เรียนรู้เพื่อทำเอง</span>, 
            <span className="text-amber-700 font-medium"> ปรึกษาเชิงกลยุทธ์</span> หรือ 
            <span className="text-rose-600 font-medium"> ให้เราลงมือทำให้</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
             <button onClick={() => scrollToSection('course')} className="group p-6 bg-white border border-[#EFE8DE] hover:border-orange-400 rounded-2xl transition shadow-md hover:shadow-orange-100 text-left">
                <div className="bg-amber-100/70 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#2D2723] mb-1">Education</h3>
                <p className="text-sm text-[#5C534C]">สอนสร้าง Web & SaaS ด้วย AI แบบจับมือทำ</p>
             </button>
             
             <button onClick={() => scrollToSection('consult')} className="group p-6 bg-white border border-[#EFE8DE] hover:border-amber-400 rounded-2xl transition shadow-md hover:shadow-amber-100 text-left">
                <div className="bg-amber-100/70 w-12 h-12 rounded-xl flex items-center justify-center text-amber-700 mb-4 group-hover:scale-110 transition">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#2D2723] mb-1">Consultation</h3>
                <p className="text-sm text-[#5C534C]">ที่ปรึกษา AI & Business Automation</p>
             </button>

             <button onClick={() => scrollToSection('development')} className="group p-6 bg-white border border-[#EFE8DE] hover:border-rose-400 rounded-2xl transition shadow-md hover:shadow-rose-100 text-left">
                <div className="bg-rose-100/70 w-12 h-12 rounded-xl flex items-center justify-center text-rose-600 mb-4 group-hover:scale-110 transition">
                  <Monitor size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#2D2723] mb-1">Development</h3>
                <p className="text-sm text-[#5C534C]">บริการรับทำเว็บไซต์และระบบพร้อมใช้</p>
             </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#F5F0E8] scroll-mt-20 border-t border-b border-[#EFE8DE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            {/* Left Content: Text */}
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 text-sm font-medium mb-4">
                <User size={16} /> WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D2723] leading-snug">
                จากประสบการณ์ Solopreneur <br/> สู่ <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">ผู้ช่วยของคุณ</span>
              </h2>
              <p className="text-[#5C534C] mb-6 text-lg font-light leading-relaxed">
                สวัสดีค่ะ! <strong>ModGoScale</strong> คือแบรนด์ของช่อง <strong>Modty.ai</strong> เราคือ Solopreneur ที่เข้าใจหัวอกคนทำธุรกิจคนเดียวและอยากเห็นทุกคนสร้างธุรกิจได้ด้วยตัวเอง
              </p>
              <p className="text-[#5C534C] mb-6 font-light leading-relaxed">
                เป้าหมายของเราคือช่วยให้คุณ <strong>สร้างระบบและเว็บไซต์ด้วย AI Vibe Coding</strong> แบบไม่ต้องเขียนโค้ดเอง (No-Code) เน้นสอนให้เข้าใจ <strong>คอนเซปต์ (Concept)</strong> และ <strong>โครงสร้าง (Structure)</strong> เพื่อให้คุณนำไปต่อยอดได้จริงกับทุกธุรกิจ
              </p>
              <p className="text-[#5C534C] mb-8 font-light leading-relaxed">
                เราเน้นการเลือกใช้เครื่องมือที่ <strong>"ง่าย ประหยัด และคุ้มค่า"</strong> พร้อมให้คำปรึกษาเรื่อง AI รอบด้าน ไม่ว่าจะเป็นงานสร้างภาพ กราฟิก วิดีโอ หรือถ้าคุณไม่มีเวลา เราก็มีบริการรับทำให้นะคะ
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-amber-200 shadow-sm text-sm text-[#5C534C]">
                    <Palette size={16} className="text-orange-600"/> AI Image & Graphics
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-amber-200 shadow-sm text-sm text-[#5C534C]">
                    <Video size={16} className="text-amber-600"/> AI Video Generation
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-rose-200 shadow-sm text-sm text-[#5C534C]">
                    <Code size={16} className="text-rose-600"/> Custom AI Web Dev
                 </div>
              </div>
            </div>
            
            {/* Right Content: Profile Image & Features */}
            <div className="md:w-1/2 w-full flex flex-col items-center">
              {/* Profile Image Wrapper */}
              <div className="relative mb-8 group cursor-pointer">
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                
                {/* Image */}
                <img 
                  src="image.png" 
                  alt="Modty Profile" 
                  className="relative w-56 h-56 rounded-full object-cover border-4 border-white shadow-xl z-10"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-2 right-2 z-20 bg-white border border-amber-200 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <CheckCircle size={14} /> Modty.ai Founder
                </div>
              </div>

              {/* Features Box */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 blur-2xl opacity-30 rounded-3xl -z-10"></div>
                <div className="bg-white border border-[#EFE8DE] rounded-3xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-[#2D2723] mb-6 text-center">เพื่อนคู่คิดสำหรับธุรกิจของคุณ</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-orange-600 shrink-0">
                                <Users size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#2D2723]">Solopreneur Mindset</h4>
                                <p className="text-sm text-[#5C534C] mt-1">เข้าใจคนทำงานคนเดียว เข้าถึงง่าย คุยง่าย ไม่ยุ่งยากค่ะ</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                                <Zap size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#2D2723]">AI Mastery</h4>
                                <p className="text-sm text-[#5C534C] mt-1">เชี่ยวชาญเครื่องมือ AI หลากหลาย พร้อมแนะนำสิ่งที่เหมาะกับคุณที่สุด</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                                <Layout size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#2D2723]">Flexible Service</h4>
                                <p className="text-sm text-[#5C534C] mt-1">รับทำเว็บไซต์ที่ยืดหยุ่น ปรับแต่งได้ตามใจลูกค้า ใส่ใจเหมือนทำใช้เอง</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Speaker Section: Keynote Speaker & Corporate Trainer */}
      <section id="speaker" className="py-24 bg-[#FAF7F2] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 text-sm font-semibold mb-6">
            <Presentation size={16} /> KEYNOTE SPEAKER & CORPORATE TRAINER
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2D2723]">
            วิทยากรบรรยายเทคโนโลยี <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">และ AI ระดับประเทศ</span>
          </h2>
          <p className="text-[#5C534C] text-lg font-light mb-12 max-w-3xl">
            มดได้รับเกียรติเป็นวิทยากรบรรยายและจัด In-House Workshop ด้าน AI, Vibe Coding และ Digital Transformation ให้กับสถาบันและองค์กรชั้นนำ
          </p>

          {/* Event Card: Girl in ICT by DCT */}
          <div className="bg-white border border-[#EFE8DE] rounded-3xl p-8 md:p-10 mb-12 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-7/12 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full">
                    NATIONAL EVENT
                  </span>
                  <span className="bg-orange-100 text-orange-800 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full">
                    Girl in ICT by DCT
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D2723]">
                  สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย (DCT)
                </h3>
                <p className="text-[#5C534C] font-light text-base leading-relaxed">
                  วิทยากรบรรยายในโครงการ <strong>Girl in ICT</strong> จัดโดย <strong>สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย</strong> ส่งเสริมศักยภาพของผู้หญิงและคนรุ่นใหม่ในการประยุกต์ใช้ AI สร้างนวัตกรรมดิจิทัล
                </p>
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EFE8DE] space-y-2 text-sm text-[#2D2723]">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>หัวข้อการบรรยาย:</strong> "Girl in ICT: ไม่เคยเขียนโค้ด ก็สร้างเว็บและแชตบอทได้ — สร้างระบบได้ด้วย AI จากไอเดีย สู่เว็บและแชตบอทที่ใช้งานจริง"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>แนวคิด Vibe Coding:</strong> ทุกไอเดียเป็นจริงได้ด้วย AI โดยไม่ต้องมีพื้นฐานการเขียนโค้ดมาก่อน</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>เส้นทางเติบโต:</strong> จากการทำธุรกิจ สู่การเป็น AI Consultant ที่สร้างระบบอัตโนมัติให้ธุรกิจ</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-5/12 w-full">
                <img 
                  src="images/dct_speaking_vibe.jpg" 
                  alt="Modty Speaker Girl in ICT" 
                  className="rounded-2xl w-full h-[300px] object-cover shadow-md border border-[#EFE8DE]"
                />
              </div>
            </div>
          </div>

          {/* Event Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#EFE8DE] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="images/dct_speaking_consultant.jpg" alt="จาก Business สู่ AI Consultant" className="w-full h-52 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-[#2D2723] mb-1">จาก Business สู่ AI Consultant</h4>
                <p className="text-[#5C534C] text-xs font-light">บรรยายถ่ายทอดการประยุกต์ใช้ AI แก้โจทย์ธุรกิจจริง</p>
              </div>
            </div>

            <div className="bg-white border border-[#EFE8DE] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="images/dct_group.jpg" alt="ถ่ายภาพร่วมกับคณะผู้บริหาร DCT" className="w-full h-52 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-[#2D2723] mb-1">ถ่ายภาพร่วมกับผู้บริหาร DCT</h4>
                <p className="text-[#5C534C] text-xs font-light">ภาพบรรยากาศร่วมกับวิทยากรและผู้บริหารสภาดิจิทัลฯ</p>
              </div>
            </div>

            <div className="bg-white border border-[#EFE8DE] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-1">
              <img src="images/dct_gift.jpg" alt="รับมอบของที่ระลึกจากสภาดิจิทัลฯ" className="w-full h-52 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-[#2D2723] mb-1">รับมอบของที่ระลึกจาก DCT</h4>
                <p className="text-[#5C534C] text-xs font-light">รับมอบของที่ระลึกจากคณะกรรมการสภาดิจิทัลฯ</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. Education Section */}
      <section id="course" className="py-24 bg-white scroll-mt-16 border-t border-[#EFE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 text-sm font-semibold mb-6">
              SERVICE 1: EDUCATION
          </div>

          {/* Customize Notice Alert Box */}
          <div className="mb-12 bg-[#FAF5ED] border border-amber-300 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="bg-orange-600 text-white p-3 rounded-xl shrink-0">
              <Sliders size={22} />
            </div>
            <div>
              <p className="font-bold text-[#2D2723] text-base">
                ✨ ปรับ Customize ตามผู้เรียนและเป้าหมายต้องการได้ทุกคอร์ส!
              </p>
              <p className="text-[#5C534C] text-sm font-light">
                ทุกคอร์สและ Workshop สามารถปรับแต่งเนื้อหา โจทย์โปรเจกต์ และระยะเวลาให้เข้ากับความต้องการเฉพาะของผู้เรียนหรือองค์กรได้ (Private & In-House Training)
              </p>
            </div>
          </div>
          
          {/* Main Course Highlight */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D2723]">เปลี่ยนไอเดียให้เป็น Web จริง<br/>ด้วย <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Vibe Coding Master Route</span></h2>
              <p className="text-[#5C534C] mb-6 text-lg font-light">
                คอร์สเรียนที่จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันด้วย AI และ Google Ecosystem เต็มรูปแบบ โดยไม่ต้องเริ่มจากศูนย์
              </p>
              
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DE] mb-8 shadow-sm">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-[#2D2723]">
                  <Zap className="text-amber-500" size={20}/> ทำไมต้องคอร์สนี้?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[#5C534C]">
                    <CheckCircle size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <span className="font-light"><strong>ไม่ใช่แค่สร้างเว็บหน้าเดียว:</strong> สอนสร้าง Web App มีระบบสมาชิก (Login) และฐานข้อมูล (Database)</span>
                  </li>
                  <li className="flex gap-3 text-[#5C534C]">
                    <CheckCircle size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <span className="font-light"><strong>คิดแบบ SaaS:</strong> สอนระบบคิดการสร้าง "บริการ" เพื่อแก้ปัญหาผู้ใช้และสร้างรายได้ระยะยาว</span>
                  </li>
                  <li className="flex gap-3 text-[#5C534C]">
                    <CheckCircle size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <span className="font-light"><strong>ใช้ AI ทำงานเบื้องหลัง:</strong> ลดเวลา Coding เองด้วยการใช้ AI ช่วยเขียนโครงสร้าง</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Cards Column */}
            <div className="lg:w-1/2 w-full flex flex-col gap-6">
              
              {/* Active Pricing Card - Vibe Coding */}
              <div className="bg-white border border-orange-300 rounded-3xl p-8 relative shadow-xl shadow-orange-100/50">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
                  HOT SELLING
                </div>
                
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold text-[#2D2723] mb-2">แพ็กเกจเรียนส่วนตัวออนไลน์</h3>
                  <div className="flex justify-center items-end gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-[#2D2723]">5,900</span>
                    <span className="text-xl font-bold text-orange-600 mb-2">THB</span>
                  </div>
                  <p className="text-slate-400 text-sm line-through font-light">ราคาปกติ 9,900 บาท</p>
                  <p className="text-rose-600 text-sm font-medium mt-1">** สำหรับ 10 ท่านแรกเท่านั้น</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <BookOpen size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-[#5C534C] font-light">
                      <strong className="font-semibold text-[#2D2723]">เรียนครบทุกบท Vibe Coding:</strong> Workshop สร้าง AI Web App สำหรับ MVP
                    </div>
                  </div>
                   <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <Code size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-[#5C534C] font-light">
                      <strong className="font-semibold text-[#2D2723]">Full Stack Skills:</strong> สอน AI Coding, API, หลังบ้าน และคลาวด์พื้นฐาน
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <Users size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-[#5C534C] font-light">
                      <strong className="font-semibold text-[#2D2723]">ดูแลใกล้ชิด:</strong> เข้ากลุ่ม Vibe Coding with Modty ดูแล 60 วัน
                    </div>
                  </div>
                   <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <Database size={20} className="text-orange-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-[#5C534C] font-light">
                      <strong className="font-semibold text-[#2D2723]">Assets พร้อมใช้:</strong> ได้ prompt และโครงสร้างที่เอาไปใช้ต่อได้จริง
                    </div>
                  </div>
                </div>

                <a 
                  href={lineLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold py-4 rounded-xl transition duration-300 shadow-md"
                >
                  สมัครเรียนทันที
                </a>
              </div>

              {/* Coming Soon Card */}
              <div className="bg-[#FAF7F2] border border-[#EFE8DE] rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#EFE8DE] text-[#5C534C] text-xs font-bold px-3 py-1 rounded-bl-xl">
                  COMING SOON
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                   <div className="bg-white p-4 rounded-xl text-amber-500 border border-amber-200 shadow-sm shrink-0">
                      <Video size={28} />
                   </div>
                   <div className="text-center sm:text-left flex-grow">
                      <h4 className="font-bold text-[#2D2723] text-lg">เรียนด้วยตัวเองผ่านวิดีโอ (Self-Paced)</h4>
                      <p className="text-[#5C534C] text-sm mb-1">Vibe Coding Master Route</p>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-2xl font-bold text-slate-400">3,990 THB</span>
                        <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-medium border border-amber-200 flex items-center gap-1">
                            <Clock size={10} /> เร็วๆ นี้
                        </span>
                      </div>
                   </div>
                </div>
              </div>

            </div>
          </div>

          {/* Short Courses Section */}
          <div className="border-t border-[#EFE8DE] pt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#2D2723]">คอร์สระยะสั้น & Workshop <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">เฉพาะทาง</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Course 1: AI System Architect */}
              <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-orange-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Bot size={40} className="text-amber-300" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2 py-1 rounded mb-3">AI PRODUCTIVITY</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">AI System Architect</h4>
                  <p className="text-[#5C534C] font-light">สร้างผู้ช่วยส่วนตัว ลดงานซ้ำซาก</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE8DE]">
                      <p className="text-sm text-[#5C534C] font-light mb-2"><span className="text-orange-600 font-semibold">เหมาะสำหรับ:</span> คนที่ต้องสั่งงาน AI บ่อยๆ, สายกราฟิก หรือ Admin ที่อยากมีระบบทำงานอัตโนมัติ</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Prompt Engineering:</strong> สั่งงาน AI ให้แม่นยำ</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Custom Gems:</strong> สอนสร้าง AI ผู้ช่วยส่วนตัว</span>
                      </li>
                      <li className="flex gap-2">
                        <Sparkles size={16} className="text-amber-500 shrink-0"/>
                        <span><strong>Bonus:</strong> แถมสูตร Gen ภาพ 5 สไตล์</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 4,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">1,290 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Private 1 ชม.</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-medium py-3 rounded-lg transition">
                      จองเวลาเรียน
                   </a>
                </div>
              </div>

              {/* Course 2: ChatGPT Work + Codex */}
              <div className="bg-white border-2 border-orange-400 rounded-2xl p-8 hover:border-orange-500 transition duration-300 flex flex-col relative group shadow-md hover:shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Bot size={40} className="text-orange-400" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded mb-3">BEST MATCH FOR MODTY BRAND</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">ChatGPT Work + Codex</h4>
                  <p className="text-[#5C534C] font-light">สร้าง AI Operating System ส่วนตัว</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                      <p className="text-sm text-amber-900 font-light mb-2"><span className="text-orange-600 font-semibold">จุดเด่น:</span> เปลี่ยน ChatGPT จากเครื่องมือถามตอบ ให้เป็นผู้ช่วยทำงานและสร้างระบบส่วนตัว</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Projects & Apps:</strong> เชื่อม Gmail, Drive, Notion, GitHub</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Codex Tools:</strong> สร้างเว็บไซต์ เครื่องมือ และ Agent ทีม AI</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Sample Projects:</strong> AI Calendar, Morning Brief, Founder OS</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 6,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">2,900 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Private / Online</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-orange-600 text-white hover:bg-orange-700 font-medium py-3 rounded-lg transition shadow-sm">
                      สอบถามรายละเอียด
                   </a>
                </div>
              </div>

              {/* Course 3: AI Visual Content System */}
              <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-amber-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Palette size={40} className="text-amber-300" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2 py-1 rounded mb-3">VISUAL CONTENT</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">AI Visual Content System</h4>
                  <p className="text-[#5C534C] font-light">สร้างภาพ คารูเซล และโฆษณาเป็นระบบ</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE8DE]">
                      <p className="text-sm text-[#5C534C] font-light mb-2"><span className="text-amber-700 font-semibold">เหมาะสำหรับ:</span> Creator, Marketer, เจ้าของแบรนด์, Agency, ร้านค้าออนไลน์</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-amber-600 shrink-0"/>
                        <span><strong>Design System:</strong> ล็อกใบหน้า สินค้า สี ฟอนต์ และสไตล์</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-amber-600 shrink-0"/>
                        <span><strong>Carousel Theme:</strong> สร้าง Carousel ให้ทุกหน้าเป็นธีมเดียวกัน</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-amber-600 shrink-0"/>
                        <span><strong>AI Tool Build:</strong> สร้าง AI Carousel Tool จัดรูปข้อความ auto</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 5,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">2,500 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Workshop</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium py-3 rounded-lg transition">
                      จองคิวเรียน
                   </a>
                </div>
              </div>

              {/* Course 4: AI Video & Content Workshop */}
              <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-amber-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Clapperboard size={40} className="text-amber-300" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2 py-1 rounded mb-3">CONTENT CREATOR</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">AI Video & Motion Workshop</h4>
                  <p className="text-[#5C534C] font-light">สร้างวิดีโอ AI & Motion จากโค้ด</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE8DE]">
                      <p className="text-sm text-[#5C534C] font-light mb-2"><span className="text-amber-700 font-semibold">เหมาะสำหรับ:</span> Creator, Video Editor, แบรนด์ และทีม Social Media</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-amber-600 shrink-0"/>
                        <span><strong>Talking Avatar & Voice:</strong> สร้าง AI Talking Person & Voice</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-amber-600 shrink-0"/>
                        <span><strong>HTML Motion Video:</strong> สร้าง Motion Video จาก HTML</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-amber-600 shrink-0"/>
                        <span><strong>AI Video Editor:</strong> สร้างระบบ AI Video Editor ส่วนตัว</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 8,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">4,900 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Private / Online</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium py-3 rounded-lg transition">
                      สอบถามรายละเอียด
                   </a>
                </div>
              </div>

              {/* Course 5: AI Automation + AI Agent */}
              <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-emerald-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Zap size={40} className="text-emerald-300" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded mb-3">FOR BUSINESS AUTOMATION</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">AI Automation & Agent</h4>
                  <p className="text-[#5C534C] font-light">สร้างระบบอัตโนมัติ n8n & AI Agent</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE8DE]">
                      <p className="text-sm text-[#5C534C] font-light mb-2"><span className="text-emerald-700 font-semibold">สอนร่วมกับ:</span> Partner AI Engineer เพิ่มความน่าเชื่อถือทางด้าน Technical</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-emerald-600 shrink-0"/>
                        <span><strong>n8n Workflows:</strong> เชื่อม Forms, Gmail, Sheets, LINE OA</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-emerald-600 shrink-0"/>
                        <span><strong>AI Agent Tools:</strong> ตอบลูกค้า สรุปอีเมล CRM Follow-up</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-emerald-600 shrink-0"/>
                        <span><strong>Notion Templates:</strong> แจก Template Workflows พร้อมใช้</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 8,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">4,900 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Private / Online</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-3 rounded-lg transition">
                      จองเวลาเรียน
                   </a>
                </div>
              </div>

              {/* Course 6: Build Your Own AI Content Tool */}
              <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-amber-400 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Wrench size={40} className="text-amber-400" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2 py-1 rounded mb-3">PROJECT-BASED</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">สร้าง AI Content Tool ส่วนตัว</h4>
                  <p className="text-[#5C534C] font-light">เรียนจบได้เครื่องมือกลับไปใช้งานจริง</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE8DE]">
                      <p className="text-sm text-[#5C534C] font-light mb-2"><span className="text-orange-600 font-semibold">จุดเด่น:</span> เลือกสร้าง Tool ของตัวเอง เช่น Carousel, UGC Generator, Script Generator</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Prompt System:</strong> ออกแบบระบบ Prompt & UX ก่อนสร้าง</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Drive Auto-save:</strong> บันทึกผลลัพธ์เข้า Google Drive อัตโนมัติ</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-orange-600 shrink-0"/>
                        <span><strong>Digital Product:</strong> แพ็กเป็นบริการ หรือขายเป็น Digital Product</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 6,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">3,500 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Workshop</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium py-3 rounded-lg transition">
                      สนใจทำโปรเจกต์
                   </a>
                </div>
              </div>

              {/* Course 7: Google Automation & Simple Web */}
              <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-emerald-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-md sm:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 p-4 opacity-40 group-hover:opacity-100 transition">
                   <Sheet size={40} className="text-emerald-300" />
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded mb-3">POPULAR FOR WORK</div>
                  <h4 className="text-2xl font-bold text-[#2D2723] mb-2">Google Automation</h4>
                  <p className="text-[#5C534C] font-light">สร้างเว็บง่ายๆ ด้วย Gemini + Apps Script</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE8DE]">
                      <p className="text-sm text-[#5C534C] font-light mb-2"><span className="text-emerald-700 font-semibold">เหมาะสำหรับ:</span> HR, บัญชี, จัดซื้อ, SME ที่ใช้ Google Sheet เป็นหลัก</p>
                   </div>
                   <ul className="space-y-2 text-sm text-[#5C534C] font-light">
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-emerald-600 shrink-0"/>
                        <span><strong>Gemini Coding:</strong> ให้ AI ช่วยเขียน Code</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-emerald-600 shrink-0"/>
                        <span><strong>Automation:</strong> แจ้งเตือน LINE, ส่งเมล Auto</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-emerald-600 shrink-0"/>
                        <span><strong>Simple Web App:</strong> สร้างเว็บใช้ฟรี ไม่ต้องเช่า Host</span>
                      </li>
                   </ul>
                </div>

                <div className="border-t border-[#EFE8DE] pt-6">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-slate-400 line-through">ราคาปกติ 8,900 บาท</p>
                        <p className="text-2xl font-bold text-[#2D2723]">4,900 THB</p>
                      </div>
                      <span className="text-xs text-[#5C534C] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EFE8DE]">Private / Online</span>
                   </div>
                   <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-3 rounded-lg transition">
                      จองเวลาเรียน
                   </a>
                </div>
              </div>

            </div>

            {/* Mini Courses Overview */}
            <div className="bg-[#FAF7F2] border border-[#EFE8DE] p-8 rounded-3xl mb-16">
              <h4 className="font-bold text-xl text-[#2D2723] mb-2 text-center">คอร์สเสริม & Mini Workshops เฉพาะทาง</h4>
              <p className="text-[#5C534C] text-sm font-light text-center mb-8">เปิดรับในรูปแบบ Mini Course, Special Workshop หรือ In-House Bonus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Google Sheets Dashboard', desc: 'ทำ Dashboard ด้วย AI & Apps Script' },
                  { title: 'Claude Skills สำหรับธุรกิจ', desc: 'สร้างและใช้ Claude Skills ปลดล็อกงาน' },
                  { title: 'Prompt Eng + Gemini Gems', desc: 'สร้าง AI ผู้ช่วยประจำตำแหน่ง' },
                  { title: 'Reverse Engineer Systems', desc: 'แกะโค้ด เว็บไซต์ และ Workflow' },
                  { title: 'Digital Product & Sales Auto', desc: 'สร้างระบบขายและส่งสินค้าอัตโนมัติ' },
                  { title: 'AI Tools 10 ตัวเริ่มต้น', desc: 'ปูพื้นฐาน AI ทำงานเร็วขึ้น 10x' },
                  { title: 'Build with Gemini Canvas', desc: 'ตั้งแต่ปั้นไอเดียจน Deploy เว็บจริง' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#EFE8DE] shadow-sm">
                    <span className="text-orange-600 font-bold text-xs">MINI WORKSHOP #{idx+1}</span>
                    <h5 className="font-bold text-[#2D2723] text-sm mt-1">{item.title}</h5>
                    <p className="text-[#5C534C] text-xs font-light mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service & Pricing Tiers Grid */}
            <div className="bg-white border border-[#EFE8DE] rounded-3xl p-8 shadow-sm">
              <h4 className="font-bold text-2xl text-[#2D2723] mb-2 text-center">โครงสร้างบริการและราคาแนะนำ (Service Tiers)</h4>
              <p className="text-[#5C534C] text-sm font-light text-center mb-8">เลือกรูปแบบที่เหมาะกับงบประมาณและเป้าหมายของคุณ</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DE]">
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md">ระดับเริ่มต้น</span>
                  <h5 className="font-bold text-[#2D2723] text-lg mt-3">eBook / Prompt Pack</h5>
                  <p className="text-[#5C534C] text-xs font-light mb-3">Template และชุดคำสั่งสำเร็จรูป</p>
                  <p className="text-2xl font-bold text-orange-600">299 – 990 THB</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DE]">
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md">Workshop</span>
                  <h5 className="font-bold text-[#2D2723] text-lg mt-3">เรียนสด 2–3 ชั่วโมง</h5>
                  <p className="text-[#5C534C] text-xs font-light mb-3">ทำเสร็จ 1 โปรเจกต์ใช้งานจริง</p>
                  <p className="text-2xl font-bold text-orange-600">1,500 – 2,900 THB</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DE]">
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md">คอร์สหลัก</span>
                  <h5 className="font-bold text-[#2D2723] text-lg mt-3">คอร์สเรียน + Community</h5>
                  <p className="text-[#5C534C] text-xs font-light mb-3">วิดีโอ + Dashboard + Prompt + ชุมชนดูแล</p>
                  <p className="text-2xl font-bold text-orange-600">2,900 – 4,900 THB</p>
                </div>

                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                  <span className="text-xs font-bold text-white bg-orange-600 px-2.5 py-1 rounded-md">เรียนส่วนตัว</span>
                  <h5 className="font-bold text-[#2D2723] text-lg mt-3">Customized Private</h5>
                  <p className="text-[#5C534C] text-xs font-light mb-3">ปรับเนื้อหาและโค้ชตามโปรเจกต์ผู้เรียน</p>
                  <p className="text-2xl font-bold text-orange-700">5,900 – 9,900 THB</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DE]">
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md">Consultation</span>
                  <h5 className="font-bold text-[#2D2723] text-lg mt-3">ที่ปรึกษาธุรกิจ & AI</h5>
                  <p className="text-[#5C534C] text-xs font-light mb-3">วิเคราะห์และวางระบบตรงจุด</p>
                  <p className="text-2xl font-bold text-amber-700">เริ่ม 2,000 THB/ชม.</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DE]">
                  <span className="text-xs font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-md">Done-for-You</span>
                  <h5 className="font-bold text-[#2D2723] text-lg mt-3">รับทำระบบพร้อมใช้</h5>
                  <p className="text-[#5C534C] text-xs font-light mb-3">มดและทีมสร้างระบบให้พร้อมใช้</p>
                  <p className="text-2xl font-bold text-rose-600">ประเมินตาม Scope</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Consultation Section */}
      <section id="consult" className="py-24 px-4 scroll-mt-16 bg-[#F5F0E8] relative border-t border-[#EFE8DE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-sm font-semibold mb-4 border border-amber-200">
              SERVICE 2: CONSULTATION
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D2723]">AI & Business Automation Consultant</h2>
            <p className="text-[#5C534C] text-lg max-w-2xl font-light">
              ปลดล็อกศักยภาพทีมงานและธุรกิจของคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญ ลดงานซ้ำซ้อน เพิ่มเวลาโฟกัสสิ่งที่สำคัญ
            </p>
          </div>

          <div className="bg-white border border-[#EFE8DE] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 hover:border-amber-300 transition duration-500 shadow-sm hover:shadow-lg">
            <div className="md:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2D2723] mb-4">บริการนี้เหมาะกับใคร?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-800 h-fit"><TrendingUp size={20}/></div>
                    <div>
                      <h4 className="font-bold text-[#2D2723]">เจ้าของธุรกิจ</h4>
                      <p className="text-[#5C534C] text-sm font-light">ที่ต้องการนำ AI มาลดต้นทุนและขั้นตอนการทำงาน</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-800 h-fit"><Layout size={20}/></div>
                    <div>
                      <h4 className="font-bold text-[#2D2723]">ทีมงาน Operations</h4>
                      <p className="text-[#5C534C] text-sm font-light">ที่ต้องการวางระบบ Workflow อัตโนมัติ (Automation)</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-800 h-fit"><Server size={20}/></div>
                    <div>
                      <h4 className="font-bold text-[#2D2723]">ผู้ที่ต้องการเลือก Tools</h4>
                      <p className="text-[#5C534C] text-sm font-light">ต้องการคำแนะนำการเลือก Tech Stack ที่เหมาะสมกับธุรกิจที่สุด</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 bg-[#FAF7F2] rounded-2xl p-8 border border-[#EFE8DE] flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#2D2723] mb-6 text-center">รายละเอียดค่าบริการ</h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#EFE8DE] pb-4">
                  <span className="text-[#5C534C] font-light">รูปแบบการปรึกษา</span>
                  <span className="text-[#2D2723] font-medium">Online Meeting (Zoom/Google Meet)</span>
                </div>
                 <div className="flex justify-between items-center border-b border-[#EFE8DE] pb-4">
                  <span className="text-[#5C534C] font-light">การดูแลหลังปรึกษา</span>
                  <span className="text-emerald-700 font-medium">ดูแลต่อ 7 วัน</span>
                </div>
                 <div className="flex justify-between items-center border-b border-[#EFE8DE] pb-4">
                  <span className="text-[#5C534C] font-light">ที่ปรึกษาระยะยาว</span>
                  <span className="text-[#2D2723] font-medium">ประจำโปรเจกต์ (สอบถามราคา)</span>
                </div>
                
                <div className="bg-white border border-amber-200 rounded-xl p-6 text-center mt-6 shadow-sm">
                  <p className="text-[#5C534C] text-sm mb-1 font-light">ราคาเริ่มต้นเพียง</p>
                  <div className="text-4xl font-bold text-orange-600 mb-4">2,000 THB <span className="text-lg text-slate-400 font-normal">/ชั่วโมง</span></div>
                  <a 
                    href={lineLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
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
      <section id="development" className="py-24 bg-white border-t border-[#EFE8DE] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-sm font-semibold mb-4 border border-rose-200">
              SERVICE 3: DEVELOPMENT
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2D2723]">รับทำเว็บไซต์และระบบ <span className="text-rose-600">พร้อมใช้ทันที</span></h2>
            <p className="text-[#5C534C] text-lg font-light">เหมาะสำหรับเจ้าของธุรกิจที่ต้องการความรวดเร็ว สวยงาม และรองรับการขยายตัว</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service A */}
            <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-rose-300 transition duration-300 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/50 rounded-full blur-3xl -z-10 group-hover:bg-rose-100 transition"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2D2723] mb-2">Service A: Digital Product Store</h3>
                <p className="text-rose-600 font-medium">ระบบร้านค้าสินค้าดิจิตอล</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-[#5C534C] leading-relaxed font-light">
                  สร้างเว็บไซต์สำหรับขายสินค้า Digital (E-book, คอร์สเรียน, Template, Preset) เชื่อมต่อระบบชำระเงิน และระบบส่งสินค้าอัตโนมัติ
                </p>
                <div className="bg-[#FAF7F2] p-4 rounded-xl space-y-2 border border-[#EFE8DE]">
                    <div className="flex items-center gap-2 text-sm text-[#5C534C] font-light">
                        <CheckCircle size={16} className="text-rose-600"/> ระบบหลังบ้านจัดการง่าย
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C534C] font-light">
                        <CheckCircle size={16} className="text-rose-600"/> ดีไซน์ทันสมัย (Modern UI)
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C534C] font-light">
                        <CheckCircle size={16} className="text-rose-600"/> รองรับการขยายตัว (Scalable)
                    </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#EFE8DE] pt-6">
                <div>
                    <p className="text-sm text-slate-500 font-light">ราคาเริ่มต้น</p>
                    <p className="text-2xl font-bold text-[#2D2723]">3,000 THB</p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white transition">
                    สนใจทำเว็บนี้
                </a>
              </div>
            </div>

            {/* Service B */}
            <div className="bg-white border border-[#EFE8DE] rounded-2xl p-8 hover:border-emerald-400 transition duration-300 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl -z-10 group-hover:bg-emerald-100 transition"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2D2723] mb-2">Service B: Custom Web Development</h3>
                <p className="text-emerald-700 font-medium">ระบบเว็บไซต์ตามสั่ง (Vibe Coding Style)</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-[#5C534C] leading-relaxed font-light">
                  รับทำเว็บไซต์ตามความต้องการเฉพาะทาง ไม่ว่าจะเป็นระบบจัดการหอพัก, ระบบดีลเลอร์รถยนต์, หรือ Landing Page สำหรับธุรกิจเฉพาะทาง
                </p>
                <div className="bg-[#FAF7F2] p-4 rounded-xl space-y-2 border border-[#EFE8DE]">
                    <div className="flex items-center gap-2 text-sm text-[#5C534C] font-light">
                        <CheckCircle size={16} className="text-emerald-600"/> ออกแบบตามโจทย์ธุรกิจ
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C534C] font-light">
                        <CheckCircle size={16} className="text-emerald-600"/> โค้ดคุณภาพสูง สะอาด
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5C534C] font-light">
                        <CheckCircle size={16} className="text-emerald-600"/> ปรึกษาฟีเจอร์ที่ทำได้จริง
                    </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#EFE8DE] pt-6">
                <div>
                    <p className="text-sm text-slate-500 font-light">ราคาแพคเกจ</p>
                    <p className="text-2xl font-bold text-[#2D2723]">3,000 THB <span className="text-sm font-normal text-slate-500">เริ่มต้น</span></p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition">
                    สอบถามรายละเอียด
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] border-t border-[#EFE8DE]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D2723]">พร้อมที่จะ Scale ธุรกิจของคุณหรือยังคะ?</h2>
          <p className="text-[#5C534C] mb-10 text-lg font-light">
            ModGoScale คือ Partner ที่ครบวงจรที่สุดสำหรับคุณ <br/>
            ทักหาเราวันนี้ เพื่อเริ่มโปรเจกต์ของคุณทันทีค่ะ
          </p>
          <a 
            href={lineLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-lg shadow-orange-200"
          >
            <MessageCircle size={24} />
            แอดไลน์ปรึกษาฟรี: AI VibeCoding
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF7F2] border-t border-[#EFE8DE] py-10">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              ModGoScale
            </span>
            <p className="text-[#5C534C] mt-2 text-sm font-light">
              Helping businesses grow with AI & Modern Web Technology.
            </p>
          </div>
          <div className="text-[#5C534C] text-sm font-light">
            © {new Date().getFullYear()} ModGoScale. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
