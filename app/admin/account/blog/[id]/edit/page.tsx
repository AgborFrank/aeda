"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Editor } from "@tinymce/tinymce-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Loader2, Save, Trash2 } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { ImageUpload } from "@/components/admin/image-upload"
import type { Editor as TinyMCEEditor } from "tinymce"

export default function EditBlogPostPage() {
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null)
  const [status, setStatus] = useState<"draft" | "published" | "archived">("draft")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [tags, setTags] = useState("")
  const [editorRef, setEditorRef] = useState<TinyMCEEditor | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          router.push("/ad/auth/login")
          return
        }

        const { data: post, error: fetchError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", postId)
          .single()

        if (fetchError) {
          setError("Post not found.")
          setLoading(false)
          return
        }

        setTitle(post.title)
        setSlug(post.slug)
        setDescription(post.description || "")
        setContent(post.content || "")
        setFeaturedImageUrl(post.featured_image_url || null)
        setStatus(post.status)
        setMetaTitle(post.meta_title || "")
        setMetaDescription(post.meta_description || "")
        setTags(post.tags?.join(", ") || "")
        setLoading(false)
      } catch (err) {
        setError("Failed to load post.")
        setLoading(false)
      }
    }

    if (postId) {
      fetchPost()
    }
  }, [postId, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSaving(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setError("You must be logged in to edit a blog post.")
        setSaving(false)
        return
      }

      // Check if user is admin
      const { data: adminData } = await supabase
        .from("admins")
        .select("id")
        .eq("user_id", user.id)
        .eq("is_active", true)
        .single()

      if (!adminData) {
        setError("You must be an admin to edit blog posts.")
        setSaving(false)
        return
      }

      // Parse tags
      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)

      const updateData = {
        title,
        slug,
        description: description || null,
        content,
        featured_image_url: featuredImageUrl || null,
        status,
        published_at:
          status === "published" && !status
            ? new Date().toISOString()
            : status === "published"
            ? undefined
            : null,
        meta_title: metaTitle || null,
        meta_description: metaDescription || null,
        tags: tagsArray,
      }

      const { error: updateError } = await supabase
        .from("blog_posts")
        .update(updateData)
        .eq("id", postId)

      if (updateError) {
        setError(updateError.message || "Failed to update blog post.")
        setSaving(false)
        return
      }

      router.push("/admin/account/blog")
      router.refresh()
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return
    }

    setError(null)
    setSaving(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setError("You must be logged in to delete a blog post.")
        setSaving(false)
        return
      }

      const { error: deleteError } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", postId)

      if (deleteError) {
        setError(deleteError.message || "Failed to delete blog post.")
        setSaving(false)
        return
      }

      router.push("/admin/account/blog")
      router.refresh()
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-foreground">
          Edit Blog Post
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Update your blog post
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog post title"
              required
              disabled={saving}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="blog-post-slug"
              required
              disabled={saving}
            />
            <p className="text-xs text-muted-foreground">
              URL-friendly version of the title
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description or excerpt"
              rows={3}
              disabled={saving}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
              onInit={(evt, editor) => setEditorRef(editor)}
              value={content}
              onEditorChange={(content) => setContent(content)}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          <ImageUpload
            value={featuredImageUrl}
            onChange={setFeaturedImageUrl}
            bucket="blogs"
            folder="featured"
            disabled={saving}
          />

          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <select
              id="status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "draft" | "published" | "archived")
              }
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
              disabled={saving}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="technology, business, news"
              disabled={saving}
            />
          </div>
        </Card>

        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-semibold">SEO Settings</h2>
          <div className="space-y-2">
            <Label htmlFor="metaTitle">Meta Title</Label>
            <Input
              id="metaTitle"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="SEO title"
              disabled={saving}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="metaDescription">Meta Description</Label>
            <Textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="SEO description"
              rows={3}
              disabled={saving}
            />
          </div>
        </Card>

        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Update Post
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={saving}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={saving}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
