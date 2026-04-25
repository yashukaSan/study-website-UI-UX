import {Target, ArrowRight} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {useState} from 'react';

export default function StartProp(){

    const [isHover, setIsHover] = useState(false);
    const [keyVal, setKeyVal] = useState(NaN);

    const prepType =[
        ['NEET Preparation', 'Explore notes, mock tests, biology resources, and previous papers to prepare effectively for the NEET exam.'],
        ['JEE Preparation', 'Access physics formulas, practice papers, mock tests, and study materials designed for JEE preparation'],
        ['CUET Preparation', 'Find study guides, practice questions, and important resources to help succeed in the CUET entrance exam.'],
        ['Class 12 Boards', 'Discover notes, sample papers, and study guides to help you prepare for Class 12 boardd exams.']
    ];
    return (
        <section>
            <div>
                Start Your Preparation
            </div>
            <div>
                <h1>
                    Start Preparing for Your Upcoming Exam
                </h1>
                <p>
                    Choose your exam or class and explore curated study materials, notes, mock tests, and guides designated to help you prepare with confidence.
                </p>
            </div>
            <ul>
                {prepType.map((item, ind)=> (
                    <li
                        className="grid text-lg font-semibold mt-14 px-5 pb-10 group relative py-3 border border-blue-600 text-black transition-colors duration-300 hover:text-white"
                     onMouseEnter={()=>{setIsHover(true); setKeyVal(ind)}}
                     onMouseLeave={()=>{setIsHover(false); setKeyVal(NaN)}}
                     key={ind}
                    >
                        <Target className={(isHover && keyVal===ind) ? "animation rounded-full bg-white duration-400 m-auto mb-0 relative p-4  text-[#0056ff] h-20 w-20 tranform -translate-y-10" : "animation rounded-full text-white duration-400 m-auto mb-0 relative p-4 hover:bg-transparent bg-[#0056ff] h-20 w-20 tranform -translate-y-10"} />
                        <h1 className="-mt-8 text-2xl mb-2 font-semibold">
                            {item[0]}
                        </h1>
                        <p >
                            {item[1]}
                        </p>
                        <p className="flex gap-3 mt-3 items-center">
                            Explore Resources
                            <ArrowRight />
                        </p>
                        <span class="absolute bottom-0 left-0 w-full h-full bg-blue-600 transition-transform duration-300 origin-bottom scale-y-0 group-hover:scale-y-100 -z-10"></span>
                    </li>
                ))}
            </ul>
        </section>
    );
}