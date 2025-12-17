import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white transition-colors duration-200">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e6dbde] dark:border-white/10 px-6 lg:px-10 py-3 bg-white dark:bg-[#181113] sticky top-0 z-50">
        <div onClick={() => navigate('/')} className="flex items-center gap-4 text-[#181113] dark:text-white cursor-pointer">
          <div className="size-8 text-primary flex items-center justify-center">
            <Icon name="favorite" className="text-[32px]" />
          </div>
          <h2 className="text-[#181113] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            Your Vietnam Chapter
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <div className="hidden md:flex items-center gap-9">
            <button onClick={() => navigate('/faq')} className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal">
              FAQ
            </button>
            <button onClick={() => navigate('/profile')} className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal">
              Profiles
            </button>
            <button className="text-primary font-bold text-sm leading-normal">
              About Us
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => navigate('/create-profile')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Join Free</span>
            </button>
            <button onClick={() => navigate('/messages')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f0f1] dark:bg-white/10 hover:bg-[#e6dbde] dark:hover:bg-white/20 transition-colors text-[#181113] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center" 
             style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1531826267553-c4979aadb75e?auto=format&fit=crop&w=1920&q=80")` }}>
          <div className="text-center px-4 max-w-[900px]">
            <h1 className="text-white text-4xl md:text-6xl font-black mb-4 drop-shadow-lg uppercase tracking-tight">Your Vietnam Chapter</h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-[800px] mx-auto font-serif italic">
              越爱启程 – Happily Ever After Begins Here
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#181113]">
          <div className="max-w-[1000px] mx-auto text-center flex flex-col gap-6">
            <p className="text-xl md:text-2xl text-text-main dark:text-white leading-relaxed font-light">
              At <span className="font-bold text-primary">Your Vietnam Chapter</span>, we believe that love knows no borders — it simply needs a chance to begin.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              We are a premium matchmaking agency based in Singapore, dedicated to helping sincere, relationship-minded men connect with kind, caring, and beautiful Vietnamese women who are ready to start a new chapter in love and life.
            </p>
            <div className="h-1 w-20 bg-primary mx-auto my-4 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded by <strong className="text-text-main dark:text-white">Chris</strong> and <strong className="text-text-main dark:text-white">Alvin</strong>, two friends passionate about meaningful connection and cross-cultural understanding, Your Vietnam Chapter was created to bridge hearts — with honesty, care, and professionalism at its core.
            </p>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Unlike typical dating services, we don’t operate on chance or algorithms. We take the time to personally know each client, understand their values and relationship goals, and match them with someone truly compatible. Every introduction is thoughtfully curated by real matchmakers — not machines — and every profile is verified to ensure safety, consent, and genuine intent.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 px-4 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-sm border border-border-light dark:border-white/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
               <div className="w-16 h-16 bg-red-100 text-primary rounded-full flex items-center justify-center mb-6">
                 <Icon name="flag" className="text-4xl" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-text-main dark:text-white">Our Mission</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                 To create genuine, lasting cross-cultural relationships by introducing sincere Vietnamese women to respectful and committed men — guided by trust, privacy, and the promise of a beautiful new chapter.
               </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-sm border border-border-light dark:border-white/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
               <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                 <Icon name="visibility" className="text-4xl" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-text-main dark:text-white">Our Vision</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                 To be Asia’s most trusted and premium cross-border matchmaking agency, where every connection is meaningful, every client is respected, and every love story is treated like a lifelong journey.
               </p>
            </div>
          </div>
        </div>

        {/* Name Meaning */}
        <div className="py-20 px-4 bg-white dark:bg-[#181113] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-[1000px] mx-auto text-center relative z-10">
              <span className="text-6xl md:text-8xl font-black text-gray-100 dark:text-white/5 absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap select-none">越爱启程</span>
              <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6">Vietnamese love begins the journey.</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-8">"越爱启程"</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-[800px] mx-auto">
                It represents more than just geography — it reflects our belief that the journey to true love is one worth beginning with trust and sincerity. For our clients, this is not just matchmaking. It’s the start of your new chapter.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-[800px] mx-auto mt-4">
                We work with a handpicked network of women in Vietnam — women who are not just seeking a partner, but a shared life full of love, respect, and emotional connection. Many are professionals, university graduates, or entrepreneurs, fluent in culture and ready to embrace a meaningful future.
              </p>
           </div>
        </div>

        {/* Founders Section */}
        <div className="py-20 px-4 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto">
             <div className="text-center mb-16 max-w-[800px] mx-auto">
               <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6">About the Founders</h2>
               <p className="text-gray-600 dark:text-gray-400 text-lg">
                 At the heart of Your Vietnam Chapter are two founders who share not only a vision, but also a personal belief that everyone deserves a sincere and lasting relationship. With a combined 25+ years of experience in business, design, and people-centric industries, Alvin and Chris bring together professionalism, empathy, and heart into the matchmaking experience.
               </p>
             </div>

             <div className="flex flex-col gap-16">
               {/* Alvin */}
               <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80")' }}></div>
                    {/* Placeholder for Alvin: Man in Blue Suit */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                      <p className="text-white font-bold text-xl">Alvin</p>
                      <p className="text-white/80 text-sm">Co-Founder & Relationship Director</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 flex flex-col justify-center">
                     <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Alvin</h3>
                     <p className="text-primary font-bold uppercase tracking-wider text-sm mb-6">Co-Founder & Relationship Director</p>
                     <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                       With over 15 years of experience in sales, marketing, and client relations across the banking and real estate industries, Alvin has spent his career connecting with people from all walks of life. His ability to understand individual values and life goals is what makes him an exceptional relationship facilitator.
                     </p>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                       Alvin listens deeply, thinks practically, and matches thoughtfully — ensuring that each client gets more than just an introduction, but a life-changing opportunity. His calm, results-oriented approach ensures every couple is guided with sincerity and structure on their journey toward marriage.
                     </p>
                  </div>
               </div>

               {/* Chris */}
               <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                  <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1623184663110-89ca38959f63?auto=format&fit=crop&w=600&q=80")' }}></div>
                     {/* Placeholder for Chris: Wedding Couple */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                      <p className="text-white font-bold text-xl">Chris</p>
                      <p className="text-white/80 text-sm">Co-Founder & Creative Strategy Lead</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-left md:text-right">
                     <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Chris</h3>
                     <p className="text-primary font-bold uppercase tracking-wider text-sm mb-6">Co-Founder & Creative Strategy Lead</p>
                     <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                       A passionate Marketing Director and UX/UI Creative Designer with over 13 years of experience, Chris leads the brand, design, and customer experience strategy at Your Vietnam Chapter.
                     </p>
                     <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                       Having recently married his own lovely Vietnamese wife, Chris brings not just professional skills but also personal insights into what cross-cultural marriage truly means. His belief that “everyone deserves a lifelong companion” is at the core of the agency’s mission.
                     </p>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                       Chris ensures every element — from the onboarding form to the website, from client communication to visual identity — reflects trust, clarity, and warmth.
                     </p>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Commitment / Standards */}
        <div className="py-20 px-4 bg-white dark:bg-[#181113]">
          <div className="max-w-[1000px] mx-auto text-center">
             <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
             <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-6">Our Commitment to Excellence</h2>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
               At the same time, we hold our male clients to high standards. Our members are respectful, financially stable, emotionally mature, and seriously looking for commitment. We value quality over quantity — because every match is a reflection of our brand and values.
             </p>
             <p className="text-xl text-text-main dark:text-white font-medium mb-10 italic">
               "Whether you’re tired of dating apps, disheartened by shallow interactions, or simply ready to start a lifelong journey with the right person, we’re here to walk with you every step of the way."
             </p>
             <div className="bg-background-light dark:bg-surface-dark p-8 rounded-2xl inline-block shadow-lg border border-border-light dark:border-white/5">
                <p className="text-2xl font-black text-primary mb-2">Your love story deserves to be written beautifully.</p>
                <p className="text-lg text-text-main dark:text-white">Let it begin here — with Your Vietnam Chapter.</p>
             </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-[#110b0d] py-12 px-10 border-t border-[#e6dbde] dark:border-white/10">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#181113] dark:text-white mb-2">
                <div className="size-6 text-primary"><Icon name="favorite" /></div>
                <span className="font-bold text-lg">Your Vietnam Chapter</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connecting hearts across borders. The most trusted Vietnamese dating site for international relationships.</p>
              <p className="text-xs text-gray-400 mt-2">© 2025 Your Vietnam Chapter. All rights reserved.</p>
            </div>
            {/* Links columns */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#181113] dark:text-white">Company</h4>
              <button onClick={() => navigate('/about')} className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">About Us</button>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Success Stories</button>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Careers</button>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Blog</button>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#181113] dark:text-white">Support</h4>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Help Center</button>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Safety Tips</button>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</button>
              <button className="text-sm text-left text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</button>
            </div>
             <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#181113] dark:text-white">Follow Us</h4>
              <div className="flex gap-4">
                 <a href="#" className="text-gray-400 hover:text-primary"><Icon name="public" /></a>
                 <a href="#" className="text-gray-400 hover:text-primary"><Icon name="share" /></a>
                 <a href="#" className="text-gray-400 hover:text-primary"><Icon name="thumb_up" /></a>
              </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default AboutUs;