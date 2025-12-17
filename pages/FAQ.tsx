import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Questions');
  const [searchTerm, setSearchTerm] = useState('');

  const questions = [
    {
      category: 'The Process',
      q: 'How does the matchmaking process work?',
      a: 'We begin by getting to know you through your profile and a personalized consultation. You can then browse our verified members or receive curated matches. Once you find someone special, we facilitate video calls with translation support to build a connection. When you are ready, we organize a "Romance Tour" to Vietnam for face-to-face meetings, ensuring a safe and guided experience every step of the way.'
    },
    {
      category: 'The Process',
      q: 'What is included in the "Romance Tour"?',
      a: 'Our tours are all-inclusive experiences designed to take the stress out of international dating. They typically include airport transfers, premium hotel accommodation, daily breakfast, a personal translator/guide, arranged dates with compatible matches, and sightseeing activities in Vietnam. You only need to cover your international flights and personal expenses.'
    },
    {
      category: 'The Process',
      q: 'Are the women on your site verified?',
      a: 'Yes, 100%. Unlike standard dating apps, we manually interview every female member. We check their government ID, verify their single status, and ensure they have a genuine intention to find a serious partner for marriage. We strictly prohibit scammers and "gold diggers" to protect our male members.'
    },
    {
      category: 'The Process',
      q: 'Do I need to speak Vietnamese?',
      a: 'No. While learning a few phrases is a nice gesture, it is not required. Many of our female members speak basic English and are eager to learn more. For important conversations, especially during the initial stages and your visit, we provide professional translation services to ensure clear and meaningful communication.'
    },
    {
      category: 'The Process',
      q: 'What is the success rate?',
      a: 'We are proud of our high success rate. Over 80% of men who travel to Vietnam on our managed tours enter into a committed relationship during their trip. We focus on quality over quantity, ensuring that the introductions we make have a high potential for long-term compatibility.'
    },
    {
      category: 'The Process',
      q: 'Is there a membership fee?',
      a: 'Creating a profile and browsing our gallery is completely free. We charge for premium services such as detailed contact exchange, video call arrangements, and the travel packages. This ensures that all our members are serious and committed to the process.'
    },
    {
      category: 'Travel & Visas',
      q: 'What are the visa requirements for Vietnam?',
      a: 'Vietnam now offers a convenient E-Visa for citizens of all countries and territories, valid for up to 90 days with multiple entries. You can apply online through the official government portal. We provide a comprehensive guide and can assist you with the application process to ensure your paperwork is in order before you fly.'
    },
    {
      category: 'Travel & Visas',
      q: 'Is Vietnam safe for Western tourists?',
      a: 'Vietnam is ranked as one of the safest countries in Southeast Asia for travelers. Violent crime against tourists is extremely rare. The people are known for their hospitality and friendliness. Furthermore, during your tour with us, you will be accompanied by our local staff who know the cities inside out, providing an extra layer of security and comfort.'
    },
    {
      category: 'Travel & Visas',
      q: 'Can you help bring my fiancee to my country?',
      a: 'Yes, our support doesn\'t end when you leave Vietnam. We provide guidance and referrals to trusted legal partners for K-1 Fiance Visas (USA), Partner Visas (Australia/UK), and other immigration processes. We have years of experience helping couples navigate the paperwork to start their new lives together.'
    },
    {
      category: 'Travel & Visas',
      q: 'What about health and vaccinations?',
      a: 'No specific vaccinations are required for entry into Vietnam, but standard boosters (like Tetanus and Hepatitis A) are recommended by health organizations. The major cities where we operate—Ho Chi Minh City, Da Nang, and Hanoi—have modern medical facilities. We recommend consulting your doctor 4-6 weeks before travel.'
    },
    {
      category: 'Travel & Visas',
      q: 'How do I book my flights?',
      a: 'You are responsible for booking your own international flights to Vietnam, which allows you to choose your preferred airline and schedule. However, our team is happy to advise on the best routes and airports based on your tour itinerary. Once you land in Vietnam, we handle all your local transportation.'
    },
    {
      category: 'The Process',
      q: 'Why do Vietnamese women look for foreign husbands?',
      a: 'Vietnamese culture places a high value on family. Many women feel that Western men are more family-oriented, respectful of women, and financially stable partners who are committed to a faithful marriage. They are often looking for a mature love that is based on mutual respect and shared traditional values.'
    },
  ];

  const filteredQuestions = questions.filter(item => {
    const matchesTab = activeTab === 'All Questions' || item.category === activeTab;
    const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) || item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs = ['All Questions', 'The Process', 'Travel & Visas'];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <header className="bg-white dark:bg-[#2a171c] border-b border-[#f4f0f1] dark:border-[#3d252b] sticky top-0 z-50">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1440px] mx-auto w-full">
          <div onClick={() => navigate('/')} className="flex items-center gap-4 cursor-pointer">
            <div className="text-primary size-8 flex items-center justify-center">
              <Icon name="favorite" className="text-[32px]" />
            </div>
            <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Your Vietnam Chapter</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <button onClick={() => navigate('/')} className="text-text-main dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Home</button>
              <button onClick={() => navigate('/about')} className="text-text-main dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">About Us</button>
              <button onClick={() => navigate('/profile')} className="text-text-main dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Profiles</button>
              <button className="text-primary text-sm font-bold transition-colors">FAQ</button>
              <button onClick={() => navigate('/messages')} className="text-text-main dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Login</button>
            </nav>
            <button onClick={() => navigate('/create-profile')} className="bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold h-10 px-6 rounded-xl shadow-lg shadow-primary/20">
              Join Free
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center w-full">
        <div className="w-full max-w-[960px] px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-text-main dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Frequently Asked Questions</p>
            <p className="text-text-muted dark:text-gray-400 text-lg font-normal">Everything you need to know about your journey to find love in Vietnam.</p>
          </div>
          <div className="w-full">
            <label className="relative flex w-full h-14 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="search" className="text-text-muted dark:text-gray-400 group-focus-within:text-primary" />
              </div>
              <input 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full pl-12 pr-4 bg-white dark:bg-[#2a171c] border-2 border-transparent focus:border-primary/20 rounded-xl text-text-main dark:text-white placeholder:text-text-muted/70 shadow-sm focus:ring-0 focus:outline-none transition-all text-base" 
                placeholder="Search for answers (e.g., 'Verification', 'Tours', 'Culture')..." 
                type="text" 
              />
            </label>
          </div>
          <div className="w-full overflow-x-auto pb-2">
            <div className="flex border-b border-[#e6dbde] dark:border-[#3d252b] min-w-max gap-8 px-2">
              {tabs.map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === tab ? 'border-primary' : 'border-transparent hover:border-[#e6dbde] dark:hover:border-[#3d252b]'}`}
                >
                  <p className={`${activeTab === tab ? 'text-text-main dark:text-white' : 'text-text-muted dark:text-gray-400'} text-sm font-bold`}>{tab}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item, idx) => (
                <details key={idx} className="group bg-white dark:bg-[#2a171c] rounded-xl shadow-sm border border-transparent dark:border-[#3d252b] open:border-primary/20 dark:open:border-primary/20 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 list-none select-none">
                    <h3 className="text-text-main dark:text-white text-lg font-bold pr-4">{item.q}</h3>
                    <Icon name="expand_more" className="text-text-main dark:text-white group-open:rotate-180 group-open:text-primary transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-text-muted dark:text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))
            ) : (
              <div className="text-center py-10 text-text-muted dark:text-gray-400">
                <Icon name="search_off" className="text-4xl mb-2" />
                <p>No questions found matching your criteria.</p>
              </div>
            )}
          </div>

          <div className="mt-8 p-8 bg-white dark:bg-[#2a171c] rounded-2xl shadow-sm border border-[#f4f0f1] dark:border-[#3d252b] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-text-main dark:text-white">Still have questions?</h3>
              <p className="text-text-muted dark:text-gray-400">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center justify-center h-12 px-6 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#2a171c] border-t border-[#f4f0f1] dark:border-[#3d252b] py-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted dark:text-gray-500 text-sm">© 2024 Your Vietnam Chapter. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted dark:text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-muted dark:text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;