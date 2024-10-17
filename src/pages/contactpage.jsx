import Buttons from "../components/buttons";

export function ContactPage() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                    <div className="w-7/12 h-1/2 max-w-lg">
                            <div className="items-center text-center flex flex-col gap-4">
                                <h2 className="h2">Get answers to all your questions.</h2>
                                <p className="h5 text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
                                <Buttons variant="primary" size="medium" label="CONTACT OUR COMPANY"/>
                                    <div className="flex gap-4 justify-center text-gray-400">
                                    <i class="fa-brands fa-twitter fa-2x"></i>
                                    <i class="fa-brands fa-square-facebook fa-2x"></i>
                                    <i class="fa-brands fa-linkedin fa-2x"></i>
                                    <i class="fa-brands fa-instagram fa-2x"></i>
                                    </div>
                            </div>
                    </div>
            </div>
        </>
    )
}