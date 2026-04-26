import { Target, Search, MoveDown } from 'lucide-react';

export default function Hero() {
    const resourceType = [['CUET', "bg-yellow-500"], ['CBSE', 'bg-blue-600'], ['NEET', 'bg-green-500'], ['JEE', 'bg-pink-500'], ['CUET', "bg-yellow-500"]];
    const exams = ['CBSE', 'NEET', 'JEE', 'CUET', 'Class 10', 'Class 12'];

    return (
        <section className="relative pt-10 pb-0 text-center z-0 grid overflow-hidden gap-6 bg-white">
            {/* Decorative circle background */}
            <div className="border-t-4 border-blue-400 overflow-hidden w-[55vw] left-[22.5vw] rounded-full z-0 h-[65vw] absolute top-32 bg-gradient-to-b from-blue-100 via-white to-transparent opacity-60 pointer-events-none" />

            {/* Find Resources badge */}
            <div className="flex justify-center text-base font-medium m-auto bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-4 py-2 gap-2 items-center">
                <Target size={18} className="text-blue-500" />
                Find Resources For&nbsp;
                <span className="relative overflow-hidden h-7 inline-flex flex-col gap-1" style={{ width: '5.5rem' }}>
                    {resourceType.map((el, ind) => (
                        <span key={ind} className={`${el[1]} text-sm text-center text-white rounded-lg px-2 py-0.5 animation animate-upward-move`}>
                            {el[0]}
                        </span>
                    ))}
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-extrabold text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight px-4 z-10">
                Find The Best Study<br />
                <span className="text-blue-600">Material</span> For Every Exam
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-lg z-10 px-4">
                Access study materials, notes, books, and preparation resources for<br className="hidden sm:block" />
                CBSE, NEET, JEE, CUET and more
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 justify-between px-3 py-2 bg-white border-2 border-gray-200 shadow-lg lg:w-[35%] rounded-2xl m-auto z-10 hover:border-blue-400 transition-colors duration-200">
                <Search size={20} className="text-gray-400 ml-1 shrink-0" />
                <input
                    className="rounded-xl text-gray-700 text-base w-full outline-none bg-transparent placeholder:text-gray-400"
                    placeholder="Search notes, books, sample papers..."
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200">
                    Search
                </button>
            </div>

            {/* Exam tags */}
            <div className="flex gap-2 justify-center flex-wrap px-4 z-10">
                {exams.map(el => (
                    <span key={el} className="border border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-all duration-200 px-4 py-1.5 rounded-full text-sm font-medium text-gray-600">
                        {el}
                    </span>
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="h-28 overflow-hidden flex flex-col items-center justify-center z-10 mt-2">
                <MoveDown size={36} className="animate-bounce text-blue-500" />
                <p className="text-sm text-gray-400 mt-1">Explore More</p>
            </div>
        </section>
    );
}