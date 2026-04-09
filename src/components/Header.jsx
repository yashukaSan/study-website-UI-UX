import logo from "../assets/Group.png"
import { Sun, Menu, Moon, X } from 'lucide-react'
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
    return (
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
    );
}