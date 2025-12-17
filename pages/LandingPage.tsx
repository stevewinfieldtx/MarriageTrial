import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e6dbde] dark:border-white/10 px-6 lg:px-10 py-3 bg-white dark:bg-[#181113] sticky top-0 z-50">
        <div className="flex items-center gap-4 text-[#181113] dark:text-white">
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
            <button onClick={() => navigate('/about')} className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal">
              About Us
            </button>
            <button className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal">
              Pricing
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
        <div className="@container w-full">
          <div 
            className="relative flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 pb-10 pt-20"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1558190760-b6c8053677d3?auto=format&fit=crop&w=1920&q=80")`
            }}
          >
            <div className="flex flex-col gap-6 text-center max-w-[800px] mx-auto z-10">
              <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                Find Your Soulmate in Vietnam Today
              </h1>
              <h2 className="text-white/90 text-lg md:text-xl font-normal leading-normal max-w-[600px] mx-auto drop-shadow-sm">
                Genuine connections, verified profiles, and happy endings. Start your journey to love with trusted matchmaking.
              </h2>
            </div>
            
            <div className="mt-8 w-full max-w-[480px] bg-white dark:bg-[#181113] rounded-xl p-6 shadow-2xl z-20 border border-gray-100 dark:border-white/10">
              <h3 className="text-xl font-bold mb-4 text-center text-text-main dark:text-white">Create Your Free Profile</h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer border rounded-lg p-3 flex-1 justify-center hover:bg-gray-50 dark:hover:bg-white/5 border-gray-200 dark:border-white/20 has-[:checked]:border-primary has-[:checked]:text-primary dark:has-[:checked]:border-primary transition-all text-text-main dark:text-white">
                    <input type="radio" name="gender" className="text-primary focus:ring-primary" defaultChecked />
                    <span className="font-medium">I'm a Man</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer border rounded-lg p-3 flex-1 justify-center hover:bg-gray-50 dark:hover:bg-white/5 border-gray-200 dark:border-white/20 has-[:checked]:border-primary has-[:checked]:text-primary dark:has-[:checked]:border-primary transition-all text-text-main dark:text-white">
                    <input type="radio" name="gender" className="text-primary focus:ring-primary" />
                    <span className="font-medium">I'm a Woman</span>
                  </label>
                </div>
                <input type="text" placeholder="Your Name" className="w-full h-12 px-4 rounded-lg border border-gray-200 dark:border-white/20 bg-transparent focus:border-primary focus:ring-primary text-base text-text-main dark:text-white placeholder:text-gray-400" />
                <input type="email" placeholder="Email Address" className="w-full h-12 px-4 rounded-lg border border-gray-200 dark:border-white/20 bg-transparent focus:border-primary focus:ring-primary text-base text-text-main dark:text-white placeholder:text-gray-400" />
                <button onClick={() => navigate('/create-profile')} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                  Start Free Search
                  <Icon name="arrow_forward" className="text-sm" />
                </button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">By continuing, you agree to our Terms of Service.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="w-full bg-white dark:bg-[#181113] border-b border-[#e6dbde] dark:border-white/10 py-6">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-wrap justify-center gap-8 md:gap-16 text-center text-text-main dark:text-white">
            <div className="flex items-center gap-3 opacity-80">
              <Icon name="verified_user" className="text-primary text-3xl" />
              <div className="text-left">
                <p className="font-bold text-sm leading-tight">100% Verified</p>
                <p className="text-xs text-gray-500">Real Profiles</p>
              </div>
            </div>
            <div className="flex items-center gap-3 opacity-80">
              <Icon name="lock" className="text-primary text-3xl" />
              <div className="text-left">
                <p className="font-bold text-sm leading-tight">Secure & Safe</p>
                <p className="text-xs text-gray-500">Private Data</p>
              </div>
            </div>
            <div className="flex items-center gap-3 opacity-80">
              <Icon name="support_agent" className="text-primary text-3xl" />
              <div className="text-left">
                <p className="font-bold text-sm leading-tight">24/7 Support</p>
                <p className="text-xs text-gray-500">Always here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 px-4 md:px-40 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 mb-12 text-center items-center">
              <h2 className="text-[#181113] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                Why Choose Your Vietnam Chapter?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal max-w-[600px]">
                We prioritize your safety and success in finding true love with specialized tools designed for international dating.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { icon: 'shield_person', title: 'Verified Profiles', desc: 'Every profile is manually checked and verified with real ID to ensure genuine people.' },
                 { icon: 'translate', title: 'Translation Support', desc: 'Break language barriers instantly with our built-in high-quality translation tools.' },
                 { icon: 'videocam', title: 'Secure Video Chat', desc: 'See your match in real-time with high-definition, secure and private video calls.' },
                 { icon: 'favorite', title: 'Smart Matching', desc: 'Our algorithm connects you based on personality, values, and relationship goals.' }
               ].map((feature, idx) => (
                 <div key={idx} className="flex flex-1 gap-4 rounded-xl border border-[#e6dbde] dark:border-white/10 bg-white dark:bg-[#181113] p-6 flex-col hover:shadow-lg transition-shadow">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <Icon name={feature.icon} className="text-3xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#181113] dark:text-white text-lg font-bold leading-tight">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{feature.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* New Members */}
        <div className="py-16 px-4 md:px-40 bg-white dark:bg-[#181113]">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-[#181113] dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                New Members Just Joined
              </h2>
              <button onClick={() => navigate('/profile')} className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                View All <Icon name="arrow_forward" className="text-sm" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
               {[
                 { name: 'Linh', age: 24, location: 'Ho Chi Minh City', img: 'https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=500&q=80', online: true },
                 { name: 'Mai', age: 28, location: 'Hanoi', img: 'https://images.unsplash.com/photo-1583336137687-f82ce6a84d46?auto=format&fit=crop&w=500&q=80', online: false },
                 { name: 'Thu', age: 26, location: 'Da Nang', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80', online: true },
                 { name: 'Lan', age: 22, location: 'Can Tho', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80', online: false }
               ].map((profile, idx) => (
                 <div key={idx} onClick={() => navigate('/profile')} className="group relative flex flex-col gap-4 rounded-xl cursor-pointer">
                    <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden relative shadow-sm hover:shadow-md transition-all">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${profile.img}")` }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      {profile.online && (
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-xs font-medium">Online</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#181113] dark:text-white text-lg font-bold leading-normal">{profile.name}, {profile.age}</p>
                        <Icon name="verified" className="text-blue-500 text-lg" />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal flex items-center gap-1">
                        <Icon name="location_on" className="text-sm" /> {profile.location}
                      </p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 px-4 md:px-40 bg-gray-50 dark:bg-[#1f1618]">
          <div className="max-w-[1000px] mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-[#181113] dark:text-white text-3xl md:text-4xl font-black leading-tight mb-4">Real Stories, Real Love</h2>
               <p className="text-gray-600 dark:text-gray-300">Join thousands of happy couples who found their soulmate on Your Vietnam Chapter.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-[#181113] rounded-2xl p-6 shadow-sm border border-[#e6dbde] dark:border-white/10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-cover bg-center border-4 border-white shadow-md" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541819632836-8b6b0c36b85d?auto=format&fit=crop&w=300&q=80")' }}></div>
                  <div className="flex-1 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400 mb-2">
                       {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="text-sm" filled />)}
                     </div>
                     <p className="text-[#181113] dark:text-white italic text-lg mb-4">"I never thought I'd find someone so perfect for me halfway across the world. Huong is my best friend and the love of my life."</p>
                     <p className="font-bold text-primary text-sm">John & Huong</p>
                     <p className="text-xs text-gray-500">Married in 2023</p>
                  </div>
               </div>
               <div className="bg-white dark:bg-[#181113] rounded-2xl p-6 shadow-sm border border-[#e6dbde] dark:border-white/10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-cover bg-center border-4 border-white shadow-md" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&w=300&q=80")' }}></div>
                  <div className="flex-1 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400 mb-2">
                       {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="text-sm" filled />)}
                     </div>
                     <p className="text-[#181113] dark:text-white italic text-lg mb-4">"The translation tools made our early conversations so easy. We met in Da Nang three months later and just knew it was meant to be."</p>
                     <p className="font-bold text-primary text-sm">David & Trang</p>
                     <p className="text-xs text-gray-500">Engaged in 2024</p>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-4 flex justify-center bg-white dark:bg-[#181113]">
           <div className="bg-gradient-to-r from-primary to-[#ff5c8d] rounded-2xl p-8 md:p-12 max-w-[960px] w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 flex flex-col items-center gap-6">
                 <h2 className="text-white text-3xl md:text-4xl font-black">Ready to Find Your Happiness?</h2>
                 <p className="text-white text-lg max-w-[600px]">Join thousands of singles who have found meaningful connections. It takes less than 2 minutes to get started.</p>
                 <button onClick={() => navigate('/create-profile')} className="bg-white text-primary text-lg font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                   Create Free Account
                 </button>
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
         <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-gray-400">
            © 2024 Your Vietnam Chapter. All rights reserved.
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;