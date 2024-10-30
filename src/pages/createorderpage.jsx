import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plus, Store, ChevronRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { NavLinks } from '@/layout/navlinks'
import { Clients } from "@/layout/clients"
import { Footer } from "@/layout/footer"
import OrderCard from "@/components/ordercard"
import { fetchAdress } from "@/api"
import { setAddress } from "@/actions/shoppingCartActions"
import { useDispatch, useSelector } from "react-redux"
import { NewAddress } from "@/components/newaddress"


export default function CreateOrder() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState('home')
    useEffect(() => {
        const getAddress = async () => {
            
            try {
                const address = await fetchAdress();
                dispatch(setAddress(address));
                console.log("bakalım:", address)
            }
            catch (error) {
                console.error("Error fetching address", error);
            }
        }
        getAddress();
    }, [dispatch])
    const addresses = useSelector((state) => state.shoppingCart.address);

  return (
    <>
    <NavLinks/>
    <NewAddress isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div className="mx-auto max-w-7xl space-y-8 p-4">
      <div className="grid gap-8 md:grid-cols-2">
        <Card
          className="cursor-pointer transition-colors hover:bg-accent"
          onClick={() => console.log('Adres bilgileri clicked')}
        >
          <CardHeader>
            <CardTitle className="text-xl font-medium">Adres Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground"></span>
              <Button variant="ghost" size="sm">
                Düzenle
              </Button>
            </div>
            <div className="text-sm">
              İstiklal Mah dfsadsadasdasd adsa sdas asd a
              <br />
              26000 - Eskişehir/Odunpazarı
            </div>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer transition-colors hover:bg-accent"
          onClick={() => console.log('Ödeme seçenekleri clicked')}
        >
          <CardHeader>
            <CardTitle className="text-xl font-medium">Ödeme Seçenekleri</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Banka/Kredi Kartı <span className="text-muted-foreground">veya</span> Alışveriş Kredisi ile ödemenizi güvenle yapabilirsiniz.
            </p>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium">Teslimat Adresi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {addresses && addresses.map((address, index) => (
                <Card 
                key={address.id || index}
                className={cn(
                "cursor-pointer border-2 transition-colors hover:bg-accent",
                selectedAddress === address.title ? "border-primary" : "border-border"
                )}
                onClick={() => setSelectedAddress(address.title)}>
                <CardContent className="p-4">
                <div className="flex items-center justify-between">
                <div className="font-medium">{address.title}</div>
                {selectedAddress === address.title && (
                <Check className="h-5 w-5 text-primary" />
                )}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{address.phone}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                {address.neighborhood}
                <br />
                {address.district}/{address.city}
                </div>
                </CardContent>
                </Card>
                ))}
        </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="h-24" onClick={() => setIsOpen(true)}>
              <div className="space-y-2">
                <MapPin className="mx-auto h-6 w-6" />
                <div className="text-sm">Yeni Adres Ekle</div>
              </div>
            </Button>
            <Button variant="outline" className="h-24">
              <div className="space-y-2">
                <Store className="mx-auto h-6 w-6" />
                <div className="text-sm">Gel Al Noktası Seç</div>
                <div className="text-xs text-muted-foreground">Sana en yakın noktadan güvenle gel al!</div>
              </div>
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span className="text-sm">
                Kurumsal faturalı alışveriş yapmak için "Kurumsal Adres Ekle" butonunu kullanarak yeni fatura adresi ekleyin.
              </span>
            </div>
            <Button variant="ghost" size="sm">
              Kurumsal Adres Ekle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    <Clients/>
    <Footer/>
    </>
  )
}