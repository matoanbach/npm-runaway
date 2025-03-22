// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { ContentLayout } from "@/components/admin-panel/content-layout"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { LinearLineChartComponent } from "@/components/charts/linear-line-chart/linear-line-chart"
// import { Card } from "@/components/ui/card"
// import GanttChartComponent from "@/components/charts/gantt-chart/gantt-chart-component"
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import { Button } from "@/components/ui/button"

// type ProductExpiry = {
//   name: string;
//   expiryDescription: string;
//   dateRange: string;
//   duration: string;
//   progress: number;
// };

// type Batch = {
//   id: string;
//   label: string;
//   products: ProductExpiry[];
// };

// type ProductChart = {
//   chartName: string;
//   chartData: { month: string; product: number }[];
//   productInsights: string;
//   batches: Batch[];
// };

// const productOptions = ["apple", "banana", "blueberry", "grapes", "pineapple"];

// const sampleProductCharts: ProductChart[] = productOptions.map((productName) => {
//   // Define product-specific insights
//   let insights = "";
//   switch (productName) {
//     case "apple":
//       insights = "Apple: High consumer demand and robust turnover ensure minimal waste.";
//       break;
//     case "banana":
//       insights = "Banana: Stable performance with occasional supply fluctuations requiring monitoring.";
//       break;
//     case "blueberry":
//       insights = "Blueberry: Premium quality with lower volumes, leading to high customer satisfaction.";
//       break;
//     case "grapes":
//       insights = "Grapes: Steady demand with seasonal variations; inventory levels are well-managed.";
//       break;
//     case "pineapple":
//       insights = "Pineapple: Strong growth with extended shelf life and low waste levels.";
//       break;
//     default:
//       insights = "No insights available.";
//   }

//   // Generate chart data for months January to June
//   const months = ["January", "February", "March", "April", "May", "June"];
//   const chartData = months.map((month) => ({
//     month,
//     product: Math.floor(Math.random() * 300), // Random stock level between 0 and 299
//   }));

//   // Define sample batches for expiry tracking with random progress values
//   const batches: Batch[] = [
//     {
//       id: "A",
//       label: "Batch A",
//       products: [
//         {
//           name: "Product 1",
//           expiryDescription: "Expires in 5 days",
//           dateRange: "Day 1 - Day 5",
//           duration: "5 days",
//           progress: Math.floor(Math.random() * 100),
//         },
//         {
//           name: "Product 2",
//           expiryDescription: "Expires in 6 days",
//           dateRange: "Day 2 - Day 7",
//           duration: "6 days",
//           progress: Math.floor(Math.random() * 100),
//         },
//       ],
//     },
//     {
//       id: "B",
//       label: "Batch B",
//       products: [
//         {
//           name: "Product 3",
//           expiryDescription: "Expires in 15 days",
//           dateRange: "Day 8 - Day 22",
//           duration: "15 days",
//           progress: Math.floor(Math.random() * 100),
//         },
//         {
//           name: "Product 4",
//           expiryDescription: "Expires in 14 days",
//           dateRange: "Day 7 - Day 20",
//           duration: "14 days",
//           progress: Math.floor(Math.random() * 100),
//         },
//       ],
//     },
//   ];

//   return {
//     chartName: productName.charAt(0).toUpperCase() + productName.slice(1),
//     chartData,
//     productInsights: insights,
//     batches,
//   };
// });

// const chartColors = [
//   "hsl(210, 80%, 50%)",
//   "hsl(180, 70%, 40%)",
//   "hsl(330, 90%, 45%)",
//   "hsl(50, 70%, 45%)",
//   "hsl(90, 80%, 40%)",
// ]

// export default function StockPage() {
//   // State for the selected product chart; default to first product ("apple")
//   const [selectedProductChart, setSelectedProductChart] = useState(sampleProductCharts[0])

