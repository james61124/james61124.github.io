import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* 網站導航 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">快速導覽</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-600 transition">首頁</Link></li>
            <li><Link to="/articles" className="hover:text-blue-600 transition">文章列表</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">關於我</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">聯絡我</Link></li>
          </ul>
        </div>

        {/* 社群連結 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">社群媒體</h2>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* 版權聲明 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">版權聲明</h2>
          <p className="text-sm">© {new Date().getFullYear()} James' Blog. All rights reserved.</p>
          <p className="text-sm mt-2">此網站由 React + Tailwind CSS 驅動。</p>
        </div>
      </div>
    </footer>
  );
}