"use client";

import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

// Sample data for certifications
import certifications from "../../mock/certificates/certificates.json"
import PdfGenerator, { CertificateData } from "../pdf-generator.tsx/pdf-generator";

export function ResponsiveTableComponent() {
    return (
        <Card>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <Table>
                    <TableCaption>A list of your submitted certifications.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Cert ID</TableHead>
                            <TableHead className="hidden sm:table-cell">Products</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden sm:table-cell">Date Submitted</TableHead>
                            {/* This column will be hidden on small screens */}
                            <TableHead className="hidden sm:table-cell">Expiration Date</TableHead>
                            <TableHead className="text-center">Certificate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {certifications.map((cert) => {
                            const certificate: CertificateData = {
                                certId: cert.certId,
                                company_name: cert.company_name,
                                company_email: cert.company_email,
                                company_phone: cert.company_phone,
                                company_product: cert.company_product,
                                product_origin: cert.product_origin,
                                general_manager: cert.general_manager,
                                date_issue: cert.date_issue,
                                certificate_id_number: cert.certificate_id_number,
                                status: cert.status,
                                date_submitted: cert.date_submitted,
                                expiration_date: cert.expiration_date,
                                certificate_url: cert.certificate_id_number,
                                products: cert.products,
                                rejection_reason: cert.rejection_reason
                            }
                            return <TableRow key={cert.certId}>
                                <TableCell className="font-medium">{cert.certId}</TableCell>
                                <TableCell className="hidden sm:table-cell">{cert.products}</TableCell>
                                <TableCell
                                    className={`${cert.status === "Approved"
                                        ? "text-green-900"
                                        : cert.status === "Rejected"
                                            ? "text-red-400"
                                            : "text-yellow-600"
                                        }`}>
                                    {cert.status}
                                </TableCell>                <TableCell className="hidden sm:table-cell">{cert.date_submitted}</TableCell>
                                {/* This cell is also hidden on small screens */}
                                <TableCell className="hidden sm:table-cell">{cert.expiration_date}</TableCell>
                                <TableCell className="text-center">
                                    <PdfGenerator certificate={certificate} />
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6}>
                                Total Certifications: {certifications.length}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </CardContent>
        </Card>
    );
}
