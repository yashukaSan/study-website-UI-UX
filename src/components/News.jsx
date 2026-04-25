import i1 from '../assets/sk2.jpg';
import i2 from '../assets/sk3.jpg';
import i3 from '../assets/s4.jpg';
import i4 from '../assets/s6.jpg';
import {useState} from 'react';
import {ChevronRight, ChevronLeft, Dot } from 'lucide-react'

export default function News(){
    const images = [
        [
            i1,
            "STUDY TIPS",
            "MAR 27, 2026",
            "How To Build An Effective Daily Study Routine"
        ], [
            i2,
            "CBSE GUIDE",
            "MAR 18, 2026",
            "Best Study Plan For Class 12 Board Exams"
        ], [
            i3,
            "NEET GUIDE",
            "MAR 16, 2026",
            "How To Prepare For NEET In 6 Months"
        ], [
            i4,
            "STUDY TIPS",
            "MAR 20, 2026",
            "Top Study Strategies To Crack JEE Main"
        ]];
    const [imgNum, setImgNum ] =useState(2);

    //Next image function
    const imgNext = () => {
        if (imgNum < 3) setImgNum(imgNum + 1)
        else setImgNum(0);
    };

    //Prev Image function
    const imgPrev = () => {
        if (imgNum > 0) setImgNum(imgNum - 1)
        else setImgNum(3);
    };

    return (
        <section className="grid"> 
            <div>
                Latest Article
            </div>
            <h1>
                Startegy toa Score High in Your Exam
            </h1>
            <p>
                Explore study strategies, exam preparation tips, and helpful guides designed to support your lewarning journey.
            </p>
            <div className="border p-0 ">
                <div className="flex border p-0 justify-center items-center"> 
                    <ChevronLeft
                        className="bg-[#dedede] z-10 absolute rounded-full p-2 hover:cursor-pointer left-3 lg:left-10 xl:left-20 h-15 w-15 " 
                        onClick={()=>imgPrev()}
                     />
                    <img
                     src={images[imgNum][0]}
                     className="w-[90%] h-100 z-0 object-contain" />
                    <ChevronRight
                     className="rounded-full bg-[#dedede] z-10 p-2 hover:cursor-pointer absolute right-3 lg:right-10 xl:right-20 h-15 w-15 " size={50} 
                     onClick={()=>imgNext()}
                     />
                </div>
                <div className="flex gap-1 items-center" >
                    <h4>
                        {
                            images[imgNum][1]
                        }
                    </h4>
                    <Dot />
                    <p>{images[imgNum][2]}</p>
                </div>
                <h2 className="text-xl lg:text-3xl font-bold font-sans">
                    {images[imgNum][3]}
                </h2>
            </div>
        </section>
    );
}