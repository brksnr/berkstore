import { Header } from "../layout/header";
import { Link } from 'react-router-dom';
import React from 'react';
import { Footer } from "../layout/footer";
import { ProductList } from "@/components/productlist";
import { BlogPage } from "./blogpage";
import { Clients } from "@/layout/clients";
import { Button } from "@/components/ui/button";
import { VitaClassic } from "@/components/vitaClassic";

export function HomePage() {
    return (
        <>
        <Header/>
        <div className="flex flex-col items-center bg-gray-50 pb-20 ">
            <div>
                <div className="text-center my-10 flex flex-col gap-4">
                    <h4 className="h4">EDITOR'S PICK</h4>
                    <p className="grayP">Problems trying to resolve <br className="lg:hidden"/>the conflict between </p>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row ">
                    <div className="bg-[url('/images/editorspick1.jpg')] w-80 h-96 bg-cover flex items-end lg:h-[40rem] lg:w-[40rem]">
                    <Link to="/shop"><button className="shopCardButton">MEN</button></Link>
                    </div>
                    <div className="bg-[url('/images/header2.jpg')] w-80 h-96 bg-cover flex items-end lg:h-[40rem] lg:w-[40rem]">
                    <Link to="/shop"><button className="shopCardButton">WOMEN</button></Link>
                    </div>
                        <div className="flex flex-col gap-4">
                                <div className="bg-[url('/images/editorspick3.png')] w-80 h-52 bg-cover bg-center flex items-end lg:h-[19rem]">
                                <Link to="/shop"><button className="shopCardButton">ACCESSORIES</button></Link>
                                </div>
                                <div className="bg-[url('/images/editorspick4.png')] w-80 h-52 bg-cover bg-center flex items-end lg:h-[19rem]">
                                <Link to="/shop"> <button className="shopCardButton">KIDS</button> </Link>
                                </div>
                        </div>
                </div>
            </div>
        </div>

        <div>
        <div className="flex flex-col items-center mt-10 gap-10">
            <div className="flex flex-col gap-3 text-center">
            <h3 className="h4 text-gray-500">Featured Products</h3>
            <h3 className="h4">BESTSELLER <br className="lg:hidden"/> PRODUCTS</h3>
            <p className="grayP">Problems trying to resolve the<br className="lg:hidden"/>conflict between</p>
            </div>
        <div className="lg:flex lg:flex-wrap lg:gap-4 lg:justify-center">
            <ProductList/>
        </div>      
        </div>
        </div>
        <VitaClassic/>
    <div>
        <div>
                <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:flex-row lg:mt-0">
                    <img className="hidden lg:flex lg:w-2/6 lg:ml-40" src="/images/partofneural2.png"/>
                    <div className="flex flex-col items-center gap-4 lg:flex lg:flex-col lg:items-start lg:gap-4 lg:ml-28">
                        <p className="grayP ">SUMMER 2020</p>
                        <p className="text-center h1  flex flex-col gap-2 lg:flex-row">Part of the<p>Neural</p>Universe</p> 
                        <p className="text-center grayP ">We know how large objects<br className="lg:hidden"/> will act, but things on a<br className="lg:hidden"/> small scale.</p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                    <Button variant="default" size="lg">BUY NOW</Button>
                    <Button className="text-blue-500" variant="outline" size="lg">Learn More</Button>
                    </div>
                    </div>
                    <img className="lg:hidden" src="/images/partofneural.png"/>
                </div>
        </div>
    </div>
    <BlogPage  isHomepage={true} />
    <Clients/>
    <Footer/>
        </>
    )
}