// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import { Mail, ArrowRight, X } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Courses from './components/Courses'
import StartPrep from './components/StartPrep'
import News from './components/News'
import JoinUs from './components/JoinUs'
import Offer from './components/Offer'
import Faq from './components/Faq'
import Footer from './components/Footer'



function PopUpScreen({isClose, clasN, setClose}) {
  

  return (
      <section className={isClose? "hidden" : clasN}>
        <div className="flex justify-around text-2xl text-white ">
          <div className="flex gap-4"><Mail className="text-blue-500 mt-2" /> Stay Updated</div> <X className="" onClick={()=>setClose(prev => !prev)} />
        </div>
        <hr className="w-[95%] mt-2 m-auto" />
        <div className="mx-10 my-3">
          Get the latest updates, exclusive offers, and study resources delivred to your inbox.
        </div>
        <label className="mx-10 rounded-lg" >
          <input type="text" placeholder="Enter your email" className="p-2 w-[100%] border border-blue-500" />
          <button className="p-1 flex my-2 w-[100%] text-white font-bold p-2 justify-center bg-blue-500 m-auto" >Subscribe Now&nbsp; <ArrowRight className="w-5" /></button>
        </label>

        <ul className="flex justify-center list-disc list-inside gap-3 text-xs">
          <li>NO SPAM</li>
          <li>UNSUBSCRIBE ANYTIME</li>
        </ul>
      </section>
  );
}
  

//MAIN FUNCTION
function App() {
  const [isClose, setIsClose] = useState(false);
  const popUpClass = "animate duration-500 ease-in-out delay-500 backdrop-blur-lg grid border-t-blue-500 border-t-6 shadow-2xl shadow-white/40 absolute justify-center p-3 rounded-xl w-100 bg-black z-200 mt-30 sm:ml-10 mx-5";

  return (
    <main>
      <PopUpScreen isClose={isClose} clasN={popUpClass} setClose={setIsClose} />
      <section className={isClose? "" : "blur"}>
      <Header classN="border h-[10vh] flex justify-between" />
      <Hero />
      <Overview />
      <Courses />
      <StartPrep />
      <News />
      <JoinUs />
      <Offer />
      <Faq />
      <Footer />
      </section>
    </main>
  )
}

export default App
