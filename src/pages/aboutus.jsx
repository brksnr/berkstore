import { useState } from "react";
import { NavLinks } from "../layout/navlinks";
import { VideoCard } from "../components/videocard";
import { TeamPage } from "./teampage";
import { Clients } from "../layout/clients";
import { Footer } from "../layout/footer";
import { Button } from '../components/ui/button';

export function AboutUsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const isHidden = true;

    return (
        <>
        <NavLinks/>
        <div>
                <div className="lg:flex lg:justify-center">
                        <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly">
                                <div className="flex flex-col items-center justify-center text-center gap-5 pt-24 lg:items-start lg:ml-80">
                                    <h5 className="h6 hidden lg:flex">ABOUT COMPANY</h5>
                                    <h1 className="h2">ABOUT US</h1>
                                    <p className="grayP lg:text-left">We know how large<br className="lg:hidden"/> objects will act, but things<br className="lg:hidden"/> on a small scale just do <br/>not act that way.</p>
                                    <Button variant="default" size="lg">Get Quote Now</Button>
                                </div>
                                <div className="bg lg:bg2 relative inline-block lg:w-1/2">
                                    <img src="/images/aboutus/about1.png" className=""/>
                                </div>
                        </div>
                </div>

                <div>
                        <div className="lg:flex lg:justify-center">
                            <div className="flex flex-col items-center text-center gap-16 py-24 lg:flex-row">
                                    <div className="flex flex-col gap-8 lg:text-left">
                                        <p className="greenP">Problems trying</p>
                                        <p className="h3">Met minim Mollie non<br className="lg:hidden"/> desert Alamo est sit<br/> cliquey dolor do met<br/> sent.</p>
                                    </div>
                                    <div className="lg:text-left">
                                        <p className="grayP">Problems trying to resolve the conflict between<br/> the two major realms of Classical physics:<br className="lg:hidden"/> Newtonian mechanics </p>
                                    </div>
                            </div>
                        </div>
                </div>

                <div>
                        <div className="lg:justify-center lg:flex">
                                <div className="flex flex-col items-center gap-24 lg:flex-row lg:gap-40">
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

                <div className="flex justify-center my-24">
                        <div>
                            <VideoCard/>
                        </div>
                </div>
                <TeamPage/>
                <div className="py-16">
                <Clients/>
                </div>
                <Footer/>
        </div>
        </>
    )
}