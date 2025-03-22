// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// interface FAQProps {
//   question: string;
//   answer: string;
//   value: string;
// }

// const FAQList: FAQProps[] = [
//   {
//     question: "Is this template free?",
//     answer: "Yes. It is a free NextJS Shadcn template.",
//     value: "item-1",
//   },
//   {
//     question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
//     value: "item-2",
//   },
//   {
//     question:
//       "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
//     value: "item-3",
//   },
//   {
//     question: "Excepteur sint occaecat cupidata non proident sunt?",
//     answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     value: "item-4",
//   },
//   {
//     question:
//       "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
//     answer: "consectetur adipisicing elit. Sint labore.",
//     value: "item-5",
//   },
// ];

// export const FAQSection = () => {
//   return (
//     <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
//       <div className="text-center mb-8">
//         <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//           FAQS
//         </h2>

//         <h2 className="text-3xl md:text-4xl text-center font-bold">
//           Common Questions
//         </h2>
//       </div>

//       <Accordion type="single" collapsible className="AccordionRoot">
//         {FAQList.map(({ question, answer, value }) => (
//           <AccordionItem key={value} value={value}>
//             <AccordionTrigger className="text-left">
//               {question}
//             </AccordionTrigger>

//             <AccordionContent>{answer}</AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </section>
//   );
// };


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is our Food Analytics + POS SaaS platform?",
    answer:
      "Our platform is a cloud-based solution designed for the food industry that integrates ERP and POS systems to deliver real-time inventory tracking, demand forecasting, and actionable insights.",
    value: "item-1",
  },
  {
    question: "How does real-time inventory monitoring work?",
    answer:
      "It collects data from your ERP and POS systems to monitor stock levels, track perishable goods, and automatically trigger alerts for low stock or items nearing expiry.",
    value: "item-2",
  },
  {
    question: "Can the platform help reduce food waste?",
    answer:
      "Yes. By identifying slow-moving and near-expiry items, our system recommends timely discounts, redistribution, or donation strategies to minimize waste.",
    value: "item-3",
  },
  {
    question: "What kind of analytics and reporting are available?",
    answer:
      "Our solution generates detailed reports on sales trends, inventory levels, food waste, and even carbon footprint, enabling data-driven decisions and operational improvements.",
    value: "item-4",
  },
  {
    question: "How does demand forecasting enhance decision-making?",
    answer:
      "Leveraging machine learning on historical sales and seasonal trends, our platform accurately predicts demand to help you optimize stock levels and boost profitability.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
