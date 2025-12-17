import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const Messages: React.FC = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="shrink-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e0e2] dark:border-gray-800 bg-white dark:bg-background-dark px-10 py-3 z-10">
        <div onClick={() => navigate('/')} className="flex items-center gap-4 text-text-main dark:text-white cursor-pointer">
          <div className="size-8 flex items-center justify-center text-primary">
            <Icon name="favorite" className="text-3xl" />
          </div>
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">Your Vietnam Chapter</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <button onClick={() => navigate('/search')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Search</button>
            <button className="text-primary text-sm font-bold leading-normal">Matches</button>
            <button onClick={() => navigate('/profile')} className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Profile</button>
            <button className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Upgrade</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center size-10 rounded-full bg-background-light dark:bg-gray-800 text-text-main dark:text-white relative">
              <Icon name="notifications" />
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-gray-700 cursor-pointer" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80')" }}></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-[380px] flex flex-col border-r border-[#e6e0e2] dark:border-gray-800 bg-white dark:bg-[#1a0c10]">
          <div className="p-4 border-b border-[#f4f0f1] dark:border-gray-800">
            <h1 className="text-2xl font-bold mb-4 px-2">Messages</h1>
            <label className="flex flex-col h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-[#f4f0f1] dark:bg-gray-800">
                <div className="text-text-muted dark:text-gray-400 flex border-none items-center justify-center pl-4 rounded-l-xl">
                  <Icon name="search" />
                </div>
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-main dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-text-muted dark:placeholder:text-gray-500 px-4 pl-2 text-base font-normal leading-normal" placeholder="Search matches" />
              </div>
            </label>
          </div>

          <div className="flex-1 overflow-y-auto">
             {/* Active Item */}
             <div className="flex items-center gap-4 bg-[#fff0f4] dark:bg-primary/10 px-6 py-4 cursor-pointer border-l-4 border-primary transition-colors">
               <div className="relative">
                 <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=200&q=80')" }}></div>
                 <span className="absolute bottom-0 right-0 size-3.5 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></span>
               </div>
               <div className="flex flex-col justify-center flex-1 min-w-0">
                 <div className="flex justify-between items-baseline mb-0.5">
                   <p className="text-text-main dark:text-white text-base font-bold truncate">Linh Nguyen</p>
                   <p className="text-primary text-xs font-semibold whitespace-nowrap">Now</p>
                 </div>
                 <p className="text-text-main dark:text-gray-200 text-sm font-medium truncate">Hi David, the pleasure is mine...</p>
               </div>
             </div>

             {/* Other Items */}
             {[
               { name: 'Mai Tran', time: '1h', msg: 'Photo sent', type: 'photo', img: 'https://images.unsplash.com/photo-1583336137687-f82ce6a84d46?auto=format&fit=crop&w=200&q=80', online: false },
               { name: 'Thu Ha', count: 2, msg: 'Can we video chat later?', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', online: true },
               { name: 'Kim Lan', time: '2d', msg: 'Matched on Oct 22', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80', opacity: true }
             ].map((contact, idx) => (
                <div key={idx} className={`flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors border-l-4 border-transparent ${contact.opacity ? 'opacity-60' : ''}`}>
                  <div className="relative">
                    <div className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 ${contact.opacity ? 'grayscale' : ''}`} style={{ backgroundImage: `url('${contact.img}')` }}></div>
                    {contact.online !== undefined && (
                      <span className={`absolute bottom-0 right-0 size-3.5 ${contact.online ? 'bg-green-500' : 'bg-gray-300'} border-2 border-white dark:border-background-dark rounded-full`}></span>
                    )}
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <p className="text-text-main dark:text-white text-base font-medium truncate">{contact.name}</p>
                      {contact.count ? (
                        <div className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{contact.count}</div>
                      ) : (
                        <p className="text-text-muted dark:text-gray-500 text-xs font-normal whitespace-nowrap">{contact.time}</p>
                      )}
                    </div>
                    <p className={`text-text-muted dark:text-gray-400 text-sm font-normal truncate flex items-center gap-1 ${contact.count ? 'font-semibold text-text-main dark:text-gray-200' : ''}`}>
                      {contact.type === 'photo' && <Icon name="image" className="text-[16px]" />} {contact.msg}
                    </p>
                  </div>
                </div>
             ))}
          </div>
        </aside>

        {/* Chat Window */}
        <main className="flex-1 flex flex-col bg-white dark:bg-background-dark relative">
          <div className="flex items-center justify-between p-4 border-b border-[#e6e0e2] dark:border-gray-800 shadow-sm z-10 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=200&q=80')" }}></div>
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">Linh Nguyen</h3>
                  <Icon name="verified" filled className="text-blue-500 text-[18px]" />
                </div>
                <p className="text-text-muted dark:text-gray-400 text-sm">Online</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate('/profile')} className="flex items-center justify-center h-10 px-4 gap-2 rounded-lg bg-[#f4f0f1] dark:bg-gray-800 text-text-main dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Icon name="person" className="text-[20px]" />
                <span className="hidden sm:inline">Profile</span>
              </button>
              <button className="flex items-center justify-center h-10 px-4 gap-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                <Icon name="videocam" className="text-[20px]" />
                <span className="hidden sm:inline">Video Call</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background-light dark:bg-[#1a0c10]">
             <div className="flex justify-center py-4">
               <p className="text-text-muted dark:text-gray-500 text-xs font-medium bg-[#e6e0e2] dark:bg-gray-800 px-3 py-1 rounded-full">You matched with Linh on Oct 24</p>
             </div>
             
             {/* Messages */}
             <div className="flex gap-4 max-w-[80%]">
               <div className="shrink-0 flex flex-col justify-end">
                 <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 mb-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=200&q=80')" }}></div>
               </div>
               <div className="flex flex-col gap-1 items-start">
                 <div className="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm text-text-main dark:text-gray-100 text-[15px] leading-relaxed border border-gray-100 dark:border-gray-700">
                   Hello! Nice to meet you. I saw on your profile that you enjoy traveling to Asia?
                 </div>
                 <span className="text-text-muted dark:text-gray-500 text-xs ml-1">10:42 AM</span>
               </div>
             </div>

             <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                <div className="flex flex-col gap-1 items-end">
                   <div className="bg-primary p-3.5 rounded-2xl rounded-br-none shadow-md shadow-primary/10 text-white text-[15px] leading-relaxed">
                     Hi Linh! Yes, absolutely. I've been to Vietnam twice and loved it. The food is incredible! 🍜
                   </div>
                   <div className="flex items-center gap-1 mr-1">
                     <span className="text-text-muted dark:text-gray-500 text-xs">10:45 AM</span>
                     <Icon name="done_all" className="text-[14px] text-primary" />
                   </div>
                </div>
             </div>

             <div className="flex gap-4 max-w-[80%]">
               <div className="shrink-0 flex flex-col justify-end">
                 <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 mb-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587522080373-c5b96435091c?auto=format&fit=crop&w=200&q=80')" }}></div>
               </div>
               <div className="flex flex-col gap-1 items-start">
                 <div className="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm text-text-main dark:text-gray-100 text-[15px] leading-relaxed border border-gray-100 dark:border-gray-700">
                   That's wonderful to hear! Which cities did you visit? I am currently living in Ho Chi Minh City.
                 </div>
               </div>
             </div>

             <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                <div className="flex flex-col gap-1 items-end">
                   <div className="bg-primary p-3.5 rounded-2xl rounded-br-none shadow-md shadow-primary/10 text-white text-[15px] leading-relaxed">
                     Mainly Hanoi and Da Nang, but I missed HCMC. I'd love to hear more about it.
                   </div>
                   <div className="bg-primary p-3.5 rounded-2xl rounded-tr-none shadow-md shadow-primary/10 text-white text-[15px] leading-relaxed mt-1">
                     Hi Linh, the pleasure is mine. How is your day going?
                   </div>
                   <div className="flex items-center gap-1 mr-1">
                     <span className="text-text-muted dark:text-gray-500 text-xs">Just now</span>
                     <Icon name="check" className="text-[14px] text-gray-400" />
                   </div>
                </div>
             </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-background-dark border-t border-[#e6e0e2] dark:border-gray-800">
             <div className="flex flex-col gap-3 max-w-4xl mx-auto w-full">
                <div className="flex items-end gap-3 bg-[#f4f0f1] dark:bg-gray-800 p-2 rounded-2xl">
                   <div className="flex items-center pb-2 pl-2 gap-1 text-text-muted dark:text-gray-400">
                     <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"><Icon name="image" /></button>
                     <button className="p-2 hover:bg-primary/20 text-primary rounded-full transition-colors"><Icon name="redeem" filled /></button>
                   </div>
                   <div className="flex-1">
                     <textarea 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-text-muted dark:placeholder:text-gray-500 resize-none py-3 max-h-32 min-h-[48px]" 
                        placeholder="Type a message to Linh..." 
                        rows={1}
                      />
                   </div>
                   <div className="flex items-center pb-2 pr-2 gap-2">
                     <button className="p-2 text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white transition-colors"><Icon name="sentiment_satisfied" /></button>
                     <button className="flex items-center justify-center size-10 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                       <Icon name="send" filled />
                     </button>
                   </div>
                </div>
                <div className="flex justify-between px-2">
                   <p className="text-[11px] text-text-muted dark:text-gray-500">Press Enter to send</p>
                   <button className="text-[11px] font-bold text-primary flex items-center gap-1 hover:underline">
                      <Icon name="diamond" className="text-[14px]" /> Send a Premium Gift
                   </button>
                </div>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;