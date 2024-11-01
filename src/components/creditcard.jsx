import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { fetchDeleteCard, fetchGetCard } from "@/api"
import AddCard from "./addcard"
import { useSelector } from "react-redux"
import ChangeCard from "./changecard"

export default function CreditCard() {
    const [cards, setCards] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [ selectedCard, setSelectedCard ] = useState({});
    const [addOpen, setAddOpen] = useState(false);
    const [changeOpen, setChangeOpen ] = useState(false);
    const cartItems = useSelector(state => state.shoppingCart.cart);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);

    useEffect(() => {
        const getCards = async () => {
            try {
                const response = await fetchGetCard();
                setCards(response);
            } catch (error) {
                console.error("Error fetching cards", error);
            }
        };
        getCards();
    }, []);

    const handleDeleteCard = async (cardId) => {
      try {
          await fetchDeleteCard(cardId);
          setCards(cards.filter(card => card.id !== cardId));
      } catch (error) {
          console.error("Error deleting card", error);
      }
  };

  useEffect(() => {
    if (selectedCardId) {
        const card = cards.find(cardItem => cardItem.id === parseInt(selectedCardId));
        setSelectedCard(card);
        console.log("idyebak:", selectedCard)
    }
}, [selectedCardId, cards]);
   

    return (
        <div className="w-full max-w-10xl mx-auto">
            <AddCard addOpen={addOpen} setAddOpen={setAddOpen} setCards={setCards} />
            <ChangeCard changeOpen={changeOpen} setChangeOpen={setChangeOpen} selectedCard={selectedCard} selectedCardId={selectedCardId} />
            <Card className="flex gap-3">
                      <div className="w-full">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex items-center gap-3">
                        Kart ile Öde
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Kart Bilgileri</h2>
                        <Button onClick={() => setAddOpen(true)} variant="link" className="text-orange-500 p-0 h-auto">
                            Kart ekle
                        </Button>
                    </div>
                    
                    <div className="space-y-4">
                    <RadioGroup className="" value={selectedCardId} onValueChange={setSelectedCardId}>
                        {cards.map((cardItem) => (
                            <div key={cardItem.id}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={cardItem.id.toString()} id={`card-${cardItem.id}`} />
                                        <Label htmlFor={`card-${cardItem.id}`} className="flex-1">
                                            <div className="border rounded-lg p-4 space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <i className="fa-brands fa-cc-visa fa-3x"></i>
                                                    <i className="fa-brands fa-cc-visa fa-3x"></i>
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {cardItem.card_no}
                                                    <div className="mt-1">{cardItem.expire_month}/{cardItem.expire_year}</div>
                                                    <div className="mt-1 font-bold">{cardItem.name_on_card}</div>
                                                </div>
                                                    <div className="flex justify-end gap-3">
                                                        <button onClick={() => setChangeOpen(true)} className=""><i class="fa-solid fa-gear"></i></button>
                                                        <button onClick={() => handleDeleteCard(cardItem.id)} className=""><i className="fa-solid fa-trash"></i></button>
                                                    </div>
                                            </div>
                                        </Label>
                                    </div>
                            </div>
                        ))}
                        </RadioGroup>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="3dsecure" />
                            <Label htmlFor="3dsecure">3D Secure ile ödemek istiyorum.</Label>
                        </div>
                    </div>
                </CardContent>
                    </div>
                    <div className="bg-gray-200 border-2 my-24 rounded" />
                    <div className="space-y-4 w-full mr-5 mt-4">
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
                    <div className="p-4 font-semibold">{totalPrice} $</div>
                  </div>
                </div>
              </div>
            </div>
            </Card>
        </div>
    );
}
