import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const CreateProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-3 lg:px-10 sticky top-0 z-50">
        <div onClick={() => navigate('/')} className="flex items-center gap-4 cursor-pointer">
          <div className="size-8 flex items-center justify-center text-primary">
            <Icon name="favorite" className="text-3xl" />
          </div>
          <h2 className="text-text-main dark:text-text-main-dark text-xl font-bold leading-tight tracking-[-0.015em]">Your Vietnam Chapter</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <a href="#" className="text-text-main dark:text-text-main-dark text-sm font-medium leading-normal hover:text-primary transition-colors">Help Center</a>
            <a href="#" className="text-text-main dark:text-text-main-dark text-sm font-medium leading-normal hover:text-primary transition-colors">Save & Exit</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-border-light dark:bg-border-dark overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyYZEiPmh37HeLMTfKyVgMteRUbCTw8nvHYJelXwcWoY9_ETVTCV1KnHxPdi9J9pJd6oqujj6QW6gbNW4Gi-LhmRNVY97s83WoIl_79AM0hcBX7LLiWtjSKEp5idlSN9LcNdbrX_ajN79T__uoXdhOy3yWTVV-NQ5E132i5qKD3kR_jRwxOJsvB8gYToXyrTWDvFG_2jDNRVqxRBOZOrwerQomMGv3yXvEATJ-YGedD5k51P6cxUdaWfGq4txo_evhcR8k37lhfmjo')" }}></div>
          </div>
        </div>
      </header>

      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex flex-col w-full max-w-[1120px] flex-1">
            {/* Progress Bar */}
            <div className="flex flex-col gap-3 mb-10 w-full max-w-[800px] mx-auto">
              <div className="flex gap-6 justify-between items-end">
                <div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Step 1 of 5</p>
                  <h1 className="text-text-main dark:text-text-main-dark text-2xl font-bold leading-tight">The Basics</h1>
                </div>
                <span className="text-text-muted dark:text-text-sub-dark text-sm font-medium">20% Completed</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-border-light dark:bg-border-dark overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: '20%' }}></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              {/* Main Form */}
              <div className="w-full max-w-[800px] flex-1 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 md:p-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2 mb-4">
                    <h2 className="text-3xl font-black leading-tight tracking-[-0.033em] text-text-main dark:text-text-main-dark">Tell us about yourself</h2>
                    <p className="text-text-muted dark:text-text-sub-dark text-base">Please fill in your personal details to help us find your perfect match.</p>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="flex flex-col flex-1 group">
                      <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal pb-2">First Name</p>
                      <div className="relative">
                        <input className="w-full rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 px-4 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted/50 dark:placeholder:text-text-sub-dark/30" placeholder="e.g. John" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-sub-dark pointer-events-none"><Icon name="person" /></span>
                      </div>
                    </label>
                    <label className="flex flex-col flex-1 group">
                      <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal pb-2">Last Name</p>
                      <input className="w-full rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 px-4 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted/50 dark:placeholder:text-text-sub-dark/30" placeholder="e.g. Smith" />
                    </label>
                  </div>

                  {/* Gender / DOB */}
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="flex flex-col flex-1">
                      <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal pb-2">I am a</p>
                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 px-4 pr-10 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                          <option>Man looking for a Woman</option>
                          <option>Woman looking for a Man</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-sub-dark pointer-events-none"><Icon name="expand_more" /></span>
                      </div>
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal pb-2">Date of Birth</p>
                      <input className="w-full rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 px-4 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted/50" type="date" />
                    </label>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-2">
                    <label className="flex flex-col w-full">
                      <div className="flex justify-between items-center pb-2">
                        <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal">Current Location</p>
                        <span className="text-xs text-primary cursor-help flex items-center gap-1">
                          <Icon name="info" className="text-[14px]" /> Why we ask
                        </span>
                      </div>
                      <div className="relative">
                        <input className="w-full rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 pl-12 pr-4 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted/50 dark:placeholder:text-text-sub-dark/30" placeholder="City, Country" />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-sub-dark pointer-events-none"><Icon name="location_on" /></span>
                      </div>
                    </label>
                  </div>

                  {/* Marital / Occupation */}
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="flex flex-col flex-1">
                      <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal pb-2">Marital Status</p>
                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 px-4 pr-10 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="">
                          <option disabled value="">Select status</option>
                          <option>Never Married</option>
                          <option>Divorced</option>
                          <option>Widowed</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-sub-dark pointer-events-none"><Icon name="expand_more" /></span>
                      </div>
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-text-main dark:text-text-main-dark text-sm font-bold leading-normal pb-2">Occupation</p>
                      <input className="w-full rounded-xl text-text-main dark:text-text-main-dark border border-border-light dark:border-border-dark bg-background-light dark:bg-[#1a0c0f] h-14 px-4 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted/50 dark:placeholder:text-text-sub-dark/30" placeholder="e.g. Engineer" />
                    </label>
                  </div>

                  <div className="h-px w-full bg-border-light dark:bg-border-dark my-4"></div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-2">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-6 h-12 rounded-xl text-text-muted dark:text-text-sub-dark font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      Back
                    </button>
                    <button onClick={() => navigate('/profile')} className="flex items-center justify-center gap-2 px-8 h-12 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.02]">
                      Next Step
                      <Icon name="arrow_forward" className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="w-full lg:w-[320px] flex flex-col gap-6">
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                  <div className="flex items-start gap-3 mb-3 relative z-10">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon name="lightbulb" />
                    </div>
                    <h3 className="text-text-main dark:text-text-main-dark font-bold text-lg leading-tight mt-1">Profile Tip</h3>
                  </div>
                  <p className="text-text-muted dark:text-text-sub-dark text-sm leading-relaxed mb-4 relative z-10">
                    Profiles with detailed information get <strong className="text-primary">3x more responses</strong>. Be honest about your marital status and occupation to attract genuine matches.
                  </p>
                  <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                    See example profiles
                    <Icon name="open_in_new" className="text-sm" />
                  </a>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-4 opacity-80 pointer-events-none select-none grayscale-[0.5]">
                  <p className="text-xs font-bold text-text-muted dark:text-text-sub-dark uppercase tracking-widest mb-3">Live Preview</p>
                  <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Icon name="person" className="text-3xl text-gray-400" />
                    </div>
                    <div>
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 w-20 bg-gray-100 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-6 w-16 bg-primary/10 rounded-full"></div>
                    <div className="h-6 w-20 bg-primary/10 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-center mt-2 text-text-muted dark:text-text-sub-dark text-xs">
                  <Icon name="lock" className="text-sm" />
                  Your information is secure and private.
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;