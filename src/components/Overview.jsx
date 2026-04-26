import { Search, BookOpen, FileText, CheckCircle } from 'lucide-react';

export default function Overview({ classN }) {
    const features = [
        {
            icon: <Search size={22} className="text-blue-600" />,
            title: "Study Notes",
            desc: "Clear and easy-to-understand notes for different subjects and exams to help you revise important concepts quickly.",
        },
        {
            icon: <CheckCircle size={22} className="text-blue-600" />,
            title: "Mock Tests",
            desc: "Practice full-length mock tests and quizzes to test your knowledge and improve your exam performance.",
        },
        {
            icon: <FileText size={22} className="text-blue-600" />,
            title: "Question Papers",
            desc: "Solve previous year question papers and sample papers to understand exam patterns and important topics.",
        },
        {
            icon: <BookOpen size={22} className="text-blue-600" />,
            title: "Study Guides",
            desc: "Helpful guides and preparation strategies to plan your studies and prepare effectively for exams.",
        },
    ];

    const circles = [
        { icon: <Search size={28} className="text-blue-600" />, label: "Learn" },
        { icon: <BookOpen size={28} className="text-blue-600" />, label: "Prepare" },
        { icon: <FileText size={28} className="text-blue-600" />, label: "Practice" },
    ];

    return (
        <section className="bg-[#f4f7ff] py-16 px-4">
            <div className="max-w-6xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text + Circles */}
                <div className="flex flex-col gap-6">
                    <span className="bg-blue-100 text-blue-700 font-semibold text-sm rounded-full px-4 py-1.5 w-fit">
                        INSIDE EXAMWALISITE
                    </span>
                    <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
                        Study Smarter With the <span className="text-blue-600">Right Resources</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Checkout premium study materials available on our platform to boost your exam preparation.
                    </p>

                    {/* Animated circles */}
                    <div className="flex gap-6 mt-2">
                        {circles.map((c, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 shadow-lg shadow-blue-200 animate-bounce" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}>
                                    <div className="bg-white rounded-full p-1">
                                        {c.icon}
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{c.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Feature cards grid */}
                <div className="grid grid-cols-2 gap-4">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 group">
                            <div className="bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 rounded-xl w-10 h-10 flex items-center justify-center mb-3">
                                {f.icon}
                            </div>
                            <h4 className="font-bold text-gray-900 text-base mb-1">{f.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}