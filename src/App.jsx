import MarkdownPage from "./components/MarkdownPage";
import DynamicCover from "./components/DynamicCover";
import ArticleListPage from "./components/ArticleListPage";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import article from "./article.md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   {/* <MarkdownPage file={article} /> */}
    //   {/* <Navbar />
    //   <DynamicCover file={article} /> */}
    //   {/* <ArticleListPage /> */}
    //  <ArticleList />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticleListPage />} />
        <Route path="/article/:slug" element={<MarkdownPage />} />
      </Routes>
    </Router>
  );
}

export default App;