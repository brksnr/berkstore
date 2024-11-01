import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { fetchChangeCard } from "@/api";

export default function ChangeCard({changeOpen, setChangeOpen, selectedCard, selectedCardId}) {
    const months = Array.from({ length: 12 }, (_, i) => ({
        value: (i + 1).toString().padStart(2, '0'),
        label: (i + 1).toString().padStart(2, '0'),
    }));

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 11 }, (_, i) => ({
        value: (currentYear + i).toString(),
        label: (currentYear + i).toString(),
    }));

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            id : selectedCardId,
          card_no: e.target.cardNumber.value, 
          expire_month: e.target.expireMonth.value,
          expire_year: e.target.expireYear.value, 
          name_on_card: e.target.adSoy.value 
        };
        try {
            const newCard = await fetchChangeCard(formData);
            console.log("değişmiş kart:", newCard);
            setChangeOpen(false);
        } catch (error) {
            console.error("Error fetching address", error);
            setChangeOpen(false);
        }
    };

    return (
        <Dialog open={changeOpen} onOpenChange={setChangeOpen}>
            <DialogContent>
              <form onSubmit={onSubmit}>
                <DialogHeader>
                    <DialogTitle>Kart Bilgileri</DialogTitle>
                </DialogHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="adSoy">Ad Soyad</Label>
                        <Input id="adSoy" name="adSoy" defaultValue={selectedCard?.name_on_card} className="font-mono" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Kart Numarası</Label>
                        <Input id="cardNumber" name="cardNumber" defaultValue={selectedCard?.card_no} className="font-mono" />
                    </div>

                    <div className="grid grid-cols-[1fr,1fr,120px] gap-4 items-end">
                        <div className="col-span-2">
                            <Label>Son Kullanma Tarihi</Label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                <Select name="expireMonth">
                                    <SelectTrigger >
                                        <SelectValue  placeholder={selectedCard?.expire_month} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {months.map((month) => (
                                            <SelectItem key={month.value} value={month.value}>
                                                {month.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select name="expireYear">
                                    <SelectTrigger>
                                        <SelectValue placeholder={selectedCard?.expire_year} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {years.map((year) => (
                                            <SelectItem key={year.value} value={year.value}>
                                                {year.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cvv" className="flex items-center gap-1">
                                CVV
                            </Label>
                            <Input id="cvv" maxLength={4} className="font-mono" />
                        </div>
                    </div>
                </CardContent>
                <DialogFooter className="flex justify-end space-x-4">
                    <DialogClose asChild>
                        <Button variant="outline">Vazgeç</Button>
                    </DialogClose>
                    <Button>Kaydet</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
