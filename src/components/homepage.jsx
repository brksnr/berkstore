import Buttons from "./buttons";

export function HomePage () {
    return (
        <>
        <div className="flex justify-between p-4 items-center">
            <h1 className="h2">BerkStore</h1>
            <div className="flex gap-3">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
        <div>
            <div className="bg-[url('/images/home.png')] bg-cover h-screen bg-center flex justify-center items-center">
                <div className="flex flex-col gap-7 order items-center">
                    <text className="h6 text-white">SUMMER 2020</text>
                    <text className="text-center h1 text-white">NEW <br/> COLLECTİON</text>
                    <text className="text-center h6 text-white">We know how large objects<br/> will act, but things on a<br/> small scale.</text>
                    <Buttons variant="primary" size="medium" label="Shop Now" />
                 </div>
            </div>
        </div>
        
        </>
    )
}