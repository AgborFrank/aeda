import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard",
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/ad/auth/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-heading font-semibold text-foreground">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Welcome back, {user.email}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Profile</h3>
              <p className="text-sm text-muted-foreground">
                Manage your account profile and personal information
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure your account settings and preferences
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Activity</h3>
              <p className="text-sm text-muted-foreground">
                View your recent activity and updates
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

