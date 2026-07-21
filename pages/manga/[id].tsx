import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaEye } from 'react-icons/fa';
import { mangaData } from '@/data/mangaData';

export default function MangaDetail() {
  const router = useRouter();
  const { id } = router.query;

  const manga = mangaData.find(m => m.id === Number(id));

  if (!manga) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Manga not found</h1>
          <Link href="/manga" className="text-primary hover:underline">
            Back to manga list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/manga" className="flex items-center gap-2 mb-6 hover:opacity-80">
            <FaArrowLeft /> Back to list
          </Link>
          <h1 className="text-4xl font-bold">{manga.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            {/* Info */}
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Author</p>
                  <p className="font-semibold text-lg">{manga.author}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Category</p>
                  <p className="font-semibold text-lg">{manga.category}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Status</p>
                  <p className="font-semibold text-lg">{manga.status}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Chapters</p>
                  <p className="font-semibold text-lg">{manga.chapters.length}</p>
                </div>
              </div>

              {/* Rating and Views */}
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400 text-xl" />
                  <span className="font-semibold text-lg">{manga.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="text-gray-600 text-xl" />
                  <span className="font-semibold text-lg">{manga.views}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{manga.description}</p>
            </div>

            {/* Chapters */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Chapters ({manga.chapters.length})</h2>
              <div className="space-y-3">
                {manga.chapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition cursor-pointer border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Chapter {chapter.number}: {chapter.title}</p>
                        <p className="text-gray-500 text-sm">{chapter.uploadDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">{chapter.views.toLocaleString()} views</p>
                        <p className="text-gray-500 text-sm">{chapter.pages.length} pages</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
              <button className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:opacity-90 transition mb-4">
                Start Reading
              </button>
              <button className="w-full bg-gray-200 text-black font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                Add to Library
              </button>

              {/* Quick Stats */}
              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Views</p>
                  <p className="text-2xl font-bold">{manga.views}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Rating</p>
                  <p className="text-2xl font-bold flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {manga.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
