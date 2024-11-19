import React, { useState } from 'react';
import { NavLinks } from "../layout/navlinks";
import { Clients } from "../layout/clients";
import { Footer } from "../layout/footer";
import ProductDetail from '@/components/productDetail';

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
    return (
        <>
        <NavLinks/>
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