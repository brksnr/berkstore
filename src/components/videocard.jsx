export function VideoCard() {
    return (
        <>
         <div className="relative h-96 w-96 lg:h-[30rem] lg:w-[60rem] bg-cover bg-center rounded-lg overflow-hidden bg-[url('/images/video1.png')]" >
         <span className="invisible">.</span>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex justify-center items-center">
        <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </div>

        </>
    )
}