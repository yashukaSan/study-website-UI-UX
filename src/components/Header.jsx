import logo from "../assets/Group.png"
import { Sun, ChevronDown, Menu, Moon, X, Search } from 'lucide-react'
import { useTheme } from '../ThemeContext'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ classN }) {

    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuContent = ['Menu', 'Home', 'Classes', 'Boards', 'Exmas', 'Study Materials', 'Exam Updates', 'Promote Your Brand'];
    // const classes = ['Class 6-8', 'Class 9-10', 'Class 11-12', 'Competitive'];
    // const boards = ['CBSE', 'ICSE',];
    // const exams = ['CUET', 'NEET', 'JEE', 'Class 6-8', 'Class 9-10', 'Class 12', 'All'];
    // const studyMaterials = ['Notes', 'Practice Papers', 'Reference Books'];
    // const examUpdates = [
    //     'All Updates', 'CUET Updates', 'NEET Updates', 'JEE Updates',
    //     'Board Exam Updates', 'Admit Cards', 'Results', 'Syllabus Updates'
    // ];
    // const stateBoard = ['UP Board', 'Bihar Board', 'Rajathan Board', 'MP Board'];

    return (
        <>
            <section className={classN}>
                <div className="flex">
                    <img src={logo} alt="site logo" placeholder="blur" className="h-15 m-3" />
                    <h1 className="text-2xl text-center mt-4 text-black dark:text-white">EXAMWALISITE</h1>
                </div>

                <div className="flex border w-[25%]">
                    <button className="border flex w-[50%] justify-around items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                        {theme === 'light' ? (<Moon className="w-9 h-9 text-grey-800" />) : (<Sun className="w-9 h-9 text-yellow-400" />)}
                        {/* <Sun className="text-yellow-300 bg-yellow-800 rounded-full" size={40} />*/}
                    </button>
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}>
                        {!isMenuOpen ? <Menu size={30} /> : <X size={30} />}

                    </button>
                </div>

            </section>
            <AnimatePresence>
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
                    // style={{
                    //     position: 'fixed',
                    //     top: 0,
                    //     right: 0,
                    //     width: '300px',
                    //     height: '100vh',
                    //     background: '#fff',
                    //     zIndex: 100
                    // }}
                    >
                        {/* Close Icon */}
                        <X onClick={() => setIsMenuOpen(false)} className="hover:cursor-pointer m-2 bg-black ml-[90%]" size={50} />

                        <ul className="border pl-3" >
                            {menuContent.map((ele, ind) => (
                                <li className="border p-3 text-xl flex justify-between text-white" key={ind}>
                                    {ele} <ChevronDown /></li>
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