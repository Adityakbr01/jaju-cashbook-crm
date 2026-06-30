import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  BookOpen,
  Book,
  Scale,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Cookies from "js-cookie";

export function AppSidebar({ ...props }) {
  const nameL = Cookies.get("name");
  const emailL = Cookies.get("email");

  const initialData = {
    user: {
      name: `${nameL}`,
      email: `${emailL}`,
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: `Jaju Flooring`,
        logo: GalleryVerticalEnd,
        plan: "",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "DASHBOARD",
        url: "/home",
        icon: LayoutDashboard,
        isActive: false,
      },
      {
        title: "DAY BOOK",
        url: "/day-book",
        icon: BookOpen,
        isActive: false,
      },
      {
        title: "LEDGER",
        url: "#",
        icon: Book,
        isActive: false,
        items: [
          {
            title: "Ledger Report",
            url: "/ledger",
          },
          {
            title: "Change Ledger Name",
            url: "/change-ledger-name",
          },
        ],
      },
      {
        title: "TRIAL BALANCE",
        url: "/trial-balance",
        icon: Scale,
        isActive: false,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={initialData.teams} />
      </SidebarHeader>
      <SidebarContent className="sidebar-content">
        <NavMain items={initialData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={initialData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
