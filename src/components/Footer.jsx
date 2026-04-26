import { CircleHelp, FileText, ChevronDown, BookOpen, GraduationCap, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const iconMap = {
    CircleQuestionMark: <CircleHelp size={20} className="text-blue-500 shrink-0 mt-0.5" />,
    FileText: <FileText size={20} className="text-purple-500 shrink-0 mt-0.5" />,
    GraduationCap: <GraduationCap size={20} className="text-green-500 shrink-0 mt-0.5" />,
    BookOpen: <BookOpen size={20} className="text-orange-500 shrink-0 mt-0.5" />,
    Support: <MessageCircle size={20} className="text-pink-500 shrink-0 mt-0.5" />,
};

const tagColors = {
    General: "bg-blue-50 text-blue-600",
    Content: "bg-purple-50 text-purple-600",
    Access: "bg-orange-50 text-orange-600",
    Support: "bg-pink-50 text-pink-600",
};

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { icon: 'CircleQuestionMark', tag: 'General', q: "Is all content really free on this website?", a: "Yes, all study materials on our website are completely free for students. We don't charge any fee." },
        { icon: 'CircleQuestionMark', tag: 'General', q: 'Do you provide any paid courses or video lectures?', a: "No, we don't offer any paid courses or video lectures. Everything available on our website is free." },
        { icon: 'FileText', tag: 'Content', q: "What type of study material is available?", a: "We provide notes, PDFs, MCQs, question banks, and practice materials for students." },
        { icon: 'GraduationCap', tag: 'Content', q: "Which classes or exams do you cover?", a: "We mainly cover Class 9th, 10th, 11th and 12th study materials. We also provide content for competitive exams like CUET UG, JEE, and NEET. Our content is updated regularly to match the latest syllabus." },
        { icon: 'BookOpen', tag: 'Access', q: "Do I need to create an account to download PDFs?", a: "No, you can access and download PDFs for free without logging in. However, to attempt quizzes and tests and get results and analysis, you need to create an account and log in." },
        { icon: 'GraduationCap', tag: 'Content', q: "Is your content updated regularly?", a: "Yes, we keep updating our content so students get the latest and most useful study materials." },
        { icon: 'Support', tag: 'Support', q: "How can I contact you for support?", a: "You can contact us through our contact page or email for any queries. Our support team is available 24/7." },
    ];

    const toggle = (ind) => setOpenIndex(prev => (prev === ind ? null : ind));

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl m-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="bg-blue-50 text-blue-600 font-semibold text-sm rounded-full px-4 py-1.5 border border-blue-100">
                        FAQ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4 mb-3">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-gray-500 text-base">
                        Find answers to common questions about our platform, courses, and services.
                        Can't find what you're looking for?{' '}
                        <a href="/contact" className="text-blue-600 font-medium hover:underline">Contact our support team.</a>
                    </p>
                </div>

                {/* Accordion */}
                <ul className="flex flex-col gap-3">
                    {faqs.map((item, ind) => (
                        <li
                            key={ind}
                            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === ind ? 'border-blue-200 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}
                        >
                            <button
                                onClick={() => toggle(ind)}
                                className="w-full flex items-start gap-3 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                            >
                                {iconMap[item.icon]}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[item.tag] || 'bg-gray-100 text-gray-600'}`}>
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 leading-snug">{item.q}</h3>
                                </div>
                                <ChevronDown
                                    size={18}
                                    className={`text-gray-400 shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === ind ? 'rotate-180 text-blue-500' : ''}`}
                                />
                            </button>

                            {/* Answer */}
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === ind ? 'max-h-40' : 'max-h-0'}`}>
                                <div className="px-5 pb-4 pl-12 border-t border-gray-100">
                                    <p className="text-gray-600 text-sm leading-relaxed pt-3">{item.a}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}