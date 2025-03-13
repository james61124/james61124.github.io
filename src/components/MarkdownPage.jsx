import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import remarkGfm from "remark-gfm"; // 支援表格、列表等
import rehypeRaw from "rehype-raw"; // 允許 HTML 解析

export default function MarkdownPage({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Error loading markdown:", err));
  }, [file]);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 lg:p-16 flex justify-center">
      <div className="w-full max-w-4xl">
        <ScrollArea className="max-h-[80vh]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 text-gray-900" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight my-6 text-gray-800" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl sm:text-3xl font-semibold my-4 text-gray-700" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-xl sm:text-2xl font-medium my-3 text-gray-600" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="text-base sm:text-lg text-gray-800 leading-relaxed mb-5"
                  style={{ fontFamily: `'Charter', 'Kievit'` }}
                  {...props}
                />
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
                <code className="bg-gray-200 text-sm text-black px-1 py-0.5 rounded-lg shadow-sm" {...props} />
              ),
              pre: ({ node, ...props }) => (
                <pre className="bg-gray-900 text-white text-sm p-6 overflow-x-auto rounded-xl shadow-lg" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-800" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-8 mb-6 space-y-2 text-gray-800" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
                  {props.children}
                </blockquote>
              ),
              hr: () => <hr className="my-8 border-t border-gray-300" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </ScrollArea>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/">返回首頁</a>
          </Button>
        </div>
      </div>
    </div>
  );
}