import MarkdownPage from "./components/MarkdownPage";
import DynamicCover from "./components/DynamicCover";
import AboutMe from "./components/AboutMe";
import ArticleListPage from "./components/ArticleListPage";
import ArticleList from "./components/ArticleList";
import ArticleCategoriesPage from "./components/ArticleCategoriesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import article from "./article.md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   {/* <MarkdownPage file={article} /> */}
    //   {/* <Navbar />
    //   <DynamicCover /> */}
    //   {/* <ArticleListPage /> */}
    //  <ArticleList />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DynamicCover />} />
        <Route path="/life" element={<ArticleList />} />
        <Route path="/markdown" element={<MarkdownPage file={article}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;