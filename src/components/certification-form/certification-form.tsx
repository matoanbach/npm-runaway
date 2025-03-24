"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { CertificateData, generatePDF } from "../pdf-generator.tsx/pdf-generator";

// Helper function to generate a random certificate ID.
const generateCertId = () => {
  return `CERT-${Math.floor(10000 + Math.random() * 90000)}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;
};

// Helper function to generate the current date in YYYY-MM-DD format.
const generateDateIssue = () => {
  const now = new Date();
  return now.toISOString().split("T")[0];
};

const generateId = () => {
  return `CERT${Math.floor(100 + Math.random() * 900)}
  )}`;
}

// Define the validation schema for the certification form.
const CertificationFormSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  company_email: z.string().email("Invalid email address"),
  company_phone: z.string().min(1, "Company phone is required"),
  company_product: z.string().min(1, "Please provide the products supplied"),
  product_origin: z.string().min(1, "Product origin is required"),
  general_manager: z.string().min(1, "General manager is required"),
});

export type CertificationFormData = z.infer<typeof CertificationFormSchema>;

export function CertificationFormComponent() {
  // Initialize the form with auto-generated certificate ID.
  const form = useForm<CertificationFormData>({
    resolver: zodResolver(CertificationFormSchema),
    defaultValues: {
      company_name: "",
      company_email: "",
      company_phone: "",
      company_product: "",
      product_origin: "",
      general_manager: "",
    },
  });

  // Generate the "Date of Issue" (read-only) using the current date.


  function onSubmit(data: CertificationFormData) {
    const submissionData = {
      certId: generateId(),
      company_name: data.company_name,
      company_email: data.company_email,
      company_phone: data.company_phone,
      company_product: data.company_product,
      product_origin: data.product_origin,
      general_manager: data.general_manager,
      date_issue: generateDateIssue(),
      certificate_id_number: generateCertId(),
      status: "Approved",
      date_submitted: generateDateIssue(),
      expiration_date: generateDateIssue(),
      certificate_url: "https://certificates.com/globalfresh/CERT001.pdf",
      products: data.company_product,
      rejection_reason: ""
    }
    toast({
      title: "Application Submitted",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(submissionData, null, 2)}</code>
        </pre>
      ),
    });
    
    generatePDF(submissionData as CertificateData);
    form.reset({
      company_name: "",
      company_email: "",
      company_phone: "",
      company_product: "",
      product_origin: "",
      general_manager: "",
    })
    // Here you can send 'submissionData' to your API for further processing.
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Apply for Certification</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Wrap the entire content in a form so the submit button in the footer works */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <AlertDialogHeader>
            <AlertDialogTitle>Certification Application Form</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill in your company’s information below to request certification.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Form {...form}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Global Fresh Foods Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Email</FormLabel>
                    <FormControl>
                      <Input placeholder="contact@globalfresh.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+1-555-2345" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Products Supplied</FormLabel>
                    <FormControl>
                      <Input placeholder="Organic Fruits, Leafy Greens" {...field} />
                    </FormControl>
                    <FormDescription>
                      Provide a short description of your products.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product_origin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Origin</FormLabel>
                    <FormControl>
                      <Input placeholder="Mexico" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="general_manager"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>General Manager</FormLabel>
                    <FormControl>
                      <Input placeholder="Maria Rodriguez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button type="submit">Submit Application</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
