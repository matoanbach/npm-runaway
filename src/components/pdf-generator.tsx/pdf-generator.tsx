"use client";

import React from "react";
import type { Template } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import approved_template from "../../mock/certificate-template/approved_template.json";
import pending_template from "../../mock/certificate-template/pending_template.json";
import rejected_template from "../../mock/certificate-template/rejected_template.json";
import { Button } from "../ui/button";
import { image, text } from "@pdfme/schemas";

// Define the certificate data type.
export type CertificateData = {
  certId: string;
  company_name: string;
  company_email: string;
  company_phone: string;
  company_product: string;
  product_origin: string;
  general_manager: string;
  date_issue: string;
  certificate_id_number: string;
  status: string;
  date_submitted: string;
  expiration_date: string;
  certificate_url: string;
  products: string;
  rejection_reason?: string;
  tax: number;
};

// Define component props.
type PdfGeneratorProps = {
  certificate: CertificateData;
};

const plugins = {
  Image: image,
  Text: text
};

// This function can be imported and used in other components.
export const generatePDF = async (certificate: CertificateData) => {
  try {
    // Select the template based on certificate status.
    let selectedTemplate: Template;
    switch (certificate.status) {
      case "Approved":
        selectedTemplate = approved_template;
        break;
      case "Pending":
        selectedTemplate = pending_template;
        break;
      case "Rejected":
        selectedTemplate = rejected_template;
        break;
      default:
        selectedTemplate = approved_template;
    }

    // Prepare inputs by mapping certificate fields to the expected template fields.
    const inputs = [
      {
        ...certificate,
        // For rejected certificates, include the rejection_reason if available.
        ...(certificate.status === "Rejected" && certificate.rejection_reason
          ? { rejection_reason: certificate.rejection_reason }
          : {}),
      },
    ];

    // Generate the PDF using the selected template, inputs, and plugins.
    // @ts-expect-error -- temporarily ignoring pdfme's type mismatch
    const pdf = await generate({ template: selectedTemplate, inputs, plugins });
    const uint8Array = new Uint8Array(pdf.buffer);
    const blob = new Blob([uint8Array], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

const PdfGenerator: React.FC<PdfGeneratorProps> = ({ certificate }) => {
  const handleGeneratePDF = async () => {
    await generatePDF(certificate);
  };

  return (
    <Button variant="outline" onClick={handleGeneratePDF}>
      View
    </Button>
  );
};

export default PdfGenerator;
