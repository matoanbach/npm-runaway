// "use client";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Building2, Clock, Mail, Phone } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";

// const formSchema = z.object({
//   firstName: z.string().min(2).max(255),
//   lastName: z.string().min(2).max(255),
//   email: z.string().email(),
//   subject: z.string().min(2).max(255),
//   message: z.string(),
// });

// export const ContactSection = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       subject: "Web Development",
//       message: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     const { firstName, lastName, email, subject, message } = values;
//     console.log(values);

//     const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

//     window.location.href = mailToLink;
//   }

//   return (
//     <section id="contact" className="container py-24 sm:py-32">
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <div className="mb-4">
//             <h2 className="text-lg text-primary mb-2 tracking-wider">
//               Contact
//             </h2>

//             <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
//           </div>
//           <p className="mb-8 text-muted-foreground lg:w-5/6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
//             ipsam sint enim exercitationem ex autem corrupti quas tenetur
//           </p>

//           <div className="flex flex-col gap-4">
//             <div>
//               <div className="flex gap-2 mb-1">
//                 <Building2 />
//                 <div className="font-bold">Find us</div>
//               </div>

//               <div>742 Evergreen Terrace, Springfield, IL 62704</div>
//             </div>

//             <div>
//               <div className="flex gap-2 mb-1">
//                 <Phone />
//                 <div className="font-bold">Call us</div>
//               </div>

//               <div>+1 (619) 123-4567</div>
//             </div>

//             <div>
//               <div className="flex gap-2 mb-1">
//                 <Mail />
//                 <div className="font-bold">Mail US</div>
//               </div>

//               <div>leomirandadev@gmail.com</div>
//             </div>

//             <div>
//               <div className="flex gap-2">
//                 <Clock />
//                 <div className="font-bold">Visit us</div>
//               </div>

//               <div>
//                 <div>Monday - Friday</div>
//                 <div>8AM - 4PM</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Card className="bg-muted/60 dark:bg-card">
//           <CardHeader className="text-primary text-2xl"> </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="grid w-full gap-4"
//               >
//                 <div className="flex flex-col md:!flex-row gap-8">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem className="w-full">
//                         <FormLabel>First Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Leopoldo" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem className="w-full">
//                         <FormLabel>Last Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Miranda" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="email"
//                             placeholder="leomirandadev@gmail.com"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <FormField
//                     control={form.control}
//                     name="subject"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Subject</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select a subject" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="Web Development">
//                               Web Development
//                             </SelectItem>
//                             <SelectItem value="Mobile Development">
//                               Mobile Development
//                             </SelectItem>
//                             <SelectItem value="Figma Design">
//                               Figma Design
//                             </SelectItem>
//                             <SelectItem value="REST API">REST API</SelectItem>
//                             <SelectItem value="FullStack Project">
//                               FullStack Project
//                             </SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             rows={5}
//                             placeholder="Your message..."
//                             className="resize-none"
//                             {...field}
//                           />
//                         </FormControl>

//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <Button className="mt-4">Send message</Button>
//               </form>
//             </Form>
//           </CardContent>

//           <CardFooter></CardFooter>
//         </Card>
//       </section>
//     </section>
//   );
// };

"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "ERP Integration",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:support@foodanalytics.io?subject=${subject}&body=Hello, I am ${firstName} ${lastName}. You can reach me at ${email}.%0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">
              Connect With Our Food Analytics Platform
            </h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Have questions about our real-time inventory tracking, seamless ERP &amp; POS integrations, or advanced demand forecasting? Reach out to us and let’s discuss how we can optimize your food business operations.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Find us</div>
              </div>
              <div>1750 Finch Avenue East, Toronto</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>
              <div>1-800-FOOD-TECH</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Mail us</div>
              </div>
              <div>support@foodanalytics.io</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Hours</div>
              </div>
              <div>
                <div>Monday - Friday</div>
                <div>9AM - 6PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl">
            Get in Touch
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="yourname@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ERP Integration">
                              ERP Integration
                            </SelectItem>
                            <SelectItem value="POS Analytics">
                              POS Analytics
                            </SelectItem>
                            <SelectItem value="Inventory Management">
                              Inventory Management
                            </SelectItem>
                            <SelectItem value="Demand Forecasting">
                              Demand Forecasting
                            </SelectItem>
                            <SelectItem value="UI/UX Inquiry">
                              UI/UX Inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4 bg-purple-700">Send Message</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
