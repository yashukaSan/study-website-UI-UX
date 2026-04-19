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
          <div className="flex gap-6 lg:text-3xl"><Mail className="text-blue-500 mt-2 lg:h-10 lg:w-10 lg:m-0" /> Stay Updated</div> <X className="lg:mt-1 lg:h-8 lg:w-10" onClick={()=>setClose(prev => !prev)} />
        </div>
        <hr className="w-[95%] mt-2 m-auto" />
        <div className="xl:mx-10 mx-5 text-center lg:text-xl my-3">
          Get the latest updates, exclusive offers, and study resources deliverd to your inbox.
        </div>
        <label className="mx-10 rounded-lg" >
          <input type="text" placeholder="Enter Your Email" className="p-2 rounded-lg text-center w-full border border-blue-500" />
        <button className="p-1 rounded-lg flex my-2 w-full text-black font-bold justify-center bg-blue-500 m-auto" onClick={() => setClose(prev => !prev)} >Subscribe Now&nbsp; <ArrowRight className="w-5" /></button>
        </label>
        <ul className="flex justify-center lg:text-sm list-disc list-inside gap-3 text-xs">
          <li>NO SPAM</li>
          <li>UNSUBSCRIBE ANYTIME</li>
        </ul>
      </section>
  );
}
  

//MAIN FUNCTION
function App() {
  const [isClose, setIsClose] = useState(false);
  const popUpClass = "animation h-[20rem] text-white duration-500 ease-in-out xl:w-[25vw] lg:h-[23rem] lg:text-lg delay-500 backdrop-blur-lg grid border-t-blue-400 border-t-6 shadow-2xl shadow-white/40 absolute justify-center p-3 rounded-xl w-100 bg-black z-200 mt-30 lg:mt-30 sm:ml-10 lg:ml-50 ";

  return (
    <main className="text-black">
      <PopUpScreen isClose={isClose} clasN={popUpClass} setClose={setIsClose} />
      <section className={isClose? "" : "blur"}>
      <Header classN="border border-[#aaaaaa] h-full flex lg:w-full justify-between w-full lg:w-[60vw] px-3 " />
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
