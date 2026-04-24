import logo from "../assets/Group.png"
import { Sun, ChevronDown, Menu, Moon, X, Search } from 'lucide-react'
import { useTheme } from '../ThemeContext'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ classN }) {

    const [hoveredIndex, setHoveredIndex] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuOptions = ['classes', 'boards', 'exams', 'studyMaterials', 'examUpdates'];
    const menuData = {
        classes: ['Class 6-8', 'Class 9-10', 'Class 11-12', 'Competitive'],
        boards: ['CBSE', 'ICSE'],
        exams: ['CUET', 'NEET', 'JEE', 'Class 6-8', 'Class 9-10', 'Class 12', 'All'],
        studyMaterials: ['Notes', 'Practice Papers', 'Reference Books'],
        examUpdates: ['All Updates', 'CUET Updates', 'NEET Updates', 'JEE Updates']
    };
    const [activeMenu, setActiveMenu] = useState('classes');

    return (
        <>
            <section className={classN}>
                {/*LOGO AND SITE NAME*/}
                <div className="flex justify-center items-center gap-3 mr-4 sm:gap-10 lg:gap-1 xl:gap-12 align-center p-2">
                    <img src={logo} alt="site logo" placeholder="blur" className="h-15 items-center m-auto border rounded-full " />
                    <h1 className="xl:text-2xl text-lg text-center mt-4 font-mono text-black font-bold xl:font-serif m-auto ">ExamWaliSite</h1>
                </div>

                {/* Menu bar when screen size is lower than 768px */}

                <div className="flex w-[30%] lg:hidden justify-around gap-4 items-center">
                    <button className="lg:border border-[#a0a0a0] text-semibold rounded-full flex w-15 h-15 justify-center items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                        {theme === 'light' ? (<Moon className="w-8 h-8 " />) : (<Sun className="w-8 h-8 text-yellow-400" />)}
                    </button>
                    <button className="lg:border rounded-full h-15 w-15 xl:w-12 xl:h-12 m-auto flex justify-around items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                        <Search className="h-8 w-8 " />
                        {/* <Sun className="text-yellow-300 bg-yellow-800 rounded-full" size={40} />*/}
                    </button>
                    <button className="m-1 p-3 border rounded-xl bg-[#0087ff] text-black font-bold">
                        Sign In
                    </button>
                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="lg:hidden" >
                        {!isMenuOpen ? <Menu size={30} /> : <X size={30} />}
                    </button>
                </div>

                {/*menu tabs when screen larger than 768px*/}

                <div className="lg:flex xl:w-[70vw] relative justify-between text-sm hidden lg:gap-1 xl:ml-4">
                    {/** Menu Options */}
                    <div className="flex gap-0 p-0 m-0 items-center xl:gap-1 justify-between" >
                        <button className=" xl:text-lg text-sm hover:font-bold p-1 hover:text-[#0078ff] m-0">
                            Home
                        </button>
                        <ul className="flex gap-2 items-center xl:gap-0 2xl:text-xl xl:text-lg ml-1 justify-between text-sm m-0" >
                            {menuOptions.map((option, ind) => (
                                <li
                                    key={"main-" + ind}
                                    className="relative animate duration-300 text-black   "
                                    onMouseEnter={() => {
                                        setHoveredIndex(ind);
                                        setActiveMenu(option)
                                        //setIsSubMenuOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredIndex(NaN);
                                        //setIsSubMenuOpen(false);
                                    }}
                                >
                                    <button
                                        key={"active-" + option}
                                        onMouseEnter={() => setActiveMenu(option)}
                                        className="hover:text-blue-500 flex justify-around w-full items-center"
                                    >
                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                        <ChevronDown
                                            className={hoveredIndex === ind ? "animate m-0 p-0 duration-400 rotate-180" : "animate m-0 p-0 duration-400 "}
                                        />
                                    </button>

                                    {/* Hover sub-menu options  */}
                                    <AnimatePresence>
                                        {hoveredIndex === ind &&
                                            (<ul className="absolute bg-white w-[10vw] l:w-[20vw] border xl:w-[10vw] p-2 grid list-disc list-inside rounded-xl">
                                                {menuData[activeMenu]?.map((item, index) => (
                                                    <motion.div
                                                        // 1. Where it starts (off-screen to the right)
                                                        initial={{ x: '-1vw' }}
                                                        // 2. Where it animates to (slides into view)
                                                        animate={{ x: "0%" }}
                                                        // 3. Where it goes when 'isOpen' becomes false (slides back right)
                                                        exit={{ x: '1vw' }}
                                                        // 4. Control the speed and feel
                                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
                                                        className="z-100 w-full bg-white top-0 text-[#010101]/70 h-full"
                                                    >
                                                    <li key={"up-" + index}>
                                                        <a className="hover:text-[#0056ff] hover:cursor-pointer">{item}</a>
                                                    </li>
                                                    </motion.div>
                                                ))}
                                            </ul>)}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                        <button className=" hover:font-bold 2xl:text-2xl xl:text-lg hover:text-[#0078ff]">
                            Promote Your Brand
                        </button>
                    </div>
                    {/* Theme, Search , Sign-in buttons */}
                    <div className="flex gap-3">
                        <button className="border rounded-full h-10 w-10 xl:w-12 xl:h-12 m-auto overflow-hidden flex justify-around items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                            {theme === 'light' ? (<Moon className="w-6 h-6 xl:w-12 hover:bg-black hover:text-white xl:h-12 text-grey-800" />) : (<Sun className="w-12  h-12 hover:bg-yellow-400 hover:text-black text-yellow-400" />)}
                        </button>

                        <button className="border rounded-full h-10 hover:cursor-pointer hover:bg-black hover:text-white w-10 xl:w-12 xl:h-12 m-auto flex justify-around items-center " onClick={toggleTheme} arial-label="Toggel Theme" >
                            <Search className="h-6 w-6 xl:w-9 xl:h-9 " />
                        </button>
                        <button className="m-1 p-3 hover:bg-[#00aaea] hover:cursor-pointer border rounded-xl bg-[#0087ff] text-black font-bold">
                            Sign In
                        </button>
                    </div>
                </div>
            </section >

            {/**Side Menu Open Screen */ }
            < AnimatePresence className = "lg:hidden bg-white" >
                { isMenuOpen && (
                    <motion.div
                        // 1. Where it starts (off-screen to the right)
                        initial={{ x: '100%' }}
                        // 2. Where it animates to (slides into view)
                        animate={{ x: 0 }}
                        // 3. Where it goes when 'isOpen' becomes false (slides back right)
                        exit={{ x: '100%' }}
                        // 4. Control the speed and feel
                        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                        className="z-100 absolute w-full lg:hidden backdrop-blur top-0 text-[#010101]/70 h-full"
                    >
                        {/* Menu Heading and Close Icon */}
                        <div className="flex justify-between">
                            <p className="text-4xl text-purple-600 hover:transition-shadow hover:shadow-xl border-b-4 h-full hover:shadow-purple-400 font-serif font-extrabold relative left-10 top-5 ">MENU</p>
                            <X onClick={() => setIsMenuOpen(false)} className="hover:cursor-pointer m-2 hover:shadow-xl transition-shadow rounded-full hover:shadow-black text-black" size={50} />
                        </div>
                        {/*Menu Options*/}
                        <ul className="border pl-3 text-black">
                            <button onClick={() => setIsMenuOpen(false)} className="text-xl w-full text-left font-bold px-6 py-3 hover:cursor-pointer hover:text-[#0078ff] hover:text-2xl">Home</button>
                            {menuOptions.map((option, ind) => (
                                <li
                                    key={"sub-" + ind}
                                    className="border-t animate duration-300 p-3 text-xl text-black font-bold px-6  "
                                    onMouseEnter={() => {
                                        setHoveredIndex(ind);
                                        setActiveMenu(option)
                                        //setIsSubMenuOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredIndex(NaN);
                                        //setIsSubMenuOpen(false);
                                    }}
                                >
                                    <button
                                        key={"sub-" + option}
                                        onMouseEnter={() => setActiveMenu(option)}
                                        className="hover:text-blue-500 flex justify-between w-full"
                                    >
                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                        <ChevronDown
                                            className={hoveredIndex === ind ? "animate duration-400 rotate-180" : "animate duration-400 "}
                                        />
                                    </button>

                                    {/* Hover sub-menu options  */}
                                    {hoveredIndex === ind &&
                                        (<ul className="border-t">
                                            {menuData[activeMenu]?.map((item, index) => (
                                                <li key={"hover-" + index}>
                                                    <a className="hover:text-[#0056ff] hover:cursor-pointer">{item}</a>
                                                </li>
                                            ))}
                                        </ul>)}
                                </li>
                            ))}
                            {/** Promote Your Brand Option */}
                            <li className=" border-t"><button className="text-xl font-bold px-6 py-3">Promote Your Brand </button></li>
                        </ul>
                        {/* last section */}
                        <div className="border grid gap-3">
                            <label className="flex border-2 mt-6 mx-3 p-4 w-[full] m-auto items-center rounded-3xl " >
                                <Search className="h-12 w-12 ml-5" /><input placeholder='Search' className="font-semibold rounded-4xl border w-[50%]  m-auto text-center p-1" />
                            </label>
                            <button className="bg-blue-400 hover:bg-blue-500 hover:transform hover:translate-y-[-3px] w-[40vw] p-5 rounded-xl text-2xl font-bold border m-auto hover:cursor-pointer ">
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                )
}
            </AnimatePresence >
        </>
    );
}