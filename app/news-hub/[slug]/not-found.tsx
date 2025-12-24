import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-6">
              Post Not Found
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/news-hub"
              className="inline-block bg-[#56290f] text-white px-8 py-4 font-bold text-base lg:text-lg hover:bg-[#4d2510] transition-colors"
            >
              Back to News Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