//   const handleSendEmail = async () => {
//     const emailData = {
//       from: "bachmatoan2910@gmail.com", // your email address
//       to: "bachmatoan2610@gmail.com",   // recipient email address
//       subject: "Alert: Near-Expiry Product Notification & Recommendations",
//       html: `
//         <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
//           <h1 style="color: #d9534f; text-align: center;">Product Expiry Notification</h1>
//           <p>Dear Store Supervisor,</p>
//           <p>The following product(s) are nearing their expiry date:</p>
//           <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
//             <thead>
//               <tr>
//                 <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Product Name</th>
//                 <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Expiry Date</th>
//                 <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Days Remaining</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Product XYZ</td>
//                 <td style="border: 1px solid #ddd; padding: 8px;">2025-03-30</td>
//                 <td style="border: 1px solid #ddd; padding: 8px;">3 days</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Product ABC</td>
//                 <td style="border: 1px solid #ddd; padding: 8px;">2025-04-02</td>
//                 <td style="border: 1px solid #ddd; padding: 8px;">5 days</td>
//               </tr>
//             </tbody>
//           </table>
//           <p>Please review the inventory and take the necessary actions to handle these near-expiry products.</p>
//           <h2 style="color: #d9534f;">Recommendations</h2>
//           <p>
//             As a store supervisor, we highly recommend the following options:
//           </p>
//           <ul style="margin-left: 20px;">
//             <li>Apply a discount on these near-expiry products to boost sales.</li>
//             <li>Redistribute the products to other store locations if needed.</li>
//             <li>
//               Consider donating them to non-profit organizations. Here are some organizations that might accept near-expiry products:
//               <ul style="margin-left: 20px;">
//                 <li>
//                   <a href="https://www.feedingamerica.org" style="color: #337ab7;">Feeding America</a>
//                 </li>
//                 <li>
//                   <a href="https://www.foodbank.org" style="color: #337ab7;">Food Bank</a>
//                 </li>
//                 <li>
//                   <a href="https://www.lifesavers.org" style="color: #337ab7;">Lifesavers</a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           <p>
//             These automatic expiry alerts help you manage inventory effectively, minimize losses, and even support your community by donating products in need.
//           </p>
//           <p>Thank you,<br>Your Inventory Management Team</p>
//         </div>
//       `,
//     };

//     try {
//       const res = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(emailData),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Error sending email: " + data.error);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Error sending email");
//     }
//   };

//   return (
//     <ContentLayout title="Stock">
//       <Breadcrumb>
//         <BreadcrumbList>
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link href="/">Home</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link href="/dashboard">Dashboard</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbPage>Stock</BreadcrumbPage>
//           </BreadcrumbItem>
//           <BreadcrumbItem>
//             {/* Product select placed inside the breadcrumb list */}
//             <Select
//               onValueChange={(value) => {
//                 const index = productOptions.indexOf(value)
//                 if (index !== -1) {
//                   setSelectedProductChart(sampleProductCharts[index])
//                 }
//               }}
//             >
//               <SelectTrigger className="ml-2 w-[180px] bg-white dark:bg-black">
//                 <SelectValue placeholder="Select a product" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>Products</SelectLabel>
//                   <Separator />
//                   {productOptions.map((product) => (
//                     <SelectItem key={product} value={product}>
//                       {product.charAt(0).toUpperCase() + product.slice(1)}
//                     </SelectItem>
//                   ))}
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </BreadcrumbItem>
//           <BreadcrumbItem>
//             <Button onClick={handleSendEmail}>
//               Send mail
//             </Button>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>
//       <div className="flex flex-1 flex-col gap-2 p-4">
//         {/* Chart and Insights Row */}
//         <div className="grid auto-rows-min gap-2 md:grid-cols-2">
//           {/* Chart Column */}
//           <div className="rounded-xl h-full w-full">
//             <LinearLineChartComponent
//               chartName={selectedProductChart.chartName}
//               chartData={selectedProductChart.chartData}
//               lineColor={
//                 chartColors[Math.floor(Math.random() * chartColors.length)]
//               }
//             />
//           </div>
//           {/* Insights Column */}
//           <div className="rounded-xl bg-muted/50 h-full w-full">
//             <Card className="h-full p-10">
//               <span className="font-semibold">Product Insights</span>
//               <p>{selectedProductChart.productInsights}</p>
//             </Card>
//           </div>
//         </div>
//         {/* Additional section: Gantt Chart for expiry tracking */}
//         <div className="grid auto-rows-min gap-2 md:grid-cols-2">
//           <div className="grid auto-rows-min gap-2 md:col-span-2">
//             <div className="rounded-xl bg-muted/50">
//               <GanttChartComponent batches={selectedProductChart.batches} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </ContentLayout>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LinearLineChartComponent } from "@/components/charts/linear-line-chart/linear-line-chart"
import { Card } from "@/components/ui/card"
import GanttChartComponent from "@/components/charts/gantt-chart/gantt-chart-component"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"  // import the toast hook
import { useEmail } from "@/hooks/use-email"

