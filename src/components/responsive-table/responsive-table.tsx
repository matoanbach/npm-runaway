// "use client";

// import React from "react";
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import { Card, CardContent } from "@/components/ui/card";

// // Sample data for certifications
// import PdfGenerator, { CertificateData } from "../pdf-generator.tsx/pdf-generator";
// import { Button } from "../ui/button";

// export type ResponsiveTableProps = {
//     certificates: CertificateData[];
//     replaceActive?: boolean;
// }

// export function ResponsiveTableComponent({ certificates, replaceActive = false }: ResponsiveTableProps) {
//     return (
//         <Card>
//             <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
//                 <Table>
//                     <TableCaption>A list of your submitted certifications.</TableCaption>
//                     <TableHeader>
//                         {replaceActive ? <TableRow>
//                             <TableHead className="w-[100px]">Cert ID</TableHead>
//                             {replaceActive && <TableHead className="hidden sm:table-cell">Tax</TableHead>}
//                             {!replaceActive && <TableHead className="hidden sm:table-cell">Products</TableHead>}
//                             {!replaceActive && <TableHead>Status</TableHead>}
//                             <TableHead className="hidden sm:table-cell">Date Submitted</TableHead>
//                             {/* This column will be hidden on small screens */}
//                             <TableHead className="hidden sm:table-cell">Expiration Date</TableHead>
//                             <TableHead className="text-center">Certificate</TableHead>
//                             {replaceActive && <TableHead className="text-center">Action</TableHead>}

//                         </TableRow> :
//                             <TableRow>
//                                 <TableHead className="w-[100px]">Cert ID</TableHead>
//                                 {replaceActive && <TableHead className="hidden sm:table-cell">Tax</TableHead>}
//                                 {!replaceActive && <TableHead className="hidden sm:table-cell">Products</TableHead>}
//                                 {!replaceActive && <TableHead>Status</TableHead>}
//                                 <TableHead className="hidden sm:table-cell">Date Submitted</TableHead>
//                                 {/* This column will be hidden on small screens */}
//                                 <TableHead className="hidden sm:table-cell">Expiration Date</TableHead>
//                                 <TableHead className="text-center">Certificate</TableHead>
//                                 {replaceActive && <TableHead className="text-center">Action</TableHead>}

//                             </TableRow>}
//                     </TableHeader>
//                     <TableBody>
//                         {certificates.map((cert) => {
//                             const certificate: CertificateData = {
//                                 certId: cert.certId,
//                                 company_name: cert.company_name,
//                                 company_email: cert.company_email,
//                                 company_phone: cert.company_phone,
//                                 company_product: cert.company_product,
//                                 product_origin: cert.product_origin,
//                                 general_manager: cert.general_manager,
//                                 date_issue: cert.date_issue,
//                                 certificate_id_number: cert.certificate_id_number,
//                                 status: cert.status,
//                                 date_submitted: cert.date_submitted,
//                                 expiration_date: cert.expiration_date,
//                                 certificate_url: cert.certificate_id_number,
//                                 products: cert.products,
//                                 rejection_reason: cert.rejection_reason,
//                                 tax: 0
//                             }
//                             return <TableRow key={cert.certId}>
//                                 <TableCell className="font-medium">{cert.certId}</TableCell>
//                                 {replaceActive && <TableCell className="hidden sm:table-cell">{cert.tax}</TableCell>}
//                                 {!replaceActive && <TableCell className="hidden sm:table-cell">{cert.products}</TableCell>}
//                                 {!replaceActive && <TableCell
//                                     className={`${cert.status === "Approved"
//                                         ? "text-green-500 dark:text-green-400"
//                                         : cert.status === "Rejected"
//                                             ? "text-red-500 dark:text-red-400"
//                                             : "text-yellow-500 darl:text-yellow-400"
//                                         }`}>
//                                     {cert.status}
//                                 </TableCell>}
//                                 <TableCell className="hidden sm:table-cell">{cert.date_submitted}</TableCell>
//                                 {/* This cell is also hidden on small screens */}
//                                 <TableCell className="hidden sm:table-cell">{cert.expiration_date}</TableCell>
//                                 <TableCell className="text-center">
//                                     <PdfGenerator certificate={certificate} />
//                                 </TableCell>
//                                 <TableCell className="text-center">
//                                     <Button>Select</Button>
//                                 </TableCell>
//                             </TableRow>
//                         })}
//                     </TableBody>
//                     <TableFooter>
//                         <TableRow>
//                             <TableCell colSpan={6}>
//                                 Total Certifications: {certificates.length}
//                             </TableCell>
//                         </TableRow>
//                     </TableFooter>
//                 </Table>
//             </CardContent>
//         </Card>
//     );
// }

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
import PdfGenerator, { CertificateData } from "../pdf-generator.tsx/pdf-generator";
import { Button } from "../ui/button";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";

