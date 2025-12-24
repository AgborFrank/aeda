"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  description: string | null
  content: string
  featured_image_url: string | null
  status: string
  published_at: string | null
  created_at: string
  tags: string[] | null
  site: string
  meta_title: string | null
  meta_description: string | null
}

export function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("status", "published")
          .eq("site", "avicomm")
          .order("published_at", { ascending: false })
          .order("created_at", { ascending: false })

        if (fetchError) {
          setError(fetchError.message)
          setLoading(false)
          return
        }

        setPosts(data || [])
      } catch (err) {
        setError("Failed to load blog posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
        {error}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts available yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
            {post.featured_image_url && (
              <div className="relative w-full aspect-video overflow-hidden bg-muted">
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {post.tags && post.tags.length > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {post.tags[0]}
                  </Badge>
                )}
                {post.published_at && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {post.description && (
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {post.description}
                </p>
              )}

              <div className="flex items-center gap-2 text-sm text-primary mt-auto pt-4 group-hover:gap-3 transition-all">
                <span className="font-medium">Read more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

