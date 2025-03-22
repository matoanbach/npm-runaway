import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: PopularPlan.NO,
    price: 0,
    description:
      "Start with essential features to manage your inventory and basic ERP integration.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Real-time inventory tracking",
      "Basic ERP integration",
      "Limited reporting",
      "Community support",
      "No cost",
    ],
  },
  {
    title: "Premium",
    popular: PopularPlan.YES,
    price: 45,
    description:
      "Unlock advanced analytics with seamless ERP & POS integrations, dynamic dashboards, and demand forecasting.",
    buttonText: "Get Started",
    benefitList: [
      "Advanced inventory insights",
      "Multiple ERP integrations",
      "Dynamic dashboards",
      "Priority support",
      "Demand forecasting",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlan.NO,
    price: 120,
    description:
      "Fully integrated solution with custom reporting, multi-location support, and dedicated technical assistance.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom reporting",
      "Multi-location support",
      "Dedicated support",
      "Advanced analytics",
      "Comprehensive integration",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Unlock Powerful Insights
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that best fits your food business and gain access to real-time analytics,
        seamless ERP & POS integration, dynamic dashboards, and much more.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>
                <CardDescription className="pb-4">
                  {description}
                </CardDescription>
                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
