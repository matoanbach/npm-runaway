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

export default function SupplierInfoPage() {
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
                            <ul>
                                <li>Sales of the supplier</li>
                                <li>Data Anlytics</li>
                                <li>Data insights</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </ContentLayout>
    );
}
