import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaFilter } from 'react-icons/fa';
import ComicCard from '@/components/ComicCard';
import { mangaData } from '@/data/mangaData';

const categories = ['All', 'Action', 'Romance', 'Mystery', 'Sci-fi', 'Drama', 'Fantasy'];

export default function MangaList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredManga = mangaData.filter(manga => {
    const matchesCategory = selectedCategory === 'All' || manga.category === selectedCategory;
    const matchesSearch = manga.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Manga</h1>
          <p className="text-gray-300">Discover thousands of manga stories</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg shadow mb-8 px-4 py-3">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search manga..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 outline-none"
          />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FaFilter className="text-gray-600" />
            <h3 className="font-semibold text-gray-700">Categories</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-gray-600">Found {filteredManga.length} manga</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {filteredManga.map((manga, index) => (
            <ComicCard key={manga.id} comic={manga} rank={index + 1} />
          ))}
        </div>

        {filteredManga.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No manga found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
