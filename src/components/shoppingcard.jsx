import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cartItems = useSelector(state => state.shoppingCart.cart);
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Sepetim ({totalItems} Ürün)</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <p>Sepetinizde ürün yok.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex mb-4 last:mb-0">
              <img
                src={item.product.images[0].url}
                alt={item.product.name}
                width={50}
                height={50}
                className="rounded-md mr-3"
              />
              <div className="flex-1">
                <h3 className="font-bold">{item.product.name}</h3>
                <p className="text-sm">{item.product.description}</p>
                <p className="font-semibold mt-1">{(item.product.price * item.count).toFixed(2)} TL</p>
                <p className="text-xs text-gray-500">Adet: {item.count}</p>
              </div>
            </div>
          ))
        )}
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2">
        <Button variant="outline" className="w-full">Sepete Git</Button>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Siparişi Tamamla</Button>
        <p className="font-bold">Toplam: {totalPrice.toFixed(2)} TL</p>
      </CardFooter>
    </Card>
  );
}
