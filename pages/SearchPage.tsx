import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0f1] dark:border-b-[#3a2a2e] bg-white dark:bg-surface-dark px-4 lg:px-10 py-3 shadow-sm">
        <div onClick={() => navigate('/')} className="flex items-center gap-4 text-primary cursor-pointer">
          <div className="size-8 flex items-center justify-center">
            <Icon name="favorite" className="text-3xl" />
          </div>
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">Your Vietnam Chapter</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <button onClick={() => navigate('/')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Home</button>
            <button onClick={() => navigate('/search')} className="text-primary text-sm font-bold leading-normal">Search</button>
            <button onClick={() => navigate('/messages')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Messages</button>
            <button onClick={() => navigate('/profile')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">My Profile</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-background-light dark:bg-white/10 text-text-main dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
              <Icon name="notifications" />
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80')" }}></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 w-full relative">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden p-4 w-full bg-white dark:bg-surface-dark border-b border-border-light dark:border-white/10 sticky top-[64px] z-40">
           <button onClick={() => setShowFilters(!showFilters)} className="w-full flex items-center justify-center gap-2 bg-background-light dark:bg-white/5 py-3 rounded-lg font-bold text-sm">
             <Icon name="tune" /> {showFilters ? 'Hide Filters' : 'Show Filters'}
           </button>
        </div>

        {/* Sidebar Filters */}
        <aside className={`${showFilters ? 'block fixed inset-0 z-50 pt-[70px] lg:pt-0 bg-white dark:bg-background-dark overflow-y-auto' : 'hidden'} lg:block w-full lg:w-[320px] lg:shrink-0 lg:sticky lg:top-[65px] lg:h-[calc(100vh-65px)] overflow-y-auto border-r border-border-light dark:border-white/10 p-6 bg-white dark:bg-background-dark shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}>
          <div className="flex flex-col gap-6 pb-20 lg:pb-0">
             <div className="flex items-center justify-between lg:hidden mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-2"><Icon name="close" /></button>
             </div>

             <div className="flex items-center justify-between">
               <h2 className="text-lg font-bold">Filters</h2>
               <button className="text-xs text-primary font-bold hover:underline">Reset All</button>
             </div>

             {/* Basic Info */}
             <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">Basic Info</h3>
                <div>
                   <label className="text-sm font-medium block mb-2">Age Range</label>
                   <div className="flex gap-2 items-center">
                      <input type="number" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="18" />
                      <span className="text-text-muted">-</span>
                      <input type="number" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="45" />
                   </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Languages</label>
                  <div className="space-y-2">
                     {['English', 'Vietnamese', 'French', 'Chinese'].map(lang => (
                        <label key={lang} className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main cursor-pointer">
                           <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-gray-300 dark:border-white/20" />
                           {lang}
                        </label>
                     ))}
                  </div>
                </div>
             </div>
             
             <div className="h-px bg-border-light dark:bg-white/10"></div>

             {/* Appearance */}
             <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">Appearance</h3>
                
                <div>
                   <label className="text-sm font-medium block mb-2">Height (cm)</label>
                   <div className="flex gap-2 items-center">
                      <input type="number" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="Min" />
                      <span className="text-text-muted">-</span>
                      <input type="number" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="Max" />
                   </div>
                </div>

                <div>
                   <label className="text-sm font-medium block mb-2">Weight (kg)</label>
                   <div className="flex gap-2 items-center">
                      <input type="number" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="Min" />
                      <span className="text-text-muted">-</span>
                      <input type="number" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="Max" />
                   </div>
                </div>

                <div>
                   <label className="text-sm font-medium block mb-2">Shoe Size</label>
                   <select className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm">
                      <option value="">Any</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39+">39+</option>
                   </select>
                </div>

                <div>
                   <label className="text-sm font-medium block mb-2">Hair Length</label>
                   <div className="space-y-2">
                     {['Short', 'Medium', 'Long'].map(len => (
                        <label key={len} className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main cursor-pointer">
                           <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-gray-300 dark:border-white/20" />
                           {len}
                        </label>
                     ))}
                   </div>
                </div>
             </div>

             <div className="h-px bg-border-light dark:bg-white/10"></div>

             {/* Background */}
             <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">Background</h3>
                
                <div>
                  <label className="text-sm font-medium block mb-2">Marital Status</label>
                  <div className="space-y-2">
                     {['Never Married', 'Divorced', 'Widowed'].map(status => (
                        <label key={status} className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main cursor-pointer">
                           <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-gray-300 dark:border-white/20" />
                           {status}
                        </label>
                     ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Education</label>
                   <div className="space-y-2">
                     {['High School', 'College', 'University', 'Masters/PhD'].map(edu => (
                        <label key={edu} className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main cursor-pointer">
                           <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-gray-300 dark:border-white/20" />
                           {edu}
                        </label>
                     ))}
                   </div>
                </div>

                <div>
                   <label className="text-sm font-medium block mb-2">Religion</label>
                   <select className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm">
                      <option value="">Any</option>
                      <option value="buddhist">Buddhist</option>
                      <option value="catholic">Catholic</option>
                      <option value="none">None</option>
                      <option value="other">Other</option>
                   </select>
                </div>

                 <div>
                   <label className="text-sm font-medium block mb-2">Occupation</label>
                   <input type="text" className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm" placeholder="e.g. Teacher, Nurse" />
                </div>
             </div>

             <div className="h-px bg-border-light dark:bg-white/10"></div>

             {/* Lifestyle */}
             <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">Lifestyle</h3>
                
                <div>
                   <label className="text-sm font-medium block mb-2">Children</label>
                   <div className="space-y-2">
                     {['None', '1', '2+'].map(child => (
                        <label key={child} className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main cursor-pointer">
                           <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-gray-300 dark:border-white/20" />
                           {child}
                        </label>
                     ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="text-sm font-medium block mb-2">Drinking</label>
                      <select className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm">
                          <option value="">Any</option>
                          <option value="never">Never</option>
                          <option value="socially">Socially</option>
                          <option value="often">Often</option>
                      </select>
                   </div>
                   <div>
                      <label className="text-sm font-medium block mb-2">Smoking</label>
                      <select className="w-full rounded-lg bg-background-light dark:bg-white/5 border border-border-light dark:border-white/10 p-2 text-sm">
                          <option value="">Any</option>
                          <option value="never">Never</option>
                          <option value="socially">Socially</option>
                          <option value="often">Often</option>
                      </select>
                   </div>
                </div>

                 <div>
                   <label className="text-sm font-medium block mb-2">Drug Use</label>
                   <label className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main cursor-pointer">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-gray-300 dark:border-white/20" checked disabled />
                      Never (Strict Policy)
                   </label>
                </div>
             </div>
             
             <button className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg mt-4 lg:hidden">Apply Filters</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 bg-background-light dark:bg-[#1a0c10]">
           <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-text-main dark:text-white">Active Members <span className="text-text-muted text-lg font-normal ml-2">(1,248)</span></h1>
              <div className="flex gap-2">
                 <select className="bg-transparent border border-border-light dark:border-white/10 rounded-lg text-sm px-3 py-2 text-text-main dark:text-white">
                    <option>Newest First</option>
                    <option>Last Active</option>
                    <option>Age: Low to High</option>
                 </select>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {[
                { name: 'Linh', age: 24, loc: 'Ho Chi Minh City', occ: 'Accountant', img: 'https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=500&q=80', online: true },
                { name: 'Mai', age: 28, loc: 'Hanoi', occ: 'Teacher', img: 'https://images.unsplash.com/photo-1583336137687-f82ce6a84d46?auto=format&fit=crop&w=500&q=80', online: false },
                { name: 'Thu', age: 26, loc: 'Da Nang', occ: 'Nurse', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80', online: true },
                { name: 'Lan', age: 22, loc: 'Can Tho', occ: 'Student', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80', online: false },
                { name: 'Vy', age: 25, loc: 'Nha Trang', occ: 'Sales', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80', online: true },
                { name: 'Phuong', age: 29, loc: 'Hue', occ: 'Business Owner', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80', online: false },
                { name: 'Trang', age: 23, loc: 'Vung Tau', occ: 'Marketing', img: 'https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&w=500&q=80', online: true },
                { name: 'Kim', age: 27, loc: 'Dalat', occ: 'Hotel Manager', img: 'https://images.unsplash.com/photo-1525748822304-6807cb9d3911?auto=format&fit=crop&w=500&q=80', online: false },
              ].map((profile, idx) => (
                 <div key={idx} onClick={() => navigate('/profile')} className="group relative flex flex-col gap-3 rounded-xl cursor-pointer bg-white dark:bg-surface-dark border border-border-light dark:border-white/5 hover:border-primary dark:hover:border-primary transition-all p-3 shadow-sm hover:shadow-md">
                    <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-white/5 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${profile.img}")` }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      {profile.online && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          <span className="text-[10px] font-bold text-white uppercase tracking-wide">Online</span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 p-3 w-full">
                         <h3 className="text-white text-lg font-bold leading-tight">{profile.name}, {profile.age}</h3>
                         <p className="text-white/80 text-xs font-medium flex items-center gap-1 mt-0.5">
                           <Icon name="location_on" className="text-sm" /> {profile.loc}
                         </p>
                      </div>
                    </div>
                    <div className="px-1">
                       <p className="text-sm text-text-main dark:text-white font-medium flex items-center gap-2">
                          <Icon name="work" className="text-text-muted text-lg" /> {profile.occ}
                       </p>
                       <div className="mt-3 flex gap-2">
                          <span className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-text-muted font-medium">English: Basic</span>
                          <span className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-text-muted font-medium">Never Married</span>
                       </div>
                    </div>
                 </div>
               ))}
           </div>
           
           <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-surface-dark border border-border-light dark:border-white/10 rounded-full font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm">
                 Load More Profiles <Icon name="expand_more" />
              </button>
           </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;