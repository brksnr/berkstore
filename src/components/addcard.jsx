import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { fetchNewCard } from "@/api"

export default function AddCard() {
  // Generate month options (01-12)
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, '0')
    return { value: month, label: month }
  })

  // Generate year options (current year + 10 years)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 11 }, (_, i) => {
    const year = (currentYear + i).toString()
    return { value: year, label: year }
  })
  const onSubmit = async (e) => {
    e.preventDefault(); 
    const formData = {
        "card_no": e.target.cardNumber.value,
        "expire_month": e.target.month.value,
        "expire_year": e.target.year.value,
        "name_on_card": "Ali Baş"
    };
    try {
      const newCard = await fetchNewCard(formData); 
      console.log("new adress:", newCard);
    } catch (error) {
      console.error("Error fetching address", error);
    }
  };


  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Kart Bilgileri</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Kart Numarası</Label>
          <Input 
            id="cardNumber"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            className="font-mono"
          />
        </div>

        <div className="grid grid-cols-[1fr,1fr,120px] gap-4 flex items-end">
          <div className="col-span-2">
            <Label>Son Kullanma Tarihi</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ay" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Yıl" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
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
            <Input 
              id="cvv"
              maxLength={4}
              className="font-mono"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Button variant="outline">Vazgeç</Button>
        <Button onClick={onSubmit}>Kaydet</Button>
      </CardFooter>
    </Card>
  )
}