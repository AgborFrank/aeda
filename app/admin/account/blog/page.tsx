import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit } from "lucide-react"
import { BlogDeleteButton } from "@/components/admin/blog-delete-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Management",
  description: "Manage blog posts",
}

export default async function BlogPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/ad/auth/login")
  }

  // Check if user is admin
  const { data: adminData } = await supabase
    .from("admins")
    .select("id")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .single()

  if (!adminData) {
    redirect("/ad/dashboard")
  }

  // Fetch blog posts for site "aeda" only
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("site", "aeda")
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-semibold text-foreground">
            Blog Posts
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Create and manage your blog posts
          </p>
        </div>
        <Link href="/admin/account/blog/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
          Error loading posts: {error.message}
        </div>
      )}

      {posts && posts.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No blog posts yet.</p>
          <Link href="/admin/account/blog/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Post
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="grid gap-4">
          {posts?.map((post) => (
            <Card key={post.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {post.title}
                    </h3>
                    <Badge
                      variant={
                        post.status === "published"
                          ? "default"
                          : post.status === "draft"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {post.status}
                    </Badge>
                  </div>
                  {post.description && (
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      Created: {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    {post.published_at && (
                      <span>
                        Published:{" "}
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <span>Tags: {post.tags.join(", ")}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Link href={`/admin/account/blog/${post.id}/edit`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <BlogDeleteButton postId={post.id} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

