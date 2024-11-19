import { Footer } from "../layout/footer";
import { NavLinks } from "../layout/navlinks";
import { Clients } from "../layout/clients";
import { Paginations } from "../components/pagination";
import { CategoryList } from "@/components/categorylist";
import { ProductList } from "@/components/productlist";

export function ShopPage() {
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