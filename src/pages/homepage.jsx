import { Header } from "../layout/header";
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';
import { Footer } from "../layout/footer";
import { ProductList } from "@/components/productlist";

export function HomePage() {

    const featuredItems = [
        {
          id: 1,
          image: "/images/featuredpic/featuredpic.png",
          category: "Google",
          tag1: "Trending",
          tag2: "New",
          title: "Loudest à la Madison #1 (L'integral)",
          description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          comments: 10,
        },
        {
          id: 2,
          image: "/images/featuredpic/featuredpic2.png",
          category: "Google",
          tag1: "Popular",
          tag2: "Updated",
          title: "Loudest à la Madison #1 (L'integral)",
          description: "Exploring the advancements in technology and innovation. Stay ahead with us.",
          date: "12 March 2021",
          comments: 8,
        },
        {
            id: 3,
            image: "/images/featuredpic/featuredpic3.png",
            category: "Google",
            tag1: "Popular",
            tag2: "Updated",
            title: "Loudest à la Madison #1 (L'integral)",
            description: "Exploring the advancements in technology and innovation. Stay ahead with us.",
            date: "12 March 2021",
            comments: 8,
          },
      ];
      

    // karosel

    const items = [
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
      ];

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
        <div className="lg:flex lg:justify-evenly">
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
        
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
    return (
        <>
        <Header/>
        <div className="flex flex-col items-center bg-gray-50 pb-20">
            <div>
                <div className="text-center my-10 flex flex-col gap-4">
                    <h4 className="h4">EDITOR'S PICK</h4>
                    <p className="grayP">Problems trying to resolve <br className="lg:hidden"/>the conflict between </p>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row ">
                    <div className="bg-[url('/images/shopcard1.png')] w-80 h-96 bg-cover flex items-end lg:h-auto">
                    <button className="shopCardButton">MEN</button>
                    </div>
                    <div className="bg-[url('/images/shopcard2.png')] w-80 h-96 bg-cover flex items-end lg:h-auto">
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
            <h3 className="h4">BESTSELLER <br className="lg:hidden"/> PRODUCTS</h3>
            <p className="grayP">Problems trying to resolve the<br className="lg:hidden"/>conflict between</p>
            </div>
        <div className="lg:flex lg:flex-wrap lg:gap-4 lg:justify-center">
            <ProductList/>
        </div>      
        </div>
        </div>
        <Carousel
        className=" bg-blue-500"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...HomePage}
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
    <div>
        <div>
                <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:flex-row lg:mt-0">
                    <img className="hidden lg:flex lg:w-2/6 lg:ml-40" src="/images/partofneural2.png"/>
                    <div className="flex flex-col items-center gap-4 lg:flex lg:flex-col lg:items-start lg:gap-4 lg:ml-28">
                        <p className="grayP ">SUMMER 2020</p>
                        <p className="text-center h1  flex flex-col gap-2 lg:flex-row">Part of the<p>Neural</p>Universe</p> 
                        <p className="text-center grayP ">We know how large objects<br className="lg:hidden"/> will act, but things on a<br className="lg:hidden"/> small scale.</p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                    <Button variant="default" size="lg">BUY NOW</Button>
                    <Button className="text-blue-500" variant="outline" size="lg">Learn More</Button>
                    </div>
                    </div>
                    <img className="lg:hidden" src="/images/partofneural.png"/>
                </div>
        </div>
    </div>

    <div>
        <div className="lg:flex lg:flex-col lg:items-center">
            <div>
                <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:gap-3 lg:mt-16">
                    <p className="greenP">Parctice Advice</p>
                    <p className="text-center h1 flex flex-col gap-2 lg:flex-row lg:gap-5">Featured<p>Products</p></p> 
                    <p className="text-center grayP  lg:text-left">Problems trying to resolve the<br className="lg:hidden"/>conflict between the two major<p>realms of Classical physics: newtonian mechanics</p><br/></p>
                </div>
            </div>
    <div className="flex flex-col gap-8 lg:flex-wrap lg:flex-row">
      {featuredItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
            <div 
            className="bg-cover bg-center w-80 h-80" 
            style={{ backgroundImage: `url(${item.image})` }}
            >
            <button className="bg-red-500 h6 text-white w-14 rounded-sm ml-5 mt-3">
              New
            </button>
        </div>
        <div className="border border-gray w-80 flex flex-col pl-5 py-4 gap-3">
            <div className="flex gap-3">
              <p className="greenPt">{item.category}</p>
              <p className="grayPt">{item.tag1}</p>
              <p className="grayPt">{item.tag2}</p>
            </div>
                <p className="h5">{item.title}</p>
                <p className="grayPt">{item.description}</p>
            <div className="flex justify-between">
                <div className="grayPt">
                <i className="fa-solid fa-clock text-green-500"></i> {item.date}
            </div>
                <div className="grayPt pr-12">{item.comments} Comments</div>
            </div>
                <div className="flex items-center gap-2">
                Learn More
                <i className="fa-solid fa-arrow-right text-green-500"></i>
            </div>
          </div>
        </div>
            ))}
        </div>
        </div>
    </div>
    <Footer/>
        </>
    )
}