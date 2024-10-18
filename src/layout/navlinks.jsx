export function NavLinks ({ toggleMenu }) {    
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
                <i class="fa-regular fa-user"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i onClick={toggleMenu}className="fa-solid fa-bars"></i>
            </div>
        </div>
        </>
    )
}