// import Link from "next/link";
// import { LeafyGreen } from "lucide-react";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
// import { HeroSection } from "@/components/sections/hero";
// import { SponsorsSection } from "@/components/sections/sponsors";
// import { BenefitsSection } from "@/components/sections/benefits";
// import { FeaturesSection } from "@/components/sections/features";
// import { ServicesSection } from "@/components/sections/services";
// import { TestimonialSection } from "@/components/sections/testimonial";
// import { TeamSection } from "@/components/sections/team";
// import { CommunitySection } from "@/components/sections/community";
// import { PricingSection } from "@/components/sections/pricing";
// import { ContactSection } from "@/components/sections/contact";
// import { FAQSection } from "@/components/sections/faq";
// import { FooterSection } from "@/components/sections/footer";

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
//         <div className="container h-14 flex items-center">
//           <Link
//             href="/"
//             className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
//           >
//             <LeafyGreen className="w-6 h-6 mr-3" />
//             <span className="font-bold">deep.food</span>
//             <span className="sr-only">deep.food</span>
//           </Link>
//           <nav className="ml-auto flex items-center gap-2">
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full w-8 h-8 bg-background"
//               asChild
//             >
//               <Link href="https://github.com/matoanbach/npm-runaway"
//                 target="_blank"
//               >
//                 <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
//               </Link>
//             </Button>
//             <ModeToggle />
//           </nav>
//         </div>
//         <main>
//           <HeroSection />
//           <SponsorsSection />
//           <BenefitsSection />
//           <FeaturesSection />
//           <ServicesSection />
//           <TestimonialSection />
//           <TeamSection />
//           <CommunitySection />
//           <PricingSection />
//           <ContactSection />
//           <FAQSection />
//           <FooterSection />
//         </main>
//       </header>
//     </div>
//   );
// }

import Link from "next/link";
import { LeafyGreen } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/sections/hero";
import { SponsorsSection } from "@/components/sections/sponsors";
import { BenefitsSection } from "@/components/sections/benefits";
import { FeaturesSection } from "@/components/sections/features";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialSection } from "@/components/sections/testimonial";
import { TeamSection } from "@/components/sections/team";
import { CommunitySection } from "@/components/sections/community";
import { PricingSection } from "@/components/sections/pricing";
import { ContactSection } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq";
import { FooterSection } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <LeafyGreen className="w-6 h-6 mr-3" />
            <span className="font-bold">deep.food</span>
            <span className="sr-only">deep.food</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://github.com/salimi-my/shadcn-ui-sidebar">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <HeroSection />
          <SponsorsSection />
          <BenefitsSection />
          <FeaturesSection />
          <ServicesSection />
          <TestimonialSection />
          <TeamSection />
          <CommunitySection />
          <PricingSection />
          <ContactSection />
          <FAQSection />
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
