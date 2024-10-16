import { Header } from "../layout/header";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';
import Buttons from "../components/buttons";

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
          title: "The Future of Tech #2",
          description: "Exploring the advancements in technology and innovation. Stay ahead with us.",
          date: "12 March 2021",
          comments: 8,
        },
        {
            id: 2,
            image: "/images/featuredpic/featuredpic3.png",
            category: "Google",
            tag1: "Popular",
            tag2: "Updated",
            title: "The Future of Tech #2",
            description: "Exploring the advancements in technology and innovation. Stay ahead with us.",
            date: "12 March 2021",
            comments: 8,
          },
      ];
      
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

    // karosel

    const items = [
        {
          src: '/images/karosel/karoselitem1.png',
          altText: 'Slide 1',
          caption: 'Slide 1',
          key: 1,
        },
        {
          src: '/images/karosel/karoselitem1.png',
          altText: 'Slide 2',
          caption: 'Slide 2',
          key: 2,
        },
        {
          src: '/images/karosel/karoselitem1.png',
          altText: 'Slide 3',
          caption: 'Slide 3',
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
        <div className="">
                <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:items-start">
                    <p className="h6 text-white">SUMMER 2020</p>
                    <p className="text-center h1 text-white flex flex-col lg:flex-row lg:gap-5">Vita Classic<p>Product</p></p> 
                    <p className="text-center h6 text-white lg:text-left">We know how large objects<br/> will act, but things on a<br/> small scale.</p>
                    <p className="h5 text-white">$16.48</p>
                    <Buttons variant="primary" size="medium" label="ADD TO CART" />
                 </div>
                 <img className="" src={item.src} alt={item.altText} />
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
                <div className="flex flex-col gap-7 items-center mt-40 mb-10lg:items-start">
                    <p className="grayP ">SUMMER 2020</p>
                    <p className="text-center h1  flex flex-col gap-2 lg:flex-row lg:gap-5">Part of the<p>Neural</p>Universe</p> 
                    <p className="text-center grayP  lg:text-left">We know how large objects<br/> will act, but things on a<br/> small scale.</p>
                    <div className="flex flex-col gap-4">
                        <Buttons variant="primary" size="medium" label="BUY NOW" />
                        <Buttons variant="transparent" size="medium" label="Learn More" />
                    </div>
                    <img src="/images/partofneural.png"/>
                </div>
        </div>
    </div>

    <div>
        <div>
            <div>
                <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:items-start">
                    <p className="greenP">Parctice Advice</p>
                    <p className="text-center h1  flex flex-col gap-2 lg:flex-row lg:gap-5">Featured<p>Products</p></p> 
                    <p className="text-center grayP  lg:text-left">Problems trying to resolve the<br/>conflict between the two major<br/></p>
                </div>
            </div>
            <div className="flex flex-col gap-8">
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


        </>
    )
}