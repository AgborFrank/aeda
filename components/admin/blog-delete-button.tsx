"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

interface BlogDeleteButtonProps {
  postId: string
}

export function BlogDeleteButton({ postId }: BlogDeleteButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this post? This action cannot be undone."
      )
    ) {
      return
    }

    setLoading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        alert("You must be logged in to delete a blog post.")
        setLoading(false)
        return
      }

      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", postId)

      if (error) {
        alert(error.message || "Failed to delete blog post.")
        setLoading(false)
        return
      }

      router.refresh()
    } catch (err) {
      alert("An unexpected error occurred. Please try again.")
      setLoading(false)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-destructive"
      onClick={handleDelete}
      disabled={loading}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}

