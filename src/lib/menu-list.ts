import {
  Settings,
  LayoutGrid,
  LucideIcon,
  BadgeDollarSign,
  ChartNoAxesCombined,
  FileChartColumn,
  Headset
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
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
          href: "",
          label: "Inventory & Stock",
          icon: ChartNoAxesCombined,
          submenus: [
            {
              href: "/stock",
              label: "Stock"
            },
            {
              href: "/stock/exdiscounts",
              label: "Expiry & Discounts"
            },
            {
              href: "/stock/prodinsights",
              label: "Product Insights"
            },
            {
              href: "/stock/depredictions",
              label: "Demand Predictions"
            }
          ]
        },
        {
          href: "",
          label: "Sales",
          icon: BadgeDollarSign,
          submenus: [
            {
              href: "/sales",
              label: "Live POS Sales"
            },
            {
              href: "/sales/sellers",
              label: "Top/Bottom Sellers"
            },
            {
              href: "/sales/discimpact",
              label: "Discount Impact"
            },
            {
              href: "/sales/purtrends",
              label: "Purchase Trends"
            }
          ]
        },
        {
          href: "",
          label: "Reports",
          icon: FileChartColumn,
          submenus: [
            {
              href: "/reports",
              label: "Custom Reports"
            },
            {
              href: "/reports/exsch",
              label: "Export & Scheduling"
            },
            {
              href: "/reports/compsus",
              label: "Compliance & Sustainability"
            },
          ]
        },
      ]
    },
    {
      groupLabel: "Settings and Support",
      menus: [
        {
          href: "/settings",
          label: "Settings",
          icon: Settings
        },
        {
          href: "/support",
          label: "Support",
          icon: Headset
        }
      ]
    }
  ];
}
