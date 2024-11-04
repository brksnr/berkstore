import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function OrderConfirmation() {
  const orderItems = useSelector(state => state.shoppingCart.cart); 
  const total = useSelector(state => state.shoppingCart.totalPrice); 
  const date = new Date().toLocaleDateString('tr-TR');
  const orderId = `ORD${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
  const history = useHistory();
  const handleKeepShopping = () => {
    history.push("/shop")
  }

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-600">Tebrikler! Siparişiniz Başarıyla Oluşturuldu</CardTitle>
          <CardDescription className="text-center">
            Sipariş detaylarınız aşağıda yer almaktadır
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Sipariş Numarası: {orderId}</h3>
              <p>Sipariş Tarihi: {date}</p>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Sipariş Öğeleri:</h4>
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{item.product.name} x {item.count}</span>
                  <span>{(item.product.price * item.count).toFixed(2)} TL</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center font-bold">
                <span>Toplam:</span>
                <span>{total.toFixed(2)} TL</span>
              </div>
            </div>
            <Button onClick={handleKeepShopping} className="w-full mt-4">
              Alışverişe Devam Et
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