export type ResponsiveTableProps = {
    certificates: CertificateData[];
    replaceActive?: boolean;
};

export function ResponsiveTableComponent({
    certificates,
    replaceActive = false,
}: ResponsiveTableProps) {
    return (
        <Card>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <Table>
                    <TableCaption>A list of your submitted certifications.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {replaceActive ? (
                                <>
                                    <TableHead className="w-[150px]">Company Name</TableHead>
                                    <TableHead className="hidden sm:table-cell">Tax</TableHead>
                                    <TableHead className="hidden sm:table-cell">Origin</TableHead>
                                    <TableHead className="hidden sm:table-cell">Expiration Date</TableHead>
                                    <TableHead className="text-center">Certificate</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                                </>
                            ) : (
                                <>
                                    <TableHead className="w-[150px]">Cert ID</TableHead>
                                    <TableHead className="hidden sm:table-cell">Products</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="hidden sm:table-cell">Date Submitted</TableHead>
                                    <TableHead className="hidden sm:table-cell">Expiration Date</TableHead>
                                    <TableHead className="text-center">Certificate</TableHead>
                                </>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {certificates.map((cert) => {
                            // Build the certificate object
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
                                certificate_url: cert.certificate_url,
                                products: cert.products,
                                rejection_reason: cert.rejection_reason,
                                tax: cert.tax,
                            };

                            return (
                                <TableRow key={cert.certId}>
                                    {replaceActive ? (
                                        <>
                                            <TableCell className="font-medium">{cert.company_name}</TableCell>
                                            <TableCell className="hidden sm:table-cell">{cert.tax}</TableCell>
                                            <TableCell className="hidden sm:table-cell">{cert.product_origin}</TableCell>
                                            <TableCell className="hidden sm:table-cell">{cert.expiration_date}</TableCell>
                                            <TableCell className="text-center">
                                                <PdfGenerator certificate={certificate} />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <AlertDialogAction asChild>
                                                    <Button>Select</Button>
                                                </AlertDialogAction>
                                            </TableCell>
                                        </>
                                    ) : (
                                        <>
                                            <TableCell className="font-medium">{cert.certId}</TableCell>
                                            <TableCell className="hidden sm:table-cell">{cert.products}</TableCell>
                                            <TableCell
                                                className={`${cert.status === "Approved"
                                                        ? "text-green-500 dark:text-green-400"
                                                        : cert.status === "Rejected"
                                                            ? "text-red-500 dark:text-red-400"
                                                            : "text-yellow-500 dark:text-yellow-400"
                                                    }`}
                                            >
                                                {cert.status}
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">{cert.date_submitted}</TableCell>
                                            <TableCell className="hidden sm:table-cell">{cert.expiration_date}</TableCell>
                                            <TableCell className="text-center">
                                                <PdfGenerator certificate={certificate} />
                                            </TableCell>
                                        </>
                                    )}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
