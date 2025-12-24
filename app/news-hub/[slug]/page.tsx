import { supabaseAdmin } from '@/lib/supabase/admin';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .eq('site', 'aeda')
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function generateStaticParams() {
  const { data } = await supabaseAdmin
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')
    .eq('site', 'aeda');

  return (data || []).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title || 'Blog Post',
    description: post.meta_description || post.description || '',
    keywords: post.tags ? (Array.isArray(post.tags) ? post.tags.join(', ') : post.tags) : '',
    openGraph: {
      title: post.title || 'Blog Post',
      description: post.meta_description || post.description || '',
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-[#56290f] text-4xl lg:text-5xl xl:text-6xl font-black mb-6">
                {post.title}
              </h1>
              
              {post.published_at && (
                <p className="text-gray-500 text-base lg:text-lg mb-6">
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              )}
            </div>

            {/* Thumbnail */}
            {post.featured_image_url && (
              <div className="relative w-full h-64 lg:h-96 mb-8">
                <Image
                  src={post.featured_image_url}
                  alt={post.title || 'Blog post'}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            {/* Excerpt */}
            {post.description && (
              <div className="mb-8">
                <p className="text-gray-700 text-xl lg:text-2xl font-semibold leading-relaxed italic">
                  {post.description}
                </p>
              </div>
            )}

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
