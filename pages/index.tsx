import { useState } from 'react';
import Link from 'next/link';
import { FaFire, FaStar, FaSearch } from 'react-icons/fa';
import ComicCard from '@/components/ComicCard';
import { mangaData } from '@/data/mangaData';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'trending' | 'popular'>('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredManga = mangaData.filter(manga =>
    manga.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedManga = activeTab === 'trending' 
    ? filteredManga.slice(0, 5)
    : filteredManga.slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow">
            <FaSearch className="ml-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search manga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Trending & Popular Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">Trending & Popular Series</h2>
          <Link href="/manga" className="text-primary font-semibold hover:underline">
            View all →
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'trending'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            <FaFire className="inline mr-2" /> Trending
          </button>
          <button
            onClick={() => setActiveTab('popular')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'popular'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            <FaStar className="inline mr-2" /> Popular
          </button>
        </div>

        {/* Comic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayedManga.map((manga, index) => (
            <ComicCard key={manga.id} comic={manga} rank={index + 1} />
          ))}
        </div>
      </div>

      {/* Now on Platform Section */}
      <div className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Now on Manga Platform</h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['DISNEY', 'MARVEL', 'STAR WARS', 'FOX', 'WEBTOON'].map((brand) => (
              <div key={brand} className="text-xl font-bold text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
