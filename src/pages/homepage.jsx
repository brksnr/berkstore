import { Header } from "../layout/header";
import { NavLinks } from "../layout/navlinks";

export function HomePage() {
    return (
        <>
        <Header/>
        <div className="flex flex-col items-center">
            <div>
                <div className="text-center my-10 flex flex-col gap-4">
                    <h4 className="h4">EDITOR'S PICK</h4>
                    <p className="grayP">Problems trying to resolve <br/>the conflict between </p>
                </div>
                <div>
                    <div className="bg-[url('/images/shopcard1.png')] w-96 h-96 flex items-end">
                    <button className="shopCardButton">MEN</button>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    )
}