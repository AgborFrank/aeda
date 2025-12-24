import { supabaseAdmin } from '@/lib/supabase/admin';
import Link from 'next/link';
import Image from 'next/image';

async function getAllBlogPosts() {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('site', 'aeda')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  if (!data) {
    return [];
  }

  return data;
}

export default async function NewsHubPage() {
  const posts = await getAllBlogPosts();

  return (
    <main>
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[#56290f] text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-12 text-center">
              NEWS HUB
            </h1>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news-hub/${post.slug}`}
                    className="flex flex-col border border-gray-200 hover:border-[#56290f] transition-colors bg-white overflow-hidden h-full"
                  >
                    {post.featured_image_url && (
                      <div className="relative w-full h-48 lg:h-64 flex-shrink-0">
                        <Image
                          src={post.featured_image_url}
                          alt={post.title || 'Blog post'}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-[#56290f] text-xl lg:text-2xl font-black mb-3 line-clamp-2">
                        {String(post.title || 'Untitled Post')}
                      </h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {String(post.description || 'No excerpt available')}
                      </p>
                      <p className="text-gray-500 text-sm mt-auto">
                        {post.published_at 
                          ? new Date(post.published_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })
                          : 'No date'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
