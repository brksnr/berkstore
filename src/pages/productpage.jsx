import Buttons from "../components/buttons";
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { NavLinks } from "../layout/navlinks";
import { Clients } from "../layout/clients";
import { Footer } from "../layout/footer";

const items = [
    {
      src: '/images/products/product1.png',
      key: 1,
    },
    {
      src: '/images/products/product1.png',
      key: 2,
    },
  ];
const products = [
    {
      id: 1,
      image: "/images/products/product4.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 1,
      image: "/images/products/product5.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 1,
      image: "/images/products/product6.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 1,
      image: "/images/products/product7.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
  ];
  


export function ProductPage() {

  const titles = ["the quick fox jumps over", "the quick fox jumps over"];
  
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
      
    return (
        <>
        <NavLinks/>
        <div className="pt-7 pb-12 flex gap-3 items-center justify-center bg-gray-100 grayP">
            <p>Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p>Shop</p>
        </div>
        <div className="bg-gray-100 lg:flex lg:pl-80 lg:gap-16">
            <div className="flex flex-col items-start transform scale-90 lg:scale-100 lg:flex-row lg:w-3/12">
                <div>
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
        <div className="flex gap-4 my-4">
        <img src="/images/products/product1.png" className="w-24 h-24"/>
        <img src="/images/products/product2.png" className="w-24 h-24"/>
        </div>
            </div>
            
        </div>
        <div className=" lg:h-full lg:flex lg:flex-col transform scale-90">
                <div className="flex flex-col">
                    <h4 className="h5">Floating Phone</h4>
                    <div className="flex gap-1 items-center">
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <i className="fa-regular fa-star text-yellow-500"></i>
                    <p className="grayP">10 Reviews</p>
                    </div>
                </div>
                <h4 className="h5 mt-4">$1,139.33</h4>
                <div className="flex gap-2 mb-4">
                    <p className="grayP">Availability :</p>
                    <p className="greenP">In Stock</p>
                </div>
                <p className="grayP">Met minim Mollie non desert Alamo est sit cliquey dolor<br className="hidden lg:flex"/> do met sent. RELIT official consequent door ENIM RELIT Mollie.<br className="hidden lg:flex"/> Excitation venial consequent sent nostrum met.</p>
                <div className="border-t border-gray-400 w-full my-4"></div>
                <div className="flex gap-2 mb-10">
                    <button className="w-7 h-7 rounded-full bg-blue-500"></button>
                    <button className="w-7 h-7 rounded-full bg-green-800"></button>
                    <button className="w-7 h-7 rounded-full bg-orange-800"></button>
                    <button className="w-7 h-7 rounded-full bg-black"></button>
                </div>
                <div className="flex items-center gap-2">
                    <Buttons variant="primary" size="small" label="Select Options"/>
                    <button className="w-8 h-8 rounded-full border-1 border-gray-200"><i className="fa-regular fa-heart"></i></button>
                    <button className="w-8 h-8 rounded-full border-1 border-gray-200"><i className="fa-solid fa-cart-shopping"></i></button>
                    <button className="w-8 h-8 rounded-full border-1 border-gray-200"><i className="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>

        <div className="flex gap-14 items-center justify-center my-10">
              <p className="grayP underline">Descripton</p>
              <p className="grayP">Additional Information</p>
              <p className="grayP flex gap-2">Reviews<p className="greenP">(0)</p></p>   
          </div>
        <div className="transform scale-90 flex flex-col gap-10 lg:flex-row lg:justify-center lg:items-start ">

          <div className="lg:w-2/6">
            <img src="/images/products/product3.png" className="rounded-xl"/>
          </div>
          <div className="flex flex-col gap-10 lg:w-3/12">
            <h4 className="h4">the quick fox jumps over </h4>
            <p className="grayP">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            <br/><br/>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            <br/><br/>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className="flex flex-col gap-10">
  {titles.map((title, titleIndex) => (
    <div key={titleIndex} className="flex flex-col gap-3">
      <h4 className="h4">{title}</h4>
      <div className="grayP flex flex-col gap-3">
        {titles.map((item, index) => (
          <div key={index} className="flex gap-3 items-center">
            <i className="fa-solid fa-angle-right"></i>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        </div>

        <div className="bg-gray-100 lg:flex lg:justify-center">
                <div className="transform scale-90">
                    <div className="text-center lg:text-left">
                        <h4 className="h4">BESTSELLER PRODUCTS</h4>
                        <div className="border-t border-gray-400 w-full my-4"></div>
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row">
                        {products.map((product) => (
                          <div key={product.id} className="flex flex-col gap-3 bg-white ">
                            <img src={product.image} alt={product.title} className="object-cover h-96 lg:w-96"/>
                                <div className="pb-20 pl-5">
                                <h5 className="h5">{product.title}</h5>
                                    <p className="grayP">{product.department}</p>
                                <p className="flex gap-2 grayP">{product.oldPrice}<span className="greenP">{product.newPrice}</span></p>
                                </div>
                                    </div>
                                        ))}
                    </div>
                </div>
        </div>
        <Clients/>
        <Footer/>  

        
        
        </>
    )
}