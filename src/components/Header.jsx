import logo from "../assets/Group.png"
import { Sun, ChevronDown, Menu, Moon, X, Search } from 'lucide-react'
import { useTheme } from '../ThemeContext'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ classN }) {

    const [hoveredIndex, setHoveredIndex] = useState(2);
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuContent = ['Home', 'Classes', 'Boards', 'Exmas', 'Study Materials', 'Exam Updates', 'Promote Your Brand'];
    const largeMenu = ['Classes', 'Boards', 'Exmas', 'Study Materials', 'Exam Updates', 'Promote Your Brand'];
    const menuOptions = [ 'classes','boards', 'exams', 'studyMaterials', 'examUpdates' ];
    const classes = ['Class 6-8', 'Class 9-10', 'Class 11-12', 'Competitive'];
    const boards = ['CBSE', 'ICSE',];
    const exams = ['CUET', 'NEET', 'JEE', 'Class 6-8', 'Class 9-10', 'Class 12', 'All'];
    const studyMaterials = ['Notes', 'Practice Papers', 'Reference Books'];
    const examUpdates = [
        'All Updates', 'CUET Updates', 'NEET Updates', 'JEE Updates',
        'Board Exam Updates', 'Admit Cards', 'Results', 'Syllabus Updates'
    ];
    const stateBoard = ['UP Board', 'Bihar Board', 'Rajathan Board', 'MP Board'];

    console.log(menuOptions[hoveredIndex]);
    console.log(menuOptions.indexOf(menuOptions[hoveredIndex]))
    classes.forEach(ele => console.log(ele));
    return (
        <>
            <section className={classN}>
                {/*LOGO AND SITE NAME*/}
                <div className="flex justify-center items-center gap-3 sm:gap-10 lg:gap-1 xl:gap-12 align-center p-2">
                    <img src={logo} alt="site logo" placeholder="blur" className="h-15 items-center m-auto border rounded-full " />
                    <h1 className="text-2xl text-center mt-4 text-black font-bold font-serif m-auto">ExamWaliSite</h1>
                </div>

                {/* Menu bar when screen size is lower than 768px */}

                <div className="flex w-[25%] lg:hidden justify-around items-center">
                    <button className="border border-[#a0a0a0] text-semibold rounded-full flex w-12 h-12 justify-center items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                        {theme === 'light' ? (<Moon className="w-9 h-9 " />) : (<Sun className="w-9 h-9 text-yellow-400" />)}
                    </button>
                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="lg:hidden" >
                        {!isMenuOpen ? <Menu size={30} /> : <X size={30} />}
                    </button>
                </div>

                {/*menu tabs when screen larger than 768px*/}

                <div className="lg:flex text-sm hidden gap-2 ">
                    <button >Home</button>
                    <ul className="flex items-center gap-1 justify-center" >
                        {largeMenu.map((ele, ind) => (
                            <li className="pr-1 m-auto  text-sm flex justify-center items-center align-center text-black" key={ind}>
                                {ele} <ChevronDown className="h-6 w-7" /></li>
                        ))}
                    </ul>
                    <button className="border rounded-full h-10 w-10 xl:w-12 xl:h-12 m-auto flex justify-around items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                        {theme === 'light' ? (<Moon className="w-6 h-6 xl:w-9 xl:h-9 text-grey-800" />) : (<Sun className="w-9 h-9 text-yellow-400" />)}
                        {/* <Sun className="text-yellow-300 bg-yellow-800 rounded-full" size={40} />*/}
                    </button>

                    <button className="border rounded-full h-10 w-10 xl:w-12 xl:h-12  m-auto flex justify-around items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                        <Search className="h-6 w-6 xl:w-9 xl:h-9 " />
                        {/* <Sun className="text-yellow-300 bg-yellow-800 rounded-full" size={40} />*/}
                    </button>
                    <button className="m-1 p-3 border rounded-xl bg-[#0087ff] text-black font-bold">
                        Sign In
                    </button>
                </div>

            </section>
            <AnimatePresence className="lg:hidden">
                {isMenuOpen && (
                    <motion.div
                        // 1. Where it starts (off-screen to the right)
                        initial={{ x: '100%' }}

                        // 2. Where it animates to (slides into view)
                        animate={{ x: 0 }}

                        // 3. Where it goes when 'isOpen' becomes false (slides back right)
                        exit={{ x: '100%' }}

                        // 4. Control the speed and feel
                        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                        className="z-100 absolute w-full backdrop-blur top-0 bg-[#010101]/70 h-full"
                    >
                        {/* Close Icon */}
                        <X onClick={() => setIsMenuOpen(false)} className="hover:cursor-pointer m-2 text-white ml-[90%]" size={50} />

                        <ul className="border pl-3">
                            {menuContent.map((ele, ind) => (
                                <li
                                    key={ind}
                                    className="border p-3 text-xl text-white"
                                    onMouseEnter={() => setHoveredIndex(ind)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className=" flex justify-between ">
                                    {ele}
                                    <ChevronDown
                                        className={hoveredIndex === ind ? "animate duration-400 rotate-180" : "animate duration-400 "}
                                    />
                                    </div>
                                    {/* <div>
                                        {(hoveredIndex === ind) && 
                                            <ul>
                                                {menuOptions[ind].map((el, ind2)=> (
                                                    <li key={ind2}>{el}</li>
                                                ))}
                                            </ul>
                                        }
                                    </div> */}
                                </li>
                            ))}
                        </ul>
                        <div className="border grid gap-3">
                            <label className="flex border mx-3 p-2" >
                                <Search /><input placeholder='Search' className="border w-full p-1" />
                            </label>
                            <button>
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}