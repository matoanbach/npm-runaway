import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "ERP & POS Integration",
    description:
      "Seamlessly connect with top ERP systems and POS solutions to unify sales and inventory data in real-time.",
    pro: ProService.NO,
  },
  {
    title: "Real-Time Inventory Monitoring",
    description:
      "Monitor stock levels, track perishable goods, and receive instant alerts on low stock and near-expiry products.",
    pro: ProService.NO,
  },
  {
    title: "Demand Forecasting & Analytics",
    description:
      "Utilize machine learning to predict demand, optimize orders, and adjust pricing strategies based on data trends.",
    pro: ProService.YES,
  },
  {
    title: "Dynamic Reporting & Dashboards",
    description:
      "Access customizable dashboards and detailed reports that provide actionable insights for efficient operations.",
    pro: ProService.YES,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Our Solutions
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Empower Your Food Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Integrate your ERP and POS systems to monitor inventory, forecast demand, and drive data-driven decisions with ease.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
