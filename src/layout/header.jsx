import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { NavLinks } from "./navlinks"

const carouselItems = [
    {
      title: "GROCERIES DELIVERY",
      subtitle: "We know how large objects will act, but things on a small scale just do not act that way.",
      image: "/images/header2.jpg",
    },
    {
      title: "FRESH VEGETABLES",
      subtitle: "Eat healthy with our selection of fresh, organic vegetables delivered to your doorstep.",
      image: "/images/bestites.jpg",
    },
    {
      title: "GOURMET MEALS",
      subtitle: "Experience restaurant-quality meals prepared by top chefs, now available for delivery.",
      image: "/images/header.jpg",
    },
    {
        title: "GOURMET MEALS",
        subtitle: "Experience restaurant-quality meals prepared by top chefs, now available for delivery.",
        image: "/images/editorspick4.png",
      },
  ]

const CustomArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-24 ${direction === 'left' ? 'rotate-180' : ''}`}
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Header() {
  return (
    <>
    <NavLinks/>
    <Carousel className="w-full relative">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div>
            <div className=" bg-cover h-screen bg-center flex justify-center items-center lg:justify-start lg:pl-64" 
            style={{ backgroundImage: `url(${item.image})` }}>
                
                <div className="flex flex-col gap-7 items-center lg:items-start">
                    <p className="h6 text-white">SUMMER 2020</p>
                    <p className="text-center h1 text-white flex flex-col lg:flex-row lg:gap-5">NEW <p>COLLECTİON</p></p> 
                    <p className="text-center h6 text-white lg:text-left">We know how large objects<br/> will act, but things on a<br/> small scale.</p>
                    <Button variant="default" size="lg">SHOP NOW</Button>
                 </div>
            </div>
        </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent border-none">
        <CustomArrow direction="left" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent border-none">
        <CustomArrow direction="right" />
      </CarouselNext>
    </Carousel>
    </>
  )
}
