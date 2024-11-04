import { fetchOrder } from "@/api";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function OrderCard() {
  const selectedId = useSelector(state => state.shoppingCart.addressId);
  const selectedCreditCart = useSelector(state => state.shoppingCart.selectedCreditCard);
  const totalPrice = useSelector(state => state.shoppingCart.totalPrice);
  const cartItems = useSelector(state => state.shoppingCart.cart);
  const history = useHistory();
  const location = useLocation();
  const isCompletePage = location.pathname === "/complete";
  const isButtonDisabled = !selectedId || !selectedCreditCart;

  const handleComplete = async () => {
    if (location.pathname === "/complete" && selectedId && selectedCreditCart) {
      const formData = {
        address_id: selectedId,
        order_date: new Date().toISOString(), 
        card_no: selectedCreditCart.card_no,
        card_name: selectedCreditCart.name_on_card, 
        card_expire_month: selectedCreditCart.expire_month,
        card_expire_year: selectedCreditCart.expire_year,
        card_ccv: "321",
        price: totalPrice,
        products: cartItems.map(item => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.description 
        }))
      };
      try {
        const response = await fetchOrder(formData);
        console.log("Sipariş başarıyla oluşturuldu:", response);
        history.push("/congrats");
      } catch (error) {
        console.error("Sipariş oluşturulurken hata oluştu:", error);
      }
    } else {
      history.push("/complete");
    }
  };


  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      {isCompletePage ? (
        <Button className="w-full hover:bg-orange-600 text-white" disabled={isButtonDisabled} onClick={handleComplete}>Onayla ve Bitir</Button>
      ) : (
        <Button className="w-full hover:bg-orange-600 text-white" onClick={handleComplete}>Approve Cart</Button>
      )}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="font-semibold text-lg">Order Summary</h2>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Product Total</span>
              <span className="font-semibold">{totalPrice} $</span>
            </div>
            
            <div className="flex justify-between">
              <span>Shipping Total</span>
              <span className="font-semibold">{Math.floor(Math.random() * 101)} $</span>
            </div>
            
            <div className="flex justify-between text-green-600">
              <span>Free Shipping Over 150 $<br/>(Paid by Seller)</span>
              <span className="font-semibold">{totalPrice > 150 ? 0 : Math.floor(Math.random() * 101)} $</span>
            </div>
            
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Total</span>
              <span>{totalPrice} $</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        variant="outline" 
        className="w-full flex items-center justify-between  hover:bg-blue-50"
      >
        <span>ENTER DISCOUNT CODE</span>
        <ChevronDown className="h-4 w-4" />
      </Button>  
      {isCompletePage ? (
        <Button className="w-full hover:bg-orange-600 text-white" disabled={isButtonDisabled} onClick={handleComplete}>Onayla ve Bitir</Button>
      ) : (
        <Button className="w-full hover:bg-orange-600 text-white" onClick={handleComplete}>Approve Cart</Button>
      )}
    </div>
  )
}