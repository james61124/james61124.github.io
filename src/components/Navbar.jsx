import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  // 監聽滾動事件，切換 Navbar 狀態
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 控制手機選單的動畫
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    controls.start({ opacity: isOpen ? 0 : 1, x: isOpen ? 50 : 0 });
  };

  // 根據滾動狀態切換顏色
  const navTextColor = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverTextColor = isScrolled ? 'hover:text-black' : 'hover:text-gray-300';

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md h-16' : 'bg-transparent h-20'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo 區域 */}
        <a href="/" className={`text-2xl font-bold ${navTextColor}`}>
          MyBrand
        </a>

        {/* Desktop 導航連結 */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className={`relative transition-colors duration-300 ${navTextColor} ${hoverTextColor}`}
            >
              {item}
              <motion.span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* 行動裝置漢堡按鈕 */}
        <button className={`md:hidden ${navTextColor}`} onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 行動選單 */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            exit={{ opacity: 0, x: 50 }}
            className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-xl hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
