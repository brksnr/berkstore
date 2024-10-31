import { setAddress } from "@/actions/shoppingCartActions"
import { fetchNewAddress } from "@/api"
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

export function NewAddress ({isOpen, setIsOpen}) {

    const onSubmit = async (e) => {
        e.preventDefault(); 
        const formData = {
            title: e.target.title.value,
            name: e.target.name.value,
            surname: e.target.surname.value,
            phone: e.target.phone.value,
            district: e.target.district.value,
            neighborhood: e.target.neighborhood.value,
            city: e.target.address.value
        };
        try {
          const newAddress = await fetchNewAddress(formData); 
          console.log("new adress:", newAddress);
          setIsOpen(false); 
        } catch (error) {
          console.error("Error fetching address", error);
        }
      };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Yeni Adres Ekle</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="title">Adres Başlığı</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="örn: Ev adresi"
                                required
                            />
                        </div>
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Ad</Label>
                                <Input id="name" name="name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="surname">Soyad</Label>
                                <Input id="surname" name="surname" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefon</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="05XX XXX XX XX"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="city">il</Label>
                            <Input id="city" name="city" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="district">İlçe</Label>
                            <Input id="district" name="district" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="neighborhood">Mahalle</Label>
                            <Input id="neighborhood" name="neighborhood" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Adres Detayı</Label>
                            <Textarea
                                id="address"
                                name="address"
                                placeholder="Sokak, bina ve kapı numarası"
                                className="min-h-[100px]"
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
