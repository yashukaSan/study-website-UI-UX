import { Target, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function StartPrep() {
    const [hoveredKey, setHoveredKey] = useState(null);

    const prepType = [
        {
            title: 'NEET Preparation',
            desc: 'Explore notes, mock tests, biology resources, and previous papers to prepare effectively for the NEET exam.',
            color: 'from-green-50',
        },
        {
            title: 'JEE Preparation',
            desc: 'Access physics formulas, practice papers, mock tests, and study materials designed for JEE preparation.',
            color: 'from-blue-50',
        },
        {
            title: 'CUET Preparation',
            desc: 'Find study guides, practice questions, and important resources to help succeed in the CUET entrance exam.',
            color: 'from-yellow-50',
        },
        {
            title: 'Class 12 Boards',
            desc: 'Discover notes, sample papers, and study guides to help you prepare for Class 12 board exams.',
            color: 'from-pink-50',
        },
    ];

    return (
        <section className="py-16 px-4 bg-[#f4f7ff]">
            <div className="max-w-6xl m-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-blue-100 text-blue-700 font-semibold text-sm rounded-full px-4 py-1.5">
                        Start Your Preparation
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
                        Start Preparing for Your <span className="text-blue-600">Upcoming Exam</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Choose your exam or class and explore curated study materials, notes, mock tests, and guides designed to help you prepare with confidence.
                    </p>
                </div>

                {/* Cards */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    {prepType.map((item, ind) => (
                        <li
                            key={ind}
                            className="relative flex flex-col pt-14 pb-8 px-6 border-r border-gray-200 last:border-r-0 group cursor-pointer overflow-hidden transition-all duration-300"
                            onMouseEnter={() => setHoveredKey(ind)}
                            onMouseLeave={() => setHoveredKey(null)}
                        >
                            {/* Blue fill on hover */}
                            <span className="absolute inset-0 bg-blue-600 transition-transform duration-300 origin-bottom scale-y-0 group-hover:scale-y-100 -z-10" />

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${hoveredKey === ind ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                                <Target size={30} />
                            </div>

                            {/* Content */}
                            <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${hoveredKey === ind ? 'text-white' : 'text-gray-900'}`}>
                                {item.title}
                            </h3>
                            <p className={`text-sm leading-relaxed flex-1 transition-colors duration-300 ${hoveredKey === ind ? 'text-blue-100' : 'text-gray-500'}`}>
                                {item.desc}
                            </p>
                            <p className={`flex items-center gap-2 mt-6 text-sm font-semibold transition-colors duration-300 ${hoveredKey === ind ? 'text-white' : 'text-blue-600'}`}>
                                Explore Resources
                                <ArrowRight size={16} />
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}