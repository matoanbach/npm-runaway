import {
  Settings,
  LayoutGrid,
  LucideIcon,
  BadgeDollarSign,
  ChartNoAxesCombined,
  FileChartColumn,
  Headset,
  FileText,
  BadgeCheck,
  Bell
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
  disabled?: boolean;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

const companySections: Group[] = [
  {
    groupLabel: "",
    menus: [
      {
        href: "/company-dashboard",
        label: "Dashboard",
        icon: LayoutGrid,
        submenus: []
      }
    ]
  },
  {
    groupLabel: "Contents",
    menus: [
      {
        href: "/company-stock",
        label: "Stock",
        icon: ChartNoAxesCombined
      },
      {
        href: "/company-sales",
        label: "POS Sales",
        icon: BadgeDollarSign
      },
      {
        href: "",
        label: "Reports",
        icon: FileChartColumn,
        submenus: [
          {
            href: "/company-reports",
            label: "Custom Reports"
          },
          {
            href: "/company-reports/exsch",
            label: "Export & Scheduling"
          },
          {
            href: "/company-reports/compsus",
            label: "Compliance & Sustainability"
          }
        ]
      }
    ]
  },
  {
    groupLabel: "Settings and Support",
    menus: [
      {
        href: "/company-settings",
        label: "Settings",
        icon: Settings
      }
    ]
  }
];

const supplierSections: Group[] = [
  {
    groupLabel: "",
    menus: [
      {
        href: "/supplier-dashboard",
        label: "Dashboard",
        icon: LayoutGrid,
        submenus: []
      }
    ]
  },
  {
    groupLabel: "Sales",
    menus: [
      {
        href: "/supplier-info",
        label: "POS Sales",
        icon: FileText,
        submenus: []
      }
    ]
  },
  {
    groupLabel: "Certificates",
    menus: [
      {
        href: "/supplier-certificates",
        label: "Certificate Management",
        icon: BadgeCheck,
        submenus: []
      }
    ]
  },
  {
    groupLabel: "Settings and Support",
    menus: [
      {
        href: "/supplier-settings",
        label: "Settings",
        icon: Settings
      }
    ]
  }
];

export function getMenuList(pathname: string, view: string): Group[] {
  if (view === "company") return companySections;
  return supplierSections;
}
