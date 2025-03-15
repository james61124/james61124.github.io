import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainPage() {
  const { scrollY } = useScroll();

  // 根據滾動產生視差效果
  const backgroundY = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 監聽視窗變化，動態更新 isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Main Cover Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* 🖼️ 背景圖片 + 視差效果 */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Guitar.JPEG')",
            // y: backgroundY,
            opacity: 0.5,
          }}
        />

        {/* 🔥 深色漸層遮罩，保證文字清晰 */}
        <div className="absolute inset-0 bg-black/60 mix-blend-overlay" />

        {/* 📢 內容區域 */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.h1
            className={`font-extrabold text-white drop-shadow-lg ${
              isMobile ? "text-4xl" : "text-7xl"
            }`}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            My Guitar Journey
          </motion.h1>

          <motion.p
            className={`mt-4 text-white ${isMobile ? "text-sm" : "text-lg"} opacity-80`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore the rhythm of my life and music journey.
          </motion.p>

          {/* 📖 Call to Action */}
          <motion.a
            href="#explore"
            className="mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-500 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Start Exploring
          </motion.a>
        </div>

        {/* 🔽 Scroll Indicator (提示滾動) */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-6 h-6 text-white animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hello! I'm a passionate guitarist and a music enthusiast. My journey
            with music has been transformative, and I have experienced growth both
            as an artist and as an individual. I enjoy exploring different genres,
            from classical to modern rock, and am always open to learning new techniques
            and styles. Join me as I continue my musical exploration!
          </p>
        </div>
      </section>
    </div>
  );
}
