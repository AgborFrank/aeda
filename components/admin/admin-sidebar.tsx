"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  User,
  Settings,
  LogOut,
  Shield,
  FileText,
  Users,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/account",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/admin/account/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/admin/account/settings",
    icon: Settings,
  },
  {
    title: "Users",
    href: "/admin/account/users",
    icon: Users,
  },
  {
    title: "Blog",
    href: "/admin/account/blog",
    icon: BookOpen,
  },
  {
    title: "Content",
    href: "/admin/account/content",
    icon: FileText,
  },
  {
    title: "Security",
    href: "/admin/account/security",
    icon: Shield,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/ad/auth/login")
    router.refresh()
  }

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-background">
      <div className="flex h-16 items-center border-b border-border px-6">
        <h2 className="text-lg font-semibold text-foreground">Admin Panel</h2>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

