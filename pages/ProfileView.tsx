import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased min-h-screen flex flex-col">
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
            <button onClick={() => navigate('/search')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Search</button>
            <button onClick={() => navigate('/messages')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Messages</button>
            <button className="text-primary text-sm font-bold leading-normal">My Profile</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-background-light dark:bg-white/10 text-text-main dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
              <Icon name="notifications" />
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80')" }}></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="layout-container flex flex-col flex-1 max-w-[1280px] mx-auto w-full px-4 md:px-8 py-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 py-4 text-sm">
          <a href="#" className="text-text-muted hover:text-primary">Home</a>
          <span className="text-text-muted">/</span>
          <a href="#" className="text-text-muted hover:text-primary">Search</a>
          <span className="text-text-muted">/</span>
          <span className="text-text-main dark:text-white font-medium">Linh's Profile</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2">
          {/* Main Info */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                <div className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=1200&q=80')" }}></div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
                  <Icon name="photo_camera" className="text-sm" /> 1/8
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {[
                  "https://images.unsplash.com/photo-1583336137687-f82ce6a84d46?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                ].map((url, i) => (
                  <div key={i} className={`aspect-square rounded-lg overflow-hidden cursor-pointer ${i === 0 ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url("${url}")` }}></div>
                  </div>
                ))}
                 <div className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-100 dark:bg-white/5 flex items-center justify-center text-text-muted hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium">+4 More</span>
                 </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                <Icon name="person" className="text-primary" /> About Me
              </h3>
              <p className="text-text-main dark:text-gray-300 leading-relaxed">
                Hello! I am Linh, a cheerful and caring woman from Ho Chi Minh City. I work as an accountant but my true passion lies in cooking and taking care of my family. I consider myself a traditional woman with modern values. I love weekends spent exploring new coffee shops or cooking a big meal for friends. I am looking for a serious relationship that leads to marriage with a kind, honest man.
              </p>
            </div>

            {/* The Basics */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                <Icon name="info" className="text-primary" /> The Basics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  { icon: 'height', label: 'Height', value: "165 cm (5' 5\")" },
                  { icon: 'weight', label: 'Weight', value: "50 kg (110 lbs)" },
                  { icon: 'school', label: 'Education', value: "Bachelor's Degree" },
                  { icon: 'work', label: 'Occupation', value: "Accountant" },
                  { icon: 'translate', label: 'English Level', value: "Intermediate" },
                  { icon: 'child_care', label: 'Children', value: "None" },
                  { icon: 'church', label: 'Religion', value: "Buddhist" },
                  { icon: 'wine_bar', label: 'Drinking / Smoking', value: "Social / Never" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Icon name={item.icon} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">{item.label}</p>
                      <p className="text-text-main dark:text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Looking For */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="interests" className="text-primary" /> Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Cooking', 'Travel', 'Karaoke', 'Coffee', 'Yoga', 'Movies', 'Shopping'].map(tag => (
                    <span key={tag} className="bg-primary/5 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="search" className="text-primary" /> Looking For
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Age Range', value: '30 - 55' },
                    { label: 'Location', value: 'USA, Canada, Australia' },
                    { label: 'Marital Status', value: 'Single, Divorced' },
                    { label: 'Children', value: 'Okay', noBorder: true }
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center justify-between text-sm ${!item.noBorder ? 'border-b border-gray-100 dark:border-white/5 pb-2' : 'pb-2'}`}>
                      <span className="text-text-muted">{item.label}</span>
                      <span className="font-medium text-text-main dark:text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-none p-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold text-text-main dark:text-white">Linh, 24</h1>
                  <Icon name="verified" filled className="text-blue-500 text-2xl" />
                </div>
                <div className="flex items-center gap-1 text-text-muted mb-6">
                  <Icon name="location_on" className="text-lg" />
                  <span className="text-sm font-medium">Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="flex flex-col gap-3 w-full mb-6">
                  <button onClick={() => navigate('/messages')} className="w-full bg-primary hover:bg-red-600 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-primary/20 transition-all">
                    <Icon name="mail" /> Send Message
                  </button>
                  <button className="w-full bg-white dark:bg-white/5 border-2 border-primary/20 hover:border-primary text-primary dark:text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all">
                    <Icon name="videocam" /> Request Video Call
                  </button>
                </div>
                <div className="flex items-center justify-center gap-6 w-full pt-4 border-t border-gray-100 dark:border-white/10">
                  {['favorite', 'card_giftcard', 'share'].map((icon, i) => (
                    <button key={i} className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors group">
                      <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-primary/10 transition-colors">
                        <Icon name={icon} className="text-2xl" />
                      </div>
                      <span className="text-xs font-medium">{['Save', 'Send Gift', 'Share'][i]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4">
                <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Icon name="security" /> Verified Profile
                </h4>
                <ul className="space-y-2">
                  {['ID Verified', 'Photos Verified', 'Phone Verified'].map((text, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-blue-800 dark:text-blue-200">
                      <Icon name="check_circle" className="text-sm text-green-500" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Profiles */}
        <div className="mt-16 border-t border-gray-200 dark:border-white/10 pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-main dark:text-white">Similar Profiles</h2>
            <a href="#" className="text-primary font-medium text-sm flex items-center hover:underline">
              View More <Icon name="arrow_forward_ios" className="text-sm ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Mai', age: 23, loc: 'Hanoi', img: 'https://images.unsplash.com/photo-1583336137687-f82ce6a84d46?auto=format&fit=crop&w=400&q=80' },
              { name: 'Anh', age: 25, loc: 'Da Nang', img: 'https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Truc', age: 22, loc: 'Can Tho', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Vy', age: 26, loc: 'Ho Chi Minh City', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' }
            ].map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                  <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${p.img}")` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  {i === 0 || i === 3 ? (
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center gap-1 text-xs mb-1 opacity-90">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <h3 className="font-bold text-text-main dark:text-white text-lg group-hover:text-primary transition-colors">{p.name}, {p.age}</h3>
                  <p className="text-sm text-text-muted">{p.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;