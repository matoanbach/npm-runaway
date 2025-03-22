"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { EmailSettingsForm } from "@/components/email/email";


export default function SettingsStockPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="Settings">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Sidebar Settings</h2>
          <div className="flex gap-6 mt-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is-hover-open"
                    onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                    checked={settings.isHoverOpen}
                  />
                  <Label htmlFor="is-hover-open">Hover Open</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>When hovering on the sidebar in mini state, it will open</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="disable-sidebar"
                    onCheckedChange={(x) => setSettings({ disabled: x })}
                    checked={settings.disabled}
                  />
                  <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hide sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>

      {/* Email Settings Form Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Auto Email Settings</h2>
        <EmailSettingsForm />
      </div>
    </ContentLayout>
  );
}
