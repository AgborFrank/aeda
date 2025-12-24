import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin account dashboard",
}

export default async function AdminAccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/ad/auth/login")
  }

  return (
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
          <h3 className="text-lg font-semibold mb-2">Security</h3>
          <p className="text-sm text-muted-foreground">
            Manage your security settings and password
          </p>
        </Card>
      </div>
    </div>
  )
}

