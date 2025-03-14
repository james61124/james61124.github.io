import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownPage({ file }) {
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        const metaMatch = data.match(/^---([\s\S]*?)---/);
        if (metaMatch) {
          const meta = metaMatch[1].split("\n").reduce((acc, line) => {
            const [key, ...value] = line.split(":");
            if (key && value) acc[key.trim()] = value.join(":").trim();
            return acc;
          }, {});
          setMetadata(meta);
          setContent(data.replace(metaMatch[0], ""));
        } else {
          setContent(data);
        }
      })
      .catch((err) => console.error("Error loading markdown:", err));
  }, [file]);

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center px-6 sm:px-12 charter-font"
    >
      {/* 主要內容區域 */}
      <main className="w-full max-w-3xl mx-auto py-16">
        {/* Metadata Header */}
        {metadata.title && (
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold tracking-wide leading-tight text-gray-900 mb-8">
              {metadata.title}
            </h1>
            {metadata.subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {metadata.subtitle}
              </p>
            )}
          </header>
        )}

        {metadata.image && (
          <img
            src={metadata.image}
            alt="Cover Image"
            className="w-full rounded-lg shadow-lg mb-12"
          />
        )}

        <div className="text-gray-600 space-y-2 mb-12">
          {metadata.author && <p className="text-lg">👨‍💻 {metadata.author}</p>}
          {metadata.date && <p className="text-lg">📅 {metadata.date}</p>}
          {metadata.tags && (
            <div className="flex flex-wrap gap-2">
              {metadata.tags.split("-").map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-lg"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        <article className="prose lg:prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-4xl sm:text-5xl font-bold tracking-wide mb-8 text-gray-900"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl sm:text-4xl font-semibold tracking-wide my-8 text-gray-800"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl sm:text-3xl font-medium my-6 text-gray-700"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="text-lg leading-relaxed mb-6 text-gray-800" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 hover:text-blue-800 underline decoration-dotted"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  className="bg-gray-200 text-sm text-black px-1 py-0.5 rounded-lg shadow-sm"
                  {...props}
                />
              ),
              pre: ({ node, ...props }) => (
                <pre
                  className="bg-gray-900 text-white text-sm p-6 overflow-x-auto rounded-xl shadow-lg"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
                  {props.children}
                </blockquote>
              ),
              hr: () => <hr className="my-12 border-t border-gray-300" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        <div className="mt-16 flex justify-center">
          <Button asChild>
            <a href="/">返回首頁</a>
          </Button>
        </div>
      </main>
    </div>
  );
}





// <aside className="hidden lg:flex lg:w-72 xl:w-80 p-8 bg-gray-100 border-r shadow-md sticky top-0 h-screen overflow-y-auto">
// <div>
//   <h2 className="text-2xl font-bold mb-6">目錄</h2>
//   <nav className="space-y-4">
//     {headings.map((heading, index) => (
//       <a
//         key={index}
//         href={`#${heading.text}`}
//         className="block text-gray-700 hover:text-blue-600 transition"
//       >
//         {heading.text}
//       </a>
//     ))}
//   </nav>
// </div>
// </aside>