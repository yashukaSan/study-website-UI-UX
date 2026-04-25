import { Copyright } from 'lucide-react';
import logo from "../assets/Group.png"

export default function Footer(){
    const navigations = {
        Explore: [
            ['/', 'Home'],
            ['boards', 'Boards'],
            ['quizseries', 'Quizzes'],
            ['blog', 'Blog'],
            ['about', 'About'],
            ['contact', 'Contact Us'],
            ['contact', 'Promote your Brand']
        ],
        Exams: [
            ['neet', "NEET Preparation"],
            ['jee', "JEE Preparation"],
            ['cuet', 'CUET Preparation'],
            ['boards', 'Class 10 Boards'],
            ['boards', 'Class 12 Boards']
        ],
        Resources: [
            ['documents', 'Study Notes'],
            ['mocktest', 'Mock Tests'],
            ['documnets', 'Question Papers'],
            ['documents', 'Study Guides'],
            ['documents', 'NCERT Books']
        ],
        Company: [
            ['about', 'What We Do'],
            ['contact', 'Promote Platform'],
            ['documents', 'Question Papers'],
            ['documents', 'Study Guides'],
            ['documents', 'NCERT Books']
        ]
    };

    return (
        <section>
             <div className="flex justify-center items-center gap-3 mr-4 sm:gap-10 lg:gap-1 xl:gap-12 align-center p-2">
                <img src={logo} alt="site logo" placeholder="blur" className="h-15 items-center m-auto border rounded-full " />
                <h1 className="xl:text-2xl text-lg text-center mt-4 font-mono text-black font-bold xl:font-serif m-auto ">ExamWaliSite</h1>
            </div>
            <div>
                <p>
                    We help students discover the best study resources. Get the latest study materials, exam updates, and preparation tips delivered to your inbox.
                </p>
                <label>
                    <input type='email' placeholder="Enter your email" />
                    <button>
                        Subscribe
                    </button>
                </label>
            </div>
            <ul className='grid grid-cols-2 gap-12 my-4 p-4 align-center text-center'>
                {Object.entries(navigations).map(([key, item]) => (
                    <li>
                        <h3 className="font-bold">
                            {key}
                        </h3>
                        <ul key={key+item}>
                            {item.map((ele,index)=> (
                                <li key={'inner-'+index}>
                                    {ele[1]}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <hr/>
            <div className="flex border items-center flex-col justify-around">
                <div className="flex gap-2 justify-center items-center">
                    <Copyright /> 2026 ExamWaliSite. All rights reserved.
                </div>
                <div className='flex justify-center items-center align-center gap-3'>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-facebook-f" /></span>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-twitter" /></span>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-instagram" /></span>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-linkedin-in" /></span>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-telegram" /></span>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-whatsapp" /></span>
                    <span className=" h-7 w-7 rounded-full  items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-youtube" /></span>
                </div>
                <div className="flex justify-around gap-10">
                    <p>
                        Terms & Conditions
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                </div>
            </div>
        </section>
    );
}