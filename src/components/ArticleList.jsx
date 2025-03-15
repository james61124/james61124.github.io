import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Pagination from "./Pagination";

const articlesPerPage = 6;

export default function ArticleListPage({ json_path, title, category }) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [realTitle, setTitle] = useState(title);
  const selectedTag = searchParams.get("tag"); 

  useEffect(() => {
    fetch(json_path)
      .then((response) => response.json())
      .then((data) => {
        // 如果有 selectedTag，則過濾出包含該 tag 的文章
        const filteredData = selectedTag
          ? data.filter(article => article.tags && article.tags.includes(selectedTag))
          : data;
  
        setArticles(filteredData);
        if(selectedTag) setTitle(selectedTag);
        else setTitle(title);
      })
      .catch((error) => {
        console.error("Error loading metadata.json:", error);
      });
  }, [json_path, selectedTag]); 

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
    <div
      className="min-h-screen pt-32 pb-32 px-8"
      style={{
        background: "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
      }}
    >
      <h1 className="text-4xl font-bold mb-16 text-center text-gray-900">
        {realTitle}
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentArticles.map((article) => (
          <Link
            key={article.path}
            to={`/${category}/${article.path}`}
            className="group block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
                {article.title}
              </h2>
              <p className="text-gray-600 mt-4 line-clamp-3">
                {article.description}
              </p>
              <p className="mt-6 text-sm text-gray-500">
                發佈日期：{article.date}
              </p>

              {/* Tag 顯示區域 */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full">
                        {tag}
                    </span>
                    ))}
                    {article.tags.length > 4 && (
                    <span className="px-3 py-1 text-sm font-medium bg-gray-300 text-gray-700 rounded-full">
                        +{article.tags.length - 4} 更多
                    </span>
                    )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
  );
}
