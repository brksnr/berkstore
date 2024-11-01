import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { fetchDeleteCard, fetchGetCard } from "@/api"
import AddCard from "./addcard"

export default function CreditCard() {
    const [cards, setCards] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    console.log("selectedid:", selectedCardId)

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
          await fetchDeleteCard(cardId); // Kartı sil
          setCards(cards.filter(card => card.id !== cardId)); // Kart listesinden sil
      } catch (error) {
          console.error("Error deleting card", error);
      }
  };
   

    return (
        <div className="w-full max-w-10xl mx-auto">
            <AddCard addOpen={addOpen} setAddOpen={setAddOpen} />
            <Card>
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
                        {cards.map((cardItem) => (
                            <div key={cardItem.id}>
                                <RadioGroup value={selectedCardId} onValueChange={setSelectedCardId}>
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
                                                <button onClick={() => handleDeleteCard(cardItem.id)} className="w-full text-right"><i className="fa-solid fa-trash"></i></button>
                                            </div>
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        ))}
                        <div className="flex items-center space-x-2">
                            <Checkbox id="3dsecure" />
                            <Label htmlFor="3dsecure">3D Secure ile ödemek istiyorum.</Label>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
