import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function OrderCard() {
    const cartItems = useSelector(state => state.shoppingCart.cart);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);
    const history = useHistory();

    const handleComplete = () => {
        history.push("/complete")
    }

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <Button className="w-full hover:bg-orange-600 text-white"  onClick={handleComplete}>
        Approve Cart
      </Button>

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

      <Button className="w-full hover:bg-blue-600 text-white" onClick={handleComplete}>
        Approve Cart
      </Button>
    </div>
  )
}