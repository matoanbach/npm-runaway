// "use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Star } from "lucide-react";

// interface ReviewProps {
//   image: string;
//   name: string;
//   userName: string;
//   comment: string;
//   rating: number;
// }

// const reviewList: ReviewProps[] = [
//   {
//     image: "https://github.com/shadcn.png",
//     name: "John Doe",
//     userName: "Product Manager",
//     comment:
//       "Wow NextJs + Shadcn is awesome!. This template lets me change colors, fonts and images to match my brand identity. ",
//     rating: 5.0,
//   },
//   {
//     image: "https://github.com/shadcn.png",
//     name: "Sophia Collins",
//     userName: "Cybersecurity Analyst",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
//     rating: 4.8,
//   },

//   {
//     image: "https://github.com/shadcn.png",
//     name: "Adam Johnson",
//     userName: "Chief Technology Officer",
//     comment:
//       "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     rating: 4.9,
//   },
//   {
//     image: "https://github.com/shadcn.png",
//     name: "Ethan Parker",
//     userName: "Data Scientist",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     rating: 5.0,
//   },
//   {
//     image: "https://github.com/shadcn.png",
//     name: "Ava Mitchell",
//     userName: "IT Project Manager",
//     comment:
//       "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
//     rating: 5.0,
//   },
//   {
//     image: "https://github.com/shadcn.png",
//     name: "Isabella Reed",
//     userName: "DevOps Engineer",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     rating: 4.9,
//   },
// ];

// export const TestimonialSection = () => {
//   return (
//     <section id="testimonials" className="container py-24 sm:py-32">
//       <div className="text-center mb-8">
//         <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//           Testimonials
//         </h2>

//         <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
//           Hear What Our 1000+ Clients Say
//         </h2>
//       </div>

//       <Carousel
//         opts={{
//           align: "start",
//         }}
//         className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
//       >
//         <CarouselContent>
//           {reviewList.map((review) => (
//             <CarouselItem
//               key={review.name}
//               className="md:basis-1/2 lg:basis-1/3"
//             >
//               <Card className="bg-muted/50 dark:bg-card">
//                 <CardContent className="pt-6 pb-0">
//                   <div className="flex gap-1 pb-6">
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                     <Star className="size-4 fill-primary text-primary" />
//                   </div>
//                   {`"${review.comment}"`}
//                 </CardContent>

//                 <CardHeader>
//                   <div className="flex flex-row items-center gap-4">
//                     <Avatar>
//                       <AvatarImage
//                         src="https://avatars.githubusercontent.com/u/75042455?v=4"
//                         alt="radix"
//                       />
//                       <AvatarFallback>SV</AvatarFallback>
//                     </Avatar>

//                     <div className="flex flex-col">
//                       <CardTitle className="text-lg">{review.name}</CardTitle>
//                       <CardDescription>{review.userName}</CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </section>
//   );
// };

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png",
    name: "Maria Gonzalez",
    userName: "Restaurant Owner",
    comment:
      "This platform transformed our inventory management and sales process. Real-time alerts and a dynamic dashboard made decision-making effortless.",
    rating: 5.0,
  },
  {
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
    name: "David Lee",
    userName: "Inventory Manager",
    comment:
      "The real-time inventory monitoring is a game-changer. Tracking perishable goods has never been easier, significantly reducing waste.",
    rating: 5.0,
  },
  {
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png",
    name: "Karen Smith",
    userName: "Sales Manager",
    comment:
      "Demand forecasting and analytics have helped us optimize stock levels and boost sales. The ERP integration is seamless and efficient.",
    rating: 4.8,
  },
  {
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_4.png",
    name: "Eric Johnson",
    userName: "Operations Manager",
    comment:
      "Our dynamic dashboard provides all the KPIs we need at a glance. It’s an indispensable tool for streamlining operations.",
    rating: 5.0,
  },
  {
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png",
    name: "Lisa Wong",
    userName: "Data Analyst",
    comment:
      "The advanced reporting features offer deep insights into our performance. It’s helped us create smarter, data-driven strategies.",
    rating: 4.9,
  },
  {
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png",
    name: "Samuel Brown",
    userName: "POS Specialist",
    comment:
      "Integrating our POS with real-time analytics has simplified our processes. I highly recommend this platform for any food business.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Our Clients Are Saying
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>
                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name}/>
                      <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
