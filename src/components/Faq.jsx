import { CircleQuestionMark, FileText, ChevronUp, BookOpen, GraduationCap} from 'lucide-react';
import {useState} from 'react';

export default function Faq(){
    const [indexNum, setIndexNum] = useState(NaN);
    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false)

    const faqs = [
        [
            'CircleQuestionMark',
            'General',
            "Is all content really free on this website?",
            "Yes, all study materials on our website are completely free for students. We don't charge any fee."
        ],
        [
            'CircleQuestionMark',
            'General',
            'Do you provide any paid courses or video lectures?',
            "No, we don't offer any paid courses or video lectures. Everything available on our website is free."
        ],
        [
            'FileText',
            'Content',
            "What type of study material is available?",
            "We provide notes, PDFs, MCQs, question banks, and practice materials for students."
        ],
        [
            'GraduationCap',
            'Content',
            "Which classes or exams do you cover?",
            "We mainly cover Class 9th, 10th, 11th and 12th study materials. We also provide content for competitive exams like CUET UG, JEE, and NEET. Our content is updated regularly to match tyhe latest syllabus."
        ],
        [
            'BookOpen',
            'Access',
            "Do I need to create an account to download PDFs?",
            "No, you can access and download PDFs for free without logging in. However, to attempt quizzes and tests and get result and analysis, you need to create and log in."
        ],
        [
            'GraduationCap',
            'Content',
            "Is your content updated regularly?",
            "Yes, we keep updating our content so students get the latest and usefiul study materials."
        ],
        [
            'CircleQuestionMark',
            'Support',
            "How can I contact you for support?",
            "You can contact us through our contact page or email for any queries."
        ]
    ]

    return (
        <section>
            <div>
                FAQ
            </div>
            <h1>Frequently Asked <span>Questions</span></h1>
            <p>
                Find answers to common questions about our platform, courses, and services. Can't find what you're looking for? Contact our support team.
                <br />
                <hr />
            </p>
            <ul>
                {faqs.map((item, ind)=>{
                    if (item[0] === "CircleQuestionMark"){
                    return(
                    <li>
                        <div onClick={()=>{
                            setIndexNum(ind);
                             if(indexNum===ind) setIsClicked(prev => !prev);}
                            }
                             >
                            <CircleQuestionMark />
                            <div>
                                <p>{item[1]}</p>
                                <h2>
                                    {item[2]} <ChevronUp />
                                </h2>
                            </div>
                        </div>
                    {    indexNum===ind && isClicked &&
                    (<div>
                            <hr />
                            <p>
                                {item[3]}
                            </p>
                        </div>
                )}
                    </li>
                )}
                    else if (item[0] === "GraduationCap"){
                        return(
                            <li>
                                <div onClick={() => {
                                    setIndexNum(ind);
                                    if (indexNum === ind) setIsClicked(prev => !prev);
                                }
                                }
                                >
                                    <GraduationCap />
                                    <div>
                                        <p>{item[1]}</p>
                                        <h2>
                                            {item[2]} <ChevronUp />
                                        </h2>
                                    </div>
                                </div>
                                {indexNum === ind && isClicked &&
                                    (<div>
                                        <hr />
                                        <p>
                                            {item[3]}
                                        </p>
                                    </div>
                                    )}
                            </li>
                        )
                    }
                    else if (item[0] === "BookOpen"){
                        return(
                        <li>
                                <div onClick={() => {
                                    setIndexNum(ind);
                                    if (indexNum === ind) setIsClicked(prev => !prev);
                                }
                                }
                                >
                                    <BookOpen />
                                    <div>
                                        <p>{item[1]}</p>
                                        <h2>
                                            {item[2]} <ChevronUp />
                                        </h2>
                                    </div>
                                </div>
                                {indexNum === ind && isClicked &&
                                    (<div>
                                        <hr />
                                        <p>
                                            {item[3]}
                                        </p>
                                    </div>
                                    )}
                        </li>
                        );
                    }
                    else if (item[0] === 'FileText'){
                        return (
                            <li>
                                <div onClick={() => {
                                    setIndexNum(ind);
                                    if (indexNum === ind) setIsClicked(prev => !prev);
                                }
                                }
                                >
                                    <FileText />
                                    <div>
                                        <p>{item[1]}</p>
                                        <h2>
                                            {item[2]} <ChevronUp />
                                        </h2>
                                    </div>
                                </div>
                                {indexNum === ind && isClicked &&
                                    (<div>
                                        <hr />
                                        <p>
                                            {item[3]}
                                        </p>
                                    </div>
                                    )}
                            </li>
                        )
                    }
                })}
            </ul>
            
        </section>
    );
}