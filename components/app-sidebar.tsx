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

const data = {
  user: {
    name: "Abdenour",
    email: "me@leecho.io",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
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
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Product Hub",
      url: "/product-hub/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Products",
          url: "/product-hub/products",
        },
        {
          title: "Product Variants",
          url: "/product-hub/product-variants",
        },
        {
          title: "Roadmaps",
          url: "/product-hub/roadmaps",
        },
      ],
    },
    {
      title: "Academy Hub",
      url: "/academy-hub/",
      icon: BookOpen,
      items: [
        {
          title: "Courses",
          url: "/academy-hub/courses",
        },
        {
          title: "Certification Paths",
          url: "/academy-hub/certification-paths",
        },
        {
          title: "Certifications",
          url: "/academy-hub/certifications",
        },
        {
          title: "Instructors",
          url: "/academy-hub/instructors",
        },
        {
          title: "Schedules",
          url: "/academy-hub/schedules",
        },
      ],
    },
    {
      title: "Feature Hub",
      url: "/feature-hub/",
      icon: Bot,
      items: [
        {
          title: "Product Modules",
          url: "/feature-hub/product-modules",
        },
        {
          title: "Feature Requests",
          url: "/feature-hub/feature-requests",
        },
        {
          title: "Product Feedbacks",
          url: "/feature-hub/product-feedbacks",
        },
      ],
    },
    {
      title: "Business Operations",
      url: "/business-operations/",
      icon: AudioWaveform,
      items: [
        {
          title: "Schedules",
          url: "/business-operations/schedules",
        },
        {
          title: "Product Impact",
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
      name: "Customer Training",
      url: "#",
      icon: Frame,
    },
    {
      name: "Product Launch",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Team Workshops",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
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
