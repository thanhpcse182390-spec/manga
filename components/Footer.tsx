import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">MANGA</span>Hub
            </h3>
            <p className="text-gray-400">Your ultimate destination for manga stories</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/manga" className="hover:text-primary transition">Explore</Link></li>
              <li><Link href="/favorites" className="hover:text-primary transition">Favorites</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/manga?category=Action" className="hover:text-primary transition">Action</Link></li>
              <li><Link href="/manga?category=Romance" className="hover:text-primary transition">Romance</Link></li>
              <li><Link href="/manga?category=Mystery" className="hover:text-primary transition">Mystery</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 text-2xl hover:text-primary transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 text-2xl hover:text-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 text-2xl hover:text-primary transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 text-2xl hover:text-primary transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MANGAHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
