"use client";

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PlaceholderContent from "@/components/demo/placeholder-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PdfGenerator from "@/components/pdf-generator.tsx/pdf-generator";

export default function SupplierCertificatesPage() {
    return (
        <ContentLayout title="Dashboard">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className="rounded-lg border-none mt-6">
                <CardContent className="p-6">
                    <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
                        <div className="flex flex-col relative">
                            <h3>Certificate request, input fields:</h3>
                            <ul>
                                <li>Company name</li>
                                <li>B2B sales contact (email + phone)</li>
                                <li>Product types (checkboxes or multi-select: fruits, vegetables, meat, processed food)</li>
                            </ul>
                        </div>
                        <div className="flex flex-col relative">
                            <h3>List of products:</h3>
                            <ul>
                                <li>Upload and store multiple certificates</li>
                                <li>Track expiration dates</li>
                                <li>Show list of uploaded certs with status and expiry</li>
                            </ul>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </ContentLayout>
    );
}
