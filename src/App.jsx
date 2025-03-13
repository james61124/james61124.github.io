import MarkdownPage from "./components/MarkdownPage";
import article from "./article.md";

function App() {
  return (
    <div>
      <MarkdownPage file={article} />
    </div>
  );
}

export default App;