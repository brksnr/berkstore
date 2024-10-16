import Buttons from "../components/buttons";
import { Footer } from "../layout/footer";

export function ShopPage() {
    const shop1 = [
        { id: 1, title: "CLOTHS", count: "5 Items", imageUrl: "/images/homfull.png" },
        { id: 2, title: "SHOES", count: "7 Items", imageUrl: "/images/homfull.png" },
        { id: 3, title: "ACCESSORIES", count: "3 Items", imageUrl: "/images/homfull.png" },
        { id: 3, title: "ACCESSORIES", count: "3 Items", imageUrl: "/images/homfull.png" },
        
    ];
    const products = [
        { 
            id: 1, 
            image: "/images/hshop1.png", 
            title: "Graphic Design", 
            department: "English Department", 
            oldPrice: "$16.48", 
            newPrice: "$6.48" 
        },
        { 
            id: 2, 
            image: "/images/hshop2.png", 
            title: "Web Development", 
            department: "Computer Science", 
            oldPrice: "$25.00", 
            newPrice: "$15.00" 
        },
        { 
            id: 3, 
            image: "/images/hshop3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 3, 
            image: "/images/hshop3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 3, 
            image: "/images/hshop3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 3, 
            image: "/images/hshop3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 3, 
            image: "/images/hshop3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
        { 
            id: 3, 
            image: "/images/hshop3.png", 
            title: "Data Science", 
            department: "Mathematics", 
            oldPrice: "$30.00", 
            newPrice: "$20.00", 
        },
    ];
    return(
        <>
        
    <div className="flex flex-col items-center gap-3 bg-gray-100 py-10 lg:px-24">
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row w-full justify-between">
            <h5 className="h3">Shop</h5>
            <div className="flex gap-2">
                <p>Home</p>
                <p><i class="fa-solid fa-angle-right"></i></p>
                <p>Shop</p>
            </div>
    </div>
        <div className="flex flex-col gap-4 lg:flex-row justify-between px-24">
            {shop1.map((item) => (
                <div
                    key={item.id}
                    className="bg-cover bg-center w-96 h-96 flex items-center justify-center"
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
     <div className="flex flex-col items-center gap-10 py-10 lg:flex-row justify-between px-24">
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

        <div className="bg-white-500 flex justify-center ">
        <div className="flex flex-col gap-4 lg:flex-row flex-wrap">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center w-64">
                    <div>
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div className="flex flex-col items-center gap-5 py-10">
                        <p className="h5">{product.title}</p>
                        <p className="font-inter font-bold text-gray-500">{product.department}</p>
                        <p>
                            <span className="font-inter font-bold text-gray-500 ">{product.oldPrice}</span> 
                            <span className="text-green-500 font-bold"> {product.newPrice}</span>
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
        </div>
        </>
    )
}