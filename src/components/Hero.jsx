import {Target, Search, MoveDown} from 'lucide-react';


export default function Hero(){
    const resurceType = [['CUET', "bg-yellow-500"], ['CBSE', 'bg-blue-600'], ['NEET', 'bg-green-500'], ['JEE', 'bg-pink-500'], ['CUET', "bg-yellow-500"]];
    const exams = ['CBSE', 'NEET', 'JEE', 'CUET', 'Class 10', 'Class 12'];

    return (
        <section className="border pt-5 text-center grid gap-4">
            <div className="flex justify-center text-lg m-auto ">
                <Target />&nbsp;&nbsp;Find Resources For&nbsp;&nbsp;&nbsp; <div className=" text-xl relative overflow-hidden h-10 grid gap-2">
                {resurceType.map((el, ind) => (
                    <div key={ind} className={`${el[1]} h-full text-center text-white rounded-xl px-3 animation animate-upward-move mb-1`}>
                        {el[0]}
                    </div>))
                }</div>
            </div>
            <div className="font-bold text-6xl">
                Find The Best Study<br /> Material For Every Exam
            </div>
            <p>
                Access study materials, notes, books, and preparation resources for <br />
                CBSE, NEET, JEE, CUET and more
            </p>
            <label className="flex gap-3 justify-around p-4 bg-[#f0f0f0] w-[25%] rounded-xl m-auto">
                <Search /> <input className="rounded-xl pl-5 text-black text-sm  w-[70%]" placeholder="Search notes, books, sample paper, etc, " /> <button className="border bg-[#0056ff] text-white rounded-3xl w-40 p-2">Search Resources</button>
            </label>
            <div className="flex gap-3 justify-center">
                {exams.map(el => (<div className="border p-2 rounded-3xl w-25 text-lg">{el}</div>))}
            </div>

            <div className="h-40 overflow-hidden">
                <div className="border-t-5  w-[48vw] left-[25.56vw] rounded-full z-0 h-[65vw] absolute "> </div>
                <MoveDown size={70} className="animate-wiggle pt-15  m-auto z-100" />
                <p className="animate-wiggle m-auto z-100" >Explore More</p>
            </div>
            
        </section>
    );
}