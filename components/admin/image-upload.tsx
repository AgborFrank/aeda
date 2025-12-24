"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Upload, X, Image as ImageIcon } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

interface ImageUploadProps {
  value: string | null
  onChange: (url: string | null) => void
  bucket: string
  folder?: string
  disabled?: boolean
}

export function ImageUpload({
  value,
  onChange,
  bucket,
  folder = "",
  disabled = false,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(value)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB")
      return
    }

    setUploading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        alert("You must be logged in to upload images")
        setUploading(false)
        return
      }

      // Generate unique filename
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = folder ? `${folder}/${fileName}` : fileName

      // Upload to Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        })

      if (uploadError) {
        throw uploadError
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(filePath)

      onChange(publicUrl)
      setPreview(publicUrl)
    } catch (error: any) {
      console.error("Error uploading image:", error)
      alert(error.message || "Failed to upload image. Please try again.")
    } finally {
      setUploading(false)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const handleRemove = () => {
    onChange(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-2">
      <Label>Featured Image</Label>
      <div className="space-y-4">
        {preview ? (
          <div className="relative w-full max-w-md">
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border">
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute right-2 top-2"
                onClick={handleRemove}
                disabled={disabled || uploading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full max-w-md">
            <label
              htmlFor="image-upload"
              className={`
                flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer
                ${disabled || uploading
                  ? "border-muted bg-muted/50 cursor-not-allowed"
                  : "border-border bg-background hover:bg-accent/50"
                }
              `}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {uploading ? (
                  <>
                    <Loader2 className="w-8 h-8 mb-2 text-muted-foreground animate-spin" />
                    <p className="text-sm text-muted-foreground">Uploading...</p>
                  </>
                ) : (
                  <>
                    <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </>
                )}
              </div>
              <input
                id="image-upload"
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={disabled || uploading}
              />
            </label>
          </div>
        )}

        {!preview && !uploading && (
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled}
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Choose Image
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

