import Article from "./components/Article";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import ArticleListPage from "./components/ArticleListPage";
import ArticleList from "./components/ArticleList";
import ArticleCategoriesPage from "./components/ArticleCategoriesPage";
import LeetcodeList from "./components/LeetcodeList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import article from "./assets/article/life/article.md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    if (window.location.search.startsWith('?/') && window.history.replaceState) {
      const newPath = window.location.search.slice(2).replace(/~and~/g, '&');
      window.history.replaceState(null, null, newPath);
    }
  }, []);

  return (
    // <div>
    //   {/* <MarkdownPage file={article} /> */}
    //   {/* <Navbar />
    //   <MainPage /> */}
    //   {/* <ArticleListPage /> */}
    //  <ArticleList />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/life/:fileName" element={<Article category="life"/>} />
        <Route path="/life" element={<ArticleList json_path="/metadata/life_metadata.json" title="Life Journal" category="life"/>} />
        <Route path="/travel/:fileName" element={<Article category="travel"/>} />
        <Route path="/travel" element={<ArticleList json_path="/metadata/travel_metadata.json" title="Journey Memories" category="travel"/>} />
        <Route path="/program/:fileName" element={<Article category="program"/>} />
        <Route path="/program" element={<ArticleList json_path="/metadata/program_metadata.json" title="Program Notes" category="program"/>} />
        <Route path="/leetcode/:fileName" element={<Article category="leetcode"/>} />
        <Route path="/leetcode" element={<LeetcodeList json_path="/metadata/leetcode_metadata.json" title="Travel Journal" category="leetcode"/>} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;