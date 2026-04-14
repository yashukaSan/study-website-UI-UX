import logo from "../assets/Group.png"
import { Sun, Menu, Moon, X, Search } from 'lucide-react'
import { useTheme } from '../ThemeContext'
import { useState } from 'react';

function MenuDisplay(){
    return(
        <>
        <section>
            <p>MENU</p>
            <X size={30} />
        </section>
        </>
    )
}

export default function Header({ classN }) {
    const { theme, toggleTheme } = useTheme();
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const menuContent = ['Menu', 'Home', 'Classes', 'Boards', 'Exmas', 'Study Materials', 'Exam Updates', 'Promote Your Brand'];
    const classes =[];
    const boards = [];
    const exams = [ '' ];
    const studyMaterials = [ 'Notes', 'Practice Papers', 'Reference Books' ];
    const examUpdates = [
        'All Updates', 'CUET Updates', 'NEET Updates', 'JEE Updates',
        'Board Exam Updates', 'Admit Cards', 'Results', 'Syllabus Updates'
    ];

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
                <button onClick={()=>setIsMenuOpen((prev)=> !prev)}>
                    {!isMenuOpen ? <Menu size={30} /> : <MenuDisplay />}
                    
                </button>
            </div>
            
        </section>
        <section>
        <ul className="border pl-3" >
            {menuContent.map((ele, ind)=> (
                <li className="border p-3 text-xl" key={ind}>{ele}</li>
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
        </section>
        </>
    );
}