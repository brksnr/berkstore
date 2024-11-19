import { Button } from '../components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function VitaClassic () {

    const carouselItems = [
        {
          src: '/images/karosel/karoselitem1.png',
          key: 1,
        },
        {
          src: '/images/karosel/karoselitem1.png',
          key: 2,
        },
        {
          src: '/images/karosel/karoselitem1.png',
          key: 3,
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
    return (
        <>
        <Carousel className="w-full relative">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="lg:flex lg:justify-evenly bg-blue-500 lg:pt-16">
            <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:items-start">
                <p className="h6 text-white">SUMMER 2020</p>
                <p className="text-center h1 text-white flex flex-col lg:gap-5 lg:items-start">Vita Classic<p>Product</p></p> 
                <p className="text-center h6 text-white">We know howd large objects<br className="lg:hidden"/> will act, but things on a<br/>small scale.</p>
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
                    <p className="h5 text-white">$16.48</p>
                    <Button variant="default" size="lg">SHOP NOW</Button>
                </div>
             </div>
             <img className="lg:w-96" src={item.src} alt={item.altText} />
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