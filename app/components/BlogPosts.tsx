import Link from 'next/link';
import Image from 'next/image';
import { supabaseAdmin } from '@/lib/supabase/admin';

async function getBlogPosts(limit = 3) {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('site', 'aeda')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  if (!data) {
    return [];
  }

  return data;
}

export default async function BlogPosts() {
  const posts = await getBlogPosts(4);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-0 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase">
              Latest News
            </h2>
            <Link
              href="/news-hub"
              className="text-[#56290f] text-base lg:text-lg font-bold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/news-hub/${post.slug}`}
                className="flex flex-col border border-gray-200 hover:border-[#56290f] transition-colors bg-white overflow-hidden h-full"
              >
                {post.featured_image_url && (
                  <div className="relative w-full h-48 lg:h-64 shrink-0">
                    <Image
                      src={post.featured_image_url}
                      alt={post.title || 'Blog post'}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-6 grow flex flex-col">
                  <h3 className="text-[#56290f] text-lg lg:text-xl font-black mb-3 line-clamp-2">
                    {post.title ? String(post.title) : 'Untitled Post'}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4 line-clamp-3 grow">
                    {post.description ? String(post.description) : 'No excerpt available'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
