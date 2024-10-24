import { Footer } from "../layout/footer";
import { NavLinks } from "../layout/navlinks";
import { Clients } from "../layout/clients";
import { Button } from '../components/ui/button';
import { Paginations } from "../components/pagination";
import { CustomSelect } from "../components/customSelects";
import { CategoryList } from "@/components/categorylist";
import { ProductList } from "@/components/productlist";

export function ShopPage() {
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
    <NavLinks/>
    <div className="flex flex-col items-center gap-3 bg-gray-100 py-10 lg:px-24">
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:w-full lg:justify-between lg:px-11">
            <h5 className="h3">Shop</h5>
            <div className="flex gap-2">
                <p className="font-bold">Home</p>
                <p><i className="fa-solid fa-angle-right"></i></p>
                <p>Shop</p>
            </div>
        </div>
        <CategoryList/>
     </div>
     <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:justify-between lg:px-32">
            <div>
                <p className="font-inter font-bold text-gray-500">Showing all 12 results</p>
            </div>
            <div className="flex gap-3 items-center font-inter">
                <p className="text-gray-500">Views:</p>
                <div className="flex gap-3">
                <button className="border border-gray-400 rounded w-10 h-10"><i className="fa-solid fa-border-all"></i></button> 
                <button className="border border-gray-400 rounded w-10 h-10"><i className="fa-solid fa-list"></i></button> 
                </div>
            </div>
            <div className="flex gap-4 items-center">
            <CustomSelect/>
            <Button variant="default" size="sm">Filter</Button>
            </div>
        </div>

        <div className="bg-white-500 flex flex-col items-center">
        <ProductList/>
        <div className="mb-10 flex font-inter">
                    <Paginations/>
        </div>
        </div> 
        <Clients/>
        <Footer/>
        </>
    )
}