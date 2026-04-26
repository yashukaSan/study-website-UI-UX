import { FileText, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Courses() {
    const types = ['All', 'CBSE', 'NEET', 'JEE', 'CUET', 'State Boards', '12th Class', '11th Class', '10th Class'];
    const [active, setActive] = useState('All');

    const materials = [
        { name: 'CBSE Notes', tag: 'CBSE', desc: "Clear and simple chapter-wise notes for CBSE subjects. Perfect for better understanding of important concepts." },
        { name: "CBSE Sample Papers", tag: 'CBSE', desc: "Practice with CBSE sample question papers. Understand concepts and improve your confidence before exams." },
        { name: "CBSE Question Banks", tag: 'CBSE', desc: "Important questions from previous exams and textbooks. Useful for practicing and preparing for CBSE exams." },
        { name: "NEET Mock Tests", tag: 'NEET', desc: "Important questions from previous exams and textbooks. Useful for practicing and preparing for NEET exams." },
        { name: "NCERT Books", tag: 'CBSE', desc: "Access NCERT textbooks for different classes and subjects. Helpful for building strong basics." },
        { name: "Class 10 Previous Papers", tag: '10th Class', desc: "Practice previous year questions for Class 10 exams. Understand important topics and improve exam preparation." },
        { name: "NEET Biology Notes", tag: 'NEET', desc: "Easy-to-understand biology notes based on NCERT topics. Great for quick revision and NEET preparation." },
        { name: "NEET Previous Papers", tag: 'NEET', desc: "Solve NEET previous year question papers to understand the exam difficulty and improve problem-solving skills." },
        { name: "JEE Physics Formulae", tag: 'JEE', desc: "Quick reference list of important physics formulas for JEE. Helps you revise key concepts and solve problems faster." },
        { name: "JEE Main Mock Tests", tag: 'JEE', desc: "Practice JEE Main mock tests in a real exam-style format. Improve speed, accuracy, and exam readiness." },
        { name: "CUET Prep Material", tag: 'CUET', desc: "Study notes, practice questions, and guides for CUET exams. Helpful resources for university entrance tests." },
        { name: "Class 12 Study Guides", tag: '12th Class', desc: "Simple study guides and important notes for Class 12 subjects. Great for quick revision and exam preparation." },
    ];

    const filtered = active === 'All' ? materials : materials.filter(m => m.tag === active);

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl m-auto">
                {/* Section Label */}
                <div className="flex justify-center mb-3">
                    <span className="bg-blue-50 text-blue-600 font-semibold text-sm rounded-full px-4 py-1.5 border border-blue-100">
                        Explore Study Materials
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4 leading-tight">
                    All The Study Resources You Need<br className="hidden md:block" /> In One Place
                </h2>
                <p className="text-gray-500 text-center text-lg mb-10 max-w-2xl mx-auto">
                    Explore curated notes, NCERT books, mock tests, question papers, and exam preparation guides for classes, boards, and competitive exams like NEET, JEE, and CUET.
                </p>

                {/* Filter tabs */}
                <ul className="flex gap-2 justify-center flex-wrap mb-10">
                    {types.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setActive(item)}
                                className={`text-sm py-2 px-5 rounded-full font-semibold transition-all duration-200 border ${active === item
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                                    }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Cards grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filtered.map((item, index) => (
                        <li
                            key={index}
                            className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 rounded-xl p-2">
                                    <FileText size={22} className="text-blue-600" />
                                </div>
                                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-blue-500 transition-colors duration-200" />
                            </div>
                            <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">{item.tag}</span>
                            <h3 className="text-base font-bold text-gray-900 mt-2 mb-1">{item.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}