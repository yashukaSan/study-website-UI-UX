import { Search, BookOpen, FileText } from 'lucide-react';

export default function Overview({ classN }) {
    return (
        <section className={classN} >
            <div className="grid grid-cols-2 bg-yellow-300">
                <div className="p-5 grid">
                    <p className="rounded-3xl bg-blue-200 text-blue-600 font-semibold w-[13rem]  text-center">
                        INSIDE EXAMWALISITE
                    </p>
                    <h2 className="text-6xl my-2 font-bold">
                        Study Smarter With the Right Resources
                    </h2>
                    <p className="text-lg mt-4">
                        Checkout Premium study materials available on our platform to boost up your Exam Preparation
                    </p>
                    <div className="flex justify-around">
                        <div className="animation bg-blue-600 text-white w-[10vw] h-[10vw] rounded-full animate-upDown delay-200  duration-300">
                            <Search className='relative left-13 bottom-4 bg-white rounded-full text-blue-500 p-1' />
                            <p className="font-bold text-xl text-center items-center relative top-5">Learn</p>
                        </div>
                        <div className="animation bg-blue-600 text-white w-[10vw] h-[10vw] rounded-full animate-upDown delay-200  duration-300">
                            <BookOpen className='relative left-13 bottom-4 bg-white rounded-full text-blue-500 p-1' />
                            <p className="font-bold text-xl text-center items-center relative top-5">Prepare</p>
                        </div>
                        <div className="animation bg-blue-600 text-white w-[10vw] h-[10vw] rounded-full animate-upDown delay-200  duration-300">
                            <FileText className='relative left-13 bottom-4 bg-white rounded-full text-blue-500 p-1' />
                            <p className="font-bold text-xl text-center items-center relative top-5">Practice</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 h-50 justify-between items-center align-center bg-blue-400">
                    <div className="bg-blue-200 w-[40vw]">
                        <h4>
                            Study Notes
                        </h4>
                        <p>
                            Clear and easy-to-easy understand notes for different subjects and exams to help you revise important concepts quickly.
                        </p>
                    </div>
                    <div className="bg-blue-200">
                        <h4>
                            Mock Tests
                        </h4>
                        <p>
                            Practice full-length mock tests and quizzes to test your knowledge and improve your exam performance.
                        </p>
                    </div>
                    <div className="bg-blue-200">
                        <h4>
                            Question Papers
                        </h4>
                        <p>
                            Solve previous year question papers and sample papers to understand exam patterns and important topics.
                        </p>
                    </div>
                    <div className="bg-blue-200">
                        <h4>
                            Study Guides
                        </h4>
                        <p>
                            Helpful guides and preparation stragiess to plan your studies and prepare effectively for exams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}