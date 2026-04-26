import { Target, Rocket, MoveRight, Phone, Star } from 'lucide-react';

export default function Offer() {
    const stats = [
        { icon: <Target size={28} className="text-blue-400" />, value: "50K+", label: "Students Enrolled" },
        { icon: <Rocket size={28} className="text-green-400" />, value: "98%", label: "Success Rate" },
        { icon: <Star size={28} className="text-yellow-400" />, value: "1000+", label: "Study Materials" },
    ];

    return (
        <section className="py-16 px-4 bg-[#001030] text-white">
            <div className="max-w-4xl m-auto text-center">

                {/* Badge */}
                <span className="bg-blue-900/60 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-800">
                    Limited Time Offer
                </span>

                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl font-extrabold mt-5 mb-4 leading-tight">
                    Ready to Ace Your Exams<br className="hidden sm:block" />
                    <span className="text-blue-400"> with Confidence?</span>
                </h2>

                <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                    Join thousands of successful students who achieved their dreams with our comprehensive study materials and expert guidance.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className="bg-white/10 rounded-2xl p-4">
                                {s.icon}
                            </div>
                            <span className="text-4xl font-extrabold text-white">{s.value}</span>
                            <span className="text-gray-400 text-sm font-medium">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-2xl flex items-center gap-2 m-auto transition-all duration-200 shadow-lg shadow-blue-900">
                    Get Started Free <MoveRight size={20} />
                </button>

                {/* Contact */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-400 text-sm">
                    <p className="flex items-center gap-2">
                        <Phone size={16} className="text-blue-400" />
                        Call us: <span className="text-white font-semibold">+91 85958 XXX41</span>
                    </p>
                    <span className="hidden sm:block text-gray-600">|</span>
                    <p>FREE CONSULTATION &nbsp;·&nbsp; 24/7 SUPPORT</p>
                </div>
            </div>
        </section>
    );
}