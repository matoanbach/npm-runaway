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
                </BreadcrumbList>
            </Breadcrumb>
            <Card className="rounded-lg border-none mt-6">
                <CardContent className="p-6">
                    <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
                        <div className="flex flex-col relative">
                            <ul>
                                <li>Company information summary</li>
                                <li>my submitted documents as a list</li>
                                <li>my companys verification progress</li>
                                <li>if my company is verified, show the certificates’ expiration dates</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </ContentLayout>
    );
}
