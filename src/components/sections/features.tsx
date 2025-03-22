// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
// import { icons } from "lucide-react";

// interface FeaturesProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// const featureList: FeaturesProps[] = [
//   {
//     icon: "TabletSmartphone",
//     title: "Mobile Friendly",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
//   },
//   {
//     icon: "BadgeCheck",
//     title: "Social Proof",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
//   },
//   {
//     icon: "Goal",
//     title: "Targeted Content",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
//   },
//   {
//     icon: "PictureInPicture",
//     title: "Strong Visuals",
//     description:
//       "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
//   },
//   {
//     icon: "MousePointerClick",
//     title: "Clear CTA",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
//   },
//   {
//     icon: "Newspaper",
//     title: "Clear Headline",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
//   },
// ];

// export const FeaturesSection = () => {
//   return (
//     <section id="features" className="container py-24 sm:py-32">
//       <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//         Features
//       </h2>

//       <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
//         What Makes Us Different
//       </h2>

//       <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
//         fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
//         facere tenetur.
//       </h3>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {featureList.map(({ icon, title, description }) => (
//           <div key={title}>
//             <Card className="h-full bg-background border-0 shadow-none">
//               <CardHeader className="flex justify-center items-center">
//                 <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
//                   <Icon
//                     name={icon as keyof typeof icons}
//                     size={24}
//                     color="hsl(var(--primary))"
//                     className="text-primary"
//                   />
//                 </div>

//                 <CardTitle>{title}</CardTitle>
//               </CardHeader>

//               <CardContent className="text-muted-foreground text-center">
//                 {description}
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Server",
    title: "Seamless ERP & POS Integration",
    description:
      "Integrates with leading ERP systems and POS for real-time data flow and accurate inventory management.",
  },
  {
    icon: "ClipboardList",
    title: "Real-time Inventory Monitoring",
    description:
      "Tracks stock levels, monitors perishable goods, and alerts for near-expiry items while automating discounts to minimize waste.",
  },
  {
    icon: "TrendingUp",
    title: "Demand Forecasting & Analytics",
    description:
      "Utilizes machine learning to predict demand based on historical data, seasonal trends, and external factors for optimal stock management.",
  },
  {
    icon: "LayoutDashboard",
    title: "Dynamic, Customizable Dashboard",
    description:
      "Displays intuitive, real-time KPIs and alerts, enabling swift decision-making and enhanced operational control.",
  },
  {
    icon: "FileText",
    title: "Automated, In-depth Reporting",
    description:
      "Generates detailed reports on sales, waste, carbon footprint, and supplier performance to inform strategic decisions.",
  },
  {
    icon: "PieChart",
    title: "Data-Driven Insights",
    description:
      "Leverages advanced analytics to identify trends, optimize operations, and ensure regulatory compliance with actionable insights.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        A cutting-edge SaaS platform for the food industry that seamlessly integrates ERP and POS systems,
        providing real-time analytics, dynamic dashboards, and actionable insights.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-purple-200 p-2 rounded-full ring-8 ring-purple-100 mb-4 dark:bg-purple-500 dark:ring-purple-900">
                {/* <div className="bg-primary/20 p-2 rounded-full ring-8 ring-purple-700 ring-offset-4 ring-offset-purple-300 mb-4"> */}
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
