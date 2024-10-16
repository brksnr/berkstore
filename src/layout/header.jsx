import { useState } from "react";
import Buttons from "../components/buttons";

export function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <div className="hidden lg:flex justify-between p-4 bg-blue-500"> 
            <div className="flex justify-between gap-4 font-inter">
                <div><i class="fa-solid fa-phone"></i> (225) 555-0118</div>
                <div><i class="fa-regular fa-envelope-open"></i> michelle.rivera@example.com</div>
            </div>
            <div>
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="flex justify-between gap-1">
                <div>
                    <p>Follow Us :</p>
                </div>
                <div className="flex gap-2 items-center">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
        <div className="flex justify-between p-4 items-center">
            <div className="flex items-center gap-24">
                <h1 className="h2">BerkStore</h1>
                <div className=" hidden lg:flex gap-4 font-inter">
                            <p>Home</p>
                                <div className="flex items-center gap-2">
                                 <p>Shop</p>
                                 <i class="fa-solid fa-caret-down"></i>
                                </div>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Contact</p>
                            <p>Pages</p>
                </div>
            </div>
            <div className="hidden lg:flex">
                        <div className="flex gap-9 items-center">
                            <div className="flex gap-1 font-inter">
                                <div className="flex items-center gap-1 ">
                                    <i class="fa-regular fa-user"></i>
                                    <p>Login</p>
                                    <p>/</p>
                                </div>
                                <p>Register</p>
                            </div>
                            <div className="flex gap-9">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-bars"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
            </div>
            <div className="flex gap-3 lg:hidden">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i onClick={toggleMenu}className="fa-solid fa-bars"></i>
            </div>
        </div>
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
                    <Buttons variant="primary" size="medium" label="Shop Now" />
                 </div>
            </div>
        </div>
        
        </>
    )
}