"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Eye, EyeOff } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check for success message in URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const message = params.get("message")
      if (message) {
        setSuccess(decodeURIComponent(message))
        // Clean up URL
        window.history.replaceState({}, "", window.location.pathname)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError(signInError.message || "Failed to sign in. Please check your credentials.")
        setLoading(false)
        return
      }

      if (data.user) {
        // Ensure session is established
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          setError("Session not established. Please try again.")
          setLoading(false)
          return
        }
        
        // Check if user is an admin
        const { data: adminData, error: adminError } = await supabase
          .from("admins")
          .select("id, admin_level, is_active")
          .eq("user_id", data.user.id)
          .eq("is_active", true)
          .maybeSingle()

        // Log for debugging (remove in production)
        if (process.env.NODE_ENV === 'development') {
          console.log("User ID:", data.user.id)
          console.log("Admin check result:", adminData)
          if (adminError) {
            console.log("Admin error code:", adminError.code)
            console.log("Admin error message:", adminError.message)
          }
        }

        // Check if user is admin
        // maybeSingle returns { data: null, error: null } when not found
        // or { data: {...}, error: null } when found
        // User is admin if we have adminData with an id
        const isAdmin = adminData !== null && adminData !== undefined && adminData.id
        
        if (isAdmin) {
          // User is an admin, wait a moment for cookies to be set, then redirect
          await new Promise(resolve => setTimeout(resolve, 100))
          window.location.href = "/admin/account"
          return // Exit early, don't set loading to false
        } else {
          // Log for debugging - user is not an admin
          if (process.env.NODE_ENV === 'development') {
            console.warn("User is not an admin. User ID:", data.user.id)
            console.warn("To make this user an admin, run this SQL:")
            console.warn(`INSERT INTO admins (user_id, admin_level, permissions, is_active) VALUES ('${data.user.id}', 'super_admin', ARRAY['all']::text[], true);`)
          }
          // Regular user, redirect to regular dashboard
          await new Promise(resolve => setTimeout(resolve, 100))
          window.location.href = "/ad/dashboard"
          return // Exit early, don't set loading to false
        }
      } else {
        setError("Login failed. Please try again.")
        setLoading(false)
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("An unexpected error occurred. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-heading font-semibold text-foreground">
            Admin Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              autoComplete="email"
              aria-describedby={error ? "error-message" : undefined}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                autoComplete="current-password"
                aria-describedby={error ? "error-message" : undefined}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {success && (
            <div
              className="rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800"
              role="alert"
              aria-live="polite"
            >
              {success}
            </div>
          )}

          {error && (
            <div
              id="error-message"
              className="rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/ad/auth/signup"
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

