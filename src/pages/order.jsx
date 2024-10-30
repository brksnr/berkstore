import React from 'react'
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { NavLinks } from '@/layout/navlinks'
import { Clients } from '@/layout/clients'
import { Footer } from '@/layout/footer'
import { decreaseCount, increaseCount, removeFromCart } from '@/actions/shoppingCartActions'
import OrderCard from '@/components/ordercard'

export default function OrderPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.shoppingCart.cart);
    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);
    const history = useHistory();

    const handleGoToShopping = () => {
        history.push("/shop")
    }
    
  return (
    <>
    <NavLinks/>
    <div>
    <div className="container mx-auto p-4 flex gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Cart ({totalItems})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="seller1" />
                    <Label htmlFor="seller1" className="font-semibold">
                      Seller: BERKSTORE
                    </Label>
                  </div>
                  <Badge variant="outline">Corporate</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
              {cartItems.length === 0 ? (
                <p>Sepetinizde ürün yok.</p>
                ) 
                : 
                ( cartItems.map((item, index) => (
                <div className="flex items-center space-x-4">
                  <img
                    alt="KAOF SHOES Kadın Siyah Klasik Ayakkabı"
                    className="h-32 w-24 rounded-md object-cover"
                    height="100"
                    src={item.product.images[0].url}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{item.product.description}</h3>
                    <p className="text-sm text-gray-500">Rating: {item.product.rating}</p>
                    <p className="text-sm text-gray-500">Stock: {item.product.stock}</p>
                    <p className="text-sm text-gray-500">If you order within {Math.floor(Math.random() * 101)} minutes, it will be shipped tomorrow at the latest!</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="icon" variant="outline" onClick={() => dispatch(decreaseCount(item.product.id))}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input className="w-16 text-center" value={item.count} />
                    <Button size="icon" variant="outline" onClick={() => dispatch(increaseCount(item.product.id))}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{(item.product.price * item.count).toFixed(2)} $</p>
                    <Button size="icon" variant="ghost" onClick={() => dispatch(removeFromCart(item.product.id))}>
                      <Trash2 className="h-4 w-4"/>
                    </Button>
                  </div>
                </div>
                    )))}
              </CardContent>
              <CardFooter>
                <p className="text-sm text-green-600">Free Shipping</p>
              </CardFooter>
            </Card>  
          </div>   
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleGoToShopping}>Keep Shopping</Button>
          <div className="text-right">
            <p className="text-lg font-semibold">Subtotal : {totalPrice} $</p>
            <Button className="mt-2">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Proceed to Checkout
            </Button>
          </div>
        </CardFooter>
      </Card>
      <OrderCard/>
      </div>
      <div className="mt-4 flex space-x-4">
        <Button variant="link">Önceden Eklediklerim</Button>
        <Button variant="link">Önerilen Ürünler</Button>
        <Button variant="link">
          Favorilerim
          <Badge className="ml-2" variant="secondary">
            Yeni
          </Badge>
        </Button>
      </div>
    </div>
    <Clients/>
    <Footer/>
    </>
  )
}