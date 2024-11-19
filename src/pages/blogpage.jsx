import { Clients } from "@/layout/clients";
import { Footer } from "@/layout/footer";
import { NavLinks } from "@/layout/navlinks";

export function BlogPage ({isHomepage}) {



    const featuredItems = [
        {
          id: 1,
          image: "/images/featuredpic/featuredpic.png",
          category: "Google",
          tag1: "Trending",
          tag2: "New",
          title: "Loudest à la Madison #1 (L'integral)",
          description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          comments: 10,
        },
        {
          id: 2,
          image: "/images/featuredpic/featuredpic2.png",
          category: "Google",
          tag1: "Popular",
          tag2: "Updated",
          title: "Loudest à la Madison #1 (L'integral)",
          description: "Exploring the advancements in technology and innovation. Stay ahead with us.",
          date: "12 March 2021",
          comments: 8,
        },
        {
            id: 3,
            image: "/images/featuredpic/featuredpic3.png",
            category: "Google",
            tag1: "Popular",
            tag2: "Updated",
            title: "Loudest à la Madison #1 (L'integral)",
            description: "Exploring the advancements in technology and innovation. Stay ahead with us.",
            date: "12 March 2021",
            comments: 8,
          },
      ];
    return (
        <>
        {!isHomepage && <NavLinks />}
        <div>
        <div className="lg:flex lg:flex-col lg:items-center pb-12">
            <div>
                <div className="flex flex-col gap-7 items-center mt-40 mb-10 lg:gap-3 lg:mt-16">
                    <p className="greenP">Parctice Advice</p>
                    <p className="text-center h1 flex flex-col gap-2 lg:flex-row lg:gap-5">Featured<p>Products</p></p> 
                    <p className="text-center grayP  lg:text-left">Problems trying to resolve the<br className="lg:hidden"/>conflict between the two major<p>realms of Classical physics: newtonian mechanics</p><br/></p>
                </div>
            </div>
    <div className="flex flex-col gap-8 lg:flex-wrap lg:flex-row">
      {featuredItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
            <div 
            className="bg-cover bg-center w-80 h-80" 
            style={{ backgroundImage: `url(${item.image})` }}
            >
            <button className="bg-red-500 h6 text-white w-14 rounded-sm ml-5 mt-3">
              New
            </button>
        </div>
        <div className="border border-gray w-80 flex flex-col pl-5 py-4 gap-3">
            <div className="flex gap-3">
              <p className="greenPt">{item.category}</p>
              <p className="grayPt">{item.tag1}</p>
              <p className="grayPt">{item.tag2}</p>
            </div>
                <p className="h5">{item.title}</p>
                <p className="grayPt">{item.description}</p>
            <div className="flex justify-between">
                <div className="grayPt">
                <i className="fa-solid fa-clock text-green-500"></i> {item.date}
            </div>
                <div className="grayPt pr-12 flex items-center gap-2"><i class="fa-regular fa-comment"></i>{item.comments} Comments</div>
            </div>
                <div className="flex items-center gap-2">
                Learn More
                <i className="fa-solid fa-arrow-right text-green-500"></i>
            </div>
          </div>
        </div>
            ))}
        </div>
        </div>
    </div>
    {!isHomepage && <Clients/>}
    {!isHomepage && <Footer/>}
        </>
    )
}