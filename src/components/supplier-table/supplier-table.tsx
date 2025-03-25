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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for certifications
import certifications from "../../mock/certificates/certificates.json"
import PdfGenerator, { CertificateData } from "../pdf-generator.tsx/pdf-generator";
import { Badge } from "@/components/ui/badge"
import { ReplaceSupplierComponent } from "../replace-supplier/replace-supplier";

export type SupplierTableProps = {
    suppliers: CertificateData[];
    alternative_suppliers: CertificateData[];
};


export function SupplierTableComponent({ suppliers, alternative_suppliers }: SupplierTableProps) {
    return (
        <Card>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <Table>
                    <TableCaption>A list of suppliers</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Supplier</TableHead>
                            {/* <TableHead className="hidden sm:table-cell">Products</TableHead> */}
                            {/* <TableHead>Status</TableHead> */}
                            <TableHead className="hidden sm:table-cell">Origin</TableHead>
                            {/* This column will be hidden on small screens */}
                            <TableHead className="hidden sm:table-cell">Expiration Date</TableHead>
                            <TableHead>Certificate</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {suppliers.map((cert) => {
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
                                rejection_reason: cert.rejection_reason,
                                tax: cert.tax
                            }
                            return <TableRow key={cert.certId}>
                                <TableCell className="font-medium">
                                    <div className="relative">
                                        <p>{cert.company_name}</p>
                                        <Badge
                                            data-pro={cert.product_origin === "US"}
                                            variant="destructive"
                                            className="absolute -top-3 -right-4 data-[pro=false]:hidden"
                                        >
                                            Tariff
                                        </Badge>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    {cert.product_origin}
                                </TableCell>

                                {/* This cell is also hidden on small screens */}
                                <TableCell className="hidden sm:table-cell">{cert.expiration_date}</TableCell>
                                <TableCell >
                                    <PdfGenerator certificate={certificate} />
                                </TableCell>
                                <TableCell className="text-center">
                                    <ReplaceSupplierComponent alternative_suppliers={alternative_suppliers} />
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
