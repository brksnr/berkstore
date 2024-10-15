import Buttons from "../components/buttons";

export function Header () {
    return (
        <>
        <div className="flex justify-between p-4 items-center">
            <h1 className="h2">BerkStore</h1>
                    <div className="hidden lg:flex">
                        <div className="flex gap-4 pr-96">
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
                        <div className="flex gap-9 items-center pl-96">
                            <div className="flex gap-1">
                                <div className="flex items-center gap-1">
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
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        <div>
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