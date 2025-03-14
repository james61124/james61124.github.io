import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const articlesPerPage = 6;

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // 模擬文章資料
    const fakeArticles = Array.from({ length: 50 }, (_, i) => ({
      slug: `article-${i + 1}`,
      title: `文章標題 ${i + 1}`,
      description: `這是第 ${i + 1} 篇文章的簡要描述，講述了重要內容概述。`,
      image: `https://source.unsplash.com/random/600x400?sig=${i}`,
    }));
    setArticles(fakeArticles);
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-48 px-14">
      <h1 className="text-4xl font-bold mb-12 text-center">文章列</h1>

      {/* 內容區域，限制最大寬度 + 居中 */}
      <div className="max-w-5lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/article/${article.slug}`}
            className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">
                {article.title}
              </h2>
              <p className="text-gray-600 mt-4 line-clamp-3">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* 頁碼 */}
      <div className="flex justify-center mt-12 space-x-2">
        <Button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          上一頁
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
          >
            {i + 1}
          </Button>
        ))}

        <Button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          下一頁
        </Button>
      </div>
    </div>
  );
}
