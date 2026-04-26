import { Send } from 'lucide-react';

export default function JoinUs() {
    return (
        <section className="py-16 px-4 bg-[#f4f7ff]">
            <div className="max-w-3xl m-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="bg-blue-100 text-blue-700 font-semibold text-sm rounded-full px-4 py-1.5">
                        Partner With Us
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4 mb-3 leading-tight">
                        Promote Your Learning Platform<br className="hidden sm:block" /> To Thousands Of Students
                    </h2>
                    <p className="text-gray-500 text-base">
                        Want to promote your courses, study materials, or learning platform? Submit your platform and connect with students looking for the best resources.
                    </p>
                </div>

                {/* Form card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Platform Name */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Platform Name</label>
                            <input
                                type="text"
                                placeholder="Enter your platform name"
                                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Website URL */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Website URL</label>
                            <input
                                type="url"
                                placeholder="https://yourwebsite.com"
                                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Promotion Type */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Promotion Type</label>
                            <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white">
                                <option value="">Select Option</option>
                                <option>Course Promotion</option>
                                <option>Study Materials</option>
                                <option>Mock Tests</option>
                                <option>Live Classes</option>
                                <option>Question Bank</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Target Exams */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Target Exams / Classes</label>
                            <input
                                type="text"
                                placeholder="E.g. NEET, JEE, Class 10, Class 12"
                                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Message - full width */}
                        <div className="sm:col-span-2 flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Message</label>
                            <textarea
                                placeholder="Tell us about your platform, courses, or resources you want to promote..."
                                rows={5}
                                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="button"
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-md shadow-blue-200"
                    >
                        <Send size={18} />
                        Submit Promotion Request
                    </button>
                </div>
            </div>
        </section>
    );
}