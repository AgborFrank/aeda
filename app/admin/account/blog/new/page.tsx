"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Editor } from "@tinymce/tinymce-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Loader2, Save } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { ImageUpload } from "@/components/admin/image-upload"
import type { Editor as TinyMCEEditor } from "tinymce"

export default function NewBlogPostPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
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

  // Generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setError("You must be logged in to create a blog post.")
        setLoading(false)
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
        setError("You must be an admin to create blog posts.")
        setLoading(false)
        return
      }

      // Parse tags
      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)

      const postData = {
        title,
        slug: slug || generateSlug(title),
        description: description || null,
        content,
        featured_image_url: featuredImageUrl || null,
        author_id: user.id,
        status,
        published_at: status === "published" ? new Date().toISOString() : null,
        meta_title: metaTitle || null,
        meta_description: metaDescription || null,
        tags: tagsArray,
      }

      const { data, error: insertError } = await supabase
        .from("blog_posts")
        .insert(postData)
        .select()
        .single()

      if (insertError) {
        setError(insertError.message || "Failed to create blog post.")
        setLoading(false)
        return
      }

      router.push("/admin/account/blog")
      router.refresh()
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-foreground">
          New Blog Post
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Create a new blog post
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter blog post title"
              required
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
            disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
        </Card>

        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Post
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

