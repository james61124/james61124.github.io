import MarkdownPage from "./components/MarkdownPage";
import DynamicCover from "./components/DynamicCover";
import ArticleListPage from "./components/ArticleListPage";
import Navbar from "./components/Navbar";
import article from "./article.md";

function App() {
  return (
    <div>
      {/* <MarkdownPage file={article} /> */}
      <Navbar />
      <DynamicCover file={article} />
      {/* <ArticleListPage /> */}
     
    </div>
  );
}

export default App;