type ProductExpiry = {
  name: string;
  expiryDescription: string;
  dateRange: string;
  duration: string;
  progress: number;
};

type Batch = {
  id: string;
  label: string;
  products: ProductExpiry[];
};

type ProductChart = {
  chartName: string;
  chartData: { month: string; product: number }[];
  productInsights: string;
  batches: Batch[];
};

const productOptions = ["apple", "banana", "blueberry", "grapes", "pineapple"];

const sampleProductCharts: ProductChart[] = productOptions.map((productName) => {
  // Define product-specific insights
  let insights = "";
  switch (productName) {
    case "apple":
      insights = "Apple: High consumer demand and robust turnover ensure minimal waste.";
      break;
    case "banana":
      insights = "Banana: Stable performance with occasional supply fluctuations requiring monitoring.";
      break;
    case "blueberry":
      insights = "Blueberry: Premium quality with lower volumes, leading to high customer satisfaction.";
      break;
    case "grapes":
      insights = "Grapes: Steady demand with seasonal variations; inventory levels are well-managed.";
      break;
    case "pineapple":
      insights = "Pineapple: Strong growth with extended shelf life and low waste levels.";
      break;
    default:
      insights = "No insights available.";
  }

  // Generate chart data for months January to June
  const months = ["January", "February", "March", "April", "May", "June"];
  const chartData = months.map((month) => ({
    month,
    product: Math.floor(Math.random() * 300), // Random stock level between 0 and 299
  }));

  // Define sample batches for expiry tracking with random progress values
  const batches: Batch[] = [
    {
      id: "A",
      label: "Batch A",
      products: [
        {
          name: "Product 1",
          expiryDescription: "Expires in 5 days",
          dateRange: "Day 1 - Day 5",
          duration: "5 days",
          progress: Math.floor(Math.random() * 100),
        },
        {
          name: "Product 2",
          expiryDescription: "Expires in 6 days",
          dateRange: "Day 2 - Day 7",
          duration: "6 days",
          progress: Math.floor(Math.random() * 100),
        },
      ],
    },
    {
      id: "B",
      label: "Batch B",
      products: [
        {
          name: "Product 3",
          expiryDescription: "Expires in 15 days",
          dateRange: "Day 8 - Day 22",
          duration: "15 days",
          progress: Math.floor(Math.random() * 100),
        },
        {
          name: "Product 4",
          expiryDescription: "Expires in 14 days",
          dateRange: "Day 7 - Day 20",
          duration: "14 days",
          progress: Math.floor(Math.random() * 100),
        },
      ],
    },
  ];

  return {
    chartName: productName.charAt(0).toUpperCase() + productName.slice(1),
    chartData,
    productInsights: insights,
    batches,
  };
});

const chartColors = [
  "hsl(210, 80%, 50%)",
  "hsl(180, 70%, 40%)",
  "hsl(330, 90%, 45%)",
  "hsl(50, 70%, 45%)",
  "hsl(90, 80%, 40%)",
];

