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
import { ResponsiveTableComponent } from "@/components/responsive-table/responsive-table";
import { InteractiveAreaChart } from "@/components/charts/interactive-area-chart/interactive-area-chart";
import { CertificationFormComponent } from "@/components/certification-form/certification-form";
import { CertificateData } from "@/components/pdf-generator.tsx/pdf-generator";
import certificateData from "../../../mock/certificates/certificates.json"

const certificates = certificateData as CertificateData[];

export default function SupplierDashboardPage() {
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
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <div className="ml-4">
                                <CertificationFormComponent />
                            </div>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-1">
                    <div className="rounded-xl bg-muted/50" >
                        <ResponsiveTableComponent certificates={certificates} />
                    </div>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>

        </ContentLayout>
    );
}
