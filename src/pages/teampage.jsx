import { NavLinks } from "@/layout/navlinks";

export function TeamPage() {
    const isHidden = true;
    
    const teamMembers = [
        { name: "Gokhan Ozdemir", role: "Scrum Master", image: "/images/team/team6.jpeg" },
        { name: "Çetin Erdem", role: "Full Stack Developer", image: "/images/team/team5.jpeg" },
        { name: "Didem Demir", role: "Fullstack Developer", image: "/images/team/team4.jpeg" },
        { name: "Özge Karabay", role: "Fullstack Developer", image: "/images/team/team7.jpeg" },
        { name: "Ayşen Aydın", role: "Frontend Developer", image: "/images/team/team8.jpeg" },
        { name: "Nida Türkay", role: "Frontend Developer", image: "/images/team/team9.jpeg" },
        { name: "Mehmet Coşar", role: "Fullstack Developer", image: "/images/team/team10.jpeg" },
        { name: "Berk Şener", role: "Fullstack Developer", image: "/images/team/team11.jpeg" },
        { name: "Ronald Richards", role: "Mitsubishi", image: "/images/team/team3.png" }
    ];

    const groupedMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedMembers.push(teamMembers.slice(i, i + 3));
    }

    return (
        <>
        {!isHidden && <NavLinks />}
            <div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex justify-center">
                        <div className="w-8/12 p-5">
                            <div className="flex flex-col items-center text-center gap-2">
                                <h4 className="h1">Meet Our Team</h4>
                                <p className="grayPt">
                                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex flex-col gap-12 lg:flex-row">
                            {groupedMembers.map((group, groupIndex) => (
                                <div key={groupIndex} className="flex flex-col gap-6 lg:gap-20">
                                    {group.map((member, index) => (
                                        <div key={index} className="flex gap-3">
                                            <img src={member.image} alt={member.name} className="rounded-full w-24" />
                                            <div>
                                                <p className="h6">{member.name}</p>
                                                <p className="grayPt">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
