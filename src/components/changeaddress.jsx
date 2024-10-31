import { fetchChangeAddress} from "@/api"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ChangeAddress ({ changeOpen, setChangeOpen, selectedAddressDetails }) {

    const onSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
        
            "id": "5",
            "title": "İş Adresi",
            "name": "Berk Bey diyeceksiniz",
            "surname": "Şener",
            "phone": "05378923111",
            "city": "istanbul",
            "district": "esenler",
            "neighborhood": "adres detayları",
            "address" : "asdad"
        
    };

    try {
        
        const changeAddress = await fetchChangeAddress(formData);
        console.log("new address:", changeAddress);
        setChangeOpen(false);
    } catch (error) {
        console.error("Error fetching address", error);
        console.log("formdata:", formData)
    }
};
    return (
        <>
            <Dialog open={changeOpen} onOpenChange={setChangeOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Adres Bilgilerini Güncelle</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="title">Adres Başlığı</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="örn: Ev adresi"
                                defaultValue={selectedAddressDetails?.title} 
                                required
                            />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Ad</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    defaultValue={selectedAddressDetails?.name} 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="surname">Soyad</Label>
                                <Input
                                    id="surname"
                                    name="surname"
                                    defaultValue={selectedAddressDetails?.surname}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefon</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="05XX XXX XX XX"
                                defaultValue={selectedAddressDetails?.phone} 
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="city">İl</Label>
                            <Input
                                id="city"
                                name="city"
                                defaultValue={selectedAddressDetails?.city} 
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="district">İlçe</Label>
                            <Input
                                id="district"
                                name="district"
                                defaultValue={selectedAddressDetails?.district} 
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="neighborhood">Mahalle</Label>
                            <Input
                                id="neighborhood"
                                name="neighborhood"
                                defaultValue={selectedAddressDetails?.neighborhood} 
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Adres Detayı</Label>
                            <Textarea
                                id="address"
                                name="address"
                                placeholder="Sokak, bina ve kapı numarası"
                                className="min-h-[100px]"
                                defaultValue={selectedAddressDetails?.address} 
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-4">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    İptal
                                </Button>
                            </DialogClose>
                            <Button type="submit">Kaydet</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
