import { Link } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import md5 from 'md5';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function NavLinks () {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const user = useSelector((state) => state.client.user);
    const categories = useSelector((state) => state.product.categories);
    const emailHash = user && user.email ? md5(user.email.trim().toLowerCase()) : null;
    const gravatarUrl = emailHash
    ? `https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`
    : null; 
    const history = useHistory();
    const pushLogin = () => {
        history.push("/login")
    }
    

    return (
        <>
        
          <div className="hidden lg:flex justify-between p-4 bg-blue-500"> 
            <div className="flex justify-between gap-4 font-inter">
                <div><i className="fa-solid fa-phone"></i> (225) 555-0118</div>
                <div><i className="fa-regular fa-envelope-open"></i> michelle.rivera@example.com</div>
            </div>
            <div>
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="flex justify-between gap-1">
                <div>
                    <p>Follow Us :</p>
                </div>
                <div className="flex gap-2 items-center">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
        <div className="flex justify-between p-4 items-center">
            <div className="flex items-center gap-24">
                <h1 className="h2">BerkStore</h1>
                <div className=" hidden lg:flex gap-4 font-inter">
                <NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuLink asChild>
            <Link  className={navigationMenuTriggerStyle()}  to="/">
              Home
            </Link>
    </NavigationMenuLink>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Link to="/Shop">
        Shop
        </Link>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>
        <div className="flex gap-28 w-96 pl-10">
            <div className="flex flex-col gap-7 py-4">
                <p className="font-bold">Man</p>
                {categories
                .filter((category) => category.gender === 'e') 
                .map((category) => (
                <Link to={`/shop/${category.gender}/${category.title}`} key={category.id}>
                <p>{category.title}</p>
                </Link>
                ))}
            </div>
            <div className="flex flex-col gap-7 py-4">
                <p className="font-bold">Woman</p>
                {categories
                .filter((category) => category.gender === 'k')
                .map((category) => (
                <Link to={`/shop/${category.gender}/${category.title}`} key={category.id}>
                <p>{category.title}</p>
                </Link>
                ))}
            </div>
        </div>
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuLink asChild>
        <Link  className={navigationMenuTriggerStyle()} to="/aboutus">
              About
        </Link>      
    </NavigationMenuLink>
    <NavigationMenuLink asChild>
        <Link  className={navigationMenuTriggerStyle()} to="/">
              Blog
        </Link>      
    </NavigationMenuLink>
    <NavigationMenuLink asChild>
        <Link  className={navigationMenuTriggerStyle()} to="/contact">
              Contact
        </Link>
    </NavigationMenuLink>
    <NavigationMenuLink asChild>
        <Link  className={navigationMenuTriggerStyle()} to="/">
              Pages
        </Link>
    </NavigationMenuLink>
  </NavigationMenuList>
</NavigationMenu>
                </div>
            </div>
            <div className="hidden lg:flex">
                        <div className="flex gap-9 items-center">
                            <div className="flex gap-1 font-inter">
                            {user && user.name ? (
                                            <div className="flex items-center gap-2">
                                            {gravatarUrl && <img src={gravatarUrl} alt="User Avatar" className="rounded-full w-10 h-10" />}
                                            <p>{user.name}</p>
                                            </div>
                                          ) : (
                                            <div className="flex items-center gap-1">
                                            <i className="fa-regular fa-user"></i>
                                            <Link to="/login"><p>Login</p></Link>
                                            <p>/</p>
                                            <Link to="/signup"><p>Register</p></Link>
                                            </div>
                                          )}
                                
                            </div>
                            <div className="flex gap-9">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-bars"></i>
                            <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
            </div>
            <div className="flex gap-3 lg:hidden">
                <i className="fa-regular fa-user" onClick={pushLogin}></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i onClick={toggleMenu}className="fa-solid fa-bars"></i>
            </div>
        </div>
        {isMenuOpen && (
                <div className="flex flex-col items-center gap-8 text-inter text-gray-500 h3 py-16 lg:hidden">
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/product"><p>Product</p></Link>
                    <Link to="/"><p>Pricing</p></Link>
                    <Link to="/contact"><p>Contact</p></Link>
                    <Link to="/shop"><p>Shop</p></Link>
                </div>
            )}
        </>
    )
}


    




