"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Abdenour",
    email: "akme@leecho.io",
    avatar: "/avatars/shadcn.jpg",
  },
  organizations: [
    {
      name: "Akme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "KDR Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Tyf Corp.",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Product Managemente",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Mawl Ai",
          url: "#",
        },
        {
          title: "Hakoira",
          url: "#",
        },
        {
          title: "Jeeb",
          url: "#",
        },
      ],
    },
    {
      title: "Product Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Modules",
          url: "#",
        },
        {
          title: "Features",
          url: "#",
        },
        {
          title: "Feedbacks",
          url: "#",
        },
        {
          title: "Feature Requests",
          url: "#",
        },
      ],
    },
    {
      title: "Plan",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Products",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.organizations} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
