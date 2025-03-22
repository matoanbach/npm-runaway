"use client";

import React from "react";
import type { Template } from "@pdfme/common";
import { BLANK_PDF } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import { Button } from "../ui/button";
import pdfTemplate from '../../mock/certificate-template/template.json';

const schemas = [[
  {
    name: "company_name",
    type: "text",
    text: "{{company_name}}",
    position: { x: 132.03, y: 93.08 },
    width: 164.729376,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#ffffff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "company_email",
    type: "text",
    text: "{{company_email}}",
    position: { x: 131.09, y: 109.17 },
    width: 165.57937600000002,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#ffffff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "company_phone",
    type: "text",
    text: "{{company_phone}}",
    position: { x: 130.79, y: 126.57 },
    width: 165.979376,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#ffffff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "company_product",
    type: "text",
    text: "{{company_product}}",
    position: { x: 130.82, y: 143.45 },
    width: 166.20937600000002,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#ffffff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "product_origin",
    type: "text",
    text: "{{product_origin}}",
    position: { x: 130.29, y: 160.86 },
    width: 166.20937600000002,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#ffffff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "general_manager",
    type: "text",
    text: "{{general_manager}}",
    position: { x: 58.59 + 20, y: 183.29 },
    width: 66.94,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#b900ff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "date_issue",
    type: "text",
    text: "{{date_issue}}",
    position: { x: 143.46 + 15, y: 183.77 },
    width: 53.97,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#b900ff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  },
  {
    name: "certificate_id_number",
    type: "text",
    text: "{{certificate_id_number}}",
    position: { x: 214.58, y: 183.98 },
    width: 82.449376,
    height: 10.05,
    rotate: 0,
    alignment: "left",
    verticalAlignment: "top",
    fontSize: 17,
    lineHeight: 1,
    characterSpacing: 0,
    fontColor: "#b900ff",
    backgroundColor: "",
    opacity: 1,
    strikethrough: false,
    underline: false,
    fontName: "NotoSansJP",
    readOnly: false,
    required: false,
  }
]];


const template: Template = {
  basePdf: pdfTemplate.basePdf,
  schemas: schemas
};

const inputs = [
  {
    company_name: "Example Supplier Co.",
    company_email: "sales@example.com",
    company_phone: "+1-555-1234",
    company_product: "Fruits, Vegetables, Meat, Processed Food",
    product_origin: "Canada",
    general_manager: "John Doe",
    date_issue: "2025-03-22",
    certificate_id_number: "CERT-89746-X5-91JP",
  },
];

const PdfGenerator: React.FC = () => {
  const handleGeneratePDF = async () => {
    try {
      const pdf = await generate({ template, inputs });
      // Convert pdf.buffer into a Uint8Array to satisfy BlobPart type
      const uint8Array = new Uint8Array(pdf.buffer);
      const blob = new Blob([uint8Array], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <Button onClick={handleGeneratePDF}>Generate PDF</Button>
    </div>
  );
};

export default PdfGenerator;
