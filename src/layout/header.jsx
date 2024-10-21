import { useState } from "react";
import { NavLinks } from "./navlinks";
import { Button } from '../components/ui/button';

export function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <div>
             {isMenuOpen && (
                <div className="flex flex-col items-center gap-8 text-inter text-gray-500 h3 py-16 lg:hidden">
                    <p>Home</p>
                    <p>Product</p>
                    <p>Pricing</p>           
                    <p>Contact</p>
                </div>
            )}
            <div className="bg-[url('/images/homfull.png')] bg-cover h-screen bg-center flex justify-center items-center lg:justify-start lg:pl-64">
                <div className="flex flex-col gap-7 items-center lg:items-start">
                    <p className="h6 text-white">SUMMER 2020</p>
                    <p className="text-center h1 text-white flex flex-col lg:flex-row lg:gap-5">NEW <p>COLLECTİON</p></p> 
                    <p className="text-center h6 text-white lg:text-left">We know how large objects<br/> will act, but things on a<br/> small scale.</p>
                    <Button variant="default" size="lg">SHOP NOW</Button>
                 </div>
            </div>
        </div>
        
        </>
    )
}