"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
import "../../app/marquee_index.css"
import { icons } from "lucide-react";

interface SponsorsProps {
  icon: string;
  name: string;
}

const sponsors: SponsorsProps[] = [
  {
    icon: "Database",
    name: "ERP Sync Solutions",
  },
  {
    icon: "Leaf",
    name: "FreshChain Integrations",
  },
  {
    icon: "BarChart",
    name: "MarketPulse Analytics",
  },
  {
    icon: "Truck",
    name: "SupplySync Technologies",
  },
  {
    icon: "Activity",
    name: "SmartPOS Systems",
  },
  {
    icon: "Shield",
    name: "SecureData Partners",
  },
  {
    icon: "PieChart",
    name: "Insightful Reporting Co.",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Coming Industry Partners
      </h2>
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem] border-0 !border-none"
          fade
          innerClassName="gap-[3rem] border-0 !border-none"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="hsl(var(--primary))"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
