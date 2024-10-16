import { Header } from "../layout/header";

export function HomePage() {
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


    return (
        <>
        <Header/>
        <div className="flex flex-col items-center bg-gray-50 pb-20">
            <div>
                <div className="text-center my-10 flex flex-col gap-4  ">
                    <h4 className="h4">EDITOR'S PICK</h4>
                    <p className="grayP">Problems trying to resolve <br/>the conflict between </p>
                </div>
                <div className="flex flex-col gap-4 ">
                    <div className="bg-[url('/images/shopcard1.png')] w-80 h-96 bg-cover flex items-end">
                    <button className="shopCardButton">MEN</button>
                    </div>
                    <div className="bg-[url('/images/shopcard2.png')] w-80 h-96 bg-cover flex items-end">
                    <button className="shopCardButton">WOMEN</button>
                    </div>
                        <div className="flex flex-col gap-4">
                                <div className="bg-[url('/images/shopcard3.png')] w-80 h-52 bg-cover bg-center flex items-end">
                                    <button className="shopCardButton">ACCESSORIES</button>
                                </div>
                                <div className="bg-[url('/images/shopcard4.png')] w-80 h-52 bg-cover bg-center flex items-end">
                                    <button className="shopCardButton">KIDS</button>
                                </div>
                        </div>
                </div>
            </div>
        </div>

        <div>
        <div className="flex flex-col items-center mt-10 gap-10">
            <div className="flex flex-col gap-3 text-center">
            <h3 className="h4 text-gray-500">Featured Products</h3>
            <h3 className="h4">BESTSELLER <br/> PRODUCTS</h3>
            <p className="grayP">Problems trying to resolve the<br/>conflict between</p>
            </div>
        <div>
            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center w-80">
                    <div >
                    <img  src={product.image} alt={product.title}/>
                    </div>
                    <div className="flex flex-col items-center gap-3 pt-5 pb-16">
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
        </div>
        </div>
        </>
    )
}