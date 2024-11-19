import * as React from "react"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useEffect } from "react";
import { NavLinks } from "@/layout/navlinks";
import { Clients } from "@/layout/clients";
import { Footer } from "@/layout/footer";
import { setProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "@/api";
import { addToCart } from "@/actions/shoppingCartActions";
import { toast } from "react-toastify";


export default function ProductDetail() {
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState("blue");
  const { productId, gender, productName } = useParams();
  const product = useSelector(state => state.product.product);
  const cartControl = useSelector(state => state.shoppingCart.cart);
  console.log(productId,gender,productName)

    const fetchProductData = async () => {
      try {
        const productData = await fetchProductDetail(productId);
          dispatch(setProduct(productData));
      } catch (error) {
          console.error('Error fetching product details:', error);
      }
  };
  useEffect(() => {
      fetchProductData();
  }, [dispatch, productId]);

    if (!product) return <p>Yükleniyor...</p>;

    const handleAddToCart = () => {
      dispatch(addToCart(product));
      toast.success("Product Added to Cart")
    };

    useEffect(() => {
      console.log("Sepetteki ürünler:", cartControl);
    }, [cartControl]);

  return (
    <>
    <NavLinks/>
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
          <CarouselItem>
            {product.images && product.images.length > 0 ? (
            <img
            src={product.images[0].url}
            alt={product.name}
            className="w-full h-auto rounded-lg"/>
            ) : (
            <p>Image not available</p>)}
          </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="flex gap-2 mt-4">
          <img
            src="/images/video1.png"
            alt="Yellow chair thumbnail"
            className="w-20 h-20 rounded-md cursor-pointer"
          />
          <img
            src="/images/video1.png"
            alt="Gray chair thumbnail"
            className="w-20 h-20 rounded-md cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-2 text-sm text-gray-600">{product.price}</span>
        </div>
        <p className="text-2xl font-bold mb-2">${product.price}</p>
        <p className="mb-4">
          <span className="font-semibold">Availability:</span>{" "}
          <span className="text-green-600">{product.stock}</span>
        </p>
        <p className="mb-4 text-gray-600">
        {product.description}
        </p>
        <div className="flex gap-2 mb-4">
          {["blue", "green", "orange", "navy"].map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full ${
                color === "blue" ? "bg-blue-500" :
                color === "green" ? "bg-green-500" :
                color === "orange" ? "bg-orange-500" :
                "bg-navy-500"
              } ${activeColor === color ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
              onClick={() => setActiveColor(color)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" onClick={handleAddToCart}>Add To Cart</Button>
          <Button variant="outline" size="icon">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
    <Clients/>
    <Footer/>
    </>
  )
}