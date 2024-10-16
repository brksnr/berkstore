export function Footer() {
    const links = `font-inter font-bold text-gray-500`
    return (
        <>
        <div className="flex flex-col items-center border gap-4">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
                <h3 className="h4">Get In Touch</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                <div className="flex gap-4">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="flex flex-col border items-start gap-4 ">
                <h3 className="h4">Company info</h3>
                <p className={links}>About Us</p>
                <p className={links}>Carrier</p>
                <p className={links}>We are hiring</p>
                <p className={links}>Blog</p>
            </div>
            <div className="flex flex-col border items-start gap-4">
                <h3 className="h4">Features</h3>
                <p className={links}>Business Marketing</p>
                <p className={links}>Live Chat</p>
                <p className={links}>User Analytic</p>
                <p className={links}>Unlimited Support</p>
            </div>
            <div className="flex flex-col border items-start gap-4">
                <h3 className="h4">Resources</h3>
                <p className={links}>IOS & Android</p>
                <p className={links}>Watch a Demo</p>
                <p className={links}>Customers</p>
                <p className={links}>API</p>
            </div>
        </div>
        </div>
        
        </>
    )
}