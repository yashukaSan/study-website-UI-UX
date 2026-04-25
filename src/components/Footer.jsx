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
        <section className=" bg-[#001030] p-6 text-[#dadada] w-full">
             <div className="flex lg:hidden justify-center items-center mr-4 align-center p-2">
                <img src={logo} alt="site logo" placeholder="blur" className="h-15 items-center border rounded-full " />
                <h1 className=" text-7xl text-center font-sans text-white font-bold ">
                    ExamWaliSite
                </h1>
            </div>
            <div className="w-full mt-5 ">
                <p className="pl-10 text-2xl">
                    We help students discover the best study resources. Get the latest study materials, exam updates, and preparation tips delivered to your inbox.
                </p>
                <label className="my-10 grid justify-center gap-2 ">
                    <input type='email' placeholder="Enter your email" className="border bg-white rounded-lg text-2xl p-3 text-black" />
                    <button className="border bg-[#0067ff] rounded-lg h-15 text-xl p-4 font-bold ">
                        Subscribe
                    </button>
                </label>
            </div>
            <ul className='grid grid-cols-2 gap-12 my-4 p-4 text-2xl align-center text-center'>
                {Object.entries(navigations).map(([key, item]) => (
                    <li className="">
                        <h3 className="mb-5 font-bold text-white">
                            {key}
                        </h3>
                        <ul key={key+item}>
                            {item.map((ele,index)=> (
                                <li key={'inner-'+index} className="p-2" >
                                    {ele[1]}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <hr/>
            <div className="mt-10 mb-5 flex lg:text-xl items-center flex-col lg:flex-row justify-around">
                <div className="flex gap-2 justify-center items-center">
                    <Copyright /> 2026 ExamWaliSite. All rights reserved.
                </div>
                <div className='flex justify-center items-center align-center gap-3'>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-facebook-f" /></span>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-twitter" /></span>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-instagram" /></span>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-linkedin-in" /></span>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-telegram" /></span>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-whatsapp" /></span>
                    <span className=" h-7 w-7 lg:h-12 lg:w-12 rounded-full items-center justify-center flex  bg-[#454545] text-white"><i className="fa-brands fa-youtube" /></span>
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