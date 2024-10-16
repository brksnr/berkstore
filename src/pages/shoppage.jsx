import { useState } from "react";
import Buttons from "../components/buttons";
import { Footer } from "../layout/footer";
import { NavLinks } from "../layout/navlinks";
import { Clients } from "../layout/clients";

export function ShopPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const shop1 = [
        { id: 1, title: "CLOTHS", count: "5 Items", imageUrl: "/images/shop/shop1.png" },
        { id: 2, title: "SHOES", count: "7 Items", imageUrl: "/images/shop/shop2.png" },
        { id: 3, title: "ACCESSORIES", count: "3 Items", imageUrl: "/images/shop/shop3.png" },
        { id: 4, title: "ACCESSORIES", count: "4 Items", imageUrl: "/images/shop/shop4.png" },
        { id: 4, title: "ACCESSORIES", count: "10 Items", imageUrl: "/images/shop/shop5.png" },  
    ];
    const products = [
        { 
            id: 1, 
            image: "/images/bestseller/bs1.png", 
            title: "Graphic Design", 
            department: "English Department",
            oldPrice: "$16.48", 
            newPrice: "$6.48" 
        },
        { 
            id: 2, 
            image: "/images/bestseller/bs2.png", 
            title: "Web Development", 
            department: "Computer Science", 
            oldPrice: "$25.00", 
            newPrice: "$15.00" 
        },
        { 
            id: 3, 
            image: "/images/bestseller/bs3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 4, 
            image: "/images/bestseller/bs4.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 5, 
            image: "/images/bestseller/bs5.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 6, 
            image: "/images/bestseller/bs6.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 7, 
            image: "/images/bestseller/bs7.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 8, 
            image: "/images/bestseller/bs5.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
    ];
    return(
        <>
    <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    {isMenuOpen && (
                <div className="flex flex-col items-center gap-8 text-gray-500 h3 py-16 lg:hidden">
                    <p className="text-black">Home</p>
                    <p>Product</p>
                    <p>Pricing</p>           
                    <p>Contact</p>
                </div>
            )}
    <div className="flex flex-col items-center gap-3 bg-gray-100 py-10 lg:px-24">
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:w-full lg:justify-between lg:px-11">
            <h5 className="h3">Shop</h5>
            <div className="flex gap-2">
                <p className="font-bold">Home</p>
                <p><i class="fa-solid fa-angle-right"></i></p>
                <p>Shop</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row justify-between px-24">
            {shop1.map((item) => (
                <div
                    key={item.id}
                    className="bg-cover bg-center w-80 h-80 flex items-center justify-center lg:w-60 lg:h-60"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                    <div className="flex flex-col items-center gap-4 h4 text-white">
                        <p>{item.title}</p>
                        <p>{item.count}</p>
                    </div>
                </div>
            ))}
        </div>  
     </div>
     <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:justify-between lg:px-32">
            <div>
                <p className="font-inter font-bold text-gray-500">Showing all 12 results</p>
            </div>
            <div className="flex gap-3 items-center font-inter">
                <p className="text-gray-500">Views:</p>
                <div className="flex gap-3">
                <button className="border border-gray-400 rounded w-10 h-10"><i class="fa-solid fa-border-all"></i></button> 
                <button className="border border-gray-400 rounded w-10 h-10"><i class="fa-solid fa-list"></i></button> 
                </div>
            </div>
            <div>
            <Buttons variant="primary" size="small" label="Filter" />
            </div>
        </div>

        <div className="bg-white-500 flex flex-col items-center">
        <div className="lg:flex lg:flex-wrap lg:gap-4 lg:justify-center">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center w-80">
                    <div >
                    <img  src={product.image} alt={product.title}/>
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-3 pb-16">
                        <p className="h5">{product.title}</p>
                        <p className="grayP">{product.department}</p>
                        <p>
                            <span className="grayP">{product.oldPrice}</span> 
                            <span className="greenP"> {product.newPrice}</span>
                        </p>
                        <div className="flex gap-1">
                            <button className="w-4 h-4 rounded-full bg-blue-500"></button>
                            <button className="w-4 h-4 rounded-full bg-green-800"></button>
                            <button className="w-4 h-4 rounded-full bg-orange-800"></button>
                            <button className="w-4 h-4 rounded-full bg-black"></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="mb-10 flex font-inter">
                    <button className="border-2 bg-gray-100 w-16 h-16 rounded-l-lg grayPt">First</button> 
                    <button className="border w-10 h-16">1</button> 
                    <button className="border bg-green-500 w-10 h-16 ">2</button> 
                    <button className="border w-10 h-16">3</button>
                    <button className="border-2 w-16 h-16 rounded-r-lg greenP">Next</button>
        </div>
        </div> 
        <Clients/>
        <Footer/>
        </>
    )
}