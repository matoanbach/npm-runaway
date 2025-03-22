// import GithubIcon from "@/components/icons/github-icon";
// import LinkedInIcon from "@/components/icons/linkedin-icon";
// import XIcon from "@/components/icons/x-icon";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// interface TeamProps {
//   imageUrl: string;
//   firstName: string;
//   lastName: string;
//   positions: string[];
//   socialNetworks: SocialNetworkProps[];
// }
// interface SocialNetworkProps {
//   name: string;
//   url: string;
// }
// export const TeamSection = () => {
//   const teamList: TeamProps[] = [
//     {
//       imageUrl: "https://i.pravatar.cc/250?img=58",
//       firstName: "Leo",
//       lastName: "Miranda",
//       positions: ["Vue Fronted Developer", "Creator Of This Website"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//         {
//           name: "Github",
//           url: "https://github.com/leoMirandaa",
//         },
//         {
//           name: "X",
//           url: "https://x.com/leo_mirand4",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Elizabeth",
//       lastName: "Moore",
//       positions: ["UI/UX Designer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//         {
//           name: "X",
//           url: "https://x.com/leo_mirand4",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "David",
//       lastName: "Diaz",
//       positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//         {
//           name: "Github",
//           url: "https://github.com/leoMirandaa",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Sarah",
//       lastName: "Robinson",
//       positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//         {
//           name: "Github",
//           url: "https://github.com/leoMirandaa",
//         },
//         {
//           name: "X",
//           url: "https://x.com/leo_mirand4",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Michael",
//       lastName: "Holland",
//       positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Zoe",
//       lastName: "Garcia",
//       positions: ["JavaScript Evangelist", "Deno Champion"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//         {
//           name: "Github",
//           url: "https://github.com/leoMirandaa",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Evan",
//       lastName: "James",
//       positions: ["Backend Developer"],
//       socialNetworks: [
//         {
//           name: "LinkedIn",
//           url: "https://www.linkedin.com/in/leopoldo-miranda/",
//         },
//         {
//           name: "Github",
//           url: "https://github.com/leoMirandaa",
//         },
//         {
//           name: "X",
//           url: "https://x.com/leo_mirand4",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       firstName: "Pam",
//       lastName: "Taylor",
//       positions: ["Fullstack Developer", "UX Researcher"],
//       socialNetworks: [
//         {
//           name: "X",
//           url: "https://x.com/leo_mirand4",
//         },
//       ],
//     },
//   ];
//   const socialIcon = (socialName: string) => {
//     switch (socialName) {
//       case "LinkedIn":
//         return <LinkedInIcon />;
//       case "Github":
//         return <GithubIcon />;
//       case "X":
//         return <XIcon />;
//     }
//   };

//   return (
//     <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
//       <div className="text-center mb-8">
//         <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//           Team
//         </h2>

//         <h2 className="text-3xl md:text-4xl text-center font-bold">
//           The Company Dream Team
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {teamList.map(
//           (
//             { imageUrl, firstName, lastName, positions, socialNetworks },
//             index
//           ) => (
//             <Card
//               key={index}
//               className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
//             >
//               <CardHeader className="p-0 gap-0">
//                 <div className="h-full overflow-hidden">
//                   <Image
//                     src={imageUrl}
//                     alt=""
//                     width={300}
//                     height={300}
//                     className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
//                   />
//                 </div>
//                 <CardTitle className="py-6 pb-4 px-6">
//                   {firstName}
//                   <span className="text-primary ml-2">{lastName}</span>
//                 </CardTitle>
//               </CardHeader>
//               {positions.map((position, index) => (
//                 <CardContent
//                   key={index}
//                   className={`pb-0 text-muted-foreground ${
//                     index === positions.length - 1 && "pb-6"
//                   }`}
//                 >
//                   {position}
//                   {index < positions.length - 1 && <span>,</span>}
//                 </CardContent>
//               ))}

//               <CardFooter className="space-x-4 mt-auto">
//                 {socialNetworks.map(({ name, url }, index) => (
//                   <Link
//                     key={index}
//                     href={url}
//                     target="_blank"
//                     className="hover:opacity-80 transition-all"
//                   >
//                     {socialIcon(name)}
//                   </Link>
//                 ))}
//               </CardFooter>
//             </Card>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

"use client";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5635AQFmOn6SCDYlNQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726467342998?e=1743202800&v=beta&t=Ko_XWo0exLXxMlpkvpb0ezeiATxu5AC3IlY9_yir8W4",
      firstName: "Kevin",
      lastName: "Liu",
      positions: ["Business Analyst", "Project Manager"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kliuengineering/",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQHFV1oO3DBEVg/profile-displayphoto-shrink_200_200/B56ZW68dGtGsAY-/0/1742598165540?e=1747872000&v=beta&t=9OhHa9T1jbq6vIpWmcexzDxbhrUdos9wiRJLhJYaYfU",
      firstName: "Toan",
      lastName: "Bach",
      positions: ["Backend Developer", "API Integration Specialist"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ma-toan-bach-59b090265/",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQHj5O1oDzc9sw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728420090628?e=1747872000&v=beta&t=XsiyEXuF2Ql5lyPylLVS3beNJzMhm4K97AdO5M5gYkE",
      firstName: "Jasleen",
      lastName: "K",
      positions: ["Data Scientist", "Analytics Expert"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jasleen-k-7a6287253/",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQGuMwWO7yu8vQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726712225590?e=1747872000&v=beta&t=jdIFI8RK2TZQE4G4o_LPKbyk0G5vTmvktVoczhzmDOs",
      firstName: "Karyna",
      lastName: "Lim",
      positions: ["Frontend Developer", "UI/UX Designer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/karynalim/",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQGY0s1G4kpaZw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673210372556?e=1747872000&v=beta&t=CF-10pv1Bu8gnrhU5IywDDaRoBLUmUMRMr6kVk7RuzM",
      firstName: "Andy",
      lastName: "Zheng",
      positions: ["Full-stack Developer", "UI/UX Designer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/andy-zh/",
        },
      ],
    }, 
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Meet the Dream Team Behind Our Food Analytics Platform
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          ({ imageUrl, firstName, lastName, positions, socialNetworks },
          index) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-100 transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}
              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
