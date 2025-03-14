import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const articlesPerPage = 6;

export default function ArticleCategoryPage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fakeArticles = Array.from({ length: 50 }, (_, i) => ({
      slug: `article-${i + 1}`,
      title: `Leetcode 解題心得 ${i + 1}`,
      description: `這是第 ${i + 1} 篇 Leetcode 解題的詳細解析，涵蓋多種解法與優化策略。`,
      image: `https://source.unsplash.com/random/600x400?sig=${i}`,
      tags: i % 2 === 0 ? ["Array", "Dynamic Programming"] : ["Graph", "DFS", "Binary Search", "Greedy"],
    }));
    setArticles(fakeArticles);

    const allTags = Array.from(new Set(fakeArticles.flatMap((a) => a.tags)));
    setCategories(["All", ...allTags]);
  }, []);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.tags.includes(selectedCategory));

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-10 lg:px-20">
      {/* 頁面標題 */}
      <h1 className="text-4xl font-bold text-center mb-16">Leetcode 解題專區</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左側分類區 */}
        <aside className="lg:w-1/4 space-y-4">
          <h2 className="text-2xl font-bold">分類</h2>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              variant={selectedCategory === category ? "default" : "outline"}
              className="w-full text-left"
            >
              {category}
            </Button>
          ))}
        </aside>

        {/* 文章列表區 */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-700 rounded-full">
                      +{article.tags.length - 3} 更多
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>

      {/* 專業頁碼區 */}
      <div className="flex justify-center mt-12 space-x-2">
        <Button onClick={() => goToPage(1)} disabled={currentPage === 1}>
          «
        </Button>
        <Button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          ‹
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
          ›
        </Button>
        <Button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
          »
        </Button>
      </div>
    </div>
  );
}
