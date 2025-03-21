// "use client";

// import Link from "next/link";

// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger
// } from "@/components/ui/tooltip";

// import { ContentLayout } from "@/components/admin-panel/content-layout";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator
// } from "@/components/ui/breadcrumb";


// import { useSidebar } from "@/hooks/use-sidebar";
// import { useStore } from "@/hooks/use-store";


// export default function SettingsStockPage() {
//   const sidebar = useStore(useSidebar, (x) => x);
//   if (!sidebar) return null;
//   const { settings, setSettings } = sidebar;
//   return (
//     <ContentLayout title="Settings">
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
//             <BreadcrumbPage>Settings</BreadcrumbPage>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>
//       <TooltipProvider>
//         <div className="flex gap-6 mt-6">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <div className="flex items-center space-x-2">
//                 <Switch
//                   id="is-hover-open"
//                   onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
//                   checked={settings.isHoverOpen}
//                 />
//                 <Label htmlFor="is-hover-open">Hover Open</Label>
//               </div>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>When hovering on the sidebar in mini state, it will open</p>
//             </TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <div className="flex items-center space-x-2">
//                 <Switch
//                   id="disable-sidebar"
//                   onCheckedChange={(x) => setSettings({ disabled: x })}
//                   checked={settings.disabled}
//                 />
//                 <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
//               </div>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Hide sidebar</p>
//             </TooltipContent>
//           </Tooltip>
//         </div>
//       </TooltipProvider>
//     </ContentLayout>
//   );
// }
"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { EmailSettingsForm } from "@/components/email/email";

// // ------ Email Settings Form (Updated for Gmail Account, App Password & Receiver Email) ------

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/hooks/use-toast";

// // Zod schema for the email settings form
// const EmailFormSchema = z.object({
//   gmailAccount: z.string().min(2, {
//     message: "Gmail account must be at least 2 characters.",
//   }),
//   gmailAppPassword: z.string().min(6, {
//     message: "App password must be at least 6 characters.",
//   }),
//   receiverEmail: z.string().email({ message: "Invalid receiver email." }),
// });

// function EmailSettingsForm() {
//   const form = useForm({
//     resolver: zodResolver(EmailFormSchema),
//     defaultValues: {
//       gmailAccount: "",
//       gmailAppPassword: "",
//       receiverEmail: "",
//     },
//   });

//   function onSubmit(data: any) {
//     toast({
//       title: "Email Settings Submitted",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//     // Here, you would typically persist these settings.
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="gmailAccount"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Gmail Account</FormLabel>
//               <FormControl>
//                 <Input placeholder="yourname@gmail.com" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter your Gmail address. Leave blank to use default settings.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="gmailAppPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>App Password</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="Your Gmail App Password" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter your Gmail App Password. Leave blank to use default settings.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="receiverEmail"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Receiver Email</FormLabel>
//               <FormControl>
//                 <Input type="email" placeholder="receiver@example.com" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter the email address that will receive notifications.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

// // ------ Combined Settings Page ------

export default function SettingsStockPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="Settings">
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
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Sidebar Settings</h2>
          <div className="flex gap-6 mt-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is-hover-open"
                    onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                    checked={settings.isHoverOpen}
                  />
                  <Label htmlFor="is-hover-open">Hover Open</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>When hovering on the sidebar in mini state, it will open</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="disable-sidebar"
                    onCheckedChange={(x) => setSettings({ disabled: x })}
                    checked={settings.disabled}
                  />
                  <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hide sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>

      {/* Email Settings Form Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Auto Email Settings</h2>
        <EmailSettingsForm />
      </div>
    </ContentLayout>
  );
}
