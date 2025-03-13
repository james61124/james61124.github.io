// src/components/MarkdownPage.jsx
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import remarkGfm from "remark-gfm"; // 支援表格、列表等
import rehypeRaw from "rehype-raw"; // 允許 HTML 解析

export default function MarkdownPage({ file }) {
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        // 提取 Front Matter 資訊
        const frontMatterRegex = /^---([\s\S]*?)---/;
        const match = text.match(frontMatterRegex);

        if (match) {
          const metaData = Object.fromEntries(
            match[1]
              .trim()
              .split("\n")
              .map((line) => {
                const [key, value] = line.split(":").map((item) => item.trim());
                return [
                  key,
                  value.startsWith("[")
                    ? JSON.parse(value.replace(/'/g, '"'))
                    : value,
                ];
              })
          );
          setMeta(metaData);
          setContent(text.replace(frontMatterRegex, ""));
        } else {
          setContent(text);
        }
      })
      .catch((err) => console.error("Error loading markdown:", err));
  }, [file]);

  const parseArticleCard = (href, title, desc, image) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block max-w-xl mx-auto my-8">
      <div className="flex border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-1/3 object-cover"
          />
        )}
        <div className="p-4 flex-1">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <Card className="max-w-3xl w-full shadow-xl rounded-2xl">
        <CardContent className="p-8">
          {/* 文章 Header 區塊 */}
        {meta && (
          <header className="mb-12">
            {meta.image && (
              <img
                src={meta.image}
                alt={meta.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            )}

            <h1 className="text-5xl font-extrabold mt-8 mb-4">{meta.title}</h1>

            <div className="flex items-center text-gray-600 space-x-4 mb-6">
              <span className="text-lg">✍️ {meta.author}</span>
              <span>📅 {meta.date}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {meta.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>
        )}

          <ScrollArea className="max-h-[70vh]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                // 標題樣式 (簡約風，類似 Medium)
                h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-extrabold tracking-tight mb-8" {...props} />
                ),
                h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold tracking-tight my-6" {...props} />
                ),
                h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-semibold my-4" {...props} />
                ),
                h4: ({ node, ...props }) => (
                <h4 className="text-xl font-medium my-3" {...props} />
                ),
                // 內文 (柔和黑色，行距大，提升閱讀體驗)
                p: ({ node, ...props }) => (
                <p className="text-base text-gray-800 leading-[1.8] mb-5" 
                    style={{
                        fontFamily: `'Charter', 'Kievit'`,
                    }} {...props} />
                ),
                // 連結 (低飽和藍色、無下劃線，滑過時顯示)
                a: ({ node, ...props }) => (
                    <a
                      className="text-blue-600 hover:text-blue-800 underline" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      {...props}
                    />
                ),
                // 行內程式碼 (灰底、圓角、輕微陰影)
                code: ({ node, ...props }) => (
                <code
                    className="bg-gray-200 text-sm text-black px-1 py-0.5"
                    {...props}
                />
                ),
                // 程式碼區塊 (深色背景，圓角，滾動條)
                pre: ({ node, ...props }) => (
                <pre
                    className="bg-gray-200 text-black text-sm p-6 overflow-x-auto shadow-lg"
                    {...props}
                />
                ),
                // 無序列表
                ul: ({ node, ...props }) => (
                <ul className="list-disc pl-8 mb-6 space-y-2" {...props} />
                ),
                // 有序列表
                ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-8 mb-6 space-y-2" {...props} />
                ),
                // 引用 (類似 blockquote 風格)
                blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
                    {props.children}
                </blockquote>
                ),
                // 分隔線
                hr: () => <hr className="my-8 border-t border-gray-300" />,
            }}
            >

              {content}
            </ReactMarkdown>
          </ScrollArea>

          <div className="mt-8">
            <Button asChild>
              <a href="/">返回首頁</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
