import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

 

export default function ShoppingCart() {
  

  const totalItems = cartItems.length
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Sepetim ({totalItems} Ürün)</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.map((item, index) => (
          <div key={index} className="flex mb-4 last:mb-0">
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-md mr-3"
            />
            <div className="flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="text-xs text-gray-500">{item.details}</p>
              <p className="font-semibold mt-1">{item.price.toFixed(2)} TL</p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2">
        <Button variant="outline" className="w-full">Sepete Git</Button>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Siparişi Tamamla</Button>
      </CardFooter>
    </Card>
  )
}