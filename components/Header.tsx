import Link from 'next/link';
import { FaHome, FaCompass, FaHeart, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            <span className="text-primary">MANGA</span>Hub
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <FaHome /> Home
            </Link>
            <Link href="/manga" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <FaCompass /> Explore
            </Link>
            <Link href="/favorites" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <FaHeart /> Favorites
            </Link>
            <Link href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <FaUser /> Profile
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 text-2xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
