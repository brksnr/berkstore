import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { fetchGetCard } from "@/api"
import AddCard from "./addcard"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export default function CreditCard() {
    const cartItems = useSelector(state => state.shoppingCart.cart);
    const [ card, setCard] = useState([]);
    const [ addOpen, setAddOpen ] = useState(false);

    useEffect(() => {
        const getCard = async () => {
            try {
                const response = await fetchGetCard();
                console.log("kart bilgisi:", response)
                setCard(response);
            }
            catch (error) {
                console.error("Error fetching address", error);
            }
        }
        getCard();
    }, [])



  return (
    <div className="w-full max-w-10xl mx-auto">
        <AddCard/>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            Kart ile Öde
          </CardTitle>
          <p className="text-muted-foreground">
            Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Kart Bilgileri</h2>
            <Button onClick={() => setAddOpen(true)} variant="link" className="text-orange-500 p-0 h-auto">
              Kart ekle
            </Button>
          </div>
          
          <div className="grid md:grid-cols-[3fr,1px,2fr] gap-6">
            <div className="space-y-4">
            {card.map((card) => (
              <RadioGroup defaultValue="bonus">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bonus" id="bonus" />
                <Label htmlFor="bonus" className="flex-1">
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                    <i class="fa-brands fa-cc-visa fa-3x"></i>
                    <i class="fa-brands fa-cc-visa fa-3x"></i>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {card.card_no}
                      <div className="mt-1">{card.expire_month}/{card.expire_year}</div>
                      <div className="mt-1 font-bold">{card.name_on_card}</div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>      
            ))}
              <div className="flex items-center space-x-2">
                <Checkbox id="3dsecure" />
                <Label htmlFor="3dsecure">3D Secure ile ödemek istiyorum.</Label>
              </div>
            </div>

            <div className="bg-gray-200 w-full h-full" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Taksit Seçenekleri</h2>
              <p className="text-muted-foreground">Kartınıza uygun taksit seçeneğini seçiniz</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 divide-x">
                  <div>
                    <div className="p-4 bg-muted/50 font-semibold">Taksit Sayısı</div>
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        Tek Çekim
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-4 bg-muted/50 font-semibold">Aylık Ödeme</div>
                    <div className="p-4 font-semibold">6.604,22 TL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}