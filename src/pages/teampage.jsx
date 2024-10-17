export function TeamPage() {
    const teamMembers = [
        { name: "Jacop Jones", role: "Mitsubishi", image: "/images/team/team1.png" },
        { name: "Marvin McKinney", role: "Mitsubishi", image: "/images/team/team2.png" },
        { name: "Ronald Richards", role: "Mitsubishi", image: "/images/team/team3.png" },
        { name: "Jacop Jones", role: "Mitsubishi", image: "/images/team/team1.png" },
        { name: "Marvin McKinney", role: "Mitsubishi", image: "/images/team/team2.png" },
        { name: "Ronald Richards", role: "Mitsubishi", image: "/images/team/team3.png" },
        { name: "Jacop Jones", role: "Mitsubishi", image: "/images/team/team1.png" },
        { name: "Marvin McKinney", role: "Mitsubishi", image: "/images/team/team2.png" },
        { name: "Ronald Richards", role: "Mitsubishi", image: "/images/team/team3.png" }
    ];

    // Her üç elemanı bir alt diziye böl
    const groupedMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedMembers.push(teamMembers.slice(i, i + 3));
    }

    return (
        <>
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
                                            <img src={member.image} alt={member.name} className="rounded-full" />
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
