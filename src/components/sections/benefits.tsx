import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Server",
    title: "Seamless ERP & POS Integration",
    description:
      "Effortlessly connect with top ERP systems and POS for real-time data flow and streamlined operations.",
  },
  {
    icon: "ClipboardList",
    title: "Real-time Inventory Management",
    description:
      "Monitor stock levels, track perishable items, and receive instant alerts to minimize waste and optimize orders.",
  },
  {
    icon: "TrendingUp",
    title: "Demand Forecasting & Insights",
    description:
      "Leverage machine learning to predict trends, adjust pricing, and drive strategic decisions with actionable insights.",
  },
  {
    icon: "LayoutDashboard",
    title: "Dynamic Dashboard & Reporting",
    description:
      "Access intuitive, customizable dashboards featuring real-time KPIs, comprehensive reports, and visual analytics.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accelerate Your Business Operations
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Harness the power of seamless integrations and real-time analytics to optimize inventory, forecast demand, and make data-driven decisions.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    // color="hsl(var(--primary))"
                    color="purple"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
