import {FileText, ArrowUpRight} from 'lucide-react';

export default function Courses(){
    const types = ['All', 'CBSE', 'NEET', 'JEE', 'CUET', 'State Boards', '12th Class', '11th Class', '10th Class'];
    const materials = {
        1: {name: 'CBSE', desc: "Clear and simple chapter-wise notes for CBSE subjects. Perfect for better understanding of important concepts."},
        2: {name: "CBSE Sample Papers", desc: "Practice with the CBSE sample question papers. Understanding the concepts and improve your confidence before exams."},
        3: { name: "CBSE Question Banks", desc: "Important questions collected from previous exams and textbooks. Useful for practicing and preparing for CBSE exams."},
        4: { name: "NEET Mock Tests", desc: "Important questions collected from previous exams and textbooks. Useful for practicing and preparing for NEET exams." },
        5: { name: "NCERT Books", desc: "Access NCERT textbooks for different classes and subjects. Helpful for building strong basics and preparing for school exams." },
        6: { name: "Class 10 Previous Papers", desc: "Practice previous year questions for Class 10 exams. Understand important topics and improve exam preparation." },
        7: { name: "NEET Biology Notes", desc: "Easy-to-understand biology notes based on NCERT topics. Great for quick revision and NEET exam prepartion." },
        8: { name: "NEET Previous Papers", desc: "Solve NEET previous year question papers to understand the exam difficulty and improve problem-solving skills." },
        9: { name: "JEE Physics Formulae", desc: "Quick reference list of important physics formulas for JEE. Helps you revise key concepts and solve problems faster." },
        10: { name: "JEE Main Mock Tests", desc: "Practice JEE Main mock tests in a real exam-style format. Improve speed, accuracy, and exam readlines." },
        11: { name: "CUET Prep Material", desc: "Study notes, practice questions, and guides for CUET exams. Helpful resources to prepare for university entrance tests." },
        12: { name: "Class 12 Study Guides", desc: "Simple study guides and important notes for Class 12 subjects. Great for quick revision and better exam preparation." },
    }
    return (
        <>
        <section>
            <div>
                Explore Study Materials
            </div>
            <h1>All The Study Resources You Need In One Place</h1>
            <p>
                Explore curated notes, NCERT books, mock tests, question papers, and exam preparation guides for classes, boards, and competitive exams like NEET, JEE, and CUET.
            </p>
            <ul className="flex gap-4 justify-center flex-wrap">
                {types.map((item, ind)=> (
                    <li key={"item-" + ind} className="bg-[#a9a9a9] text-xl py-2 px-4 rounded-4xl font-semibold flex justify-center items-center">
                        {item}
                    </li>
                ))}
                    
            </ul>
            <ul className="md:grid hidden md:grid-cols-2 lg:grid-cols-4 gap-12 mt-5 mx-10">
                {
                    Object.values(materials).map((item, index) => (
                        <li key={index} className="mb-2 rounded-lg border-b p-4 bg-[#ccc]" >
                            <div className="flex justify-between">
                                <FileText className="bg-[#fafafa] rounded-xl p-2 m-1" size={35}  />
                                <ArrowUpRight />
                            </div>
                            <h3 className="text-2xl my-2 font-bold">
                                {item.name}
                            </h3>
                            <p className="text-xl px-1">
                                {item.desc}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </section>
        </>
    );
}