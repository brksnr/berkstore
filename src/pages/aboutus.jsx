import { useState } from "react";
import Buttons from "../components/buttons";
import { NavLinks } from "../layout/navlinks";

export function AboutUsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        {isMenuOpen && (
                <div className="flex flex-col bg-gray-100 items-center gap-8 text-gray-500 h3 py-16 lg:hidden">
                    <p className="text-black">Home</p>
                    <p>Product</p>
                    <p>Pricing</p>           
                    <p>Contact</p>
                    <p>Shop</p>
                    <div className="flex flex-col gap-9 items-center text-blue-400">
                            <div className="flex gap-1 font-inter">
                                <div className="flex items-center gap-1 ">
                                    <i class="fa-regular fa-user"></i>
                                    <p>Login</p>
                                    <p>/</p>
                                </div>
                                <p>Register</p>
                            </div>
                            <div className="flex flex-col gap-9">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-bars"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                </div>
            )}
        <div>
                <div>
                        <div>
                                <div className="flex flex-col items-center justify-center text-center gap-5 pt-24">
                                    <h1 className="h2">ABOUT US</h1>
                                    <p className="grayP">We know how large<br/> objects will act, but things<br/> on a small scale just do <br/>not act that way.</p>
                                    <Buttons variant="primary" size="medium" label="Get Quote Now"/>
                                </div>
                                <div className="bg relative inline-block">
                                    <img src="/images/aboutus/about1.png" className="relative z-10"/>
                                </div>
                        </div>
                </div>

                <div>
                        <div>
                            <div className="flex flex-col items-center text-center gap-16 py-24">
                                    <div className="flex flex-col gap-8">
                                        <p className="greenP">Problems trying</p>
                                        <p className="h3">Met minim Mollie non<br/> desert Alamo est sit<br/> cliquey dolor do met<br/> sent.</p>
                                    </div>
                                    <div>
                                        <p className="grayP">Problems trying to resolve the conflict between<br/> the two major realms of Classical physics:<br/> Newtonian mechanics </p>
                                    </div>
                            </div>
                        </div>
                </div>

                <div>
                        <div>
                                <div className="flex flex-col items-center gap-24">
                                        <div className="flex flex-col items-center">
                                            <h1 className="h1">15K</h1>
                                            <p className="grayP">Happy Costumers</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h1 className="h1">150K</h1>
                                            <p className="grayP">Monthly Visitors</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h1 className="h1">15</h1>
                                            <p className="grayP">Countries Worldwide</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h1 className="h1">100+</h1>
                                            <p className="grayP">Top Partners</p>
                                        </div>
                                </div>
                        </div>
                </div>

                <div>
                    
                </div>
        </div>
        </>
    )
}