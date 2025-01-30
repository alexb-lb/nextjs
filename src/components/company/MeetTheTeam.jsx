import React from "react";

const team_data = [
  {
    name: "Himanshu Shukla",
    role: "Co-founder, CEO",
    image: "/images/team/team2.jpeg",
  },
  {
    name: "Aditya Ramesh",
    role: "Co-founder, Chief Architect and R&D",
    image: "/images/team/team1.jpeg",
  },
  {
    name: "Priyadarshi Prasad",
    role: "Co-founder, CPO and Marketing",
    image: "/images/team/team4.jpeg",
  },
  {
    name: "Mike Gesnaldo",
    role: "CRO",
    image: "/images/team/team5.jpeg",
  },
  {
    name: "Jimmy Phipps",
    role: "Head of Sales (Americas)",
    image: "/images/team/team3.jpeg",
  },
  {
    name: "Kilol Surjan",
    role: "Head of Sales Engg and Customer Success",
    image: "/images/team/team6.jpeg",
  },
  // {
  //   name: "Vasanthi Ramesh",
  //   role: "Head of Finance and Operations",
  //   image: "/images/team/dummy-image.jpg",
  // },
];

const MeetTheTeam = () => {
  return (
    <section className="py-20">
      <h3 className="text-center title2">Leadership Team</h3>
      <div className="max-sm:mt-10 mt-20 flex flex-wrap items-stretch gap-10 justify-center lg:w-[90%] xl:w-[70%] mx-auto">
        {team_data.map((member, index) => (
          <div key={index} className="max-sm:w-[40%] w-[30%] flex flex-col items-center gap-2">
            <img
              className="object-cover rounded-full size-32"
              src={member.image}
              alt={member.name}
            />

            <h4 className="text-lg font-semibold text-center">{member.name}</h4>
            <p className="text-sm text-gray-500 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
