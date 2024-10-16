export function Footer() {
    return (
        <>
        <div className="flex flex-col items-center my-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-32">
            <div className="flex flex-col items-start gap-4">
                <h3 className="h4">Get In Touch</h3>
                    <p className="grayP">the quick fox jumps over the<br className="lg:block"/> lazy dog</p>
                <div className="flex gap-4 text-blue-500 text-xl">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h3 className="h4">Company info</h3>
                <p className="grayP">About Us</p>
                <p className="grayP">Carrier</p>
                <p className="grayP">We are hiring</p>
                <p className="grayP">Blog</p>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h3 className="h4">Features</h3>
                <p className="grayP">Business Marketing</p>
                <p className="grayP">Live Chat</p>
                <p className="grayP">User Analytic</p>
                <p className="grayP">Unlimited Support</p>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h3 className="h4">Resources</h3>
                <p className="grayP">IOS & Android</p>
                <p className="grayP">Watch a Demo</p>
                <p className="grayP">Customers</p>
                <p className="grayP">API</p>
            </div>
        </div>
        </div>

        <div className="text-center grayP bg-gray-100 py-12 lg:flex lg:justify-center">
                <p>Made With Love By</p>
                <p>Figmaland All Right Reserved</p>
            </div>
        
        </>
    )
}