export default function StockPage() {
  // State for the selected product chart; default to first product ("apple")
  const [selectedProductChart, setSelectedProductChart] = useState(sampleProductCharts[0]);
  const { settings } = useEmail();

  let sender: string;
  let receiver: string;
  let password: string;

  // Only use userCredentials if both user and pass are provided.
  if (settings.senderEmail && settings.senderAppPassword) {
    sender = settings.senderEmail;
    password = settings.senderAppPassword;
    receiver = settings.receiverEmail;
  } else {
    sender = process.env.NEXT_PUBLIC_MAIL_USERNAME || "";
    password = process.env.NEXT_PUBLIC_MAIL_PASSWORD || "";
    receiver = process.env.NEXT_PUBLIC_MAIL_RECEIVERNAME || "";
  }

  const handleSendEmail = async () => {
    const emailData = {
      from: sender, // your email address
      to: receiver,   // recipient email address
      subject: "Alert: Near-Expiry Product Notification & Recommendations",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h1 style="color: #d9534f; text-align: center;">Product Expiry Notification</h1>
          <p>Dear Store Supervisor,</p>
          <p>The following product(s) are nearing their expiry date:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Product Name</th>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Expiry Date</th>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Days Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Product XYZ</td>
                <td style="border: 1px solid #ddd; padding: 8px;">2025-03-30</td>
                <td style="border: 1px solid #ddd; padding: 8px;">3 days</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Product ABC</td>
                <td style="border: 1px solid #ddd; padding: 8px;">2025-04-02</td>
                <td style="border: 1px solid #ddd; padding: 8px;">5 days</td>
              </tr>
            </tbody>
          </table>
          <p>Please review the inventory and take the necessary actions to handle these near-expiry products.</p>
          <h2 style="color: #d9534f;">Recommendations</h2>
          <p>
            As a store supervisor, we highly recommend the following options:
          </p>
          <ul style="margin-left: 20px;">
            <li>Apply a discount on these near-expiry products to boost sales.</li>
            <li>Redistribute the products to other store locations if needed.</li>
            <li>
              Consider donating them to non-profit organizations. Here are some organizations that might accept near-expiry products:
              <ul style="margin-left: 20px;">
                <li>
                  <a href="https://www.feedingamerica.org" style="color: #337ab7;">Feeding America</a>
                </li>
                <li>
                  <a href="https://www.foodbank.org" style="color: #337ab7;">Food Bank</a>
                </li>
                <li>
                  <a href="https://www.lifesavers.org" style="color: #337ab7;">Lifesavers</a>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            These automatic expiry alerts help you manage inventory effectively, minimize losses, and even support your community by donating products in need.
          </p>
          <p>Thank you,<br>Your Inventory Management Team</p>
        </div>
      `,
      userCredentials: {
        user: sender,
        pass: password,
      },
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });
      const data = await res.json();
      console.log("sender: ", sender)
      console.log("receiver: ", receiver)
      if (res.ok) {
        toast({
          title: "Email Sent Successfully",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "Error Sending Email",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data.error, null, 2)}
              </code>
            </pre>
          ),
        });
      }
    } catch (error) {
      toast({
        title: "Error Sending Email",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(error, null, 2)}
            </code>
          </pre>
        ),
      });
    }
  };

  return (
    <ContentLayout title="Stock">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage onClick={handleSendEmail}>Stock</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Select
              onValueChange={(value) => {
                const index = productOptions.indexOf(value)
                if (index !== -1) {
                  setSelectedProductChart(sampleProductCharts[index])
                }
              }}
            >
              <SelectTrigger className="ml-2 w-[180px] bg-white dark:bg-black">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Products</SelectLabel>
                  <Separator />
                  {productOptions.map((product) => (
                    <SelectItem key={product} value={product}>
                      {product.charAt(0).toUpperCase() + product.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="rounded-xl h-full w-full">
            <LinearLineChartComponent
              chartName={selectedProductChart.chartName}
              chartData={selectedProductChart.chartData}
              lineColor={
                chartColors[Math.floor(Math.random() * chartColors.length)]
              }
            />
          </div>
          <div className="rounded-xl bg-muted/50 h-full w-full">
            <Card className="h-full p-10">
              <span className="font-semibold">Product Insights</span>
              <p>{selectedProductChart.productInsights}</p>
            </Card>
          </div>
        </div>
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="grid auto-rows-min gap-2 md:col-span-2">
            <div className="rounded-xl bg-muted/50">
              <GanttChartComponent batches={selectedProductChart.batches} />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
