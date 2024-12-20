import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plus, Store, ChevronRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { NavLinks } from '@/layout/navlinks'
import { Clients } from "@/layout/clients"
import { Footer } from "@/layout/footer"
import OrderCard from "@/components/ordercard"
import { fetchAdress, fetchDeleteAddress } from "@/api"
import { useDispatch, useSelector } from "react-redux"
import { NewAddress } from "@/components/newaddress"
import { ChangeAddress } from "@/components/changeaddress"
import CreditCard from "@/components/creditcard"
import { setAddresses, setSelectedAddressId } from "@/actions/shoppingCartActions"


export default function CreateOrder() {
    const [isOpen, setIsOpen] = useState(false);
    const [onCredit, setOnCredit] = useState(false);
    const [changeOpen, setChangeOpen] = useState(false);
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.shoppingCart.addresses);
    const selectedId = useSelector(state => state.shoppingCart.addressId);
    const [selectedAddressDetails, setSelectedAddressDetails] = useState(null);
    
  
    useEffect(() => {
        const getAddress = async () => {
            try {
                const response = await fetchAdress();
                dispatch(setAddresses(response));
            }
            catch (error) {
                console.error("Error fetching address", error);
            }
        }
        getAddress();
    }, [])

    const handleDelete = async (id) => {
      try {
          const response = await fetchDeleteAddress(id);
          console.log("Adres silindi:", response);
          dispatch(setAddresses(addresses.filter(address => address.id !== id)));
          if (selectedId === id) {
              setSelectedAddressId(null);
              setSelectedAddressDetails(null);
          }
      } catch (error) {
          console.error("Error deleting address", error);
      }
  };

    const handleNewAddress = async () => {
      const response = await fetchAdress();
      dispatch(setAddresses(response));
      setSelectedAddressDetails(null);
  };

  const handleAddressSelect = (address) => {
    dispatch(setSelectedAddressId(address.id));
    setSelectedAddressDetails(address); 
};

  return (
    <>
    <NavLinks/>
    <ChangeAddress changeOpen={changeOpen} setChangeOpen={setChangeOpen} selectedAddressDetails={selectedAddressDetails} />
    <NewAddress isOpen={isOpen} setIsOpen={setIsOpen} onNewAddress={handleNewAddress}/>
    <div className="mx-auto max-w-10xl space-y-8 p-4 lg:flex lg:gap-4">
      <div className="flex flex-col gap-4">
      <div className="grid gap-8 md:grid-cols-2">
      <Card
          className="cursor-pointer transition-colors hover:bg-accent"
          onClick={() => setOnCredit(false)}
        >
          <CardHeader>
            <CardTitle className="text-xl font-medium">Adres Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground"></span>
            </div>
            <div className="text-sm">
              {selectedAddressDetails ? selectedAddressDetails.title : ""}
              <br />
              {selectedAddressDetails ? selectedAddressDetails.city : ""}/{selectedAddressDetails ? selectedAddressDetails.district : ""}
              <br/>
              {selectedAddressDetails ? selectedAddressDetails.phone : ""}
            </div>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer transition-colors hover:bg-accent"
          onClick={() => setOnCredit(true)}
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
      {onCredit ? (<CreditCard/>):(


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
                selectedId === address.id ? "border-primary" : "border-border"
                )}
                onClick={() => handleAddressSelect(address)}>
                <CardContent className="p-4">
                <div className="flex items-center justify-between">
                <div className="font-medium">{address.title}</div>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{address.phone}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                {address.neighborhood}
                <br />
                {address.district}/{address.city}
                </div>
                </CardContent>
                <p className="text-right mr-4 mb-4 flex justify-end gap-4"><button  onClick={() => {setChangeOpen(true);  setSelectedAddress(address.id);}}><i className="fa-solid fa-gear"></i></button><button onClick={() => handleDelete(address.id)}><i className="fa-solid fa-trash"></i></button></p>
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
      )}
      </div>
      <OrderCard/>
      </div> 
    <Clients/>
    <Footer/>
    </>
  )
}