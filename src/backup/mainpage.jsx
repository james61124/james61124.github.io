import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DynamicCover() {
  const { scrollY } = useScroll();

  // 根據視窗大小調整視差範圍
  const backgroundY = useTransform(scrollY, [0, 300], [0, -100]);

  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 監聽視窗變化，動態更新 isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景圖片 + 視差效果 */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cover.jpg')",
          y: backgroundY,
          clipPath: isMobile
            ? 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)'
            : 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
        }}
      />

      {/* 內容區域 */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.h1
          className={`font-bold text-white ${
            isMobile ? 'text-4xl' : 'text-7xl'
          }`}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Welcome to My Site
        </motion.h1>

        <motion.p
          className={`mt-4 text-white ${
            isMobile ? 'text-base' : 'text-lg'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover amazing content with stunning design.
        </motion.p>
      </div>

      {/* 透明漸變遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
    </div>
  );
}
