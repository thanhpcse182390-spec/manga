import Link from 'next/link';
import { FaStar, FaEye } from 'react-icons/fa';

interface ComicCardProps {
  comic: {
    id: number;
    title: string;
    category: string;
    rating: number;
    views: string;
    status: string;
  };
  rank: number;
}

export default function ComicCard({ comic, rank }: ComicCardProps) {
  return (
    <Link href={`/manga/${comic.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition hover:scale-105 cursor-pointer h-full">
        {/* Placeholder Image */}
        <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-60 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition"></div>
          <div className="text-white text-6xl font-bold opacity-20">{rank}</div>
          {comic.status === 'Completed' && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              COMPLETED
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-black mb-2 line-clamp-2 hover:text-primary transition">
            {comic.title}
          </h3>

          {/* Category */}
          <p className="text-sm text-gray-500 mb-3">{comic.category}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="font-semibold text-sm">{comic.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-600 text-sm" />
              <span className="text-gray-600 text-sm">{comic.views}</span>
            </div>
          </div>

          {/* Status */}
          <div className="pt-3 border-t border-gray-200">
            <p className={`text-xs font-bold ${comic.status === 'Ongoing' ? 'text-primary' : 'text-gray-500'}`}>
              {comic.status.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
