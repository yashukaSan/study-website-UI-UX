import './App.css';
import { useState } from 'react';
import { Mail, ArrowRight, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Courses from './components/Courses';
import StartPrep from './components/StartPrep';
import News from './components/News';
import JoinUs from './components/JoinUs';
import Offer from './components/Offer';
import Faq from './components/Faq';
import Footer from './components/Footer';

function PopUpScreen({ onClose }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => onClose(), 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-[#0a0f2c] border border-blue-500/30 rounded-2xl shadow-2xl w-full max-w-md p-6 text-white relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={22} />
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600/20 rounded-xl p-2.5">
            <Mail size={22} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold">Stay Updated</h3>
        </div>

        <hr className="border-white/10 mb-4" />

        {subscribed ? (
          <div className="text-center py-4">
            <p className="text-green-400 font-bold text-lg">🎉 Subscribed Successfully!</p>
            <p className="text-gray-400 text-sm mt-1">Thanks for subscribing!</p>
          </div>
        ) : (
          <>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Get the latest updates, exclusive offers, and study resources delivered to your inbox.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/10 border border-blue-500/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-blue-400 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Subscribe Now <ArrowRight size={16} />
              </button>
            </div>

            <ul className="flex justify-center gap-5 mt-4 text-xs text-gray-500">
              <li className="flex items-center gap-1">✓ No Spam</li>
              <li className="flex items-center gap-1">✓ Unsubscribe Anytime</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [isClose, setIsClose] = useState(() => {
    return localStorage.getItem('isClose') === 'true';
  });

  const handleClose = () => {
    localStorage.setItem('isClose', 'true');
    setIsClose(true);
  };

  return (
    <main className="text-black">
      {!isClose && <PopUpScreen onClose={handleClose} />}

      <div className={!isClose ? 'blur-sm pointer-events-none select-none' : ''}>
        <Header classN="h-full xl:mt-5 flex xl:w-[80%] xl:m-auto justify-between w-full px-3" />
        <Hero />
        <Overview />
        <Courses />
        <StartPrep />
        <News />
        <JoinUs />
        <Offer />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}

export default App;