"use client";

import React from "react";
import type { Template } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import approved_template from "../../mock/certificate-template/approved_template.json";
import pending_template from "../../mock/certificate-template/pending_template.json";
import rejected_template from "../../mock/certificate-template/rejected_template.json";
import { Button } from "../ui/button";
import { image } from '@pdfme/schemas';


// const approved_template = approved_json as unknown as Template
// const pending_template = pending_json as unknown as Template
// const rejected_template = rejected_json as unknown as Template

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
};

// Define component props.
type PdfGeneratorProps = {
  certificate: CertificateData;
};

const plugins = {
  Image: image,
};


const PdfGenerator: React.FC<PdfGeneratorProps> = ({ certificate }) => {
  const handleGeneratePDF = async () => {
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
      // (Assuming the template fields have the same names as the certificate keys.)
      const inputs = [
        {
          ...certificate,
          // If you need to add a prefix or additional text for rejected status, do so here.
          ...(certificate.status === "Rejected" && certificate.rejection_reason
            ? { rejection_reason: certificate.rejection_reason }
            : {}),
        },
      ];

      // Generate the PDF using the selected template and inputs.
      
      // @ts-expect-error -- temporarily ignoring pdfme's type mismatch
      const pdf = await generate({ template: selectedTemplate, inputs });
      const uint8Array = new Uint8Array(pdf.buffer);
      const blob = new Blob([uint8Array], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <Button variant="outline" onClick={handleGeneratePDF}>View</Button>
  );
};


export default PdfGenerator;
