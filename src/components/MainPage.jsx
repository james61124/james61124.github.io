import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaTrophy, FaUsers } from "react-icons/fa";

export default function MainPage() {
  const { scrollY } = useScroll();

  // 根據滾動產生視差效果
  const backgroundY = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const experiences = [
    { title: "R&D Software Engineer", company: "BlockChain Security", duration: "2024/12 - Present" },
    { title: "Software Engineer", company: "ASML Global Headquarter", duration: "2024/06 - 2024/12" },
    { title: "R&D Intern", company: "iForensics Digital Inc.", duration: "2023/06 - 2024/06" },
  ];

  const education = [
    { degree: "B.S. in Computer Science", school: "National Yang Ming Chiao Tung University", duration: "2020 - 2024" },
    { degree: "Senior High School", school: "Kaohsiung Municipal Kaohsiung Senior High School", duration: "2017 - 2020" },
  ];

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
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-12"
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
            James Blogger
          </motion.h1>

          <motion.p
            className={`mt-7 text-white ${isMobile ? "text-sm" : "text-lg"} opacity-80`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Exploring Life & Sharing Tech Insights
          </motion.p>

          {/* 📖 Call to Action */}
          <motion.a
            href="#about-me"
            className="mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-500 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.a>
        </div>

        {/* 🔽 Scroll Indicator (提示滾動) */}
        <motion.a
          href="#about-me"
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
        </motion.a>
      </div>

      {/* About Me Section */}
      <section id="about-me" className="max-w-5xl mx-auto py-16 px-6 sm:px-12">
      {/* 主標題 */}
      <motion.h2 
        className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Timeline Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Work Experience Timeline */}
        <motion.div 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
            <FaBriefcase className="text-3xl text-blue-600" />
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>
          <div className="relative border-l border-gray-300 dark:border-gray-700 mt-4 pl-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="mb-6" 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
            <FaGraduationCap className="text-3xl text-green-600" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="relative border-l border-gray-300 dark:border-gray-700 mt-4 pl-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="mb-6" 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements
        <motion.div 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:col-span-2"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
            <FaTrophy className="text-3xl text-yellow-500" />
            <h3 className="text-2xl font-semibold">Achievements</h3>
          </div>
          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <li>🏆 Google Code Jam Finalist (2022)</li>
            <li>🚀 Built and launched a SaaS product with 100K+ users</li>
            <li>📢 Speaker at JSConf Asia (2023)</li>
          </ul>
        </motion.div>

        {/* Leadership */}
        {/* <motion.div 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:col-span-2"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
            <FaUsers className="text-3xl text-purple-600" />
            <h3 className="text-2xl font-semibold">Leadership</h3>
          </div>
          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <li>Event Planning Leader in Meichu Hackathon</li>
            <li>President in NYCU Guitar Club</li>
            <li>Vice Captain in NYCU CS Badminton Department Team</li>
          </ul>
        </motion.div>  */}
      </div>
    </section>
    </div>
  );
}
