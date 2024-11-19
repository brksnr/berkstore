export function VideoCard() {
    return (
        <div className="relative h-96 w-96 lg:h-[30rem] lg:w-[60rem] bg-cover bg-center rounded-lg overflow-hidden">
            <iframe
                className="rounded-xl"
                width="950"
                height="490"
                src="https://www.youtube.com/embed/aLQGkXD3HG8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video"
            ></iframe>
        </div>
    )
}